import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Klickhafen",
  description:
    "Datenschutzerklärung von Klickhafen für Klickfunden.de nach DSGVO mit Informationen zu Verantwortlichem, Hosting, Vercel Web Analytics, Kontaktaufnahme und Betroffenenrechten.",
  alternates: {
    canonical: "/datenschutz",
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
    <div className="mt-4 space-y-4 text-sm leading-relaxed text-mist-100/75">
      {children}
    </div>
  </section>
);

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="bg-ink pt-32">
        <section className="container-page py-20 sm:py-24">
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-marsgreen-300">
              <span className="h-px w-8 bg-marsgreen" />
              Datenschutz
            </p>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Datenschutzerklärung
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-mist-100/75">
              Diese Datenschutzerklärung informiert darüber, welche
              personenbezogenen Daten beim Besuch von Klickfunden.de, einem
              Website- und Produktangebot von Klickhafen, und bei der
              Kontaktaufnahme verarbeitet werden, auf welchen Rechtsgrundlagen
              dies geschieht und welche Rechte betroffene Personen nach der
              Datenschutz-Grundverordnung (DSGVO) haben.
            </p>
            <p className="mt-3 text-sm text-mist-100/75">Stand: 26. Juni 2026</p>
          </div>

          <div className="mt-12 grid gap-6">
            <Section title="1. Verantwortlicher">
              <p>
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung
                (DSGVO) ist:
              </p>
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

            <Section title="2. Allgemeine Hinweise zur Datenverarbeitung">
              <p>
                Wir verarbeiten personenbezogene Daten nur, soweit dies zur
                Bereitstellung dieser Website, zur Bearbeitung von Anfragen,
                zur Durchführung vorvertraglicher oder vertraglicher Maßnahmen,
                zur Erfüllung rechtlicher Pflichten oder zur Wahrung
                berechtigter Interessen erforderlich ist. Personenbezogene
                Daten sind alle Informationen, die sich auf eine identifizierte
                oder identifizierbare natürliche Person beziehen.
              </p>
              <p>
                Die maßgeblichen Rechtsgrundlagen sind insbesondere Art. 6
                Abs. 1 lit. a DSGVO bei Einwilligung, Art. 6 Abs. 1 lit. b
                DSGVO bei vorvertraglichen oder vertraglichen Maßnahmen, Art.
                6 Abs. 1 lit. c DSGVO bei gesetzlichen Pflichten und Art. 6
                Abs. 1 lit. f DSGVO bei berechtigten Interessen.
              </p>
            </Section>

            <Section title="3. Zugriffsdaten und Server-Logfiles">
              <p>
                Beim Aufruf dieser Website werden aus technischen Gründen
                Daten verarbeitet, die dein Browser an den Server übermittelt.
                Dazu können insbesondere IP-Adresse, Datum und Uhrzeit des
                Zugriffs, aufgerufene URL, Referrer-URL, Browsertyp,
                Betriebssystem, übertragene Datenmenge und Statuscodes
                gehören.
              </p>
              <p>
                Die Verarbeitung erfolgt, um die Website sicher,
                funktionsfähig und stabil bereitzustellen, Angriffe zu
                erkennen und technische Fehler zu analysieren. Rechtsgrundlage
                ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse
                liegt in der sicheren und zuverlässigen Bereitstellung unseres
                Online-Angebots.
              </p>
            </Section>

            <Section title="4. Hosting über Vercel">
              <p>
                Diese Website wird über die Infrastruktur von Vercel gehostet.
                Anbieter ist Vercel Inc., USA. Beim Besuch der Website
                verarbeitet Vercel technische Zugriffsdaten, die für die
                Auslieferung der Website, die Absicherung der Infrastruktur,
                die Lastverteilung und die Fehleranalyse erforderlich sind.
              </p>
              <p>
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit.
                f DSGVO. Unser berechtigtes Interesse liegt in einer schnellen,
                sicheren und zuverlässigen Bereitstellung der Website. Soweit
                Vercel personenbezogene Daten in unserem Auftrag verarbeitet,
                erfolgt dies auf Grundlage eines Vertrags zur
                Auftragsverarbeitung nach Art. 28 DSGVO. Für Übermittlungen in
                Drittländer können insbesondere das EU-U.S. Data Privacy
                Framework sowie die Standardvertragsklauseln der Europäischen
                Kommission herangezogen werden.
              </p>
            </Section>

            <Section title="5. Kontaktaufnahme und Angebotsanfragen">
              <p>
                Wenn du uns per E-Mail, Telefon oder über das auf der Website
                bereitgestellte Anfrageformular kontaktierst, verarbeiten wir
                die von dir übermittelten Angaben. Dazu können Name,
                E-Mail-Adresse, Telefonnummer, Website-URL, Anfrageinhalt,
                Unternehmensangaben und weitere freiwillig mitgeteilte
                Informationen gehören.
              </p>
              <p>
                Die Verarbeitung erfolgt zur Bearbeitung der Anfrage, zur
                Vorbereitung eines Angebots und zur Kommunikation mit dir.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die
                Anfrage auf einen Vertragsschluss oder vorvertragliche
                Maßnahmen gerichtet ist. Im Übrigen erfolgt die Verarbeitung
                auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO; unser
                berechtigtes Interesse liegt in der sachgerechten Bearbeitung
                eingehender Anfragen.
              </p>
              <p>
                Die Daten werden gelöscht, sobald sie für den Zweck ihrer
                Erhebung nicht mehr erforderlich sind und keine gesetzlichen
                Aufbewahrungspflichten entgegenstehen.
              </p>
            </Section>

            <Section title="6. Speicherung von Anfragen bei Supabase">
              <p>
                Die Angaben aus dem Anfrageformular werden in einer von
                Supabase bereitgestellten Datenbank gespeichert. Anbieter ist
                Supabase, Inc., USA. Verarbeitet werden die im Formular
                angegebenen Kontakt- und Unternehmensdaten sowie das gewählte
                Marketingziel und der Zeitpunkt der Anfrage.
              </p>
              <p>
                Supabase verarbeitet diese Daten als Auftragsverarbeiter auf
                Grundlage eines Vertrags nach Art. 28 DSGVO. Soweit Daten in
                die USA oder andere Drittländer übermittelt werden, erfolgt
                die Absicherung insbesondere durch die
                Standardvertragsklauseln der Europäischen Kommission. Die
                Rechtsgrundlage für die Verarbeitung der Anfrage richtet sich
                nach Abschnitt 5 dieser Datenschutzerklärung.
              </p>
            </Section>

            <Section title="7. Vercel Web Analytics">
              <p>
                Wir nutzen Vercel Web Analytics, um zu verstehen, wie unsere
                Website grundsätzlich genutzt wird und welche Inhalte
                verbessert werden sollten. Vercel Web Analytics ist als
                datenschutzfreundliche Analyse-Lösung konzipiert. Nach Angaben
                von Vercel werden keine Third-Party-Cookies eingesetzt; die
                Auswertung erfolgt aggregiert und ohne dauerhaft gesetzte
                Drittanbieter-Cookies.
              </p>
              <p>
                Auf dieser Website wird Vercel Web Analytics erst genutzt,
                nachdem du im Cookie-Banner ausdrücklich zugestimmt hast. Vor
                deiner Einwilligung werden keine Analyse-Skripte durch unsere
                Consent-Logik aktiviert. Rechtsgrundlage ist Art. 6 Abs. 1
                lit. a DSGVO. Soweit ein Zugriff auf Informationen in deiner
                Endeinrichtung erforderlich wäre, erfolgt dieser nur nach
                Einwilligung gemäß § 25 Abs. 1 TDDDG.
              </p>
              <p>
                Du kannst eine erteilte Einwilligung jederzeit mit Wirkung für
                die Zukunft widerrufen, indem du die gespeicherte
                die Cookie-Einstellungen im Footer erneut öffnest und deine
                Auswahl änderst oder uns unter
                kontakt@klickfunden.de kontaktierst. Die Rechtmäßigkeit der
                bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.
              </p>
            </Section>

            <Section title="8. Cookies und lokale Speicherung">
              <p>
                Diese Website speichert deine Datenschutz-Auswahl im Browser
                mittels LocalStorage. Dies dient ausschließlich dazu, deine
                Entscheidung zu speichern, damit der Banner nicht bei jedem
                Seitenaufruf erneut erscheint. Diese Speicherung ist für die
                Verwaltung deiner Datenschutzpräferenzen erforderlich.
              </p>
              <p>
                Es werden keine Marketing-Cookies gesetzt und keine
                Tracking-Technologien für Werbung oder Profilbildung aktiviert.
                Nicht erforderliche Analysefunktionen werden nur nach
                ausdrücklicher Einwilligung genutzt.
              </p>
            </Section>

            <Section title="9. Empfänger personenbezogener Daten">
              <p>
                Eine Weitergabe personenbezogener Daten erfolgt nur, wenn dies
                zur Bereitstellung der Website, zur Bearbeitung deiner Anfrage,
                zur Erfüllung gesetzlicher Pflichten oder zur Wahrung
                berechtigter Interessen erforderlich ist. Empfänger können
                insbesondere technische Dienstleister wie Vercel und Supabase
                sein. Eine darüber hinausgehende Weitergabe an Dritte erfolgt
                nicht ohne Rechtsgrundlage oder Einwilligung.
              </p>
            </Section>

            <Section title="10. Speicherdauer">
              <p>
                Personenbezogene Daten werden nur so lange gespeichert, wie es
                für die jeweiligen Verarbeitungszwecke erforderlich ist.
                Danach werden die Daten gelöscht, sofern keine gesetzlichen
                Aufbewahrungsfristen, Nachweispflichten oder berechtigten
                Interessen an einer weiteren Speicherung bestehen.
              </p>
            </Section>

            <Section title="11. Deine Rechte nach der DSGVO">
              <p>
                Du hast nach Maßgabe der gesetzlichen Voraussetzungen
                insbesondere folgende Rechte:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Recht auf Auskunft über die verarbeiteten personenbezogenen
                  Daten nach Art. 15 DSGVO,
                </li>
                <li>
                  Recht auf Berichtigung unrichtiger oder unvollständiger
                  Daten nach Art. 16 DSGVO,
                </li>
                <li>
                  Recht auf Löschung personenbezogener Daten nach Art. 17
                  DSGVO,
                </li>
                <li>
                  Recht auf Einschränkung der Verarbeitung nach Art. 18 DSGVO,
                </li>
                <li>
                  Recht auf Datenübertragbarkeit nach Art. 20 DSGVO,
                </li>
                <li>
                  Recht auf Widerspruch gegen Verarbeitungen auf Grundlage von
                  Art. 6 Abs. 1 lit. e oder lit. f DSGVO nach Art. 21 DSGVO,
                </li>
                <li>
                  Recht auf Widerruf einer erteilten Einwilligung nach Art. 7
                  Abs. 3 DSGVO mit Wirkung für die Zukunft.
                </li>
              </ul>
              <p>
                Zur Ausübung deiner Rechte genügt eine Nachricht an
                kontakt@klickfunden.de.
              </p>
            </Section>

            <Section title="12. Beschwerderecht bei einer Aufsichtsbehörde">
              <p>
                Wenn du der Ansicht bist, dass die Verarbeitung deiner
                personenbezogenen Daten gegen Datenschutzrecht verstößt, hast
                du das Recht, dich bei einer Datenschutzaufsichtsbehörde zu
                beschweren. Zuständig kann insbesondere die Aufsichtsbehörde
                deines gewöhnlichen Aufenthaltsortes, deines Arbeitsplatzes
                oder des Orts des mutmaßlichen Verstoßes sein.
              </p>
            </Section>

            <Section title="13. Sicherheit der Verarbeitung">
              <p>
                Wir treffen technische und organisatorische Maßnahmen, um
                personenbezogene Daten gegen Verlust, Missbrauch,
                unberechtigten Zugriff, Veränderung und Offenlegung zu
                schützen. Die Website wird verschlüsselt per TLS/SSL
                übertragen, soweit dein Browser dies unterstützt.
              </p>
            </Section>

            <Section title="14. Änderungen dieser Datenschutzerklärung">
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
                wenn sich rechtliche Anforderungen, technische Funktionen oder
                Verarbeitungsprozesse ändern. Es gilt die jeweils auf dieser
                Website veröffentlichte Fassung.
              </p>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
