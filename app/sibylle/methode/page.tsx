import type { Metadata } from 'next';
import { CTAButton } from '@/components/sibylle/CTAButton';
import { methodSteps } from '@/lib/sibylle/siteData';

export const metadata: Metadata = {
  title: 'Methode und systemische Begleitung',
  description: 'Wie systemische Begleitung bei Sibylle Bergold abläuft: Anliegen klären, Zusammenhänge sichtbar machen und neue Handlungsspielräume entwickeln.',
};

const principles = [
  { title: 'Du bestimmst das Tempo', text: 'Du entscheidest, was du einbringst und wie tief du gehen möchtest. Grenzen werden respektiert.' },
  { title: 'Das Ganze im Blick', text: 'Nicht nur das einzelne Problem zählt, sondern auch Beziehungen, Rollen und Kontexte, in denen es entstanden ist.' },
  { title: 'Erleben statt nur erklären', text: 'Verstehen ist wichtig. Veränderung wird oft dort möglich, wo eine neue innere Erfahrung hinzukommt.' },
];

export default function MethodePage() {
  return (
    <main className="bg-cream text-warmBlack">
      <section className="px-4 pb-20 pt-16 md:px-0 md:pb-28 md:pt-24"><div className="container grid gap-14 lg:grid-cols-[1.15fr_.65fr] lg:items-end"><div><p className="eyebrow">Die Methode</p><h1 className="editorial mt-8 max-w-5xl text-[clamp(3.6rem,7vw,7.2rem)] leading-[.9]">Veränderung beginnt dort, wo Zusammenhänge <span className="italic text-deepOlive">sichtbar</span> werden.</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-deepOlive/80">Systemische Begleitung betrachtet dein Anliegen nicht isoliert. Sie fragt, in welchen Beziehungen, Rollen und Erfahrungen es eingebettet ist – und was sich verändert, wenn du deinen Platz darin neu wahrnimmst.</p></div><aside className="rounded-[2.5rem] bg-deepOlive p-9 text-cream"><p className="text-xs font-bold uppercase tracking-[.22em] text-sand">Der Kern</p><p className="editorial mt-6 text-3xl leading-tight">Nicht gegen dich arbeiten. Sondern verstehen, wofür dein Muster einmal da war.</p></aside></div></section>

      <section className="bg-warmBlack px-4 py-20 text-cream md:px-0 md:py-28"><div className="container"><div className="max-w-3xl"><p className="eyebrow !text-sand">So kann der Prozess aussehen</p><h2 className="editorial mt-7 text-5xl leading-[.95] md:text-6xl">Vom Anliegen zur neuen inneren Position.</h2></div><div className="mt-14 grid gap-5 lg:grid-cols-5">{methodSteps.map((step, index) => <article key={step.title} className="rounded-[2rem] border border-cream/10 bg-cream/[.04] p-7"><span className="editorial text-5xl text-sand">0{index + 1}</span><h3 className="mt-7 text-lg font-semibold">{step.title}</h3><p className="mt-4 text-sm leading-7 text-cream/60">{step.description}</p></article>)}</div></div></section>

      <section className="section-shell"><div className="container"><div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Was systemisch bedeutet</p><h2 className="editorial mt-7 text-5xl leading-[.95] md:text-6xl">Du bist mehr als das Problem, mit dem du <span className="italic text-deepOlive">kommst.</span></h2></div><div className="space-y-6 text-lg leading-9 text-deepOlive/80"><p>Menschen entwickeln sich in Beziehungen. Familie, Partnerschaft, Beruf und prägende Erfahrungen formen, wie wir uns selbst sehen und auf andere reagieren. Ein Symptom oder Konflikt kann deshalb eine sinnvolle Funktion im größeren Zusammenhang erfüllen.</p><p>In der gemeinsamen Arbeit wird dieser Zusammenhang erfahrbar. Je nach Anliegen geschieht das im Gespräch, über räumliche Positionen, innere Bilder oder Elemente einer systemischen Aufstellung. Du brauchst dafür keine Vorerfahrung.</p><p>Das Ziel ist nicht, deine Vergangenheit umzuschreiben. Es geht darum, ihre Wirkung im Heute klarer zu erkennen und deinen gegenwärtigen Handlungsspielraum zu erweitern.</p></div></div></div></section>

      <section className="px-4 pb-24 md:px-0 md:pb-32"><div className="container"><p className="eyebrow">Haltung in der Begleitung</p><div className="mt-10 grid gap-6 md:grid-cols-3">{principles.map((item) => <article key={item.title} className="premium-panel rounded-[2rem] p-8"><h2 className="editorial text-3xl text-deepOlive">{item.title}</h2><p className="mt-5 leading-8 text-deepOlive/70">{item.text}</p></article>)}</div></div></section>

      <section className="bg-sibylleMist px-4 py-20 md:px-0 md:py-24"><div className="container grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="eyebrow">Passt diese Arbeit zu dir?</p><h2 className="editorial mt-6 max-w-4xl text-4xl leading-tight md:text-5xl">Du musst nichts vorbereiten. Bring das mit, was dich gerade bewegt.</h2><p className="mt-6 max-w-2xl leading-8 text-deepOlive/75">Im ersten Gespräch klärt ihr dein Anliegen, deine Fragen und einen möglichen Rahmen der Begleitung.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><CTAButton href="https://calendly.com/sibylle-bergold/erstgespraech" external>Erstgespräch buchen</CTAButton><CTAButton href="/sibylle/preise" variant="secondary">Rahmen & Preise</CTAButton></div></div></section>

    </main>
  );
}
