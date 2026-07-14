"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "kf_cookie_consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* storage blocked — show anyway */
      setShow(true);
    }
  }, []);

  const decide = (value: "all" | "essential") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {}
    // Let the analytics gate react immediately, no reload needed.
    window.dispatchEvent(new Event("kf-consent-change"));
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      className="fixed inset-x-4 bottom-[88px] z-[120] mx-auto max-w-[440px] rounded-2xl border border-line bg-ink/95 p-5 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl md:inset-x-auto md:bottom-6 md:left-6"
    >
      <p className="font-display text-[15px] font-semibold text-paper">Cookies & Datenschutz</p>
      <p className="mt-2 text-[13.5px] leading-relaxed text-fog">
        Wir verwenden technisch notwendige Cookies und — nur mit deiner Zustimmung —
        eine datenschutzfreundliche Reichweitenmessung (Vercel&nbsp;Analytics). Details in
        der{" "}
        <Link href="/datenschutz" className="text-signal hover:underline">
          Datenschutzerklärung
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-2.5">
        <button onClick={() => decide("all")} className="btn btn-primary !h-11 flex-1">
          Alle akzeptieren
        </button>
        <button onClick={() => decide("essential")} className="btn btn-ghost !h-11 flex-1">
          Nur notwendige
        </button>
      </div>
    </div>
  );
}
