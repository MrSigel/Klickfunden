"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { HOME_FAQ } from "@/lib/homeFaq";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] py-[clamp(70px,12vw,150px)]"
    >
      <Reveal className="mb-[clamp(40px,6vw,72px)] max-w-[720px]">
        <p className="eyebrow mb-5">Klar gefragt, klar geantwortet</p>
        <h2 className="section-title">Häufige Fragen.</h2>
      </Reveal>

      <div className="border-t border-line">
        {HOME_FAQ.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="border-b border-line">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={`flex w-full items-center justify-between gap-6 py-[26px] text-left font-display text-[clamp(17px,2.1vw,24px)] font-medium tracking-[-0.005em] transition-colors ${
                  isOpen ? "text-signal" : "hover:text-signal"
                }`}
              >
                <span>{item.q}</span>
                <span
                  aria-hidden
                  className={`relative h-4 w-4 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <span className={`absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 ${isOpen ? "bg-signal" : "bg-fog"}`} />
                  <span className={`absolute left-1/2 top-0 h-4 w-0.5 -translate-x-1/2 ${isOpen ? "bg-signal" : "bg-fog"}`} />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-[68ch] pb-[26px] text-fog">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
