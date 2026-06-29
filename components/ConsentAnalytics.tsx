"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";

type ConsentChangeEvent = CustomEvent<{
  analytics: boolean;
  choice: "accepted" | "essential";
}>;

const consentStorageKey = "klickfunden_cookie_consent";

export default function ConsentAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(window.localStorage.getItem(consentStorageKey) === "accepted");

    const onConsentChange = (event: Event) => {
      const consentEvent = event as ConsentChangeEvent;
      setEnabled(Boolean(consentEvent.detail?.analytics));
    };

    window.addEventListener("klickfunden-consent-change", onConsentChange);
    return () =>
      window.removeEventListener("klickfunden-consent-change", onConsentChange);
  }, []);

  if (!enabled) {
    return null;
  }

  return <Analytics />;
}
