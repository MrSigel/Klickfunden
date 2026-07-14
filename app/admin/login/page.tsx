"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Logo } from "@/components/Logo";

export default function AdminLogin() {
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    setLoading(false);
    if (error) {
      setError("Anmeldung fehlgeschlagen. Bitte prüfe E-Mail und Passwort.");
      return;
    }
    router.push(params.get("next") || "/admin");
    router.refresh();
  }

  const input =
    "h-12 w-full rounded-xl border border-line-hard bg-ink/60 px-4 text-[15px] text-paper placeholder:text-fog-dim focus:border-signal focus:outline-none";

  return (
    <div className="grid min-h-screen place-items-center px-6">
      <div className="w-full max-w-[380px]">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <div className="rounded-3xl border border-line bg-surface/50 p-8">
          <h1 className="mb-1 font-display text-[24px] font-medium">CRM-Login</h1>
          <p className="mb-6 text-[14px] text-fog">Nur für das Klickfunden-Team.</p>
          <form onSubmit={onSubmit} className="grid gap-3">
            <input name="email" type="email" placeholder="E-Mail" required className={input} autoComplete="email" />
            <input name="password" type="password" placeholder="Passwort" required className={input} autoComplete="current-password" />
            <button type="submit" disabled={loading} className="btn btn-primary mt-1 disabled:opacity-60">
              {loading ? "Anmelden…" : "Anmelden"}
            </button>
            {error && <p className="text-[13px] text-[#ff8a8a]">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
