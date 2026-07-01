"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Search,
  Sparkles,
  Target,
} from "lucide-react";
import type { SeoPage } from "@/lib/seo-pages";

type SeoSubpageContentProps = {
  page: Omit<SeoPage, "metadata">;
};

const benefitIcons = [Search, Sparkles, Target, BarChart3];

export default function SeoSubpageContent({ page }: SeoSubpageContentProps) {
  const relatedLinks = (
    page.category === "Leistung"
      ? [
          { label: "SEO", href: "/services/seo" },
          { label: "GEO", href: "/services/geo" },
          { label: "AEO", href: "/services/aeo" },
          { label: "Google Ads", href: "/services/google-ads" },
          { label: "Meta Ads", href: "/services/meta-ads" },
          { label: "YouTube Ads", href: "/services/youtube-ads" },
          { label: "Local SEO", href: "/services/local-seo" },
          { label: "Technical SEO", href: "/services/technical-seo" },
          { label: "Content SEO", href: "/services/content-seo" },
          { label: "Conversion-Optimierung", href: "/services/conversion-optimierung" },
        ]
      : [
          { label: "SEO", href: "/services/seo" },
          { label: "Local SEO", href: "/services/local-seo" },
          { label: "Google Ads", href: "/services/google-ads" },
          { label: "Meta Ads", href: "/services/meta-ads" },
          { label: "Content SEO", href: "/services/content-seo" },
          { label: "Conversion-Optimierung", href: "/services/conversion-optimierung" },
        ]
  ).filter((link) => link.href !== page.path);

  return (
    <main className="relative overflow-hidden bg-ink pt-32">
      <section className="relative pb-20 pt-10 sm:pb-28 sm:pt-16">
        <div className="absolute inset-0 bg-radial-fade opacity-60" aria-hidden />
        <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-marsgreen-300">
              <span className="h-px w-8 bg-marsgreen" />
              {page.category} · {page.eyebrow}
            </p>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-mist-100/80">
              {page.description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <motion.a
                href="/#angebot"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary px-7 py-4 text-base"
              >
                Strategie anfragen
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <a href="#faq" className="btn-secondary px-7 py-4 text-base">
                Antworten ansehen
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-4xl border border-white/10 bg-ink-800/70 p-6 shadow-card backdrop-blur"
          >
            <p className="font-display text-lg font-semibold text-white">
              Optimiert für moderne Suche
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {page.badges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-marsgreen/15 text-marsgreen">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-mist-100/85">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-3xl border border-marsgreen/25 bg-marsgreen/10 p-5">
              <p className="text-sm font-semibold text-marsgreen-300">
                GEO/AEO-Ebene aktiv
              </p>
              <p className="mt-2 text-sm leading-relaxed text-mist-100/75">
                Diese Seite kombiniert Suchintention, klare Antwortstruktur,
                FAQPage-Schema und servicebezogene Entitätsdaten für Google,
                KI-Suche und Answer Engines.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink-800/45 py-14">
        <div className="container-page grid gap-5 md:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-marsgreen-300">Kurz erklärt</p>
            <p className="mt-3 text-sm leading-relaxed text-mist-100/85">{page.description}</p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-marsgreen-300">Für wen geeignet?</p>
            <p className="mt-3 text-sm leading-relaxed text-mist-100/85">
              {page.category === "Leistung"
                ? "Für Unternehmen, die ihre digitale Auffindbarkeit strukturiert verbessern und relevante Nachfrage in qualifizierte Anfragen übersetzen möchten."
                : "Für Unternehmen dieser Branche, die Leistungen klar positionieren, regional oder deutschlandweit gefunden werden und Anfragewege verbessern möchten."}
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-marsgreen-300">Was wird gemessen?</p>
            <p className="mt-3 text-sm leading-relaxed text-mist-100/85">
              Sichtbarkeit, relevante Suchbegriffe, Klicks, qualifizierte Anfragen, Conversion-Rate und – bei Kampagnen – Kosten pro Lead.
            </p>
          </article>
        </div>
      </section>

      <section className="relative bg-ink-900/35 py-20 sm:py-24">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="eyebrow">Vorteile</span>
            <h2 className="section-label mt-5 text-balance">
              Warum diese Strategie für {page.eyebrow} funktioniert
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {page.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index % benefitIcons.length];

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="rounded-3xl border border-white/10 bg-ink-800/60 p-6 shadow-card"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-marsgreen/15 text-marsgreen">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist-100/80">
                    {benefit.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="eyebrow">Umsetzung</span>
            <h2 className="section-label mt-5 text-balance">
              Von Suchintention zu qualifizierter Anfrage
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-mist-100/75">
              Klickfunden verbindet SEO, GEO, AEO und Performance-Denken in
              einem kompakten Prozess. Jede Seite bekommt eine klare Aufgabe:
              gefunden werden, verstanden werden und zur Anfrage führen.
            </p>
          </div>

          <div className="space-y-4">
            {page.process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="grid gap-4 rounded-3xl border border-white/10 bg-ink-800/50 p-5 sm:grid-cols-[auto_1fr]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-marsgreen text-sm font-bold text-ink-900">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-100/80">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-ink-900/35 py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="section-label mt-5 text-balance">
              Antworten für Suchmaschinen, KI-Systeme und Menschen
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-mist-100/75">
              Diese Fragen sind bewusst präzise formuliert, damit Nutzer und
              Answer Engines die wichtigsten Informationen schnell erfassen.
            </p>
          </div>

          <div className="space-y-3">
            {page.faq.map((item, index) => (
                <motion.details
                  key={item.question}
                  open={index === 0}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-ink-800/60"
                >
                  <summary
                    className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold text-white">
                      {item.question}
                    </span>
                    <span className="text-xl text-marsgreen transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-mist-100/80">
                    {item.answer}
                  </p>
                </motion.details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ink-900/35 py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div><h2 className="font-display text-2xl font-semibold text-white">Verwandte Leistungen</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {relatedLinks.map((link) => (
              <a key={link.href} href={link.href} className="rounded-full border border-white/15 bg-ink-800 px-5 py-3 text-sm font-semibold text-mist-100/85 transition-colors hover:border-marsgreen hover:text-marsgreen">
                {link.label}
              </a>
            ))}
          </div></div>
          {page.category === "Leistung" && <div><h2 className="font-display text-2xl font-semibold text-white">Passende Branchen</h2><div className="mt-6 flex flex-wrap gap-3">{[
            { label: "Handwerker", href: "/industries/handwerker" },
            { label: "Dienstleister", href: "/industries/dienstleister" },
            { label: "B2B-Unternehmen", href: "/industries/b2b" },
            { label: "E-Commerce", href: "/industries/ecommerce" },
          ].map((link) => <a key={link.href} href={link.href} className="rounded-full border border-white/15 bg-ink-800 px-5 py-3 text-sm font-semibold text-mist-100/85 transition-colors hover:border-marsgreen hover:text-marsgreen">{link.label}</a>)}</div></div>}
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="rounded-4xl border border-marsgreen/25 bg-marsgreen/10 px-6 py-10 text-center shadow-glow sm:px-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-marsgreen-300">
              Nächster Schritt
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
              Lass prüfen, welche SEO-, GEO-, AEO- und Ads-Hebel für dein
              Unternehmen am meisten Wirkung haben.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-mist-100/75">
              Über das Formular auf der Startseite erhältst du eine kurze,
              strukturierte Einschätzung statt eines Standardpakets.
            </p>
            <motion.a
              href="/#angebot"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary mt-8 px-7 py-4 text-base"
            >
              Angebot anfordern
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
