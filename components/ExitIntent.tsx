"use client";

import { useEffect, useState } from "react";
import { WhatsAppCta } from "./WhatsAppCta";

const KEY = "kf_exit_shown";

export function ExitIntent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Desktop only — exit-intent via cursor leaving the top of the viewport.
    if (window.matchMedia("(max-width: 767px)").matches) return;
    try {
      if (sessionStorage.getItem(KEY)) return;
    } catch {}

    let armed = false;
    const arm = window.setTimeout(() => {
      armed = true;
    }, 4000);

    const onMouseOut = (e: MouseEvent) => {
      if (!armed) return;
      if (e.clientY <= 0 && !e.relatedTarget) {
        setShow(true);
        try {
          sessionStorage.setItem(KEY, "1");
        } catch {}
        document.removeEventListener("mouseout", onMouseOut);
      }
    };

    document.addEventListener("mouseout", onMouseOut);
    return () => {
      window.clearTimeout(arm);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  useEffect(() => {
    if (!show) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setShow(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [show]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[130] grid place-items-center bg-black/65 p-5 backdrop-blur-sm"
      onClick={() => setShow(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Bevor du gehst"
    >
      <div
        className="relative w-full max-w-[440px] overflow-hidden rounded-3xl border border-line bg-[radial-gradient(120%_140%_at_100%_0%,rgba(77,240,138,0.16),transparent_55%),linear-gradient(160deg,var(--color-surface)_0%,var(--color-ink-2)_100%)] p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Schließen"
          onClick={() => setShow(false)}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-fog transition-colors hover:bg-line hover:text-paper"
        >
          ✕
        </button>

        <p className="eyebrow mb-4">Warte kurz</p>
        <h2 className="font-display text-[clamp(24px,3vw,30px)] font-light leading-[1.1] tracking-[-0.01em]">
          Lass dein Potenzial
          <br />
          nicht liegen.
        </h2>
        <p className="mx-auto mt-3 max-w-[34ch] text-[15px] text-fog">
          Schreib uns eine kurze Nachricht — wir sagen dir in 2 Minuten, wo dein größter
          Hebel liegt.
        </p>

        <div className="mt-6 flex justify-center">
          <WhatsAppCta
            label="Jetzt kurz schreiben"
          />
        </div>
        <button
          onClick={() => setShow(false)}
          className="mt-4 text-[13px] text-fog-dim transition-colors hover:text-fog"
        >
          Nein danke
        </button>
      </div>
    </div>
  );
}
