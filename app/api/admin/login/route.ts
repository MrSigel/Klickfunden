import { NextResponse } from "next/server";
import { createAdminSession, isAdminAuthConfigured, SESSION_COOKIE, validCredentials } from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!isAdminAuthConfigured()) {
    console.error("Admin authentication is not fully configured.");
    return NextResponse.json({ ok: false, error: "configuration" }, { status: 503 });
  }
  let body: { email?: string; password?: string } = {};
  try { body = await request.json(); } catch { return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 }); }
  if (!validCredentials(body.email || "", body.password || "")) {
    await new Promise((resolve) => setTimeout(resolve, 350));
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const session = createAdminSession();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, session.value, {
    httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict",
    path: "/", maxAge: session.maxAge,
  });
  return response;
}
