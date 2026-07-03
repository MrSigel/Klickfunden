import type { Metadata } from 'next';
import { CTAButton } from '@/components/sibylle/CTAButton';

export const metadata: Metadata = {
  title: 'Sinnfragen und innere Orientierung',
  description: 'Wenn äußerlich vieles stimmt, aber innerlich etwas fehlt: systemische Begleitung für Sinnfragen, Übergänge und eine stimmigere eigene Richtung.',
};

const questions = ['Lebe ich wirklich mein eigenes Leben?', 'Warum erfüllt mich das Erreichte nicht?', 'Was will durch mich in die Welt?', 'Welche Entscheidung fühlt sich wirklich nach mir an?'];

export default function SinnfragePage() {
  return (
    <main className="bg-cream text-warmBlack">
      <section className="grain relative overflow-hidden bg-deepOlive px-4 py-20 text-cream md:px-0 md:py-32">
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-softGold/15 blur-[120px]" />
        <div className="container relative text-center"><p className="eyebrow !text-sand">Sinnfrage</p><h1 className="editorial mx-auto mt-8 max-w-6xl text-[clamp(3.8rem,8vw,8.2rem)] leading-[.88]">Wenn dein Leben funktioniert – aber sich nicht mehr nach <span className="italic text-sand">dir</span> anfühlt.</h1><p className="mx-auto mt-9 max-w-2xl text-lg leading-9 text-cream/70">Manchmal ist nicht das Außen das Problem. Es ist die leise Ahnung, dass dein bisheriger Weg nicht mehr zu dem Menschen passt, der du geworden bist.</p></div>
      </section>

      <section className="section-shell">
        <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div><p className="eyebrow">Die leise Unruhe</p><h2 className="editorial mt-7 text-5xl leading-[.95] md:text-6xl">Nicht jede Krise ist ein Zusammenbruch. Manche ist eine <span className="italic text-deepOlive">Einladung.</span></h2></div>
          <div className="space-y-6 text-lg leading-9 text-deepOlive/80"><p>Sinnfragen tauchen häufig an Übergängen auf: wenn Beziehungen sich verändern, Kinder eigene Wege gehen, beruflicher Erfolg leer wird oder eine bisher klare Rolle nicht mehr trägt.</p><p>Der Impuls ist oft, möglichst schnell eine neue Antwort zu finden. Doch nachhaltige Orientierung entsteht selten durch noch mehr Denken. Sie beginnt dort, wo du wahrnimmst, welche Erwartungen, Loyalitäten und alten Vorstellungen deinen Weg bisher geprägt haben.</p></div>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-0 md:pb-32"><div className="container"><div className="grid gap-4 md:grid-cols-2">{questions.map((question, index) => <article key={question} className={`${index === 0 ? 'bg-warmBlack text-cream' : 'premium-panel text-deepOlive'} rounded-[2rem] p-8 md:p-10`}><span className="text-xs font-bold tracking-[.22em] text-softGold">FRAGE 0{index + 1}</span><p className="editorial mt-7 text-3xl leading-tight md:text-4xl">{question}</p></article>)}</div></div></section>

      <section className="bg-sibylleMist px-4 py-20 md:px-0 md:py-28">
        <div className="container"><p className="eyebrow">Worum es in der Begleitung geht</p><div className="mt-12 grid gap-8 md:grid-cols-3"><article><h2 className="editorial text-4xl">Wahrnehmen</h2><p className="mt-5 leading-8 text-deepOlive/75">Was fehlt dir wirklich – und welche Stimme in dir wurde vielleicht lange überhört?</p></article><article><h2 className="editorial text-4xl">Unterscheiden</h2><p className="mt-5 leading-8 text-deepOlive/75">Welche Ziele, Pflichten und Bilder gehören zu dir? Welche hast du aus deinem Umfeld übernommen?</p></article><article><h2 className="editorial text-4xl">Ausrichten</h2><p className="mt-5 leading-8 text-deepOlive/75">Welche kleinen und großen Schritte bringen dein äußeres Leben wieder näher an deine innere Wahrheit?</p></article></div></div>
      </section>

      <section className="section-shell"><div className="container grid gap-12 lg:grid-cols-[1fr_.75fr] lg:items-center"><div><p className="eyebrow">Keine fertige Antwort</p><h2 className="editorial mt-7 text-5xl leading-[.95] md:text-6xl">Sinn lässt sich nicht verordnen. Aber du kannst wieder hören, was in dir <span className="italic text-deepOlive">stimmig</span> ist.</h2><p className="mt-7 max-w-2xl text-lg leading-9 text-deepOlive/75">Die systemische Perspektive schafft Raum zwischen dir und den Erwartungen, die dich bisher geleitet haben. Daraus kann eine Richtung entstehen, die nicht spektakulär sein muss – nur wahrhaftig für dich.</p></div><aside className="premium-panel rounded-[2.5rem] p-9"><p className="text-sm font-bold uppercase tracking-[.22em] text-olive">Gut zu wissen</p><p className="mt-5 leading-8 text-deepOlive/75">Du brauchst keine ausformulierte Frage. Ein Gefühl von „So wie bisher geht es nicht weiter“ ist ein vollkommen ausreichender Ausgangspunkt.</p><div className="mt-8"><CTAButton href="mailto:info@sibylle-bergold.de">Sibylle schreiben</CTAButton></div></aside></div></section>
    </main>
  );
}
