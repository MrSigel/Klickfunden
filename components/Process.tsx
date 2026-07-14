import { Reveal } from "./Reveal";

const STEPS = [
  {
    no: "01",
    title: "Analyse & Audit",
    text: "Wir röntgen deinen kompletten Auftritt: Bewertungen, Rankings, Anzeigen und Funnel. Am Ende weißt du auf den Euro genau, wo Umsatz liegen bleibt — und warum.",
  },
  {
    no: "02",
    title: "Reputation aufbauen",
    text: "Wir holen echte Fünf-Sterne-Bewertungen aktiv ein, beantworten Kritik souverän und drängen alte Negativ-Einträge nach unten. Dein Schnitt steigt sichtbar — bei Google, Trustpilot & Co.",
  },
  {
    no: "03",
    title: "Sichtbar werden",
    text: "SEO, GEO, AEO und CRO greifen ineinander: Du erscheinst in der Google-Suche, auf der Maps-Karte und in KI-Antworten von ChatGPT & Google — und die Klicks werden zu Anfragen.",
  },
  {
    no: "04",
    title: "Skalieren mit Ads",
    text: "Erst wenn die Basis steht, drehen wir auf: Meta-, TikTok- und Google-Ads, die auf ein starkes Markenbild einzahlen — nicht in ein Loch. Jeder Euro wird getrackt.",
  },
];

export function Process() {
  return (
    <section
      id="prozess"
      className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] py-[clamp(90px,12vw,150px)]"
    >
      <Reveal className="mb-[clamp(48px,6vw,88px)] max-w-[720px]">
        <p className="eyebrow mb-[22px]">Der Weg nach oben</p>
        <h2 className="section-title">
          Vier Schritte vom
          <br />
          Schatten ins Rampenlicht.
        </h2>
      </Reveal>

      <div className="flex flex-col">
        {STEPS.map((s, i) => (
          <Reveal
            key={s.no}
            delay={i * 0.05}
            className="group grid grid-cols-1 items-start gap-[clamp(20px,5vw,64px)] border-t border-line py-10 transition-colors last:border-b hover:bg-[linear-gradient(90deg,rgba(77,240,138,0.03),transparent_60%)] md:grid-cols-[140px_1fr]"
          >
            <span className="pt-0 font-mono text-[15px] tracking-[0.02em] text-signal md:pt-[10px]">
              {s.no}
            </span>
            <div>
              <h3 className="mb-[14px] font-display text-[clamp(24px,3vw,34px)] font-medium tracking-[-0.005em]">
                {s.title}
              </h3>
              <p className="max-w-[52ch] text-fog">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
