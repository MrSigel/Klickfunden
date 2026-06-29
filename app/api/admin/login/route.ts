import { NextResponse } from "next/server";

const fallbackEmail = "admin@klickfunden.de";
const fallbackPassword = "5M4bjgrp5w!";
const sessionCookie = "klickfunden_admin_session";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    email?: string;
    password?: string;
  };

  const expectedEmail = process.env.ADMIN_EMAIL || fallbackEmail;
  const expectedPassword = process.env.ADMIN_PASSWORD || fallbackPassword;

  if (body.email !== expectedEmail || body.password !== expectedPassword) {
    return NextResponse.json(
      { ok: false, message: "Ungültige Zugangsdaten." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(sessionCookie, "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return response;
}
