"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { HomepageReference } from "@/lib/reference-storage";

const references: HomepageReference[] = [];

type ReferenceApiRow = {
  id: string;
  title: string;
  result: string;
  url: string;
  image_url: string | null;
};

function mapReference(row: ReferenceApiRow): HomepageReference {
  return {
    id: row.id,
    title: row.title,
    result: row.result,
    href: row.url,
    imageUrl: row.image_url,
    industry: "Case Study",
    description:
      "Transparente Referenz mit Ergebniskennzahl, Screenshot und Live-Nachweis.",
  };
}

function ReferenceCard({ reference }: { reference: HomepageReference }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group flex w-[min(82vw,22rem)] shrink-0 flex-col rounded-3xl border border-white/10 bg-ink-700/70 p-6 shadow-card backdrop-blur transition-colors duration-300 hover:border-marsgreen/45"
    >
      {reference.imageUrl && (
        <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-ink-900">
          <Image
            src={reference.imageUrl}
            alt={`Screenshot zur Referenz ${reference.title}`}
            fill
            sizes="(min-width: 1024px) 352px, 82vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-marsgreen-300">
            {reference.industry || "Case Study"}
          </p>
          <h3 className="mt-3 break-words font-display text-xl font-semibold leading-snug text-white">
            {reference.title}
          </h3>
        </div>
        <a
          href={reference.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${reference.title} live prüfen`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-marsgreen/30 bg-marsgreen/10 text-marsgreen transition-colors duration-200 hover:bg-marsgreen hover:text-ink-900"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <p className="mt-6 font-display text-3xl font-bold tracking-tight text-marsgreen">
        {reference.result}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-mist-100/80 [text-wrap:pretty]">
        {reference.description ||
          "Transparente Referenz mit Ergebniskennzahl und Live-Nachweis."}
      </p>

      <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-white">
        Live-Referenz prüfen
        <ArrowRight className="h-4 w-4 text-marsgreen transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </motion.article>
  );
}

function EmptyReferences() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mt-14 max-w-2xl rounded-3xl border border-marsgreen/25 bg-ink-700/70 p-8 text-center shadow-card backdrop-blur sm:p-10"
    >
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-marsgreen/30 bg-marsgreen/15 text-marsgreen shadow-glow">
        <ShieldCheck className="h-6 w-6" />
      </div>
      <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-white">
        Aktuell sind keine Referenzen vorhanden.
      </h3>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mist-100/80 sm:text-base">
        Sobald geprüfte Kundenergebnisse vorliegen, erscheinen hier echte,
        transparente Erfolgsgeschichten mit nachvollziehbaren Ergebnissen und
        Live-Nachweisen.
      </p>
    </motion.div>
  );
}

function ReferencesCarousel({ items }: { items: HomepageReference[] }) {
  const carouselItems = [...items, ...items];
  const dragLimit = Math.max(items.length * 360, 720);

  return (
    <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: Math.max(24, items.length * 8),
          ease: "linear",
          repeat: Infinity,
        }}
        drag="x"
        dragConstraints={{ left: -dragLimit, right: 0 }}
        dragElastic={0.08}
        whileTap={{ cursor: "grabbing" }}
        className="flex w-max cursor-grab gap-5 py-2 pr-5"
      >
        {carouselItems.map((reference, index) => (
          <ReferenceCard
            key={`${reference.title}-${index}`}
            reference={reference}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function References() {
  const [activeReferences, setActiveReferences] =
    useState<HomepageReference[]>(references);
  const hasReferences = activeReferences.length > 0;

  useEffect(() => {
    let isMounted = true;

    async function loadReferences() {
      try {
        const response = await fetch("/api/referenzen", {
          cache: "no-store",
        });

        if (!response.ok) {
          return;
        }

        const payload = (await response.json()) as {
          referenzen: ReferenceApiRow[];
        };

        if (isMounted && Array.isArray(payload.referenzen)) {
          setActiveReferences(payload.referenzen.map(mapReference));
        }
      } catch {
        if (isMounted) {
          setActiveReferences(references);
        }
      }
    }

    loadReferences();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="referenzen" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="absolute inset-0 bg-radial-fade opacity-50" aria-hidden />
      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            Referenzen
          </span>
          <h2 className="section-label mt-5 text-balance">
            Echte Ergebnisse, sauber nachweisbar
          </h2>
          <p className="mt-5 text-balance text-lg leading-relaxed text-mist-100/80">
            Hier erscheinen ausschließlich transparente Case Studies mit realen
            Kundenergebnissen, nachvollziehbaren Kennzahlen und überprüfbaren
            Live-Links.
          </p>
        </motion.div>

        {hasReferences ? (
          <ReferencesCarousel items={activeReferences} />
        ) : (
          <EmptyReferences />
        )}
      </div>
    </section>
  );
}
