"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SignatureRating } from "./SignatureRating";
import { WhatsAppCta } from "./WhatsAppCta";
import { CountUp } from "./CountUp";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const TRUST = [
  { value: 5.0, decimals: 1, suffix: "★", small: "Google-Bewertung" },
  { value: 140, decimals: 0, suffix: "+", small: "Betriebe betreut" },
  { value: 1.6, decimals: 1, prefix: "Ø +", suffix: "★", small: "in 90 Tagen" },
  { value: 3.4, decimals: 1, suffix: "×", small: "mehr Anfragen" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-[clamp(48px,7vw,90px)] pt-[clamp(120px,15vw,170px)]"
    >
      {/* layered background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[70vw] w-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(77,240,138,0.14),transparent_70%)]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[50vw] w-[50vw] rounded-full bg-[radial-gradient(closest-side,rgba(77,240,138,0.08),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000,transparent_75%)] bg-[radial-gradient(circle,rgba(230,255,240,0.05)_1px,transparent_1px)] bg-[length:24px_24px]" />
      </div>

      <div className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)]">
        <div className="grid items-center gap-[clamp(36px,5vw,72px)] lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div
              variants={item}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-2 pl-3 pr-4 text-[13px] text-fog backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              Marketingagentur · Antwort meist in unter 2&nbsp;Stunden
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-[clamp(40px,6.6vw,82px)] font-light leading-[1.02] tracking-[-0.01em]"
            >
              Dein Ruf entscheidet,
              <br />
              <span className="font-medium text-signal">bevor du verkaufst.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-[34em] text-[clamp(16px,1.6vw,19px)] leading-relaxed text-fog"
            >
              Klickfunden verwandelt schwache Bewertungen, unsichtbare Rankings und
              verpuffte Werbebudgets in ein Markenbild, das verkauft — mit
              Reputationsmanagement, SEO, GEO&nbsp;/&nbsp;AEO und Performance-Ads.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-[14px]">
              <WhatsAppCta label="Per WhatsApp schreiben" />
              <Link href="/preise" className="btn btn-ghost">
                Pakete &amp; Preise ansehen
              </Link>
            </motion.div>

            {/* trust bar */}
            <motion.div
              variants={item}
              className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-7 sm:grid-cols-4"
            >
              {TRUST.map((t) => (
                <div key={t.small}>
                  <CountUp
                    value={t.value}
                    decimals={t.decimals}
                    prefix={t.prefix}
                    suffix={t.suffix}
                    className="block font-display text-[22px] font-semibold leading-none tracking-[-0.01em] text-paper tabular-nums"
                  />
                  <div className="mt-1.5 text-[12.5px] text-fog">{t.small}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — rating card + floating chips */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.35 }}
            className="relative mx-auto w-full max-w-[460px]"
          >
            <SignatureRating />

            <div className="chip-float-a pointer-events-none absolute -left-16 top-6 hidden rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.85)] backdrop-blur lg:block">
              <CountUp
                value={38}
                prefix="−"
                suffix=" %"
                className="font-display text-[20px] font-semibold text-signal tabular-nums"
              />
              <div className="text-[12px] text-fog">Cost-per-Lead</div>
            </div>

            <div className="chip-float-b pointer-events-none absolute -right-4 bottom-10 hidden rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.85)] backdrop-blur lg:block">
              <div className="flex items-center gap-2">
                <span className="text-signal">★</span>
                <CountUp value={280} prefix="+" className="font-display text-[20px] font-semibold text-paper tabular-nums" />
              </div>
              <div className="text-[12px] text-fog">neue Bewertungen</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
