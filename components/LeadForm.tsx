"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

type State = "idle" | "loading" | "done" | "error";

const inputCls =
  "h-12 w-full rounded-xl border border-line-hard bg-ink/60 px-4 text-[15px] text-paper transition-colors placeholder:text-fog-dim focus:border-signal focus:outline-none";

export function LeadForm() {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (!data.name?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "")) {
      setState("error");
      return;
    }

    setState("loading");
    try {
      const supabase = createClient();
      const { error } = await supabase.from("crm_leads").insert({
        name: data.name.trim(),
        email: data.email.trim(),
        phone: data.phone?.trim() || null,
        company: data.company?.trim() || null,
        message: data.message?.trim() || null,
        source: "website-form",
      });
      if (error) throw error;
      setState("done");
      form.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-2xl border border-signal/30 bg-signal/5 p-8 text-center">
        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-signal text-[#04120a]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="font-display text-[20px] font-medium text-paper">Danke, wir haben deine Anfrage!</p>
        <p className="mt-2 text-[15px] text-fog">Wir melden uns innerhalb eines Werktags bei dir.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="name" placeholder="Name *" className={inputCls} autoComplete="name" />
        <input name="email" type="email" placeholder="E-Mail *" className={inputCls} autoComplete="email" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="phone" placeholder="Telefon (optional)" className={inputCls} autoComplete="tel" />
        <input name="company" placeholder="Unternehmen (optional)" className={inputCls} autoComplete="organization" />
      </div>
      <textarea
        name="message"
        placeholder="Worum geht's? (optional)"
        rows={4}
        className="w-full rounded-xl border border-line-hard bg-ink/60 px-4 py-3 text-[15px] text-paper transition-colors placeholder:text-fog-dim focus:border-signal focus:outline-none"
      />
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={state === "loading"} className="btn btn-primary disabled:opacity-60">
          {state === "loading" ? "Wird gesendet…" : "Anfrage senden"}
        </button>
        {state === "error" && (
          <span className="text-[13px] text-[#ff8a8a]">
            Bitte Name und gültige E-Mail eingeben — oder schreib uns direkt per WhatsApp.
          </span>
        )}
      </div>
      <p className="mt-1 text-[12px] text-fog-dim">
        Mit dem Absenden stimmst du der Verarbeitung deiner Angaben gemäß Datenschutzerklärung zu.
      </p>
    </form>
  );
}
