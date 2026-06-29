"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { LockKeyhole, LogIn } from "lucide-react";

const adminEmail = "admin@klickfunden.de";
const adminPassword = "5M4bjgrp5w!";
const sessionCookie = "klickfunden_admin_session";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isChecking, setIsChecking] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsChecking(false);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (email.trim() !== adminEmail || password !== adminPassword) {
      setError("Die eingegebenen Zugangsdaten sind nicht korrekt.");
      return;
    }

    setIsSubmitting(true);
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email.trim(), password }),
    });

    if (!response.ok) {
      setIsSubmitting(false);
      setError("Die Session konnte nicht erstellt werden.");
      return;
    }

    window.localStorage.setItem(sessionCookie, "authenticated");
    const redirectTo = searchParams.get("redirect") || "/dashboard";
    router.replace(redirectTo);
  };

  if (isChecking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-ink px-5 text-white">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-marsgreen border-t-transparent" />
      </div>
    );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink px-5 py-12 text-white">
      <div className="absolute inset-0 bg-radial-fade opacity-70" aria-hidden />
      <motion.form
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        onSubmit={handleSubmit}
        className="relative w-full max-w-md rounded-3xl border border-white/10 bg-ink-800/85 p-7 shadow-card backdrop-blur sm:p-9"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-marsgreen/30 bg-marsgreen/15 text-marsgreen shadow-glow">
          <LockKeyhole className="h-6 w-6" />
        </div>
        <h1 className="mt-7 font-display text-3xl font-semibold tracking-tight text-white">
          Admin Login
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-mist-100/80">
          Geschützter Zugang zum privaten Klickhafen-Dashboard. Es gibt keine
          öffentliche Registrierung.
        </p>

        <div className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-mist-100/85"
            >
              Benutzername oder E-Mail
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="username"
              className="w-full rounded-xl border border-white/15 bg-ink-700/70 px-4 py-3.5 text-white outline-none transition-colors placeholder:text-mist-100/75 focus:border-marsgreen"
              placeholder="admin@klickfunden.de"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-mist-100/85"
            >
              Passwort
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              className="w-full rounded-xl border border-white/15 bg-ink-700/70 px-4 py-3.5 text-white outline-none transition-colors placeholder:text-mist-100/75 focus:border-marsgreen"
              placeholder="Passwort eingeben"
            />
          </div>
        </div>

        {error && (
          <p className="mt-5 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary mt-7 w-full py-4 text-base disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Session wird erstellt" : "Einloggen"}
          <LogIn className="h-4 w-4" />
        </button>
      </motion.form>
    </main>
  );
}
