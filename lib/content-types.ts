export type Faq = { q: string; a: string };

export type Section = {
  h2: string;
  body: string;
  bullets?: string[];
};

export type LandingPage = {
  slug: string;
  category: "leistung" | "branche";
  /** Short label for nav, cards, breadcrumbs. */
  name: string;
  /** schema.org serviceType. */
  serviceType: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  lead: string;
  sections: Section[];
  benefits: string[];
  faq: Faq[];
  /** Related page slugs for internal linking. */
  related: string[];
};
