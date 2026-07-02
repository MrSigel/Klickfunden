import Link from 'next/link';

export default function PartnerschaftPage() {
  return (
    <main className="bg-cream px-4 py-16 text-warmBlack md:px-0 md:py-24">
      <div className="container space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-deepOlive">Partnerschaft</p>
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">Intimität neu erleben, ohne alte Erwartungen zu wiederholen.</h1>
          <p className="max-w-3xl text-base leading-8 text-deepOlive md:text-lg">
            Partnerschaft bewegt sich oft zwischen Nähe und Abgrenzung. Mit systemischen Aufstellungen bringst du dich selbst klarer ins Spiel – ohne dich zu verlieren.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-mist bg-white p-10 shadow-soft">
            <h2 className="text-2xl font-semibold text-warmBlack">Klarheit statt Gewohnheit</h2>
            <p className="mt-4 text-base leading-8 text-deepOlive">
              Der Fokus liegt darauf, welche Rollen du übernimmst und welche Bedürfnisse dadurch unerfüllt bleiben.
            </p>
          </article>
          <article className="rounded-[2rem] border border-mist bg-sibylleMist p-10 shadow-soft">
            <h2 className="text-2xl font-semibold text-warmBlack">Achtsame Veränderung</h2>
            <p className="mt-4 text-base leading-8 text-deepOlive">
              Keine schnelle Paarberatung, sondern eine tiefere Arbeit an den Mustern, die deine Beziehung prägen.
            </p>
          </article>
        </div>
        <Link href="/sibylle/methode" className="inline-flex rounded-[1.75rem] bg-warmBlack px-8 py-4 text-sm font-semibold text-cream transition hover:bg-[#11120f]">
          Zur Methode
        </Link>
      </div>
    </main>
  );
}
