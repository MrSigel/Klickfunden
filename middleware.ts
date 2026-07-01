import { NextRequest, NextResponse } from "next/server";

const cookieName = process.env.ADMIN_SESSION_COOKIE || "klickfunden_admin_session";
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/admin") && !request.cookies.get(cookieName)?.value) {
    const url = new URL("/login", request.url); url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }
  if (pathname.startsWith("/partner/dashboard") && !request.cookies.get("klickfunden_partner_session")?.value) {
    return NextResponse.redirect(new URL("/partner/login", request.url));
  }
  return NextResponse.next();
}
export const config = { matcher: ["/admin/:path*", "/partner/dashboard/:path*"] };
