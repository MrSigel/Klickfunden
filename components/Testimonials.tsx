import { TESTIMONIALS, RATING } from "@/lib/testimonials";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] py-[clamp(70px,10vw,130px)]">
      <Reveal className="mb-[clamp(40px,5vw,72px)] flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[620px]">
          <p className="eyebrow mb-5">Bewertungen</p>
          <h2 className="section-title">Was unsere Kunden sagen.</h2>
        </div>
        <div className="flex items-center gap-3 rounded-full border border-line bg-surface px-5 py-3">
          <span className="text-signal">★★★★★</span>
          <span className="font-display text-[22px] font-semibold tabular-nums">{RATING.value}</span>
          <span className="text-[14px] text-fog">/ {RATING.count}+ Bewertungen</span>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={i} delay={Math.min(i, 6) * 0.04} className="card flex h-full flex-col">
            <span className="text-signal" aria-hidden>★★★★★</span>
            <p className="mt-4 flex-1 text-[15px] leading-relaxed text-paper/90">
              „{t.quote}“
            </p>
            <p className="mt-6 text-[14px] text-fog">— {t.author}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
