import { NextRequest, NextResponse } from "next/server";

const cookieName = process.env.ADMIN_SESSION_COOKIE || "klickfunden_admin_session";
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/admin") && !request.cookies.get(cookieName)?.value) {
    const url = new URL("/login", request.url); url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
export const config = { matcher: ["/admin/:path*"] };
