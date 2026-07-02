import Link from 'next/link';

export default function AcademyPage() {
  return (
    <main className="bg-cream px-4 py-16 text-warmBlack md:px-0 md:py-24">
      <div className="container space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-deepOlive">Academy</p>
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">Monatliche Impulse für mehr Klarheit und Bewusstheit</h1>
          <p className="max-w-3xl text-base leading-8 text-deepOlive md:text-lg">
            Die Academy unterstützt dich mit regelmäßigen Impulsen, Übungen und Hintergrundwissen, um Beziehungsmuster und Lebensfragen nachhaltig zu begleiten.
          </p>
        </div>
        <div className="rounded-[2rem] border border-mist bg-white p-10 shadow-soft">
          <h2 className="text-2xl font-semibold text-warmBlack">Highlights</h2>
          <ul className="mt-6 space-y-4 text-base leading-8 text-deepOlive">
            <li>Monatliche Themen zu Beziehung, Herkunft und Selbstführung.</li>
            <li>Impulse für Alltag und Bewusstseinsarbeit.</li>
            <li>Sanfte Begleitung ohne Druck.</li>
          </ul>
          <p className="mt-6 text-base leading-8 text-deepOlive">Preis: 47–97 EUR/Monat.</p>
        </div>
        <Link href="/sibylle/preise" className="inline-flex rounded-[1.75rem] bg-warmBlack px-8 py-4 text-sm font-semibold text-cream transition hover:bg-[#11120f]">
          Zur Preisübersicht
        </Link>
      </div>
    </main>
  );
}
