import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum | Klickhafen",
  description:
    "Impressum von Klickhafen für Klickfunden.de mit Anbieterkennzeichnung, Kontaktangaben, Umsatzsteuer-Identifikationsnummer und Angaben zur Streitbeilegung.",
  alternates: {
    canonical: "/impressum",
  },
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="rounded-3xl border border-white/10 bg-ink-800/60 p-6 shadow-card">
    <h2 className="font-display text-2xl font-semibold text-white">{title}</h2>
    <div className="mt-4 space-y-3 text-sm leading-relaxed text-mist-100/75">
      {children}
    </div>
  </section>
);

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="bg-ink pt-32">
        <section className="container-page py-20 sm:py-24">
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-marsgreen-300">
              <span className="h-px w-8 bg-marsgreen" />
              Rechtliches
            </p>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Impressum
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-mist-100/75">
              Anbieterkennzeichnung nach § 5 Digitale-Dienste-Gesetz
              (DDG, vormals § 5 TMG) und Informationen nach § 18
              Medienstaatsvertrag (MStV).
            </p>
          </div>

          <div className="mt-12 grid gap-6">
            <Section title="Angaben zum Diensteanbieter">
              <p>
                <strong className="text-white">Enrico Gross</strong>
                <br />
                handelnd unter Klickhafen
                <br />
                Gerther Straße 76
                <br />
                44577 Castrop-Rauxel
                <br />
                Deutschland
              </p>
              <p>Klickfunden.de ist das Website- und Produktangebot von Klickhafen.</p>
            </Section>

            <Section title="Kontakt">
              <p>
                Telefon:{" "}
                <a
                  className="text-marsgreen hover:underline"
                  href="tel:+4915563535989"
                >
                  +49 155 63535989
                </a>
                <br />
                E-Mail:{" "}
                <a
                  className="text-marsgreen hover:underline"
                  href="mailto:kontakt@klickfunden.de"
                >
                  kontakt@klickfunden.de
                </a>
              </p>
            </Section>

            <Section title="Umsatzsteuer">
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a
                Umsatzsteuergesetz:
                <br />
                <strong className="text-white">DE278597389</strong>
              </p>
            </Section>

            <Section title="Verantwortlich für den Inhalt">
              <p>
                Verantwortlich für journalistisch-redaktionelle Inhalte nach
                § 18 Abs. 2 MStV:
                <br />
                Klickhafen, Inhaber: Enrico Gross, Gerther Straße 76, 44577
                Castrop-Rauxel, Deutschland.
              </p>
            </Section>

            <Section title="EU-Streitbeilegung und Verbraucherstreitbeilegung">
              <p>
                Die Europäische Kommission hat die Plattform zur
                Online-Streitbeilegung (OS-Plattform) zum 20. Juli 2025
                eingestellt. Ein Link auf eine aktive OS-Plattform wird daher
                nicht mehr bereitgestellt.
              </p>
              <p>
                Wir sind weder verpflichtet noch bereit, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </Section>

            <Section title="Haftung für Inhalte">
              <p>
                Als Diensteanbieter sind wir für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Eine
                Verpflichtung zur Überwachung übermittelter oder gespeicherter
                fremder Informationen besteht jedoch nur nach Maßgabe der
                gesetzlichen Vorschriften. Verpflichtungen zur Entfernung oder
                Sperrung der Nutzung von Informationen nach den allgemeinen
                Gesetzen bleiben unberührt.
              </p>
            </Section>

            <Section title="Haftung für Links">
              <p>
                Diese Website kann Links zu externen Websites Dritter
                enthalten, auf deren Inhalte wir keinen Einfluss haben. Für
                diese fremden Inhalte übernehmen wir keine Gewähr. Für die
                Inhalte verlinkter Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Rechtswidrige Inhalte
                waren zum Zeitpunkt der Verlinkung nicht erkennbar. Bei
                Bekanntwerden entsprechender Rechtsverletzungen entfernen wir
                derartige Links umgehend.
              </p>
            </Section>

            <Section title="Urheberrecht">
              <p>
                Die auf dieser Website erstellten Inhalte, Texte, Bilder,
                Grafiken und sonstigen Werke unterliegen dem deutschen
                Urheberrecht. Jede Verwertung außerhalb der Grenzen des
                Urheberrechts bedarf der vorherigen schriftlichen Zustimmung
                des jeweiligen Rechteinhabers. Downloads und Kopien dieser
                Seite sind nur für den privaten, nicht kommerziellen Gebrauch
                gestattet, soweit keine abweichende Lizenz angegeben ist.
              </p>
            </Section>

            <Section title="Bildnachweise">
              <p>
                Bildnachweise: Eigene Aufnahmen / Urheber: Enrico Gross. Alle
                Rechte vorbehalten.
              </p>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
