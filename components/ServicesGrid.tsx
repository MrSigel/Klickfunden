"use client";

import { motion } from "framer-motion";
import { Search, BrainCircuit, MessageCircleQuestion, Megaphone, Check } from "lucide-react";
import { services } from "@/lib/data";

const icons = {
  seo: Search,
  geo: BrainCircuit,
  aeo: MessageCircleQuestion,
  ads: Megaphone,
} as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function ServicesGrid() {
  return (
    <section id="leistungen" className="relative overflow-x-hidden bg-ink-800 py-24 sm:py-32">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="eyebrow">Unsere Leistungen</span>
          <h2 className="section-label mt-5 text-balance">
            Vier Hebel für deine Sichtbarkeit
          </h2>
          <p className="mt-5 text-balance text-lg leading-relaxed text-mist-100/75">
            Klassische Suche, KI-Antworten und bezahlte Reichweite – wir
            kombinieren alle Kanäle so, wie es zu deinem Business passt.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {services.map((service) => {
            const Icon = icons[service.id as keyof typeof icons];
            return (
              <motion.div
                key={service.id}
                variants={item}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative flex min-w-0 flex-col rounded-3xl border border-white/10 bg-ink-700/60 p-6 shadow-card transition-colors duration-300 hover:border-marsgreen/40"
              >
                <div className="flex min-w-0 items-center justify-between gap-3">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-marsgreen/15 text-marsgreen transition-all duration-300 group-hover:scale-110 group-hover:bg-marsgreen group-hover:text-ink-900">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="flex-shrink-0 font-display text-xs font-bold uppercase tracking-[0.2em] text-mist-100/75">
                    {service.shortTitle}
                  </span>
                </div>

                <h3 className="mt-6 break-words text-balance font-display text-lg font-semibold leading-snug text-white [hyphens:auto] sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-3 break-words text-sm leading-relaxed text-mist-100/80 [text-wrap:pretty]">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {service.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 break-words text-sm text-mist-100/80"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-marsgreen" />
                      <span className="min-w-0">{b}</span>
                    </li>
                  ))}
                </ul>

                <span className="pointer-events-none absolute inset-x-6 bottom-0 h-px scale-x-0 bg-marsgreen/60 transition-transform duration-300 group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
