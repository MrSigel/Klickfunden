import { ArrowRight, MapPin, Search, Sparkles, Target } from "lucide-react";

const audiences = [
  {
    title: "Lokale Unternehmen & regionale Anbieter",
    text: "Local SEO stärkt die Auffindbarkeit bei Google, Google Maps und standortbezogenen Suchanfragen.",
    href: "/services/local-seo",
  },
  {
    title: "Dienstleister, Coaches & Beratung",
    text: "Klare Leistungsseiten, AEO-Antworten und Kampagnen machen erklärungsbedürftige Angebote verständlich.",
    href: "/industries/dienstleister",
  },
  {
    title: "Handwerker",
    text: "Regionale SEO, Google Maps und Suchanzeigen erreichen konkrete Nachfrage im passenden Einzugsgebiet.",
    href: "/industries/handwerker",
  },
  {
    title: "B2B-Unternehmen",
    text: "SEO, GEO und Content-Strukturen begleiten längere Entscheidungsprozesse und qualifizieren Anfragen.",
    href: "/industries/b2b",
  },
  {
    title: "Praxen & Kanzleien",
    text: "Lokale Auffindbarkeit und präzise Antwortseiten verbinden Fachthemen mit relevanten Kontaktwegen.",
    href: "/industries/aerzte",
  },
  {
    title: "Immobilienanbieter",
    text: "Regionale Landingpages, Google Ads und Conversion-Optimierung unterstützen Eigentümer- und Interessentenanfragen.",
    href: "/industries/immobilien",
  },
  {
    title: "Gastronomie",
    text: "Google Maps, lokale Suche und Meta Ads verbessern Sichtbarkeit für Reservierungen, Angebote und Anlässe.",
    href: "/industries/gastronomie",
  },
  {
    title: "E-Commerce",
    text: "Technical SEO, Content SEO und Kampagnen erschließen Nachfrage entlang von Kategorien und Produkten.",
    href: "/industries/ecommerce",
  },
];

export default function AgencyOverview() {
  return (
    <>
      <section className="bg-ink-900/35 py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow">Klickfunden kurz erklärt</span>
            <h2 className="section-label mt-5 text-balance">
              Online-Marketing für digitale Sichtbarkeit und Wachstum
            </h2>
          </div>
          <div className="rounded-3xl border border-marsgreen/25 bg-marsgreen/10 p-6 shadow-glow sm:p-8">
            <p className="text-lg leading-relaxed text-white">
              Klickfunden ist eine Digital-Marketing-Agentur aus Castrop-Rauxel
              für SEO, GEO, AEO, Google Ads, Meta Ads, YouTube Ads, Local SEO und
              Conversion-Optimierung. Der Fokus liegt auf digitaler
              Sichtbarkeit, Auffindbarkeit bei Google und KI-Suchen sowie auf
              Kampagnen, die aus Besuchern qualifizierte Anfragen machen.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Search, label: "Sichtbarkeit bei Google" },
                { icon: Sparkles, label: "Sichtbarkeit in KI-Suchen" },
                { icon: Target, label: "Messbare Anfragewege" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl bg-ink-900/35 p-4">
                  <Icon className="h-5 w-5 shrink-0 text-marsgreen" />
                  <span className="text-sm font-medium text-mist-100/85">{label}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 flex items-start gap-2 text-sm leading-relaxed text-mist-100/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-marsgreen" />
              Klickfunden arbeitet digital für Unternehmen in ganz Deutschland
              und hat seinen Sitz in Castrop-Rauxel im Ruhrgebiet.
            </p>
          </div>
        </div>
      </section>

      <section id="zielgruppen" className="bg-ink py-20 sm:py-28">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="eyebrow">Zielgruppen</span>
            <h2 className="section-label mt-5 text-balance">
              Für wen ist Klickfunden geeignet?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-mist-100/75">
              Die passende Kanalstrategie richtet sich nach Suchverhalten,
              Region, Erklärungsbedarf und dem Weg bis zur Anfrage.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {audiences.map((audience) => (
              <article key={audience.title} className="flex flex-col rounded-3xl border border-white/10 bg-ink-800/60 p-6">
                <h3 className="font-display text-lg font-semibold text-white">{audience.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist-100/75">{audience.text}</p>
                <a href={audience.href} className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-marsgreen hover:underline">
                  Passende Strategie
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
