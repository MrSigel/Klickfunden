import { site } from "./site";
import { RATING } from "./testimonials";

const ORG_ID = `${site.domain}/#organization`;
const WEBSITE_ID = `${site.domain}/#website`;

/** Organization + LocalBusiness — emitted once, in the root layout. */
export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: site.brand,
    legalName: `${site.legalName} (${site.tradingAs})`,
    url: site.domain,
    email: site.email,
    telephone: site.phoneIntl,
    slogan: site.tagline,
    description:
      "Agentur für Reputationsmanagement, SEO, GEO, AEO, CRO und Performance-Ads. Wir machen lokale Betriebe online sichtbar, vertrauenswürdig und wachstumsstark.",
    areaServed: site.areaServed,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: site.phoneIntl,
      email: site.email,
      availableLanguage: ["de"],
    },
    sameAs: [site.socials.instagram, site.socials.tiktok, site.socials.linkedin],
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      ratingCount: RATING.count,
    },
    knowsAbout: [
      "Reputationsmanagement",
      "Google Bewertungen",
      "Suchmaschinenoptimierung (SEO)",
      "Generative Engine Optimization (GEO)",
      "Answer Engine Optimization (AEO)",
      "Conversion-Optimierung (CRO)",
      "Google Ads",
      "Meta Ads",
      "TikTok Ads",
      "Social Media Marketing",
    ],
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.domain,
    name: site.brand,
    inLanguage: "de-DE",
    publisher: { "@id": ORG_ID },
  };
}

export function serviceLd(opts: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: opts.url,
    provider: { "@id": ORG_ID },
    areaServed: site.areaServed,
  };
}

export function faqLd(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
