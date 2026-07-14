import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Klickfunden",
  description: "Datenschutzerklärung von Klickfunden gemäß DSGVO.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-[820px] px-[var(--gutter)] pb-[clamp(70px,10vw,120px)] pt-[clamp(120px,15vw,180px)]">
      <Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Datenschutz", href: "/datenschutz" }]} />
      <h1 className="mb-8 font-display text-[clamp(32px,5vw,56px)] font-medium tracking-[-0.01em]">
        Datenschutzerklärung
      </h1>

      <div className="legal">
        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
          <br />
          {site.legalName}, handelnd unter {site.tradingAs}
          <br />
          {site.address.street}, {site.address.postalCode} {site.address.city}, {site.address.countryName}
          <br />
          Telefon: <a href={site.phoneTel}>{site.phoneIntl}</a> · E-Mail:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>

        <h2>2. Allgemeine Hinweise zur Datenverarbeitung</h2>
        <p>
          Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung
          unserer Website, zur Bearbeitung von Anfragen oder zur Erfüllung rechtlicher
          Verpflichtungen erforderlich ist. Rechtsgrundlagen der Verarbeitung sind
          insbesondere Art. 6 Abs. 1 DSGVO (Einwilligung, Vertragserfüllung, gesetzliche
          Verpflichtung sowie berechtigte Interessen).
        </p>

        <h2>3. Zugriffsdaten und Server-Logfiles</h2>
        <p>
          Beim Aufruf unserer Website werden automatisch technische Zugriffsdaten
          verarbeitet, insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs,
          aufgerufene URL sowie die Referrer-URL. Die Verarbeitung erfolgt zur
          Gewährleistung von Sicherheit und Stabilität des Angebots auf Grundlage
          unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).
        </p>

        <h2>4. Hosting über Vercel</h2>
        <p>
          Unsere Website wird bei der Vercel Inc. (USA) gehostet. Dabei werden technische
          Zugriffsdaten zur Auslieferung der Website und zur Absicherung der Infrastruktur
          verarbeitet. Bei einer Übermittlung in Drittländer werden geeignete Garantien in
          Form von Standardvertragsklauseln zugrunde gelegt.
        </p>

        <h2>5. Kontaktaufnahme und Angebotsanfragen</h2>
        <p>
          Wenn du uns kontaktierst — telefonisch, per E-Mail oder über ein Formular —
          verarbeiten wir die von dir übermittelten Daten wie Name, E-Mail-Adresse,
          Telefonnummer, Website-URL und den Inhalt deiner Anfrage. Dies erfolgt zur
          Bearbeitung deiner Anfrage und zur Vorbereitung eines Angebots (Art. 6 Abs. 1
          lit. b und lit. f DSGVO).
        </p>

        <h2>6. Speicherung bei Supabase</h2>
        <p>
          Über ein Formular übermittelte Daten können in einer Datenbank des Anbieters
          Supabase (USA) gespeichert werden. Supabase handelt als Auftragsverarbeiter auf
          Grundlage eines Auftragsverarbeitungsvertrags; bei Drittlandübermittlungen kommen
          Standardvertragsklauseln zum Einsatz.
        </p>

        <h2>7. Vercel Web Analytics</h2>
        <p>
          Zur datenschutzfreundlichen Reichweitenmessung setzen wir Vercel Web Analytics ein.
          Die Analyse wird nur nach ausdrücklicher Einwilligung aktiviert. Nach Angaben des
          Anbieters werden keine Third-Party-Cookies gesetzt.
        </p>

        <h2>8. Cookies und lokale Speicherung</h2>
        <p>
          Im lokalen Speicher (LocalStorage) deines Browsers werden deine
          Datenschutz-Einstellungen gespeichert. Wir setzen keine Marketing-Cookies und kein
          Tracking zu Werbezwecken ein.
        </p>

        <h2>9. Empfänger personenbezogener Daten</h2>
        <p>
          Personenbezogene Daten werden an technische Dienstleister wie Vercel und Supabase
          weitergegeben, soweit dies für den Betrieb der Website erforderlich ist. Eine
          darüber hinausgehende Weitergabe erfolgt nur bei Vorliegen einer Rechtsgrundlage.
        </p>

        <h2>10. Speicherdauer</h2>
        <p>
          Wir löschen personenbezogene Daten, sobald sie für die genannten Zwecke nicht mehr
          erforderlich sind, sofern keine gesetzlichen Aufbewahrungsfristen entgegenstehen.
        </p>

        <h2>11. Deine Rechte als betroffene Person</h2>
        <p>Dir stehen nach der DSGVO folgende Rechte zu:</p>
        <ul>
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
        </ul>
        <p>
          Zur Ausübung deiner Rechte genügt eine Nachricht an{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <h2>12. Beschwerderecht bei einer Aufsichtsbehörde</h2>
        <p>
          Unbeschadet anderer Rechtsbehelfe steht dir ein Beschwerderecht bei einer
          Datenschutz-Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat deines
          Aufenthaltsorts oder des mutmaßlichen Verstoßes.
        </p>

        <h2>13. Datensicherheit</h2>
        <p>
          Zum Schutz deiner Daten setzen wir eine TLS/SSL-Verschlüsselung ein und treffen
          geeignete technische und organisatorische Maßnahmen, um deine Daten vor unbefugtem
          Zugriff, Verlust oder Manipulation zu schützen.
        </p>

        <h2>14. Partnerregistrierung</h2>
        <p>
          Im Rahmen einer Anmeldung zu einem Partnerprogramm verarbeiten wir Kontaktdaten,
          Organisation, E-Mail-Adresse und Website zur Begründung und Durchführung des
          Vertragsverhältnisses (Art. 6 Abs. 1 lit. b DSGVO). Passwörter werden nicht im
          Klartext gespeichert.
        </p>

        <h2>15. Dashboard- und Zahlungsdaten</h2>
        <p>
          In einem Partnerkonto werden Paketdaten, Zahlungsstatus und Keyword-Anfragen
          verarbeitet. Diese Daten sind nicht öffentlich zugänglich.
        </p>

        <h2>16. E-Mail-Benachrichtigungen</h2>
        <p>
          Wir können sachliche Benachrichtigungen zu Registrierung und Zahlungen versenden.
          Ein Widerspruch bzw. eine Löschanfrage ist jederzeit unter{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> möglich.
        </p>

        <h2>17. Session-Cookies</h2>
        <p>
          Für Admin- und Partnerbereiche setzen wir technisch notwendige, signierte
          Session-Cookies ein. Diese dienen ausschließlich der Funktion und werden nicht zu
          Marketingzwecken verwendet.
        </p>

        <h2>18. Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir passen diese Datenschutzerklärung an, sobald Änderungen der Rechtslage oder
          technische Anpassungen dies erforderlich machen. Es gilt die jeweils auf dieser
          Seite veröffentlichte Fassung.
        </p>
      </div>
    </section>
  );
}
