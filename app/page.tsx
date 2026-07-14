import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Metrics } from "@/components/Metrics";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Mission } from "@/components/Mission";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Reveal } from "@/components/Reveal";
import { PageGrid } from "@/components/PageGrid";
import { JsonLd } from "@/components/JsonLd";
import { SERVICES, INDUSTRIES } from "@/lib/pages";
import { faqLd } from "@/lib/jsonld";
import { HOME_FAQ } from "@/lib/homeFaq";

export default function Home() {
  return (
    <>
      <JsonLd data={faqLd(HOME_FAQ)} />
      <Hero />
      <Partners />
      <Metrics />
      <Process />
      <Services />

      {/* All service pages — internal linking + keyword coverage */}
      <section id="leistungen" className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] py-[clamp(70px,10vw,130px)]">
        <Reveal className="mb-[clamp(40px,5vw,72px)] flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[620px]">
            <p className="eyebrow mb-5">Leistungen im Detail</p>
            <h2 className="section-title">Wähle deinen Hebel.</h2>
          </div>
          <Link href="/leistungen" className="btn btn-ghost">
            Alle Leistungen
          </Link>
        </Reveal>
        <PageGrid pages={SERVICES} />
      </section>

      {/* Industry pages */}
      <section id="branchen" className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] pb-[clamp(70px,10vw,130px)]">
        <Reveal className="mb-[clamp(40px,5vw,72px)] flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[620px]">
            <p className="eyebrow mb-5">Für deine Branche</p>
            <h2 className="section-title">Marketing, das deine Branche versteht.</h2>
          </div>
          <Link href="/branchen" className="btn btn-ghost">
            Alle Branchen
          </Link>
        </Reveal>
        <PageGrid pages={INDUSTRIES} />
      </section>

      <Testimonials />
      <Mission />
      <Faq />
      <Cta />
    </>
  );
}
