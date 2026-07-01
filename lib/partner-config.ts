export const partnerPackages = {
  keyword: { name: "Keyword Support Paket", price: 49, quota: 4 },
  optimization: { name: "Vollständige Optimierung", price: 499, quota: 0 },
  individual: { name: "Individuelle Hilfe", price: null, quota: 0 },
} as const;

export type PartnerPackageKey = keyof typeof partnerPackages;
export const partnerStatuses = ["wartet_auf_pruefung", "akzeptiert", "abgelehnt", "aktiv", "gesperrt", "geloescht"] as const;
export const paymentStatuses = ["offen", "bezahlt", "abgelaufen", "erstattung_geprueft", "nicht_erforderlich"] as const;
export const requestStatuses = ["neu", "in_bearbeitung", "beantwortet", "archiviert"] as const;
export const excludedPartnerAreas = ["webdesign", "webentwicklung", "seo-agentur", "geo-agentur", "aeo-agentur", "google-ads-agentur", "meta-ads-agentur", "youtube-ads-agentur", "grafikdesign", "mediengestaltung", "logo-design", "flyer-design", "social-media-design", "automatisierung", "ki-automation", "browsergame", "technische website-umsetzung"];

export function packageDetails(key: string) {
  return partnerPackages[key as PartnerPackageKey] || null;
}

export function monthKey(date = new Date()) {
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}`;
}

export function lastFriday(year: number, monthIndex: number) {
  const date = new Date(Date.UTC(year, monthIndex + 1, 0));
  while (date.getUTCDay() !== 5) date.setUTCDate(date.getUTCDate() - 1);
  return date;
}

export function nextLastFriday(date = new Date()) {
  let reset = lastFriday(date.getUTCFullYear(), date.getUTCMonth());
  if (date > reset) reset = lastFriday(date.getUTCFullYear(), date.getUTCMonth() + 1);
  return reset;
}
