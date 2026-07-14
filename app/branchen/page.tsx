import type { Metadata } from "next";
import Link from "next/link";
import { INDUSTRIES } from "@/lib/pages";
import { site } from "@/lib/site";
import { breadcrumbLd } from "@/lib/jsonld";
import { Reveal } from "@/components/Reveal";
import { PageGrid } from "@/components/PageGrid";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Branchen: Marketing für deinen Betrieb | Klickfunden",
  description:
    "Branchen-Marketing von Klickfunden: für Gastronomie, Zahnärzte, Handwerk, Beauty, Fitness, Immobilien, Kanzleien, Autohäuser und Einzelhandel. Jetzt schreiben.",
  alternates: { canonical: "/branchen" },
};

export default function BranchenIndex() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Start", url: site.domain },
          { name: "Branchen", url: `${site.domain}/branchen` },
        ])}
      />
      <section className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] pb-[clamp(50px,7vw,90px)] pt-[clamp(120px,15vw,180px)]">
        <Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Branchen", href: "/branchen" }]} />
        <Reveal>
          <p className="eyebrow mb-6">Branchen</p>
          <h1 className="max-w-[18ch] font-display text-[clamp(36px,6vw,72px)] font-light leading-[1.04] tracking-[-0.01em]">
            Marketing, das deine Branche versteht.
          </h1>
          <p className="mt-7 max-w-[54ch] text-[clamp(17px,1.6vw,20px)] text-fog">
            Jede Branche tickt anders — beim Suchverhalten, beim Vertrauen, beim Kaufweg. Finde deinen Bereich oder schreib uns direkt.
          </p>
          <div className="mt-9 flex flex-wrap gap-[14px]">
            <WhatsAppCta label="Per WhatsApp schreiben" />
            <Link href="/preise" className="btn btn-ghost">
              Pakete &amp; Preise
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] pb-[clamp(80px,11vw,140px)]">
        <PageGrid pages={INDUSTRIES} />
      </section>
    </>
  );
}
