import "server-only";

import { NextRequest, NextResponse } from "next/server";

/** Standard JSON error response. */
export function jsonError(error: string, status: number) {
  return NextResponse.json({ error }, { status });
}

/** Parse JSON body or return a 400 response. Returns [parsed, null] on success, [null, response] on failure. */
export async function parseJsonBody<T = Record<string, unknown>>(
  request: Request,
): Promise<[T, null] | [null, NextResponse]> {
  try {
    const body = await request.json();
    return [body as T, null];
  } catch {
    return [null, jsonError("invalid", 400)];
  }
}

/** Check same-origin by comparing the Origin header against the Host/X-Forwarded-Host header. */
export function isSameOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host");
  return Boolean(origin && host && new URL(origin).host === host);
}

/** Standard cookie options for session cookies. */
export function sessionCookieOptions(maxAge: number) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    path: "/",
    maxAge,
  };
}

/** Artificial delay to mitigate brute-force attacks on login endpoints. */
export function loginDelay(ms = 350): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
