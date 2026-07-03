import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Allgemeine Geschäftsbedingungen' };

const Section = ({ number, title, children }: { number: string; title: string; children: React.ReactNode }) => (
  <section><h2 className="text-xl font-semibold text-warmBlack">{number}. {title}</h2><div className="mt-4 space-y-4">{children}</div></section>
);

export default function AGBPage() {
  return (
    <main className="bg-cream px-4 py-16 text-warmBlack md:px-0 md:py-24">
      <article className="container max-w-4xl rounded-[2.5rem] border border-olive/15 bg-white/70 p-8 shadow-soft md:p-12">
        <p className="eyebrow">Rechtliches</p><h1 className="editorial mt-7 text-5xl md:text-6xl">Allgemeine Geschäftsbedingungen</h1>
        <div className="mt-12 space-y-10 text-base leading-8 text-deepOlive/80">
          <Section number="1" title="Geltungsbereich"><p>Diese Allgemeinen Geschäftsbedingungen gelten für Verträge über Beratungs-, Coaching-, Seminar- und sonstige Begleitungsleistungen zwischen Sibylle Bergold, Cranachstraße 52, 63739 Aschaffenburg, und ihren Kundinnen und Kunden. Abweichende Vereinbarungen bedürfen der ausdrücklichen Bestätigung.</p></Section>
          <Section number="2" title="Vertragsschluss"><p>Die Darstellung von Leistungen auf der Website ist noch kein verbindliches Angebot. Ein Vertrag kommt zustande, wenn ein individuell übermitteltes Angebot angenommen, eine Buchung ausdrücklich bestätigt oder ein vereinbarter Termin auf Grundlage einer konkreten Leistungsvereinbarung bestätigt wird.</p></Section>
          <Section number="3" title="Leistungsumfang"><p>Inhalt, Umfang, Ort, Dauer und Ziel der Leistung ergeben sich aus der jeweiligen individuellen Vereinbarung. Die Kundin oder der Kunde gestaltet den Prozess eigenverantwortlich mit.</p></Section>
          <Section number="4" title="Vergütung und Zahlung"><p>Es gilt die vor Vertragsschluss vereinbarte Vergütung. Soweit nicht anders vereinbart, ist der Rechnungsbetrag mit Zugang der Rechnung ohne Abzug fällig. Gesetzlich geschuldete Umsatzsteuer wird, soweit anwendbar, ausgewiesen.</p></Section>
          <Section number="5" title="Termine, Absagen und Verschiebungen"><p>Vereinbarte Termine sind verbindlich. Regelungen zu kostenfreien Absagefristen und möglichen Ausfallhonoraren werden vor Vertragsschluss im jeweiligen Angebot oder in der Terminbestätigung mitgeteilt. Das Recht beider Parteien zur Absage aus wichtigem Grund bleibt unberührt.</p><p>Muss Sibylle Bergold einen Termin absagen, wird ein Ersatztermin angeboten. Bereits gezahlte Beträge für eine dauerhaft ausfallende Leistung werden erstattet; weitergehende Ansprüche bestehen nur nach Maßgabe der gesetzlichen Vorschriften.</p></Section>
          <Section number="6" title="Mitwirkung und Eigenverantwortung"><p>Die Kundin oder der Kunde stellt die für die vereinbarte Leistung erforderlichen Informationen wahrheitsgemäß und vollständig zur Verfügung und informiert rechtzeitig über Umstände, die für die Durchführung relevant sind. Entscheidungen und Handlungen während und nach der Zusammenarbeit liegen in der eigenen Verantwortung der Kundin oder des Kunden.</p></Section>
          <Section number="7" title="Vertraulichkeit"><p>Persönliche Inhalte aus der Zusammenarbeit werden vertraulich behandelt. Eine Weitergabe erfolgt nur mit Einwilligung oder wenn eine gesetzliche Verpflichtung besteht. Gesetzliche Aufbewahrungs- und Dokumentationspflichten bleiben unberührt.</p></Section>
          <Section number="8" title="Urheber- und Nutzungsrechte"><p>Unterlagen, Konzepte, Texte und sonstige Inhalte dürfen ausschließlich für den persönlichen Gebrauch im vereinbarten Rahmen verwendet werden. Eine Veröffentlichung, Vervielfältigung oder Weitergabe an Dritte bedarf der vorherigen Zustimmung, soweit sie nicht gesetzlich erlaubt ist.</p></Section>
          <Section number="9" title="Haftung"><p>Sibylle Bergold haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei schuldhafter Verletzung von Leben, Körper oder Gesundheit. Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Im Übrigen ist die Haftung bei leichter Fahrlässigkeit ausgeschlossen, soweit gesetzlich zulässig.</p></Section>
          <Section number="10" title="Widerrufsrecht"><p>Verbraucherinnen und Verbrauchern kann bei außerhalb von Geschäftsräumen oder im Fernabsatz geschlossenen Verträgen ein gesetzliches Widerrufsrecht zustehen. Einzelheiten enthält die gesonderte Widerrufsbelehrung.</p></Section>
          <Section number="11" title="Verbraucherstreitbeilegung"><p>Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.</p></Section>
          <Section number="12" title="Schlussbestimmungen"><p>Es gilt das Recht der Bundesrepublik Deutschland. Bei Verbraucherinnen und Verbrauchern gilt diese Rechtswahl nur, soweit dadurch zwingende Schutzvorschriften des Staates des gewöhnlichen Aufenthalts nicht entzogen werden.</p><p>Stand: Juli 2026</p></Section>
        </div>
      </article>
    </main>
  );
}
