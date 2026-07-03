import { NextResponse } from "next/server";
import { createPartnerSession, isPartnerAuthConfigured, PARTNER_COOKIE, verifyPassword } from "@/lib/partner-auth";
import { jsonError, loginDelay, parseJsonBody, sessionCookieOptions } from "@/lib/api-utils";
import { getSupabaseAdmin } from "@/lib/supabase/server";

export async function POST(request: Request) {
  if (!isPartnerAuthConfigured()) {
    console.error("Partner authentication is not configured");
    return jsonError("configuration", 503);
  }
  const [input, errorResponse] = await parseJsonBody<{ email?: string; password?: string }>(request);
  if (errorResponse) return errorResponse;
  try {
    const { data } = await (getSupabaseAdmin() as any)
      .from("partners")
      .select("id,password_hash,status")
      .eq("email", String(input.email || "").trim().toLowerCase())
      .maybeSingle();
    if (!data || !(await verifyPassword(String(input.password || ""), data.password_hash))) {
      await loginDelay();
      return jsonError("credentials", 401);
    }
    if (data.status === "wartet_auf_pruefung" || data.status === "abgelehnt") {
      return jsonError("pending", 403);
    }
    if (!["akzeptiert", "aktiv"].includes(data.status)) {
      return jsonError("inactive", 403);
    }
    const session = createPartnerSession(data.id);
    const response = NextResponse.json({ ok: true });
    response.cookies.set(PARTNER_COOKIE, session.value, sessionCookieOptions(session.maxAge));
    return response;
  } catch (error) {
    console.error("Partner login failed", { name: error instanceof Error ? error.name : "UnknownError" });
    return jsonError("unavailable", 503);
  }
}
