import { NextRequest, NextResponse } from "next/server";
import { hasAdminSession } from "@/lib/admin-auth";
import { isSameOrigin, jsonError } from "@/lib/api-utils";
import { partnerEmailTemplates, sendPartnerEmail } from "@/lib/partner-emails";

export async function POST(request: NextRequest) {
  if (!hasAdminSession() || !isSameOrigin(request)) {
    return jsonError("unauthorized", 401);
  }
  const target = process.env.ADMIN_NOTIFICATION_EMAIL;
  if (!target) return jsonError("not_configured", 503);
  const result = await sendPartnerEmail(target, partnerEmailTemplates.test());
  return result.sent ? NextResponse.json({ ok: true }) : jsonError("send_failed", 503);
}
