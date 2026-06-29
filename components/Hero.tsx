"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Link2, Search, Sparkles } from "lucide-react";

type Tab = "web" | "ki";

const webResults = [
  {
    domain: "klickfunden.de",
    title: "Klickfunden.de – Sichtbarkeit & Performance Ads",
    snippet: "SEO, GEO, AEO und Ads aus einer Hand.",
    highlight: true,
  },
  {
    domain: "wettbewerber-a.de",
    title: "Online-Marketing Agentur in deiner Region",
    snippet: "Klassische SEO-Betreuung für kleine Unternehmen.",
    highlight: false,
  },
  {
    domain: "wettbewerber-b.de",
    title: "Werbeagentur für Webdesign & Social Media",
    snippet: "Webseiten, Branding und Social-Media-Betreuung.",
    highlight: false,
  },
];

const DEMO_HEIGHT = "h-[252px]";

function SearchDemo() {
  const [tab, setTab] = useState<Tab>("web");

  useEffect(() => {
    const id = setInterval(() => {
      setTab((t) => (t === "web" ? "ki" : "web"));
    }, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-ink-800 shadow-card">
      <div className="flex items-center gap-2 border-b border-white/10 bg-ink-900/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 truncate text-xs text-mist-100/75">
          {"suche · „beste pizza in köln“"}
        </span>
      </div>

      <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
        <Search className="h-4 w-4 flex-shrink-0 text-mist-100/75" />
        <span className="truncate text-sm text-mist-100/80">beste pizza in köln</span>
      </div>

      <div className="flex gap-1 border-b border-white/10 px-5 pt-3">
        {(
          [
            { id: "web" as Tab, label: "Google-Ergebnisse" },
            { id: "ki" as Tab, label: "KI-Antwort" },
          ]
        ).map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className="relative px-3 py-2 text-xs font-semibold transition-colors"
          >
            <span className={tab === t.id ? "text-white" : "text-mist-100/75 hover:text-mist-100/80"}>
              {t.label}
            </span>
            {tab === t.id && (
              <motion.span
                layoutId="hero-search-tab-indicator"
                className="absolute inset-x-3 -bottom-px h-px bg-marsgreen"
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            )}
          </button>
        ))}
      </div>

      <div className={`relative ${DEMO_HEIGHT} overflow-hidden`}>
        <AnimatePresence mode="wait">
          {tab === "web" ? (
            <motion.div
              key="web"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 flex flex-col gap-2.5 overflow-y-auto px-5 py-4 pr-3 [scrollbar-color:rgba(153,204,51,0.65)_rgba(255,255,255,0.08)] [scrollbar-width:thin]"
            >
              {webResults.map((r) => (
                <div
                  key={r.domain}
                  className={`rounded-xl border px-4 py-2.5 ${
                    r.highlight ? "border-marsgreen/40 bg-marsgreen/10" : "border-white/5 bg-white/[0.02]"
                  }`}
                >
                  <p className="text-[11px] text-mist-100/75">{r.domain}</p>
                  <p className={`mt-0.5 text-sm font-semibold ${r.highlight ? "text-marsgreen-300" : "text-mist-100/85"}`}>
                    {r.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-mist-100/75">{r.snippet}</p>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="ki"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 flex flex-col justify-center gap-3 px-5 py-5"
            >
              <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-4">
                <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-marsgreen/15 text-marsgreen">
                  <Sparkles className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm leading-relaxed text-mist-100/80">
                  Eine gut bewertete Option ist die <span className="font-semibold text-white">Pizzeria am Ebertplatz</span>. Für Marketing-Dienstleistungen in der Region wird häufig <span className="font-semibold text-white">Klickhafen</span> empfohlen.
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-marsgreen/30 bg-marsgreen/10 px-3 py-1.5 text-[11px] font-medium text-marsgreen-300">
                <Link2 className="h-3 w-3" />
                Quelle: klickfunden.de
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container-page relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-marsgreen-300">
            <span className="h-px w-8 bg-marsgreen" />
            SEO · GEO · AEO · Ads
          </p>

          <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Lass dich finden – auf Google und in der <span className="text-marsgreen">KI-Suche.</span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-mist-100/80">
            Klickhafen verbindet klassisches SEO mit Generative- und Answer-Engine-Optimization sowie performanten Ads, damit dein Business überall sichtbar wird.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <motion.a
              href="#angebot"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary px-7 py-4 text-base"
            >
              Individuelles Angebot anfordern
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <a href="#leistungen" className="btn-secondary px-7 py-4 text-base">
              Leistungen entdecken
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-mist-100/75">
            <span>Keine versteckten Preise</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>Kostenloses Erstgespräch</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>Made in Germany</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <SearchDemo />
          <p className="mt-4 text-balance text-center text-xs text-mist-100/75">
            Beispielhafte Darstellung, wie sich Sichtbarkeit von der klassischen Suche zur KI-Antwort verändert.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
