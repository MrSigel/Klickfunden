import Link from "next/link";
import type { LandingPage } from "@/lib/content-types";
import { getPage, pathFor } from "@/lib/pages";
import { site } from "@/lib/site";
import { serviceLd, faqLd, breadcrumbLd } from "@/lib/jsonld";
import { Reveal } from "./Reveal";
import { WhatsAppCta } from "./WhatsAppCta";
import { Breadcrumbs } from "./Breadcrumbs";
import { JsonLd } from "./JsonLd";

export function LandingPageView({ page }: { page: LandingPage }) {
  const url = `${site.domain}${pathFor(page)}`;
  const parent =
    page.category === "leistung"
      ? { name: "Leistungen", href: "/leistungen" }
      : { name: "Branchen", href: "/branchen" };

  const related = page.related
    .map((slug) => getPage(slug))
    .filter((p): p is LandingPage => Boolean(p));

  return (
    <>
      <JsonLd
        data={[
          serviceLd({
            name: page.name,
            serviceType: page.serviceType,
            description: page.metaDescription,
            url,
          }),
          faqLd(page.faq),
          breadcrumbLd([
            { name: "Start", url: site.domain },
            { name: parent.name, url: `${site.domain}${parent.href}` },
            { name: page.name, url },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] pb-[clamp(40px,6vw,72px)] pt-[clamp(120px,15vw,180px)]">
        <Breadcrumbs
          items={[
            { name: "Start", href: "/" },
            { name: parent.name, href: parent.href },
            { name: page.name, href: pathFor(page) },
          ]}
        />
        <Reveal>
          <p className="eyebrow mb-6">{page.eyebrow}</p>
          <h1 className="max-w-[16ch] font-display text-[clamp(36px,6vw,72px)] font-light leading-[1.04] tracking-[-0.01em]">
            {page.h1}
          </h1>
          <p className="mt-7 max-w-[52ch] text-[clamp(17px,1.6vw,20px)] text-fog">
            {page.lead}
          </p>
          <div className="mt-9 flex flex-wrap gap-[14px]">
            <WhatsAppCta label="Per WhatsApp schreiben" message={`Hallo Klickfunden, ich interessiere mich für ${page.name}.`} />
            <Link href="/preise" className="btn btn-ghost">
              Pakete &amp; Preise
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Benefits strip */}
      <section className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)]">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line-soft md:grid-cols-4">
          {page.benefits.map((b) => (
            <div key={b} className="bg-ink p-6">
              <span aria-hidden className="mb-3 block h-2 w-2 rounded-[2px] bg-signal shadow-[0_0_10px_rgba(77,240,138,0.7)]" />
              <p className="text-[15px] leading-snug text-paper">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content sections */}
      <section className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] py-[clamp(70px,10vw,120px)]">
        <div className="flex flex-col gap-[clamp(48px,7vw,90px)]">
          {page.sections.map((s, i) => (
            <Reveal
              key={s.h2}
              delay={i * 0.04}
              className="grid gap-[clamp(16px,4vw,56px)] md:grid-cols-[0.8fr_1.2fr]"
            >
              <h2 className="font-display text-[clamp(24px,3.2vw,38px)] font-medium leading-[1.05] tracking-[-0.008em]">
                {s.h2}
              </h2>
              <div>
                <p className="text-[clamp(16px,1.5vw,18px)] text-fog">{s.body}</p>
                {s.bullets && (
                  <ul className="dot-list">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ (native, no JS — good for SEO) */}
      <section className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] pb-[clamp(70px,10vw,120px)]">
        <Reveal className="mb-10 max-w-[720px]">
          <p className="eyebrow mb-5">Häufige Fragen</p>
          <h2 className="section-title">{page.name} — kurz erklärt.</h2>
        </Reveal>
        <div className="border-t border-line">
          {page.faq.map((f) => (
            <details key={f.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-[26px] font-display text-[clamp(17px,2vw,22px)] font-medium tracking-[-0.005em] transition-colors group-open:text-signal hover:text-signal [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden
                  className="relative h-4 w-4 shrink-0 transition-transform duration-300 group-open:rotate-45"
                >
                  <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 bg-fog group-open:bg-signal" />
                  <span className="absolute left-1/2 top-0 h-4 w-0.5 -translate-x-1/2 bg-fog group-open:bg-signal" />
                </span>
              </summary>
              <div className="max-w-[68ch] pb-[26px] text-fog">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Related internal links */}
      {related.length > 0 && (
        <section className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] pb-[clamp(70px,10vw,120px)]">
          <p className="eyebrow mb-8">Passt dazu</p>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={pathFor(r)}
                className="card group flex items-center justify-between gap-4"
              >
                <span className="font-display text-lg font-medium tracking-[-0.01em]">
                  {r.name}
                </span>
                <span
                  aria-hidden
                  className="text-signal transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] pb-[clamp(70px,10vw,130px)]">
        <div className="relative overflow-hidden rounded-[38px] border border-line bg-[radial-gradient(120%_140%_at_100%_0%,rgba(77,240,138,0.14),transparent_55%),linear-gradient(160deg,var(--color-surface)_0%,var(--color-ink-2)_100%)] px-[clamp(32px,6vw,72px)] py-[clamp(40px,6vw,72px)] text-center">
          <h2 className="mx-auto max-w-[18ch] font-display text-[clamp(28px,4.4vw,52px)] font-light leading-[1.05] tracking-[-0.01em]">
            {page.name} für deinen Betrieb — sprich mit uns.
          </h2>
          <p className="mx-auto mt-5 max-w-[42ch] text-fog">
            Eine kurze Nachricht genügt. Wir schätzen dein Potenzial ein und sagen dir klar, was sich lohnt.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppCta label="Per WhatsApp schreiben" message={`Hallo Klickfunden, ich interessiere mich für ${page.name}.`} />
          </div>
        </div>
      </section>
    </>
  );
}
