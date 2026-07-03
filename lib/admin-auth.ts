import "server-only";

import { cookies } from "next/headers";
import {
  type SessionConfig,
  createSession,
  isAuthConfigured,
  safeEqual,
  verifySession,
} from "@/lib/session";

const adminSessionConfig: SessionConfig = {
  cookieName: process.env.ADMIN_SESSION_COOKIE || "klickfunden_admin_session",
  secretEnvVar: "ADMIN_SESSION_SECRET",
  ttlSeconds: 60 * 60 * 12,
  role: "admin",
};

export const SESSION_COOKIE = adminSessionConfig.cookieName;

export function createAdminSession() {
  return createSession(adminSessionConfig);
}

export function isAdminAuthConfigured() {
  return isAuthConfigured(adminSessionConfig) && Boolean(process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD);
}

export function verifyAdminSession(value?: string) {
  return verifySession(adminSessionConfig, value) === "admin";
}

export function hasAdminSession() {
  return verifyAdminSession(cookies().get(SESSION_COOKIE)?.value);
}

export function assertAdminSession() {
  if (!hasAdminSession()) throw new Error("Nicht autorisiert.");
}

export function validCredentials(email: string, password: string) {
  const expectedEmail = process.env.ADMIN_EMAIL;
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedEmail || !expectedPassword || !isAuthConfigured(adminSessionConfig)) return false;
  const emailOk = safeEqual(email.trim().toLowerCase(), expectedEmail.trim().toLowerCase());
  const passwordOk = safeEqual(password, expectedPassword);
  return emailOk && passwordOk;
}
