const links=[
  ["Kostenlose Sichtbarkeits-Erstprüfung","/kostenlose-erstpruefung","Erste Potenziale für Google, KI-Suche, Local SEO, Ads und Conversion prüfen."],
  ["Was ist GEO?","/fragen/was-ist-geo","Generative Engine Optimization verständlich erklärt."],
  ["Was ist AEO?","/fragen/was-ist-aeo","Direkte Antworten für Such- und Antwortsysteme strukturieren."],
  ["SEO für Vereine","/seo-fuer-vereine","Mitglieder, Sponsoren und Veranstaltungen besser auffindbar machen."],
  ["SEO für Handwerker","/seo-fuer-handwerker","Regionale Sichtbarkeit bei Google und Maps aufbauen."],
  ["SEO für Dienstleister","/seo-fuer-dienstleister","Fachliche Sichtbarkeit, Vertrauen und Anfragewege verbinden."],
] as const;
export default function SeoResources(){return <section className="bg-ink py-20 sm:py-24"><div className="container-page"><span className="eyebrow">Prüfung & Ratgeber</span><h2 className="section-label mt-5">Sichtbarkeit verstehen und erste Potenziale erkennen</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{links.map(([title,href,text])=><a className="admin-panel transition-colors hover:border-marsgreen/50" href={href} key={href}><h3 className="font-display text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-relaxed text-mist-100/80">{text}</p><span className="mt-5 inline-block text-sm font-semibold text-marsgreen">Mehr erfahren →</span></a>)}</div></div></section>}
