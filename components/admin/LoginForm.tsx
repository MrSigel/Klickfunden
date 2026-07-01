"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { LockKeyhole, LogIn } from "lucide-react";

export default function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(""); setPending(true);
    const data = new FormData(event.currentTarget);
    const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: data.get("email"), password: data.get("password") }) });
    if (!response.ok) { setError("Die eingegebenen Zugangsdaten sind nicht korrekt."); setPending(false); return; }
    const target = params.get("redirect");
    router.replace(target?.startsWith("/admin") ? target : "/admin"); router.refresh();
  }
  return <main className="flex min-h-screen items-center justify-center bg-ink px-5 py-12 text-white">
    <form onSubmit={submit} className="w-full max-w-md rounded-3xl border border-white/10 bg-ink-800 p-8 shadow-card">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-marsgreen/15 text-marsgreen"><LockKeyhole /></div>
      <h1 className="mt-7 font-display text-3xl font-semibold">Admin Login</h1>
      <p className="mt-3 text-sm text-mist-100/80">Geschützter Zugang zum Klickfunden Admin-Bereich.</p>
      <label className="mt-8 block text-sm font-medium" htmlFor="email">E-Mail</label>
      <input className="mt-2 w-full rounded-xl border border-white/15 bg-ink-700 px-4 py-3.5 outline-none focus:border-marsgreen" id="email" name="email" type="email" required autoComplete="username" />
      <label className="mt-5 block text-sm font-medium" htmlFor="password">Passwort</label>
      <input className="mt-2 w-full rounded-xl border border-white/15 bg-ink-700 px-4 py-3.5 outline-none focus:border-marsgreen" id="password" name="password" type="password" required autoComplete="current-password" />
      {error && <p role="alert" className="mt-5 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">{error}</p>}
      <button disabled={pending} className="btn-primary mt-7 w-full" type="submit">{pending ? "Anmeldung läuft …" : "Einloggen"}<LogIn className="h-4 w-4" /></button>
    </form>
  </main>;
}
