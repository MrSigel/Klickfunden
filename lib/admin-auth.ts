import "server-only";

import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const SESSION_COOKIE =
  process.env.ADMIN_SESSION_COOKIE || "klickfunden_admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 12;

function secret() {
  const value = process.env.ADMIN_SESSION_SECRET;
  if (!value || value.length < 32) return null;
  return value;
}

function sign(payload: string) {
  const key = secret();
  return key ? createHmac("sha256", key).update(payload).digest("base64url") : "";
}

export function createAdminSession() {
  const expires = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = `admin.${expires}`;
  return { value: `${payload}.${sign(payload)}`, maxAge: SESSION_TTL_SECONDS };
}

export function isAdminAuthConfigured() {
  return Boolean(secret() && process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD);
}

export function verifyAdminSession(value?: string) {
  if (!value || !secret()) return false;
  const [role, expiresRaw, signature] = value.split(".");
  const payload = `${role}.${expiresRaw}`;
  const expected = sign(payload);
  const expires = Number(expiresRaw);
  if (role !== "admin" || !signature || !expected || !Number.isFinite(expires)) return false;
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  return expires > Date.now() / 1000 && a.length === b.length && timingSafeEqual(a, b);
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
  if (!expectedEmail || !expectedPassword || !secret()) return false;
  const emailOk = safeEqual(email.trim().toLowerCase(), expectedEmail.trim().toLowerCase());
  const passwordOk = safeEqual(password, expectedPassword);
  return emailOk && passwordOk;
}

function safeEqual(left: string, right: string) {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  return a.length === b.length && timingSafeEqual(a, b);
}
