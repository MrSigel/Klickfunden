import { Reveal } from "./Reveal";

export function Mission() {
  return (
    <section
      id="ergebnisse"
      className="mx-auto max-w-[var(--maxw)] border-y border-line px-[var(--gutter)] py-[clamp(60px,9vw,120px)] text-center"
    >
      <Reveal>
        <p className="mb-7 font-display text-[clamp(32px,6vw,78px)] font-light leading-[1.02] tracking-[-0.01em]">
          Sichtbarkeit ist kein Zufall.
          <br />
          <span className="text-signal">Sie ist ein System.</span>
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mx-auto max-w-[46ch] text-[clamp(16px,1.6vw,19px)] text-fog">
          Wir bauen es einmal richtig auf — und dann wächst dein Ruf, deine
          Reichweite und dein Umsatz auf demselben Fundament weiter.
        </p>
      </Reveal>
    </section>
  );
}
