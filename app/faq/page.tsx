import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { faqItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ zu SEO, GEO, AEO und Ads | Klickfunden",
  description: "Klare Antworten zu SEO, GEO, AEO, Google Ads, Meta Ads, YouTube Ads, Local SEO, Conversion-Optimierung und der Zusammenarbeit mit Klickfunden.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Häufige Fragen zu SEO, GEO, AEO und Ads | Klickfunden",
    description: "Kompakte Antworten zu digitaler Sichtbarkeit bei Google, KI-Suchen und bezahlten Kampagnen.",
    url: "https://www.klickfunden.de/faq",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.klickfunden.de" },
      { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.klickfunden.de/faq" },
    ] },
  ],
};

export default function FaqPage() {
  return <>
    <Header />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <main className="bg-ink pt-32 text-white">
      <section className="container-page py-16 text-center sm:py-24">
        <span className="eyebrow">Wissen & Antworten</span>
        <h1 className="mx-auto mt-5 max-w-4xl text-balance font-display text-4xl font-bold leading-tight sm:text-5xl">Häufige Fragen zu SEO, GEO, AEO und Ads</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mist-100/80">Klare, sachliche Antworten für Unternehmen, die ihre digitale Auffindbarkeit bei Google und in KI-Suchen verbessern möchten.</p>
      </section>
      <section className="container-page pb-20 sm:pb-28">
        <div className="mx-auto max-w-4xl space-y-4">{faqItems.map((item, index) => <details key={item.question} open={index === 0} className="group rounded-2xl border border-white/10 bg-ink-800/70"><summary className="flex cursor-pointer list-none justify-between gap-4 p-6 font-display text-lg font-semibold"><span>{item.question}</span><span className="text-marsgreen transition-transform group-open:rotate-45">+</span></summary><p className="px-6 pb-6 leading-relaxed text-mist-100/80">{item.answer}</p></details>)}</div>
        <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-marsgreen/25 bg-marsgreen/10 p-8 text-center"><h2 className="font-display text-2xl font-semibold">Deine Frage ist noch offen?</h2><p className="mx-auto mt-3 max-w-xl text-mist-100/80">Beschreibe kurz dein Ziel. Klickfunden ordnet ein, welche Maßnahmen und Kanäle sinnvoll sind.</p><a href="/#angebot" className="btn-primary mt-6">Anfrage stellen <ArrowRight className="h-4 w-4" /></a></div>
      </section>
    </main>
    <Footer />
  </>;
}
