import type { Metadata } from 'next';
import Link from 'next/link';
import { CTAButton } from '@/components/sibylle/CTAButton';

export const metadata: Metadata = {
  title: 'Beziehungsmuster erkennen und verstehen',
  description: 'Warum sich Beziehungen wiederholen – und wie systemische Begleitung dabei helfen kann, alte Dynamiken wahrzunehmen und neue Entscheidungen zu treffen.',
};

const signs = [
  'Du fühlst dich häufig zu Menschen hingezogen, die emotional nicht wirklich erreichbar sind.',
  'Nähe wird schnell zu eng – oder Distanz löst starke Unsicherheit in dir aus.',
  'Du übernimmst Verantwortung für die Gefühle und Bedürfnisse deines Gegenübers.',
  'Konflikte verlaufen ähnlich, obwohl Partner und Lebenssituationen wechseln.',
  'Du weißt rational, was dir nicht guttut, handelst aber trotzdem immer wieder gleich.',
  'Du hast das Gefühl, um Liebe, Anerkennung oder Sicherheit kämpfen zu müssen.',
];

const process = [
  { title: 'Wiederholung erkennen', text: 'Wir schauen nicht nur auf den letzten Konflikt, sondern auf das Muster dahinter: Was wiederholt sich, wann beginnt es und welche Rolle nimmst du dabei ein?' },
  { title: 'Ursprung einordnen', text: 'Manche Reaktionen waren früher sinnvoll und schützend. Im heutigen Leben können sie Nähe, Vertrauen und klare Grenzen erschweren.' },
  { title: 'Neue Position erproben', text: 'Wenn die alte Dynamik sichtbar wird, entsteht Abstand. Du kannst wahrnehmen, was wirklich zu dir gehört und welche Entscheidung heute möglich ist.' },
];

export default function BeziehungsmusterPage() {
  return (
    <main className="bg-cream text-warmBlack">
      <section className="relative overflow-hidden px-4 pb-20 pt-16 md:px-0 md:pb-28 md:pt-24">
        <div className="absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-sand/25 blur-[110px]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.15fr_.65fr] lg:items-end">
          <div>
            <p className="eyebrow">Beziehungsmuster</p>
            <h1 className="editorial mt-8 max-w-5xl text-[clamp(3.6rem,7vw,7.4rem)] leading-[.9]">Wenn sich Liebe immer wieder <span className="italic text-deepOlive">gleich anfühlt.</span></h1>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-deepOlive/80 md:text-xl">Du begegnest einem neuen Menschen – und irgendwann bist du wieder an demselben Punkt. Nicht weil du falsch liebst, sondern weil vertraute Dynamiken oft stärker wirken als bewusste Vorsätze.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="mailto:info@sibylle-bergold.de">Mein Anliegen schildern</CTAButton>
              <CTAButton href="/sibylle/methode" variant="secondary">Die Methode verstehen</CTAButton>
            </div>
          </div>
          <aside className="premium-panel rounded-[2.5rem] p-8 md:p-10">
            <p className="editorial text-3xl leading-tight text-deepOlive">„Warum passiert mir das schon wieder?“</p>
            <p className="mt-5 leading-7 text-olive">Diese Frage ist kein Beweis für persönliches Scheitern. Sie kann der Anfang einer ehrlichen und entlastenden Begegnung mit dir selbst sein.</p>
          </aside>
        </div>
      </section>

      <section className="bg-warmBlack px-4 py-20 text-cream md:px-0 md:py-28">
        <div className="container">
          <p className="eyebrow !text-sand">Kommt dir das bekannt vor?</p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[2.5rem] bg-cream/10 md:grid-cols-2">
            {signs.map((sign, index) => <div key={sign} className="bg-warmBlack p-7 md:p-9"><span className="text-xs font-bold tracking-[.2em] text-sand">0{index + 1}</span><p className="mt-4 text-base leading-8 text-cream/75">{sign}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="eyebrow">Was dahinterliegen kann</p><h2 className="editorial mt-7 text-5xl leading-[.95] md:text-6xl">Vertraut ist nicht immer <span className="italic text-deepOlive">stimmig.</span></h2></div>
          <div className="space-y-6 text-lg leading-9 text-deepOlive/80">
            <p>Beziehungsmuster entstehen oft dort, wo wir früh gelernt haben, wie Nähe, Zugehörigkeit und Sicherheit funktionieren. Vielleicht war es wichtig, leise zu sein, stark zu bleiben, Harmonie herzustellen oder die Bedürfnisse anderer zuerst zu spüren.</p>
            <p>Solche Strategien sind nicht „schlecht“. Sie haben einmal geholfen. Doch wenn sie unbewusst jede neue Beziehung mitgestalten, verlieren wir den Kontakt zu unseren eigenen Grenzen und Wünschen.</p>
            <p>Systemische Arbeit richtet den Blick deshalb nicht auf Schuld. Sie macht Zusammenhänge sichtbar – behutsam, klar und in deinem Tempo.</p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-0 md:pb-32">
        <div className="container">
          <p className="eyebrow">Der Weg zu mehr Wahlfreiheit</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">{process.map((item, index) => <article key={item.title} className="premium-panel rounded-[2rem] p-8 md:p-10"><span className="editorial text-5xl text-softGold">0{index + 1}</span><h2 className="mt-7 text-xl font-semibold">{item.title}</h2><p className="mt-4 leading-8 text-deepOlive/75">{item.text}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-sibylleMist px-4 py-20 md:px-0 md:py-28">
        <div className="container grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><p className="eyebrow">Ein anderer Anfang</p><h2 className="editorial mt-6 max-w-4xl text-4xl leading-tight md:text-6xl">Du musst nicht erst wissen, wie du das Muster löst. Es reicht, wenn du bereit bist, es anzuschauen.</h2><p className="mt-6 max-w-2xl leading-8 text-deepOlive/75">Im ersten Kontakt klärt ihr gemeinsam, was dich beschäftigt und ob Sibylles Begleitung für dein Anliegen passend ist.</p></div>
          <div className="flex flex-col gap-3"><CTAButton href="https://calendly.com/sibylle-bergold/erstgespraech" external>Erstgespräch buchen</CTAButton><Link href="/sibylle/faq" className="text-center text-sm font-semibold text-deepOlive underline decoration-softGold underline-offset-4">Antworten auf häufige Fragen</Link></div>
        </div>
      </section>
    </main>
  );
}
