import type { Metadata } from "next";
import { site, whatsappLink } from "@/lib/site";
import { breadcrumbLd } from "@/lib/jsonld";
import { Reveal } from "@/components/Reveal";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Kontakt — schreib uns per WhatsApp | Klickfunden",
  description:
    "Schreib uns direkt per WhatsApp: In einer kurzen Nachricht schätzen wir dein Potenzial ein und sagen dir klar, was sich lohnt.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Start", url: site.domain },
          { name: "Kontakt", url: `${site.domain}/kontakt` },
        ])}
      />
      <section className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] pb-[clamp(70px,10vw,130px)] pt-[clamp(120px,15vw,180px)]">
        <Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Kontakt", href: "/kontakt" }]} />

        <div className="grid gap-[clamp(32px,5vw,72px)] md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <Reveal>
            <p className="eyebrow mb-6">Kontakt</p>
            <h1 className="font-display text-[clamp(36px,6vw,72px)] font-light leading-[1.04] tracking-[-0.01em]">
              Eine Nachricht genügt — schreib uns direkt.
            </h1>
            <p className="mt-7 max-w-[48ch] text-[clamp(17px,1.6vw,20px)] text-fog">
              Erzähl uns kurz von deinem Betrieb. Wir antworten meist innerhalb weniger
              Stunden, schätzen dein größtes Potenzial ein und sagen dir, welcher Schritt
              sich zuerst lohnt — ohne Umwege.
            </p>
            <div className="mt-9 flex flex-wrap gap-[14px]">
              <WhatsAppCta label="Per WhatsApp schreiben" message="Hallo Klickfunden, ich interessiere mich für eine Zusammenarbeit." />
              <a href={`mailto:${site.email}`} className="btn btn-ghost">
                E-Mail schreiben
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[30px] border border-line bg-[linear-gradient(160deg,var(--color-surface)_0%,var(--color-ink-2)_100%)] p-8">
              <p className="font-mono text-[11px]  tracking-[0.02em] text-fog">
                Direkt schreiben
              </p>
              <a
                href={whatsappLink("Hallo Klickfunden, ich interessiere mich für eine Zusammenarbeit.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block font-display text-[clamp(26px,3.6vw,36px)] font-semibold tracking-[-0.008em] text-signal"
              >
                WhatsApp öffnen →
              </a>

              <dl className="mt-8 grid gap-5 text-[15px]">
                <div>
                  <dt className="font-mono text-[11px]  tracking-[0.02em] text-fog-dim">E-Mail</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${site.email}`} className="text-paper hover:text-signal">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px]  tracking-[0.02em] text-fog-dim">Adresse</dt>
                  <dd className="mt-1 text-fog">
                    {site.address.street}
                    <br />
                    {site.address.postalCode} {site.address.city}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px]  tracking-[0.02em] text-fog-dim">Erreichbarkeit</dt>
                  <dd className="mt-1 text-fog">Mo–Fr, 9–18 Uhr</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[760px] px-[var(--gutter)] pb-[clamp(70px,10vw,130px)]">
        <Reveal className="rounded-3xl border border-line bg-surface/50 p-[clamp(24px,4vw,44px)]">
          <p className="eyebrow mb-4">Lieber schreiben?</p>
          <h2 className="mb-2 font-display text-[clamp(24px,3vw,34px)] font-light tracking-[-0.01em]">
            Sende uns deine Anfrage.
          </h2>
          <p className="mb-7 text-fog">
            Wir melden uns innerhalb eines Werktags. Für eine sofortige Antwort nutz einfach WhatsApp.
          </p>
          <LeadForm />
        </Reveal>
      </section>
    </>
  );
}
