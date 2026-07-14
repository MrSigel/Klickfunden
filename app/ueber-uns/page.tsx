import type { Metadata } from "next";
import { site } from "@/lib/site";
import { breadcrumbLd } from "@/lib/jsonld";
import { Reveal } from "@/components/Reveal";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Über Klickfunden — die Wachstumsagentur | Klickfunden",
  description:
    "Klickfunden ist die Agentur für Reputation, Sichtbarkeit und Wachstum. Wir machen lokale Betriebe online vertrauenswürdig, auffindbar und wachstumsstark.",
  alternates: { canonical: "/ueber-uns" },
};

const PRINCIPLES = [
  {
    title: "Ergebnis vor Aktivität",
    text: "Wir messen uns an Anrufen und Umsatz, nicht an Likes und Klicks. Jede Maßnahme muss sich rechnen — sonst lassen wir sie.",
  },
  {
    title: "Ehrlich statt laut",
    text: "Wir versprechen keine Wunder-Löschungen und keine garantierten Platz-eins-Rankings. Wir sagen dir, was wirklich geht.",
  },
  {
    title: "Ein System, kein Strohfeuer",
    text: "Reputation, Sichtbarkeit und Ads greifen ineinander. Wir bauen ein Fundament, das weiter wächst — statt kurzer Kampagnen-Spitzen.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Start", url: site.domain },
          { name: "Über uns", url: `${site.domain}/ueber-uns` },
        ])}
      />
      <section className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] pb-[clamp(50px,7vw,90px)] pt-[clamp(120px,15vw,180px)]">
        <Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Über uns", href: "/ueber-uns" }]} />
        <Reveal>
          <p className="eyebrow mb-6">Über {site.brand}</p>
          <h1 className="max-w-[20ch] font-display text-[clamp(36px,6vw,72px)] font-light leading-[1.04] tracking-[-0.01em]">
            Wir machen lokale Betriebe online unübersehbar.
          </h1>
          <p className="mt-7 max-w-[58ch] text-[clamp(17px,1.6vw,20px)] text-fog">
            {site.brand} wurde gegründet, weil zu viele gute Betriebe online unter Wert
            verkaufen: schwache Bewertungen, unsichtbare Rankings, verpuffte Werbebudgets.
            Wir drehen genau das um — mit einem System aus Reputation, Sichtbarkeit und
            Performance, das messbar Anfragen bringt.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] pb-[clamp(70px,10vw,120px)]">
        <div className="grid gap-4 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05} className="card">
              <h2 className="font-display text-[22px] font-medium tracking-[-0.005em]">{p.title}</h2>
              <p className="mt-3 text-fog">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] pb-[clamp(70px,10vw,130px)]">
        <div className="relative overflow-hidden rounded-[38px] border border-line bg-[radial-gradient(120%_140%_at_100%_0%,rgba(77,240,138,0.14),transparent_55%),linear-gradient(160deg,var(--color-surface)_0%,var(--color-ink-2)_100%)] px-[clamp(32px,6vw,72px)] py-[clamp(40px,6vw,72px)] text-center">
          <h2 className="mx-auto max-w-[18ch] font-display text-[clamp(28px,4.4vw,52px)] font-light leading-[1.05] tracking-[-0.01em]">
            Lern uns in einer kurzen Nachricht kennen.
          </h2>
          <p className="mx-auto mt-5 max-w-[42ch] text-fog">
            Kein Verkaufsgespräch mit Anzug — ein ehrlicher Austausch über dein Potenzial.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppCta label="Per WhatsApp schreiben" />
          </div>
        </div>
      </section>
    </>
  );
}
