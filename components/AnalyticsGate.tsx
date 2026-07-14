"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

/**
 * Loads Vercel Web Analytics ONLY after the visitor accepted all cookies.
 * Reacts live to the cookie banner via the "kf-consent-change" event.
 */
export function AnalyticsGate() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const read = () => {
      try {
        setConsented(localStorage.getItem("kf_cookie_consent") === "all");
      } catch {
        setConsented(false);
      }
    };
    read();
    window.addEventListener("kf-consent-change", read);
    window.addEventListener("storage", read);
    return () => {
      window.removeEventListener("kf-consent-change", read);
      window.removeEventListener("storage", read);
    };
  }, []);

  return consented ? <Analytics /> : null;
}
