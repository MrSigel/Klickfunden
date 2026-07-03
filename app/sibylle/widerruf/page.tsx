import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Widerrufsbelehrung' };

export default function WiderrufPage() {
  return (
    <main className="bg-cream px-4 py-16 text-warmBlack md:px-0 md:py-24">
      <article className="container max-w-4xl rounded-[2.5rem] border border-olive/15 bg-white/70 p-8 shadow-soft md:p-12">
        <p className="eyebrow">Rechtliches</p><h1 className="editorial mt-7 text-5xl md:text-6xl">Widerrufsbelehrung</h1>
        <div className="mt-12 space-y-10 text-base leading-8 text-deepOlive/80">
          <section><h2 className="text-xl font-semibold text-warmBlack">Widerrufsrecht</h2><p className="mt-4">Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p><p className="mt-4">Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.</p><p className="mt-4">Um Ihr Widerrufsrecht auszuüben, müssen Sie uns</p><address className="mt-4 not-italic">Sibylle Bergold<br />Cranachstraße 52<br />63739 Aschaffenburg<br />Telefon: +49 (0) 178 / 55 11 230<br />E-Mail: info@sibylle-bergold.de</address><p className="mt-4">mittels einer eindeutigen Erklärung, zum Beispiel durch einen mit der Post versandten Brief oder eine E-Mail, über Ihren Entschluss informieren, diesen Vertrag zu widerrufen. Sie können dafür das unten stehende Muster-Widerrufsformular verwenden; dies ist jedoch nicht vorgeschrieben.</p><p className="mt-4">Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p></section>
          <section><h2 className="text-xl font-semibold text-warmBlack">Folgen des Widerrufs</h2><p className="mt-4">Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem Ihre Mitteilung über den Widerruf bei uns eingegangen ist. Für die Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Zahlung eingesetzt haben, sofern nicht ausdrücklich etwas anderes vereinbart wurde. Ihnen entstehen wegen dieser Rückzahlung keine Entgelte.</p><p className="mt-4">Haben Sie verlangt, dass die Dienstleistung bereits während der Widerrufsfrist beginnen soll, zahlen Sie einen angemessenen Betrag, der dem Anteil der bis zu Ihrem Widerruf bereits erbrachten Leistungen im Vergleich zum Gesamtumfang der vereinbarten Leistungen entspricht.</p></section>
          <section><h2 className="text-xl font-semibold text-warmBlack">Muster-Widerrufsformular</h2><div className="mt-4 rounded-[2rem] bg-sibylleMist p-7"><p>Wenn Sie den Vertrag widerrufen wollen, können Sie dieses Formular ausfüllen und an uns übermitteln:</p><p className="mt-5">An Sibylle Bergold, Cranachstraße 52, 63739 Aschaffenburg, E-Mail: info@sibylle-bergold.de</p><p className="mt-5">Hiermit widerrufe(n) ich/wir den von mir/uns abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung:</p><p className="mt-5">Bestellt am / Vertrag geschlossen am:<br />Name der Verbraucherin/des Verbrauchers:<br />Anschrift der Verbraucherin/des Verbrauchers:<br />Datum:<br />Unterschrift (nur bei Mitteilung auf Papier):</p></div></section>
          <p className="text-sm text-deepOlive/60">Stand: Juli 2026</p>
        </div>
      </article>
    </main>
  );
}
