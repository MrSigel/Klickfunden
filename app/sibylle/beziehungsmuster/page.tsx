import Link from 'next/link';

export default function BeziehungsmusterPage() {
  return (
    <main className="bg-cream px-4 py-16 text-warmBlack md:px-0 md:py-24">
      <div className="container space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-deepOlive">Beziehungsmuster</p>
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">Warum landen wir immer wieder bei denselben Menschen?</h1>
          <p className="max-w-3xl text-base leading-8 text-deepOlive md:text-lg">
            Beziehungsmuster sind kein Zufall. Sie entstehen aus frühen Prägungen und werden im Alltag oft unbewusst bestätigt. Hier findest du einen ruhigen Raum, um die Wiederholungen zu erkennen und zu verändern.
          </p>
        </div>
        <section className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-mist bg-white p-10 shadow-soft">
            <h2 className="text-2xl font-semibold text-warmBlack">Was sichtbar wird</h2>
            <p className="mt-4 text-base leading-8 text-deepOlive">
              In der systemischen Arbeit sehen wir, wie Familien- und Beziehungsgeschichten sich in deinem heutigen Beziehungsleben wiederholen. Das erlaubt neue Wahlmöglichkeiten.
            </p>
          </article>
          <article className="rounded-[2rem] border border-mist bg-sibylleMist p-10 shadow-soft">
            <h2 className="text-2xl font-semibold text-warmBlack">Was das nicht ist</h2>
            <p className="mt-4 text-base leading-8 text-deepOlive">
              Keine schnelle Lösung, sondern ein klarer Prozess. Kein Heilversprechen, sondern eine Einladung in die eigene Wahrnehmung.
            </p>
          </article>
        </section>
        <div className="rounded-[2rem] border border-mist bg-white p-10 shadow-soft">
          <h2 className="text-2xl font-semibold text-warmBlack">Was dich erwartet</h2>
          <ul className="mt-6 space-y-4 text-base leading-8 text-deepOlive">
            <li>Erkennen, welches Muster aktuell wirkt</li>
            <li>Verstehen, warum es dich immer wieder lenkt</li>
            <li>Fühlen, wie ein neuer eigener Raum möglich wird</li>
          </ul>
        </div>
        <Link href="/sibylle/methode" className="inline-flex rounded-[1.75rem] bg-warmBlack px-8 py-4 text-sm font-semibold text-cream transition hover:bg-[#11120f]">
          Zur Methode
        </Link>
      </div>
    </main>
  );
}
