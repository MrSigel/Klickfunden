"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function AboutFounder() {
  return (
    <section id="ueber-uns" className="relative bg-ink py-24 sm:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-ink-600 via-ink-700 to-ink-900">
            <Image
              src="/founder.png"
              alt="Enrico Gross, Inhaber von Klickfunden"
              fill
              sizes="(min-width: 1024px) 360px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/55 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 bg-ink-900/80 px-6 py-5 backdrop-blur">
              <p className="font-display text-sm font-semibold text-white">
                Enrico Gross
              </p>
              <p className="text-xs text-mist-100/75">Klickfunden</p>
            </div>
          </div>

          <motion.span
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-6 hidden h-16 w-16 items-center justify-center rounded-2xl border border-marsgreen/30 bg-ink-800 shadow-glow sm:flex"
          >
            <Quote className="h-6 w-6 text-marsgreen" />
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <span className="eyebrow">Über Klickfunden</span>
          <h2 className="section-label mt-5 text-balance">
            Mehr Partner als Agentur
          </h2>

          <div className="mt-6 space-y-4 text-lg leading-relaxed text-mist-100/80 [text-wrap:pretty]">
            <p>
              Klickfunden unterstützt Unternehmen, die online theoretisch
              auffindbar, aber praktisch kaum sichtbar sind. Zu
              technisch, zu unklar kommuniziert, oder schlicht nicht da, wo
              heute gesucht wird.
            </p>
            <p>
              Wir glauben an enge Zusammenarbeit statt anonymer
              Reportings: kurze Wege, klare Sprache und Strategien, die zu
              deinem Business passen, nicht zu einer Checkliste.
            </p>
          </div>

          <blockquote className="mt-8 rounded-3xl border border-white/10 bg-ink-800/60 p-7">
            <p className="text-balance font-display text-xl leading-snug text-white">
              „Sichtbarkeit ist kein Zufall. Sie ist das Ergebnis von klarer
              Strategie, ehrlicher Kommunikation und konsequenter Umsetzung.“
            </p>
            <footer className="mt-4 text-sm text-mist-100/75">
              Enrico Gross, Inhaber von Klickfunden
            </footer>
          </blockquote>

          <p className="mt-6 flex items-start gap-2 text-sm leading-relaxed text-mist-100/75">
            Klickfunden arbeitet digital und datenorientiert mit Unternehmen in
            ganz Deutschland. Der Sitz ist in Castrop-Rauxel im Ruhrgebiet, NRW.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { value: "1:1", label: "Persönliche Betreuung" },
              { value: "100%", label: "Individuelle Strategie" },
              { value: "0€", label: "Erstgespräch" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-ink-800/40 p-4 text-center"
              >
                <p className="font-display text-2xl font-bold text-marsgreen">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-tight text-mist-100/75">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
