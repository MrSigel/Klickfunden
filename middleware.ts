import { NextRequest, NextResponse } from "next/server";

const cookieName = process.env.ADMIN_SESSION_COOKIE || "klickfunden_admin_session";

function looksLikeValidSession(value: string | undefined): boolean {
  if (!value) return false;
  const parts = value.split(".");
  if (parts.length !== 3 || !parts[2]) return false;
  const expires = Number(parts[1]);
  return Number.isFinite(expires) && expires > Date.now() / 1000;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/admin") && !looksLikeValidSession(request.cookies.get(cookieName)?.value)) {
    const url = new URL("/login", request.url); url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }
  if (pathname.startsWith("/partner/dashboard") && !looksLikeValidSession(request.cookies.get("klickfunden_partner_session")?.value)) {
    return NextResponse.redirect(new URL("/partner/login", request.url));
  }
  return NextResponse.next();
}
export const config = { matcher: ["/admin/:path*", "/partner/dashboard/:path*"] };
