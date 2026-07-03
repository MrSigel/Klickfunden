import { NextResponse } from "next/server";
import { SESSION_COOKIE } from "@/lib/admin-auth";
import { sessionCookieOptions } from "@/lib/api-utils";

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL("/login", request.url), 303);
  response.cookies.set(SESSION_COOKIE, "", { ...sessionCookieOptions(0) });
  return response;
}
