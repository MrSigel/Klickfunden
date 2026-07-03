import { NextResponse } from "next/server";
import { PARTNER_COOKIE } from "@/lib/partner-auth";
import { sessionCookieOptions } from "@/lib/api-utils";

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL("/partner/login", request.url), 303);
  response.cookies.set(PARTNER_COOKIE, "", { ...sessionCookieOptions(0) });
  return response;
}
