import { Reveal } from "./Reveal";

const PARTNERS = ["Google", "Google Ads", "Meta", "Instagram", "TikTok", "Trustpilot"];

export function Partners() {
  return (
    <section className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] py-[clamp(48px,6vw,80px)]">
      <Reveal className="text-center">
        <p className="mx-auto mb-9 max-w-[52ch] text-[15px] text-fog">
          Wir arbeiten mit den führenden Plattformen im digitalen Marketing — für Lösungen,
          die nicht nur gut aussehen, sondern messbar performen.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-[clamp(24px,5vw,56px)] gap-y-5">
          {PARTNERS.map((p) => (
            <span
              key={p}
              className="font-display text-[clamp(18px,2.2vw,26px)] font-semibold text-fog-dim transition-colors hover:text-paper"
            >
              {p}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
