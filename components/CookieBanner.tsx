"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ConsentChoice = "accepted" | "essential";

const consentStorageKey = "klickfunden_cookie_consent";

function emitConsent(choice: ConsentChoice) {
  window.dispatchEvent(
    new CustomEvent("klickfunden-consent-change", {
      detail: {
        analytics: choice === "accepted",
        choice,
      },
    }),
  );
}

export default function CookieBanner() {
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(consentStorageKey);
    setVisible(stored !== "accepted" && stored !== "essential");
    setReady(true);
  }, []);

  const saveChoice = (choice: ConsentChoice) => {
    window.localStorage.setItem(consentStorageKey, choice);
    emitConsent(choice);
    setVisible(false);
  };

  if (!ready) {
    return null;
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 32, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 32, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[80] border-t border-white/10 bg-ink-900/95 px-5 py-5 shadow-card backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-banner-title"
        >
          <div className="mx-auto grid w-full max-w-7xl gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p
                id="cookie-banner-title"
                className="font-display text-base font-semibold text-white"
              >
                Datenschutz-Einstellungen
              </p>
              <p className="mt-2 max-w-4xl text-sm leading-relaxed text-mist-100/80">
                Klickhafen verwendet technisch notwendige Speicherzugriffe, damit
                diese Auswahl gespeichert bleibt. Vercel Web Analytics wird
                nur nach deiner Zustimmung genutzt und arbeitet
                datenschutzfreundlich ohne dauerhaft gesetzte
                Drittanbieter-Cookies. Details findest du in der{" "}
                <a
                  href="/datenschutz"
                  className="font-semibold text-marsgreen hover:underline"
                >
                  Datenschutzerklärung
                </a>{" "}
                und im{" "}
                <a
                  href="/impressum"
                  className="font-semibold text-marsgreen hover:underline"
                >
                  Impressum
                </a>
                .
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[420px]">
              <button
                type="button"
                onClick={() => saveChoice("essential")}
                className="inline-flex h-12 items-center justify-center rounded-full border border-marsgreen/70 bg-ink-800 px-5 text-sm font-semibold text-marsgreen transition-colors hover:bg-marsgreen/10"
              >
                Nur essenzielle
              </button>
              <button
                type="button"
                onClick={() => saveChoice("accepted")}
                className="inline-flex h-12 items-center justify-center rounded-full border border-marsgreen bg-marsgreen px-5 text-sm font-semibold text-ink-900 transition-colors hover:bg-marsgreen-400"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
