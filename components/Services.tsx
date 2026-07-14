import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section
      className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] pb-[clamp(90px,12vw,150px)] pt-[clamp(30px,6vw,80px)]"
    >
      <Reveal className="mb-[clamp(48px,6vw,88px)] max-w-[720px]">
        <p className="eyebrow mb-[22px]">Was wir übernehmen</p>
        <h2 className="section-title">
          Ein Team für dein
          <br />
          ganzes Markenbild.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
        <Reveal className="card md:col-span-2">
          <span className="mb-5 inline-block font-mono text-[11.5px]  tracking-[0.02em] text-signal">
            01 · Reputation
          </span>
          <h3 className="mb-4 font-display text-[clamp(22px,2.4vw,30px)] font-medium leading-[1.08] tracking-[-0.005em]">
            Aus schlechten Bewertungen gute machen.
          </h3>
          <p className="max-w-[60ch] text-fog">
            Wir bauen ein System, das zufriedene Kunden zur Bewertung bewegt und
            unzufriedene abfängt, bevor sie öffentlich werden. Policy-widrige
            Einträge fechten wir an, auf berechtigte Kritik antworten wir
            professionell. Dein Sterne-Schnitt klettert — dauerhaft und echt.
          </p>
          <ul className="dot-list">
            <li>Aktives Review-Management (Google, Trustpilot, Jameda, ProvenExpert)</li>
            <li>Krisen- & Beschwerde-Handling in deinem Namen</li>
            <li>Automatisierte Bewertungs-Einladungen nach jedem Auftrag</li>
          </ul>
        </Reveal>

        <Reveal delay={0.05} className="card">
          <span className="mb-5 inline-block font-mono text-[11.5px]  tracking-[0.02em] text-signal">
            02 · Sichtbarkeit
          </span>
          <h3 className="mb-4 font-display text-[clamp(22px,2.4vw,30px)] font-medium leading-[1.08] tracking-[-0.005em]">
            Gefunden werden — bei Google und bei KI.
          </h3>
          <p className="max-w-[60ch] text-fog">
            SEO für die Suche, <strong className="font-semibold text-paper">GEO</strong> für
            generative Engines, <strong className="font-semibold text-paper">AEO</strong> für
            Antwort-Maschinen und <strong className="font-semibold text-paper">CRO</strong> für
            mehr Abschlüsse. Du bist da, wo dein Kunde sucht.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="card">
          <span className="mb-5 inline-block font-mono text-[11.5px]  tracking-[0.02em] text-signal">
            03 · Performance
          </span>
          <h3 className="mb-4 font-display text-[clamp(22px,2.4vw,30px)] font-medium leading-[1.08] tracking-[-0.005em]">
            Meta-, TikTok- & Google-Ads, die zahlen.
          </h3>
          <p className="max-w-[60ch] text-fog">
            Kreatives, das stoppt, und Kampagnen, die rechnen. Wir steuern nach
            Umsatz statt nach Klicks — mit sauberem Tracking bis zum Abschluss.
          </p>
        </Reveal>

        <Reveal className="card md:col-span-2">
          <span className="mb-5 inline-block font-mono text-[11.5px]  tracking-[0.02em] text-signal">
            04 · Brand & Social
          </span>
          <h3 className="mb-4 font-display text-[clamp(22px,2.4vw,30px)] font-medium leading-[1.08] tracking-[-0.005em]">
            Ein Auftritt, der überall gleich stark wirkt.
          </h3>
          <p className="max-w-[60ch] text-fog">
            Website und Social-Kanäle aus einem Guss: gleiche Sprache, gleiches
            Bildgefühl, gleiches Versprechen. Damit dein Betrieb auf Instagram,
            TikTok und in der Google-Vorschau wie eine echte Marke aussieht — nicht
            wie ein Zufallsfund.
          </p>
          <ul className="dot-list">
            <li>Website-Redesign & Landingpages mit Conversion-Fokus</li>
            <li>Content- & Kanal-Strategie für Instagram, TikTok & LinkedIn</li>
            <li>Einheitliches Corporate Design über alle Touchpoints</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
