/**
 * Pricing model — packages + à-la-carte modules for the cost calculator.
 * All prices are NET placeholders (Kleinunternehmer, keine USt.) and meant to
 * be adjusted here in one place. "ab" = starting price.
 */

export const fmtEur = (n: number) =>
  n.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });

export type Package = {
  id: string;
  name: string;
  tagline: string;
  monthlyFrom: number;
  featured?: boolean;
  features: string[];
  ctaMessage: string;
};

export const PACKAGES: Package[] = [
  {
    id: "start",
    name: "Start",
    tagline: "Für den lokalen Einstieg — sichtbar & vertrauenswürdig werden.",
    monthlyFrom: 349,
    features: [
      "Google-Unternehmensprofil optimiert",
      "Bewertungs-System (mehr echte Rezensionen)",
      "Local SEO für deine Region",
      "Monatliches Reporting",
    ],
    ctaMessage: "Hallo Klickfunden, ich interessiere mich für das Paket „Start“.",
  },
  {
    id: "wachstum",
    name: "Wachstum",
    tagline: "Der Allrounder — Reputation, Rankings und ein Ads-Kanal im Zusammenspiel.",
    monthlyFrom: 890,
    featured: true,
    features: [
      "Alles aus „Start“",
      "Reputationsmanagement (aktiv)",
      "SEO + GEO/AEO (auch KI-Suche)",
      "1 Ads-Kanal (Google, Meta oder TikTok)",
      "Conversion-Tracking & Reporting",
    ],
    ctaMessage: "Hallo Klickfunden, ich interessiere mich für das Paket „Wachstum“.",
  },
  {
    id: "dominanz",
    name: "Dominanz",
    tagline: "Für maximale Marktpräsenz — alle Hebel, priorisiert betreut.",
    monthlyFrom: 1890,
    features: [
      "Alles aus „Wachstum“",
      "Conversion-Optimierung (CRO)",
      "Social-Media-Betreuung",
      "Multi-Channel-Ads (Google + Meta + TikTok)",
      "Priorisierte Betreuung & Strategie",
    ],
    ctaMessage: "Hallo Klickfunden, ich interessiere mich für das Paket „Dominanz“.",
  },
];

export type Module = {
  id: string;
  name: string;
  group: "Reputation" | "Sichtbarkeit" | "Performance" | "Basis";
  monthly: number;
  setup: number;
  /** Fee scales with number of locations. */
  perLocation?: boolean;
  /** Requires a monthly ad budget spent on the platforms. */
  hasAdBudget?: boolean;
  note?: string;
};

export const MODULES: Module[] = [
  { id: "reputation", name: "Reputationsmanagement", group: "Reputation", monthly: 249, setup: 149 },
  { id: "bewertungen", name: "Google-Bewertungen-System", group: "Reputation", monthly: 199, setup: 99, perLocation: true },
  { id: "seo", name: "SEO (Suchmaschinen)", group: "Sichtbarkeit", monthly: 590, setup: 290 },
  { id: "localseo", name: "Local SEO & Google Maps", group: "Sichtbarkeit", monthly: 349, setup: 149, perLocation: true },
  { id: "geoaeo", name: "GEO & AEO (KI-Suche)", group: "Sichtbarkeit", monthly: 390, setup: 190 },
  { id: "cro", name: "Conversion-Optimierung (CRO)", group: "Sichtbarkeit", monthly: 450, setup: 0 },
  { id: "googleads", name: "Google Ads Betreuung", group: "Performance", monthly: 390, setup: 0, hasAdBudget: true },
  { id: "metaads", name: "Meta Ads Betreuung", group: "Performance", monthly: 390, setup: 0, hasAdBudget: true },
  { id: "tiktokads", name: "TikTok Ads Betreuung", group: "Performance", monthly: 350, setup: 0, hasAdBudget: true },
  { id: "social", name: "Social-Media-Betreuung", group: "Performance", monthly: 690, setup: 190 },
  { id: "webdesign", name: "Website / Landingpage", group: "Basis", monthly: 0, setup: 1900, note: "einmalig ab" },
];

export const MODULE_GROUPS = ["Reputation", "Sichtbarkeit", "Performance", "Basis"] as const;
