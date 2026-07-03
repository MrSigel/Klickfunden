import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Impressum' };

export default function ImpressumPage() {
  return (
    <main className="bg-cream px-4 py-16 text-warmBlack md:px-0 md:py-24">
      <article className="container max-w-4xl rounded-[2.5rem] border border-olive/15 bg-white/70 p-8 shadow-soft md:p-12">
        <p className="eyebrow">Rechtliches</p>
        <h1 className="editorial mt-7 text-5xl md:text-6xl">Impressum</h1>

        <div className="mt-12 space-y-10 text-base leading-8 text-deepOlive/80">
          <section>
            <h2 className="text-xl font-semibold text-warmBlack">Angaben gemäß § 5 DDG</h2>
            <address className="mt-4 not-italic">
              Sibylle Bergold<br />
              Cranachstraße 52<br />
              63739 Aschaffenburg
            </address>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-warmBlack">Kontakt</h2>
            <p className="mt-4">
              Telefon: <a className="underline decoration-softGold underline-offset-4" href="tel:+491785511230">+49 (0) 178 / 55 11 230</a><br />
              E-Mail: <a className="underline decoration-softGold underline-offset-4" href="mailto:info@sibylle-bergold.de">info@sibylle-bergold.de</a><br />
              Web: <a className="underline decoration-softGold underline-offset-4" href="https://www.sibylle-bergold.de" target="_blank" rel="noreferrer noopener">www.sibylle-bergold.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-warmBlack">Inhaberin und steuerliche Angaben</h2>
            <p className="mt-4">Inhaberin: Sibylle Bergold<br />Steuernummer: 204 281 10146</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-warmBlack">Verbraucherstreitbeilegung</h2>
            <p className="mt-4">Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
