import { NextResponse } from "next/server";
import { createAdminSession, SESSION_COOKIE, validCredentials } from "@/lib/admin-auth";

export async function POST(request: Request) {
  let body: { email?: string; password?: string } = {};
  try { body = await request.json(); } catch { /* invalid input */ }
  if (!validCredentials(body.email || "", body.password || "")) {
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
