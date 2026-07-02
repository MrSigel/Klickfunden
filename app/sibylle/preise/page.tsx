import { pricingPackages } from '@/lib/sibylle/siteData';

export default function PreisePage() {
  return (
    <main className="bg-cream px-4 py-16 text-warmBlack md:px-0 md:py-24">
      <div className="container space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-deepOlive">Preise</p>
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">Transparente Preise für echte Begleitung</h1>
          <p className="max-w-3xl text-base leading-8 text-deepOlive md:text-lg">
            Wir finden gemeinsam, was zu deinem Anliegen passt. Die Preise geben Orientierung – nicht das Gefühl, eine bestimmte Wahl treffen zu müssen.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPackages.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-mist bg-white p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-warmBlack">{item.title}</h2>
              <p className="mt-4 text-3xl font-semibold text-deepOlive">{item.price}</p>
              <p className="mt-4 text-base leading-8 text-deepOlive">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="rounded-[2rem] border border-mist bg-sibylleMist p-10 shadow-soft">
          <p className="text-base leading-8 text-deepOlive">
            Wir arbeiten gemeinsam heraus, welches Paket deiner aktuellen Situation und deinen Erwartungen entspricht. Es geht um Klarheit, nicht um festgelegte Empfehlungen.
          </p>
        </div>
      </div>
    </main>
  );
}
