import { pricingPackages } from '@/lib/sibylle/siteData';
import { CTAButton } from '@/components/sibylle/CTAButton';

export default function PreisePage() {
  return (
    <main className="bg-cream px-4 py-16 text-warmBlack md:px-0 md:py-24">
      <div className="container space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-deepOlive">Preise</p>
          <h1 className="editorial text-4xl sm:text-5xl md:text-6xl">Persönliche Begleitung beginnt mit einem klaren Gespräch</h1>
          <p className="max-w-3xl text-base leading-8 text-deepOlive md:text-lg">
            Rahmen, Dauer und Konditionen richten sich nach deinem Anliegen und werden im persönlichen Kontakt transparent geklärt.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {pricingPackages.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-mist bg-white p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-warmBlack">{item.title}</h2>
              <p className="mt-4 text-base leading-8 text-deepOlive">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="rounded-[2rem] border border-mist bg-sibylleMist p-10 shadow-soft">
          <p className="text-base leading-8 text-deepOlive">
            Schreib Sibylle dein Anliegen – der erste Schritt ist oft der wichtigste.
          </p>
          <div className="mt-6"><CTAButton href="mailto:kontakt@sibylle-bergold.de">Jetzt persönlich bei Sibylle melden</CTAButton></div>
        </div>
      </div>
    </main>
  );
}
