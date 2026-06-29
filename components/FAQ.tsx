"use client";

import { motion } from "framer-motion";
import { faqItems } from "@/lib/data";

function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-ink-800 py-24 sm:py-32">
      <FaqSchema />
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">Häufige Fragen</span>
          <h2 className="section-label mt-5 text-balance">
            SEO, GEO, AEO und Ads kurz beantwortet
          </h2>
          <p className="mt-5 text-balance text-lg leading-relaxed text-mist-100/75">
            Klare Antworten für Menschen, Suchmaschinen und KI-Antwortsysteme.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqItems.map((item, index) => (
            <motion.details
              key={item.question}
              open={index === 0}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-ink-700/50"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left">
                <span className="text-balance font-display text-base font-semibold text-white sm:text-lg">
                  {item.question}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-marsgreen/15 text-xl text-marsgreen transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="px-6 pb-6 text-sm leading-relaxed text-mist-100/75 [text-wrap:pretty] sm:text-base">
                {item.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
