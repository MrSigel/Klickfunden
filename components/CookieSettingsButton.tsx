"use client";

const consentStorageKey = "klickfunden_cookie_consent";

export default function CookieSettingsButton({ className = "text-left transition-colors hover:text-marsgreen" }: { className?: string }) {
  const openSettings = () => {
    window.localStorage.removeItem(consentStorageKey);
    window.dispatchEvent(
      new CustomEvent("klickfunden-consent-change", {
        detail: { analytics: false, choice: "essential" },
      }),
    );
    window.dispatchEvent(new Event("klickfunden-open-cookie-settings"));
  };

  return (
    <button
      type="button"
      onClick={openSettings}
      className={className}
    >
      Cookie-Einstellungen
    </button>
  );
}
