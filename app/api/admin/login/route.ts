import { NextResponse } from "next/server";
import { createAdminSession, isAdminAuthConfigured, SESSION_COOKIE, validCredentials } from "@/lib/admin-auth";
import { jsonError, loginDelay, parseJsonBody, sessionCookieOptions } from "@/lib/api-utils";

export async function POST(request: Request) {
  if (!isAdminAuthConfigured()) {
    console.error("Admin authentication is not fully configured.");
    return jsonError("configuration", 503);
  }
  const [body, errorResponse] = await parseJsonBody<{ email?: string; password?: string }>(request);
  if (errorResponse) return errorResponse;
  if (!validCredentials(body.email || "", body.password || "")) {
    await loginDelay();
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const session = createAdminSession();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, session.value, sessionCookieOptions(session.maxAge));
  return response;
}
