import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/pages";
import { site } from "@/lib/site";
import { breadcrumbLd } from "@/lib/jsonld";
import { Reveal } from "@/components/Reveal";
import { PageGrid } from "@/components/PageGrid";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Leistungen: SEO, GEO, Reputation & Ads | Klickfunden",
  description:
    "Alle Leistungen von Klickfunden im Überblick: Reputationsmanagement, Google Bewertungen, SEO, GEO, AEO, CRO, Google-, Meta- und TikTok-Ads sowie Webdesign.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenIndex() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Start", url: site.domain },
          { name: "Leistungen", url: `${site.domain}/leistungen` },
        ])}
      />
      <section className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] pb-[clamp(50px,7vw,90px)] pt-[clamp(120px,15vw,180px)]">
        <Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Leistungen", href: "/leistungen" }]} />
        <Reveal>
          <p className="eyebrow mb-6">Leistungen</p>
          <h1 className="max-w-[18ch] font-display text-[clamp(36px,6vw,72px)] font-light leading-[1.04] tracking-[-0.01em]">
            Alles für ein Markenbild, das verkauft.
          </h1>
          <p className="mt-7 max-w-[54ch] text-[clamp(17px,1.6vw,20px)] text-fog">
            Von Reputation über Sichtbarkeit bis Performance-Ads — jede Leistung greift in die nächste. Wähle einen Bereich oder schreib uns direkt.
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
        <PageGrid pages={SERVICES} />
      </section>
    </>
  );
}
