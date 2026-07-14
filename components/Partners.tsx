import { Reveal } from "./Reveal";
import { BrandLogos } from "./BrandLogos";

export function Partners() {
  return (
    <section className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] py-[clamp(48px,6vw,80px)]">
      <Reveal className="text-center">
        <p className="mx-auto mb-10 max-w-[52ch] text-[15px] text-fog">
          Wir arbeiten mit den führenden Plattformen im digitalen Marketing — für Lösungen,
          die nicht nur gut aussehen, sondern messbar performen.
        </p>
        <BrandLogos />
      </Reveal>
    </section>
  );
}
