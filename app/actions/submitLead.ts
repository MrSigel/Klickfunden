"use server";

import { getSupabaseAdmin } from "@/lib/supabase/server";
import { headers } from "next/headers";
import { partnerEmailTemplates, sendPartnerEmail } from "@/lib/partner-emails";

export type SubmitLeadInput = {
  goal: string;
  goalLabel: string;
  website: string;
  noWebsite: boolean;
  name: string;
  email: string;
  telefon: string;
  companyWebsite?: string;
  startedAt?: number;
  formType?: "lead" | "first-check";
  company?: string;
  industry?: string;
  focus?: string;
  message?: string;
};

export type SubmitLeadErrorType = "VALIDATION_ERROR" | "DATABASE_DOWN";

export type SubmitLeadResult =
  | { success: true; id: string; emailWarning?: string }
  | {
      success: false;
      errorType: SubmitLeadErrorType;
      message: string;
    };

const databaseDownMessage =
  "Aktuell nehmen wir Veränderungen vor. Bitte kontaktiere uns mit deinem Anliegen per E-Mail. Wir sind bald wieder über das Formular erreichbar.";

const rateLimitWindowMs = 10 * 60 * 1000;
const maxRequestsPerWindow = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(identifier: string) {
  const now = Date.now();
  const recent = (requestLog.get(identifier) || []).filter(
    (timestamp) => now - timestamp < rateLimitWindowMs,
  );

  if (recent.length >= maxRequestsPerWindow) {
    requestLog.set(identifier, recent);
    return true;
  }

  recent.push(now);
  requestLog.set(identifier, recent);
  return false;
}

function normalizeWebsite(website: string, noWebsite: boolean) {
  if (noWebsite) {
    return "Keine Website vorhanden";
  }

  const trimmed = website.trim();
  if (!trimmed) {
    return "";
  }

  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function validationError(message: string): SubmitLeadResult {
  return {
    success: false,
    errorType: "VALIDATION_ERROR",
    message,
  };
}

function databaseDownError(): SubmitLeadResult {
  return {
    success: false,
    errorType: "DATABASE_DOWN",
    message: databaseDownMessage,
  };
}

export async function submitLead(
  input: SubmitLeadInput,
): Promise<SubmitLeadResult> {
  if (input.companyWebsite) {
    return { success: true, id: "accepted" };
  }

  if (input.startedAt && Date.now() - input.startedAt < 1500) {
    return validationError("Bitte prüfe deine Angaben und versuche es erneut.");
  }

  const name = input.name.trim();
  const email = input.email.trim().toLowerCase();
  const telefon = input.telefon.trim();
  const website = normalizeWebsite(input.website, input.noWebsite);
  const forwardedFor = headers().get("x-forwarded-for")?.split(",")[0]?.trim();
  const identifier = forwardedFor || email;

  if (isRateLimited(identifier)) {
    return validationError(
      "Zu viele Anfragen in kurzer Zeit. Bitte versuche es später erneut.",
    );
  }

  if (!name || !email || (!telefon && input.formType !== "first-check") || !website || !input.goal) {
    return validationError(
      "Bitte fülle Name, E-Mail, Telefonnummer, Website und Ziel vollständig aus.",
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return validationError("Bitte gib eine gültige E-Mail-Adresse ein.");
  }

  try {
    const { data, error } = await (getSupabaseAdmin() as any)
      .from("admin_inquiries")
      .insert({
        name,
        company: input.company?.trim() || null,
        email,
        phone: telefon || null,
        website,
        service: input.focus?.trim() || input.goalLabel,
        message: [input.industry && `Branche: ${input.industry.trim()}`, input.message?.trim(), `Ziel: ${input.goalLabel}`].filter(Boolean).join("\n"),
        source: input.formType === "first-check" ? "Kostenlose Erstprüfung" : "Website",
        status: "Neu",
      })
      .select("id")
      .single();

    if (error || !data?.id) {
      return databaseDownError();
    }

    const [adminMail, confirmationMail] = await Promise.all([
      process.env.ADMIN_NOTIFICATION_EMAIL
        ? sendPartnerEmail(process.env.ADMIN_NOTIFICATION_EMAIL, partnerEmailTemplates.inquiryAdmin({ name, email, phone: telefon || "Nicht angegeben", website, goal: input.focus || input.goalLabel }))
        : Promise.resolve({ sent: false as const, reason: "not_configured" as const }),
      sendPartnerEmail(email, partnerEmailTemplates.inquiryConfirmation(name)),
    ]);
    return {
      success: true,
      id: data.id,
      emailWarning: adminMail.sent && confirmationMail.sent
        ? undefined
        : "Die Anfrage wurde gespeichert, aber die Bestätigungs-E-Mail konnte aktuell nicht versendet werden.",
    };
  } catch {
    return databaseDownError();
  }
}
