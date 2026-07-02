import "server-only";
import nodemailer, { type Transporter } from "nodemailer";

export type MailInput = { to: string; subject: string; html: string; text: string; replyTo?: string };
export type MailResult = { sent: true; messageId: string } | { sent: false; reason: "not_configured" | "send_failed" };
let transporter: Transporter | null = null;

function config() {
  const names = ["SMTP_HOST", "SMTP_PORT", "SMTP_SECURE", "SMTP_USER", "SMTP_PASS", "MAIL_FROM_NAME", "MAIL_FROM_ADDRESS", "MAIL_REPLY_TO"] as const;
  const missing = names.filter((name) => !process.env[name] || process.env[name] === "CHANGE_ME");
  if (missing.length) { console.error("Mail configuration incomplete", { missing }); return null; }
  const port = Number(process.env.SMTP_PORT);
  if (!Number.isInteger(port) || port <= 0) { console.error("Mail configuration contains an invalid SMTP port"); return null; }
  return { host: process.env.SMTP_HOST!, port, secure: process.env.SMTP_SECURE === "true", user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS!, from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_ADDRESS}>`, replyTo: process.env.MAIL_REPLY_TO! };
}

function getTransporter(settings: NonNullable<ReturnType<typeof config>>) {
  if (!transporter) transporter = nodemailer.createTransport({ host: settings.host, port: settings.port, secure: settings.secure, auth: { user: settings.user, pass: settings.pass }, pool: true, maxConnections: 3, connectionTimeout: 10_000, greetingTimeout: 10_000, socketTimeout: 20_000 });
  return transporter;
}

export async function sendMail(input: MailInput): Promise<MailResult> {
  const settings = config(); if (!settings) return { sent: false, reason: "not_configured" };
  try { const info = await getTransporter(settings).sendMail({ from: settings.from, to: input.to, subject: input.subject, html: input.html, text: input.text, replyTo: input.replyTo || settings.replyTo }); return { sent: true, messageId: info.messageId }; }
  catch (error) { console.error("Mail delivery failed", { name: error instanceof Error ? error.name : "UnknownError", code: typeof error === "object" && error && "code" in error ? String(error.code) : undefined }); return { sent: false, reason: "send_failed" }; }
}

export async function verifyMailer() {
  const settings = config(); if (!settings) return false;
  try { await getTransporter(settings).verify(); return true; } catch (error) { console.error("Mail transport verification failed", { name: error instanceof Error ? error.name : "UnknownError" }); return false; }
}
