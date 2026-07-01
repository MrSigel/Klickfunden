"use server";

import { getSupabaseAdmin } from "@/lib/supabase/server";
import { headers } from "next/headers";

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
};

export type SubmitLeadErrorType = "VALIDATION_ERROR" | "DATABASE_DOWN";

export type SubmitLeadResult =
  | { success: true; id: string }
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

  if (!name || !email || !telefon || !website || !input.goal) {
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
        email,
        phone: telefon,
        website,
        service: input.goalLabel,
        message: `Ziel: ${input.goalLabel}`,
        source: "Website",
        status: "Neu",
      })
      .select("id")
      .single();

    if (error || !data?.id) {
      return databaseDownError();
    }

    return { success: true, id: data.id };
  } catch {
    return databaseDownError();
  }
}
