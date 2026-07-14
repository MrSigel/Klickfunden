import { Reveal } from "./Reveal";
import { WhatsAppCta } from "./WhatsAppCta";

export function Cta() {
  return (
    <section id="kontakt" className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] py-[clamp(60px,9vw,130px)]">
      <Reveal className="relative overflow-hidden rounded-[38px] border border-line bg-[radial-gradient(120%_140%_at_100%_0%,rgba(77,240,138,0.14),transparent_55%),linear-gradient(160deg,var(--color-surface)_0%,var(--color-ink-2)_100%)] px-[clamp(40px,6vw,80px)] py-[clamp(48px,7vw,88px)] text-center">
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[38px] border border-signal/15" />

        <p className="eyebrow mb-[22px]">Direkter Draht</p>
        <h2 className="mb-[22px] font-display text-[clamp(32px,5vw,62px)] font-light leading-[1.04] tracking-[-0.01em]">
          Bereit, dein Online-Bild
          <br />
          ins Plus zu drehen?
        </h2>
        <p className="mx-auto mb-9 max-w-[46ch] text-[clamp(16px,1.6vw,19px)] text-fog">
          Eine kurze Nachricht genügt: Wir schätzen dein Potenzial ein und sagen dir klar,
          welcher Schritt sich zuerst lohnt.
        </p>

        <div className="flex flex-col items-center gap-4">
          <WhatsAppCta label="Per WhatsApp schreiben" />
          <span className="font-mono text-[12px]  tracking-[0.02em] text-fog-dim">
            Antwort meist innerhalb weniger Stunden
          </span>
        </div>
      </Reveal>
    </section>
  );
}
