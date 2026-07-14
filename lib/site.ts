/**
 * Central site configuration. Single source of truth for brand, contact
 * and funnel data — change it here and it updates everywhere.
 */
export const site = {
  brand: "Klickfunden",
  legalName: "Enrico Gross",
  // Faithful to the klickfunden.de Impressum. Change to "Klickfunden" here
  // if the brand should be the registered trading name.
  tradingAs: "Klickhafen",
  domain: "https://klickfunden.de",

  // Funnel — everything points to WhatsApp. No free offers.
  whatsappNumber: "4915563535989",
  whatsappHref: "https://wa.me/4915563535989",
  whatsappDefaultMessage:
    "Hallo Enrico, ich würde mich gern mit dir austauschen bezüglich eines passenden Pakets. Bitte melde dich bei mir zurück, damit wir einen passenden Termin ausmachen können.",

  // Phone kept for the legally required Impressum contact only.
  phoneDisplay: "0155 63535989",
  phoneIntl: "+49 155 63535989",
  phoneTel: "tel:+4915563535989",

  email: "kontakt@klickfunden.de",

  address: {
    street: "Gerther Straße 76",
    postalCode: "44577",
    city: "Castrop-Rauxel",
    region: "Nordrhein-Westfalen",
    country: "DE",
    countryName: "Deutschland",
  },

  // Rough service centre for LocalBusiness geo (Castrop-Rauxel).
  geo: { lat: 51.5486, lng: 7.3116 },

  areaServed: "Deutschland, Österreich & Schweiz",

  tagline: "Reputation, Sichtbarkeit & Wachstum",

  socials: {
    instagram: "https://www.instagram.com/",
    tiktok: "https://www.tiktok.com/",
    linkedin: "https://www.linkedin.com/",
  },
} as const;

export type Site = typeof site;

/**
 * Build a WhatsApp deep link with a pre-filled message.
 * Falls back to the default message so the chat is never opened blank.
 */
export function whatsappLink(message?: string): string {
  const text = message ?? site.whatsappDefaultMessage;
  return text
    ? `${site.whatsappHref}?text=${encodeURIComponent(text)}`
    : site.whatsappHref;
}
