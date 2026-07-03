import { NextRequest, NextResponse } from "next/server";
import { hashPassword } from "@/lib/partner-auth";
import { isSameOrigin, jsonError, parseJsonBody } from "@/lib/api-utils";
import { excludedPartnerAreas, packageDetails } from "@/lib/partner-config";
import { partnerEmailTemplates, sendPartnerEmail } from "@/lib/partner-emails";
import { getSupabaseAdmin } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) return jsonError("forbidden", 403);
  const [input, parseError] = await parseJsonBody<Record<string, unknown>>(request);
  if (parseError) return parseError;
  const required = ["contact_name", "organization_name", "email", "password", "website", "industry", "region", "partner_area", "selected_package"];
  if (required.some((key) => typeof input[key] !== "string" || !String(input[key]).trim()) || String(input.password).length < 12 || !input.no_competing_service_confirmed || !input.terms_accepted || !input.no_guarantee_confirmed) {
    return jsonError("invalid", 400);
  }
  const email = String(input.email).trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !packageDetails(String(input.selected_package))) {
    return jsonError("invalid", 400);
  }
  const area = String(input.partner_area).trim().toLowerCase();
  if (excludedPartnerAreas.some((term) => area.includes(term))) {
    return jsonError("excluded_area", 400);
  }
  try {
    const password_hash = await hashPassword(String(input.password));
    const db = getSupabaseAdmin() as any;
    const { data, error } = await db.from("partners").insert({
      contact_name: String(input.contact_name).trim(),
      organization_name: String(input.organization_name).trim(),
      email,
      password_hash,
      website: String(input.website).trim(),
      phone: String(input.phone || "").trim() || null,
      industry: String(input.industry).trim(),
      region: String(input.region).trim(),
      partner_area: String(input.partner_area).trim(),
      selected_package: String(input.selected_package),
      message: String(input.message || "").trim() || null,
      no_competing_service_confirmed: true,
      terms_accepted_at: new Date().toISOString(),
      no_guarantee_confirmed_at: new Date().toISOString(),
    }).select("id,contact_name,selected_package").single();
    if (error) throw error;
    const reference = `KF-PARTNER-${String(data.id).split("-")[0].toUpperCase()}`;
    await db.from("partners").update({ permanent_payment_reference: reference }).eq("id", data.id);
    const pkg = packageDetails(data.selected_package)!;
    await db.from("partner_payments").insert({ partner_id: data.id, package_name: pkg.name, amount: pkg.price, status: pkg.price === null ? "nicht_erforderlich" : "offen", payment_reference: reference });
    const createdAt = new Intl.DateTimeFormat("de-DE", { dateStyle: "medium", timeStyle: "short", timeZone: "Europe/Berlin" }).format(new Date());
    const [partnerMail, adminMail] = await Promise.all([
      sendPartnerEmail(email, partnerEmailTemplates.registration(data.contact_name, pkg.name)),
      process.env.ADMIN_NOTIFICATION_EMAIL
        ? sendPartnerEmail(process.env.ADMIN_NOTIFICATION_EMAIL, partnerEmailTemplates.adminRegistration({ name: data.contact_name, organization: String(input.organization_name), email, website: String(input.website), industry: String(input.industry), region: String(input.region), packageName: pkg.name, createdAt }))
        : Promise.resolve({ sent: false as const, reason: "not_configured" as const }),
    ]);
    return NextResponse.json({ ok: true, mailSent: partnerMail.sent, adminMailSent: adminMail.sent }, { status: 201 });
  } catch (error) {
    console.error("Partner registration failed", error);
    return jsonError("registration_failed", 409);
  }
}
