import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SEO, GEO, AEO & Ads Agentur aus Castrop-Rauxel | Klickfunden",
  description:
    "Klickfunden ist eine Digital-Marketing-Agentur aus Castrop-Rauxel für SEO, GEO, AEO, Google Ads, Meta Ads, Local SEO und Conversion-Optimierung.",
  alternates: { canonical: "/standort/castrop-rauxel" },
  openGraph: {
    title: "Digital-Marketing-Agentur aus Castrop-Rauxel | Klickfunden",
    description:
      "Lokale Expertise im Ruhrgebiet und digitale Zusammenarbeit mit Unternehmen in ganz Deutschland.",
    url: "https://www.klickfunden.de/standort/castrop-rauxel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO, GEO, AEO & Ads aus Castrop-Rauxel | Klickfunden",
    description: "Digitale Sichtbarkeit für Unternehmen im Ruhrgebiet und deutschlandweit.",
  },
};

const services = [
  ["SEO & Technical SEO", "/services/seo"],
  ["GEO für KI-Suchen", "/services/geo"],
  ["AEO für direkte Antworten", "/services/aeo"],
  ["Google Ads", "/services/google-ads"],
  ["Meta & YouTube Ads", "/services/meta-ads"],
  ["Local SEO & Google Maps", "/services/local-seo"],
  ["Conversion-Optimierung", "/services/conversion-optimierung"],
] as const;

const faq = [
  {
    question: "Arbeitet Klickfunden nur mit Unternehmen aus Castrop-Rauxel?",
    answer:
      "Nein. Klickfunden hat seinen Sitz in Castrop-Rauxel und arbeitet digital mit Unternehmen im Ruhrgebiet, in NRW und in ganz Deutschland.",
  },
  {
    question: "Welche Leistungen sind für lokale Unternehmen besonders relevant?",
    answer:
      "Local SEO, ein gepflegtes Google Unternehmensprofil, regionale Leistungsseiten und Google Ads sind oft besonders relevant, wenn Kunden in einem definierten Einzugsgebiet suchen.",
  },
  {
    question: "Kann Klickfunden auch Sichtbarkeit in KI-Suchen verbessern?",
    answer:
      "Ja. GEO und AEO strukturieren Unternehmensinformationen und Antworten so, dass KI-Suchsysteme und Answer Engines sie leichter verstehen und einordnen können.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.klickfunden.de/#organization",
      name: "Klickfunden",
      url: "https://www.klickfunden.de",
      telephone: "+49 155 63535989",
      email: "kontakt@klickfunden.de",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Gerther Straße 76",
        postalCode: "44577",
        addressLocality: "Castrop-Rauxel",
        addressRegion: "Nordrhein-Westfalen",
        addressCountry: "DE",
      },
      areaServed: "Deutschland",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.klickfunden.de" },
        { "@type": "ListItem", position: 2, name: "Standort Castrop-Rauxel", item: "https://www.klickfunden.de/standort/castrop-rauxel" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function CastropRauxelPage() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="bg-ink pt-32">
        <section className="container-page grid gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center sm:py-28">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-marsgreen-300">
              <MapPin className="h-4 w-4" /> Castrop-Rauxel · Ruhrgebiet · NRW
            </p>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              SEO, GEO, AEO und Ads aus Castrop-Rauxel
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist-100/80">
              Klickfunden ist eine Digital-Marketing-Agentur aus Castrop-Rauxel
              für SEO, GEO, AEO, Google Ads, Meta Ads, YouTube Ads, Local SEO
              und Conversion-Optimierung. Die Zusammenarbeit erfolgt digital
              mit Unternehmen im Ruhrgebiet und deutschlandweit.
            </p>
            <a href="/#angebot" className="btn-primary mt-8 px-7 py-4 text-base">
              Strategie anfragen <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="rounded-4xl border border-marsgreen/25 bg-marsgreen/10 p-7 shadow-glow">
            <h2 className="font-display text-2xl font-semibold text-white">Lokale Nähe, digitale Umsetzung</h2>
            <p className="mt-4 leading-relaxed text-mist-100/80">
              Für regionale Anbieter zählen Google Maps, lokale Suchanfragen
              und klare Kontaktwege. Für deutschlandweit tätige Unternehmen
              stehen Themenarchitektur, KI-lesbare Inhalte und skalierbare
              Kampagnen im Mittelpunkt.
            </p>
          </div>
        </section>

        <section className="bg-ink-900/35 py-20 sm:py-24">
          <div className="container-page">
            <span className="eyebrow">Leistungen</span>
            <h2 className="section-label mt-5">Sichtbarkeit passend zu Markt und Region</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(([label, href]) => (
                <a key={href} href={href} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-800/60 p-5 text-sm font-semibold text-white transition-colors hover:border-marsgreen">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-marsgreen" /> {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="container-page py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="section-label mt-5">Häufige Fragen zum Standort</h2>
            </div>
            <div className="space-y-4">
              {faq.map((item, index) => (
                <details key={item.question} open={index === 0} className="group rounded-2xl border border-white/10 bg-ink-800/60">
                  <summary className="flex cursor-pointer list-none justify-between gap-4 p-5 font-display font-semibold text-white">
                    {item.question}<span className="text-xl text-marsgreen group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-mist-100/80">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
