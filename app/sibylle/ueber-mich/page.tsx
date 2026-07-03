import type { Metadata } from 'next';
import { CTAButton } from '@/components/sibylle/CTAButton';

export const metadata: Metadata = {
  title: 'Über mich – Sibylle Bergold',
  description: 'Lernen Sie Sibylle Bergold kennen: Mentorin, Coach für Systemaufstellungen und Inhaberin der Deutschen Akademie für Systemaufstellungen in Aschaffenburg.',
};

const milestones = [
  { period: 'Seit 2011', title: 'Eigene Praxis in Aschaffenburg', text: 'Begleitung von Menschen, Paaren, Familien und beruflichen Konstellationen mit systemischer Aufstellungsarbeit.' },
  { period: '2014', title: 'Verbandsarbeit', text: 'Mitgründung des Deutschen Verbandes für Systemaufstellung und Tätigkeit als Finanzvorstand.' },
  { period: 'Heute', title: 'Deutsche Akademie für Systemaufstellungen', text: 'Inhaberin der Akademie, Mentorin und Leiterin von Ausbildungen, Workshops und Seminaren.' },
];

const qualifications = [
  'Ausbildung zur Systemaufstellerin',
  'Ausbildung zur Organisations- und Systemaufstellerin',
  'Hypnoseausbildung',
  'Langjährige Seminar- und Workshop-Leitung',
  'Gründerin eines internationalen Verbandes für Systemaufstellungen und Energiearbeit',
];

export default function UeberMichPage() {
  return (
    <main className="bg-cream text-warmBlack">
      <section className="relative overflow-hidden px-4 pb-24 pt-16 md:px-0 md:pb-32 md:pt-24">
        <div className="absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-sand/25 blur-[110px]" />
        <div className="container relative grid gap-14 lg:grid-cols-[1.05fr_.75fr] lg:items-center">
          <div><p className="eyebrow">Über mich</p><h1 className="editorial mt-8 max-w-3xl text-[clamp(2.8rem,5vw,5.4rem)] leading-[.98]">Ich bin Sibylle Bergold. Mentorin für Menschen, die ihre Geschichte <span className="italic text-deepOlive">neu verstehen</span> möchten.</h1><p className="mt-8 max-w-2xl text-lg leading-9 text-deepOlive/80">Mich bewegt die Frage, warum wir trotz bester Absichten immer wieder in vertrauten Mustern landen – und was möglich wird, wenn verborgene Zusammenhänge sichtbar werden.</p><div className="mt-10"><CTAButton href="mailto:info@sibylle-bergold.de">Persönlich Kontakt aufnehmen</CTAButton></div></div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-[3rem] bg-deepOlive shadow-[0_35px_90px_rgba(31,33,26,.2)]" role="img" aria-label="Porträt von Sibylle Bergold"><div className="absolute inset-8 rounded-[2.3rem] border border-cream/15" /><div className="absolute inset-0 flex items-center justify-center"><span className="editorial text-[9rem] leading-none text-cream/90 md:text-[12rem]">SB</span></div><div className="absolute bottom-8 left-8 right-8 border-t border-cream/15 pt-5 text-center text-xs font-semibold uppercase tracking-[.28em] text-sand">Sibylle Bergold</div></div>
        </div>
      </section>

      <section className="bg-warmBlack px-4 py-20 text-cream md:px-0 md:py-28"><div className="container grid gap-14 lg:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow !text-sand">Mein Weg</p><h2 className="editorial mt-7 text-5xl leading-[.95] md:text-6xl">Vom sicheren Zahlenwerk zur Arbeit mit dem, was sich nicht sofort berechnen lässt.</h2></div><div className="space-y-6 text-lg leading-9 text-cream/70"><p>Bevor ich mich ganz der systemischen Arbeit widmete, war ich Bankkauffrau. Diese Zeit hat meinen Blick für Strukturen, Verantwortung und klare Entscheidungen geprägt.</p><p>Mit der Aufstellungsarbeit öffnete sich ein zweiter Blick: auf Beziehungen, unbewusste Loyalitäten und die Geschichten, die Menschen miteinander verbinden. Seit 2011 führe ich meine eigene Praxis in Aschaffenburg.</p><p>Heute bin ich Inhaberin der Deutschen Akademie für Systemaufstellungen. Als Mentorin begleite ich persönliche Entwicklungsprozesse und vermittle systemische Arbeit in Ausbildungen, Workshops und Seminaren.</p></div></div></section>

      <section className="section-shell"><div className="container"><p className="eyebrow">Stationen</p><div className="mt-12 grid gap-6 md:grid-cols-3">{milestones.map((item) => <article key={item.period} className="premium-panel rounded-[2.2rem] p-8 md:p-10"><span className="text-xs font-bold uppercase tracking-[.22em] text-softGold">{item.period}</span><h2 className="editorial mt-6 text-3xl leading-tight text-deepOlive">{item.title}</h2><p className="mt-5 leading-8 text-deepOlive/70">{item.text}</p></article>)}</div></div></section>

      <section className="bg-sibylleMist px-4 py-20 md:px-0 md:py-28"><div className="container grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Erfahrung & Qualifikation</p><h2 className="editorial mt-7 text-5xl leading-[.95] md:text-6xl">Fundiert gewachsen. Über viele Jahre vertieft.</h2></div><ul className="grid gap-3 sm:grid-cols-2">{qualifications.map((item, index) => <li key={item} className="flex items-start gap-4 rounded-[1.5rem] bg-white/60 p-5"><span className="editorial text-3xl leading-none text-softGold">0{index + 1}</span><span className="pt-1 leading-7 text-deepOlive/80">{item}</span></li>)}</ul></div></section>

      <section className="section-shell"><div className="container rounded-[3rem] bg-deepOlive px-7 py-16 text-center text-cream md:px-16 md:py-24"><p className="eyebrow !text-sand">Meine Haltung</p><h2 className="editorial mx-auto mt-7 max-w-5xl text-5xl leading-[.95] md:text-7xl">Ich sehe nicht nur das Thema, mit dem du kommst. Ich sehe den Menschen und das System, zu dem er gehört.</h2><p className="mx-auto mt-8 max-w-2xl leading-8 text-cream/65">Klarheit entsteht für mich dort, wo Wahrnehmung, Erfahrung und ein respektvoller Blick auf die eigene Geschichte zusammenkommen.</p><div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"><CTAButton href="https://calendly.com/sibylle-bergold/erstgespraech" external className="!bg-cream !text-deepOlive">Erstgespräch buchen</CTAButton><CTAButton href="/sibylle/methode" variant="secondary" className="!border-cream/25 !text-cream">Meine Methode</CTAButton></div></div></section>
    </main>
  );
}
