import type { Metadata } from 'next';
import { CTAButton } from '@/components/sibylle/CTAButton';

export const metadata: Metadata = {
  title: 'Preise und Rahmen der Begleitung',
  description: 'Persönliches Erstgespräch und individuelle systemische Begleitung bei Sibylle Bergold – transparent, passend zum Anliegen und ohne versteckte Zusagen.',
};

const steps = [
  { title: 'Du meldest dich', text: 'Schreib kurz, was dich beschäftigt, oder buche direkt einen Termin für das erste Gespräch.' },
  { title: 'Ihr klärt den Bedarf', text: 'Gemeinsam besprecht ihr, worum es geht, welches Format sinnvoll sein kann und ob die Zusammenarbeit stimmig ist.' },
  { title: 'Du entscheidest', text: 'Du erhältst einen klaren Rahmen zu Umfang und Konditionen und entscheidest anschließend ohne Druck.' },
];

const faq = [
  { q: 'Warum stehen hier keine pauschalen Paketpreise?', a: 'Anliegen und passende Begleitung können sehr unterschiedlich sein. Umfang und Konditionen werden deshalb nach dem ersten Kontakt transparent und konkret vereinbart.' },
  { q: 'Verpflichte ich mich durch das Erstgespräch?', a: 'Nein. Das Gespräch dient der Orientierung. Danach kannst du in Ruhe entscheiden, ob und in welchem Rahmen du weiterarbeiten möchtest.' },
  { q: 'Muss ich mein Anliegen bereits genau formulieren können?', a: 'Nein. Auch ein diffuses Gefühl, eine wiederkehrende Situation oder eine offene Frage kann ein guter Ausgangspunkt sein.' },
];

export default function PreisePage() {
  return (
    <main className="bg-cream text-warmBlack">
      <section className="relative overflow-hidden px-4 py-20 md:px-0 md:py-32"><div className="absolute -left-48 top-0 h-[32rem] w-[32rem] rounded-full bg-softGold/20 blur-[110px]" /><div className="container relative text-center"><p className="eyebrow">Rahmen & Preise</p><h1 className="editorial mx-auto mt-8 max-w-6xl text-[clamp(3.7rem,7vw,7.5rem)] leading-[.9]">Klarheit beginnt vor der ersten <span className="italic text-deepOlive">Session.</span></h1><p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-deepOlive/80">Du sollst wissen, worauf du dich einlässt. Deshalb werden Ziel, Format, zeitlicher Rahmen und Konditionen vor einer Begleitung verständlich und persönlich geklärt.</p></div></section>

      <section className="px-4 pb-24 md:px-0 md:pb-32"><div className="container grid gap-6 lg:grid-cols-2"><article className="rounded-[2.5rem] bg-warmBlack p-9 text-cream md:p-12"><span className="text-xs font-bold uppercase tracking-[.22em] text-sand">01 · Kennenlernen</span><h2 className="editorial mt-7 text-4xl md:text-5xl">Persönliches Erstgespräch</h2><p className="mt-6 text-base leading-8 text-cream/65">Ein geschützter erster Raum für dein Anliegen und deine Fragen. Ihr prüft gemeinsam, ob Sibylles Arbeitsweise zu dir passt und welcher nächste Schritt sinnvoll sein könnte.</p><ul className="mt-8 space-y-3 text-sm text-cream/75"><li>✓ Anliegen und Erwartungen klären</li><li>✓ Arbeitsweise kennenlernen</li><li>✓ Möglichen Rahmen besprechen</li></ul><div className="mt-10"><CTAButton href="https://calendly.com/sibylle-bergold/erstgespraech" external className="!bg-cream !text-deepOlive">Erstgespräch buchen</CTAButton></div></article><article className="premium-panel rounded-[2.5rem] p-9 md:p-12"><span className="text-xs font-bold uppercase tracking-[.22em] text-olive">02 · Vertiefung</span><h2 className="editorial mt-7 text-4xl text-deepOlive md:text-5xl">Individuelle Begleitung</h2><p className="mt-6 text-base leading-8 text-deepOlive/70">Ob eine fokussierte Sitzung oder ein begleiteter Prozess passend ist, hängt von deinem Anliegen ab. Du erhältst vorab eine konkrete Empfehlung und transparente Konditionen.</p><ul className="mt-8 space-y-3 text-sm text-deepOlive/75"><li>✓ Passendes Format statt Standardpaket</li><li>✓ Klar vereinbarter Umfang</li><li>✓ Keine versteckten Verpflichtungen</li></ul><div className="mt-10"><CTAButton href="mailto:info@sibylle-bergold.de" variant="secondary">Anliegen per E-Mail senden</CTAButton></div></article></div></section>

      <section className="bg-sibylleMist px-4 py-20 md:px-0 md:py-28"><div className="container"><div className="max-w-3xl"><p className="eyebrow">So entsteht dein Rahmen</p><h2 className="editorial mt-7 text-5xl leading-[.95] md:text-6xl">Persönlich geklärt. Transparent entschieden.</h2></div><div className="mt-12 grid gap-6 md:grid-cols-3">{steps.map((step, index) => <article key={step.title} className="rounded-[2rem] border border-white/60 bg-white/55 p-8"><span className="editorial text-5xl text-softGold">0{index + 1}</span><h3 className="mt-6 text-xl font-semibold">{step.title}</h3><p className="mt-4 leading-8 text-deepOlive/70">{step.text}</p></article>)}</div></div></section>

      <section className="section-shell"><div className="container grid gap-14 lg:grid-cols-[.65fr_1.35fr]"><div><p className="eyebrow">Häufige Fragen</p><h2 className="editorial mt-7 text-5xl leading-[.95]">Bevor du dich meldest.</h2></div><div className="divide-y divide-olive/15">{faq.map((item) => <article key={item.q} className="py-7 first:pt-0"><h3 className="text-lg font-semibold text-deepOlive">{item.q}</h3><p className="mt-4 leading-8 text-deepOlive/70">{item.a}</p></article>)}</div></div></section>

      <section className="grain bg-deepOlive px-4 py-20 text-cream md:px-0 md:py-28"><div className="container text-center"><p className="eyebrow !text-sand">Der erste Schritt</p><h2 className="editorial mx-auto mt-7 max-w-4xl text-5xl leading-[.95] md:text-6xl">Schilder kurz, was dich bewegt. Alles Weitere klärt ihr gemeinsam.</h2><p className="mx-auto mt-7 max-w-xl leading-8 text-cream/65">Du musst dich noch für nichts entscheiden. Der erste Kontakt dient dazu, Orientierung zu schaffen.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><CTAButton href="mailto:info@sibylle-bergold.de" className="!bg-cream !text-deepOlive">Sibylle schreiben</CTAButton><CTAButton href="https://calendly.com/sibylle-bergold/erstgespraech" variant="secondary" external className="!border-cream/25 !text-cream">Termin auswählen</CTAButton></div></div></section>
    </main>
  );
}
