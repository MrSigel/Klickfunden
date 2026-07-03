import "server-only";
import { randomBytes, scrypt as scryptCallback, timingSafeEqual } from "crypto";
import { promisify } from "util";
import {
  type SessionConfig,
  createSession,
  getSessionFromCookie,
  isAuthConfigured,
  verifySession,
} from "@/lib/session";

const scrypt = promisify(scryptCallback);

const partnerSessionConfig: SessionConfig = {
  cookieName: "klickfunden_partner_session",
  secretEnvVar: "PARTNER_SESSION_SECRET",
  ttlSeconds: 60 * 60 * 24 * 7,
  role: "partner",
};

export const PARTNER_COOKIE = partnerSessionConfig.cookieName;

export function isPartnerAuthConfigured() {
  return isAuthConfigured(partnerSessionConfig);
}

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
  return createSession(partnerSessionConfig, partnerId);
}

export function verifyPartnerSession(value?: string): string | null {
  const identifier = verifySession(partnerSessionConfig, value);
  if (!identifier || !/^[0-9a-f-]{36}$/i.test(identifier)) return null;
  return identifier;
}

export function getPartnerSession() {
  return getSessionFromCookie(partnerSessionConfig);
}
