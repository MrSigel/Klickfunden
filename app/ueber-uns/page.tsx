import type { Metadata } from "next";
import { ArrowRight, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutFounder from "@/components/AboutFounder";

export const metadata: Metadata = {
  title: "Über Klickfunden | Digital-Marketing-Agentur aus Castrop-Rauxel",
  description: "Klickfunden verbindet SEO, GEO, AEO, Ads und Conversion-Optimierung für digitale Sichtbarkeit und qualifizierte Anfragen.",
  alternates: { canonical: "/ueber-uns" },
  openGraph: {
    title: "Über Klickfunden | SEO, GEO, AEO und Ads",
    description: "Persönliche, datenorientierte Zusammenarbeit für Unternehmen im Ruhrgebiet und deutschlandweit.",
    url: "https://www.klickfunden.de/ueber-uns",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "AboutPage", name: "Über Klickfunden", url: "https://www.klickfunden.de/ueber-uns", about: { "@id": "https://www.klickfunden.de/#organization" } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.klickfunden.de" },
      { "@type": "ListItem", position: 2, name: "Über uns", item: "https://www.klickfunden.de/ueber-uns" },
    ] },
  ],
};

export default function AboutPage() {
  return <>
    <Header />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <main className="bg-ink pt-32 text-white">
      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center sm:py-24">
        <div><span className="eyebrow">Über Klickfunden</span><h1 className="mt-5 text-balance font-display text-4xl font-bold leading-tight sm:text-5xl">Digital-Marketing-Agentur für Sichtbarkeit, Auffindbarkeit und Anfragen</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist-100/80">Klickfunden verbindet klassisches SEO mit GEO, AEO und performanten Ads, damit Unternehmen bei Google, in KI-Suchen und über bezahlte Kampagnen sichtbarer werden.</p><a href="/#angebot" className="btn-primary mt-8">Zusammenarbeit anfragen <ArrowRight className="h-4 w-4" /></a></div>
        <div className="rounded-3xl border border-marsgreen/25 bg-marsgreen/10 p-7"><MapPin className="h-6 w-6 text-marsgreen" /><h2 className="mt-5 font-display text-2xl font-semibold">Aus Castrop-Rauxel, deutschlandweit digital</h2><p className="mt-4 leading-relaxed text-mist-100/80">Der Sitz liegt in Castrop-Rauxel im Ruhrgebiet. Die Zusammenarbeit erfolgt strukturiert und digital mit Unternehmen in NRW und ganz Deutschland.</p><a href="/standort/castrop-rauxel" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-marsgreen">Mehr zum Standort <ArrowRight className="h-4 w-4" /></a></div>
      </section>
      <AboutFounder />
    </main>
    <Footer />
  </>;
}
