import "server-only";

import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export type SessionConfig = {
  cookieName: string;
  secretEnvVar: string;
  ttlSeconds: number;
  role: string;
};

function getSecret(envVar: string): string | null {
  const value = process.env[envVar];
  return value && value.length >= 32 ? value : null;
}

function sign(payload: string, secret: string): string {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

export function safeEqual(left: string, right: string): boolean {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function createSession(config: SessionConfig, subject?: string) {
  const secret = getSecret(config.secretEnvVar);
  if (!secret) throw new Error(`Session secret (${config.secretEnvVar}) is not configured.`);
  const expires = Math.floor(Date.now() / 1000) + config.ttlSeconds;
  const identifier = subject || config.role;
  const payload = `${identifier}.${expires}`;
  return { value: `${payload}.${sign(payload, secret)}`, maxAge: config.ttlSeconds };
}

export function verifySession(config: SessionConfig, value?: string): string | null {
  const secret = getSecret(config.secretEnvVar);
  if (!value || !secret) return null;
  const parts = value.split(".");
  if (parts.length !== 3) return null;
  const [identifier, expiresRaw, signature] = parts;
  const payload = `${identifier}.${expiresRaw}`;
  const expected = sign(payload, secret);
  const expires = Number(expiresRaw);
  if (!identifier || !signature || !expected || !Number.isFinite(expires)) return null;
  if (expires <= Date.now() / 1000) return null;
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  return identifier;
}

export function getSessionFromCookie(config: SessionConfig): string | null {
  return verifySession(config, cookies().get(config.cookieName)?.value);
}

export function isAuthConfigured(config: SessionConfig): boolean {
  return Boolean(getSecret(config.secretEnvVar));
}
