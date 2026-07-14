import type { Metadata } from "next";
import { site } from "@/lib/site";
import { breadcrumbLd } from "@/lib/jsonld";
import { PACKAGES, fmtEur } from "@/lib/pricing";
import { Reveal } from "@/components/Reveal";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PriceCalculator } from "@/components/PriceCalculator";
import { CountUp } from "@/components/CountUp";

export const metadata: Metadata = {
  title: "Pakete & Preise + Kostenrechner | Klickfunden",
  description:
    "Transparente Pakete und ein Kostenrechner, der dir sofort zeigt, was dein Marketing bei Klickfunden ungefähr kostet — Reputation, SEO, GEO/AEO und Ads.",
  keywords: [
    "Marketing Agentur Preise",
    "SEO Kosten",
    "Marketing Kostenrechner",
    "was kostet Online Marketing",
    "Agentur Pakete",
  ],
  alternates: { canonical: "/preise" },
};

export default function PreisePage() {
  const offerLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Klickfunden Pakete",
    itemListElement: PACKAGES.map((p) => ({
      "@type": "Offer",
      name: p.name,
      description: p.tagline,
      priceCurrency: "EUR",
      price: p.monthlyFrom,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: p.monthlyFrom,
        priceCurrency: "EUR",
        unitText: "MONTH",
      },
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Start", url: site.domain },
            { name: "Pakete & Preise", url: `${site.domain}/preise` },
          ]),
          offerLd,
        ]}
      />

      {/* Hero */}
      <section className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] pb-[clamp(40px,5vw,64px)] pt-[clamp(120px,15vw,180px)]">
        <Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Pakete & Preise", href: "/preise" }]} />
        <Reveal>
          <p className="eyebrow mb-6">Pakete &amp; Preise</p>
          <h1 className="max-w-[18ch] font-display text-[clamp(36px,6vw,72px)] font-light leading-[1.04] tracking-[-0.01em]">
            Klare Preise. Kein Rätselraten.
          </h1>
          <p className="mt-7 max-w-[54ch] text-[clamp(17px,1.6vw,20px)] text-fog">
            Wähle ein Paket oder stell dir mit dem Rechner unten dein eigenes Setup zusammen —
            du siehst sofort, in welchem Rahmen sich dein Marketing bewegt.
          </p>
        </Reveal>
      </section>

      {/* Packages */}
      <section className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] pb-[clamp(60px,8vw,110px)]">
        <div className="grid gap-4 md:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 0.06}
              className={`relative flex flex-col rounded-3xl border p-[clamp(24px,3vw,34px)] ${
                p.featured
                  ? "border-signal/40 bg-[radial-gradient(120%_140%_at_100%_0%,rgba(77,240,138,0.12),transparent_55%),linear-gradient(160deg,var(--color-surface)_0%,var(--color-ink-2)_100%)]"
                  : "border-line bg-surface"
              }`}
            >
              {p.featured && (
                <span className="absolute right-5 top-5 rounded-full border border-signal/30 bg-signal/10 px-3 py-1 font-mono text-[10px]  tracking-[0.02em] text-signal">
                  Beliebt
                </span>
              )}
              <h2 className="font-display text-[26px] font-semibold tracking-[-0.005em]">{p.name}</h2>
              <p className="mt-2 min-h-[3.5em] text-[14px] text-fog">{p.tagline}</p>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-mono text-[12px]  tracking-[0.02em] text-fog-dim">ab</span>
                <CountUp
                  value={p.monthlyFrom}
                  suffix=" €"
                  className="font-display text-[40px] font-semibold leading-none tracking-[-0.008em] tabular-nums"
                />
                <span className="text-[14px] text-fog">/ Monat</span>
              </div>

              <ul className="mt-7 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] text-fog">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-signal" aria-hidden>
                      <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <WhatsAppCta
                  variant={p.featured ? "primary" : "ghost"}
                  label={`„${p.name}“ anfragen`}
                  message={p.ctaMessage}
                  className="w-full"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center font-mono text-[12px]  tracking-[0.02em] text-fog-dim">
          Preise netto · keine USt. (Kleinunternehmer §&nbsp;19 UStG) · zzgl. Werbebudget · monatlich kündbar
        </p>
      </section>

      {/* Calculator */}
      <section className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] pb-[clamp(80px,11vw,140px)]">
        <Reveal className="mb-[clamp(32px,4vw,56px)] max-w-[640px]">
          <p className="eyebrow mb-5">Kostenrechner</p>
          <h2 className="section-title">Stell dir dein Setup zusammen.</h2>
          <p className="mt-5 text-fog">
            Häkchen setzen, Standorte und Werbebudget wählen — die Schätzung rechnet live mit.
            Passt es, schickst du uns deine Auswahl mit einem Klick per WhatsApp.
          </p>
        </Reveal>
        <PriceCalculator />
      </section>
    </>
  );
}
