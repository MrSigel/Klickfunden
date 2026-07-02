import "server-only";
import { createHmac, randomBytes, scrypt as scryptCallback, timingSafeEqual } from "crypto";
import { promisify } from "util";
import { cookies } from "next/headers";

const scrypt = promisify(scryptCallback);
export const PARTNER_COOKIE = "klickfunden_partner_session";
const ttl = 60 * 60 * 24 * 7;
function secret() { const value = process.env.PARTNER_SESSION_SECRET; return value && value.length >= 32 ? value : null; }
export function isPartnerAuthConfigured() { return Boolean(secret()); }
function sign(payload: string) { const key = secret(); return key ? createHmac("sha256", key).update(payload).digest("base64url") : ""; }

export async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const hash = (await scrypt(password, salt, 64)) as Buffer;
  return `scrypt$${salt}$${hash.toString("hex")}`;
}

export async function verifyPassword(password: string, stored: string) {
  const [algorithm, salt, expectedHex] = stored.split("$");
  if (algorithm !== "scrypt" || !salt || !expectedHex) return false;
  const actual = (await scrypt(password, salt, 64)) as Buffer;
  const expected = Buffer.from(expectedHex, "hex");
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export function createPartnerSession(partnerId: string) {
  if (!secret()) throw new Error("Partner-Session ist nicht konfiguriert.");
  const expires = Math.floor(Date.now() / 1000) + ttl;
  const payload = `${partnerId}.${expires}`;
  return { value: `${payload}.${sign(payload)}`, maxAge: ttl };
}

export function verifyPartnerSession(value?: string) {
  if (!value || !secret()) return null;
  const [partnerId, expiresRaw, signature] = value.split(".");
  const expected = sign(`${partnerId}.${expiresRaw}`);
  const expires = Number(expiresRaw);
  if (!/^[0-9a-f-]{36}$/i.test(partnerId) || !expected || !signature || expires <= Date.now() / 1000) return null;
  const a = Buffer.from(signature); const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b) ? partnerId : null;
}

export function getPartnerSession() { return verifyPartnerSession(cookies().get(PARTNER_COOKIE)?.value); }
