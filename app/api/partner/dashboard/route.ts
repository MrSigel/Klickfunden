import { NextRequest, NextResponse } from "next/server";
import { getPartnerSession } from "@/lib/partner-auth";
import { isSameOrigin, jsonError, parseJsonBody } from "@/lib/api-utils";
import { monthKey, nextLastFriday, packageDetails } from "@/lib/partner-config";
import { partnerEmailTemplates, sendPartnerEmail } from "@/lib/partner-emails";
import { getSupabaseAdmin } from "@/lib/supabase/server";

export async function GET() {
  const id = getPartnerSession();
  if (!id) return jsonError("unauthorized", 401);
  const db = getSupabaseAdmin() as any;
  const [{ data: partner }, { data: quota }, { data: requests }, { data: payment }] = await Promise.all([
    db.from("partners").select("id,contact_name,organization_name,email,status,selected_package,payment_status,permanent_payment_reference").eq("id", id).single(),
    db.from("partner_monthly_quotas").select("*").eq("partner_id", id).eq("month_key", monthKey()).maybeSingle(),
    db.from("partner_keyword_requests").select("*").eq("partner_id", id).order("created_at", { ascending: false }),
    db.from("partner_payments").select("*").eq("partner_id", id).order("created_at", { ascending: false }).limit(1).maybeSingle(),
  ]);
  if (!partner || !["akzeptiert", "aktiv"].includes(partner.status)) return jsonError("inactive", 403);
  return NextResponse.json({
    partner: { ...partner, package: packageDetails(partner.selected_package) },
    quota,
    requests: requests || [],
    payment,
    resetAt: nextLastFriday().toISOString(),
    bank: {
      accountHolder: process.env.PARTNER_BANK_ACCOUNT_HOLDER || "",
      iban: process.env.PARTNER_BANK_IBAN || "",
      bic: process.env.PARTNER_BANK_BIC || "",
      bankName: process.env.PARTNER_BANK_NAME || "",
    },
  });
}

export async function POST(request: NextRequest) {
  const id = getPartnerSession();
  if (!id) return jsonError("unauthorized", 401);
  if (!isSameOrigin(request)) return jsonError("forbidden", 403);
  const [input, parseError] = await parseJsonBody<any>(request);
  if (parseError) return parseError;
  if (!input.topic || !input.industry || !input.goal || !input.description) return jsonError("invalid", 400);
  const db = getSupabaseAdmin() as any;
  const { data, error } = await db.rpc("create_partner_keyword_request", {
    p_partner_id: id,
    p_topic: String(input.topic).trim(),
    p_industry: String(input.industry).trim(),
    p_target_group: String(input.target_group || "").trim(),
    p_region: String(input.region || "").trim(),
    p_website: String(input.website || "").trim(),
    p_goal: String(input.goal),
    p_description: String(input.description).trim(),
    p_month_key: monthKey(),
  });
  if (error) {
    console.error("Partner request failed", { name: "QuotaOrDatabaseError" });
    return jsonError("quota_unavailable", 409);
  }
  const { data: quota } = await db.from("partner_monthly_quotas").select("quota_remaining").eq("partner_id", id).eq("month_key", monthKey()).single();
  if (quota?.quota_remaining === 0) {
    const { data: partner } = await db.from("partners").select("contact_name,email").eq("id", id).single();
    if (partner) await sendPartnerEmail(partner.email, partnerEmailTemplates.quotaUsed(partner.contact_name));
  }
  return NextResponse.json({ id: data }, { status: 201 });
}
