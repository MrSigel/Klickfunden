export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Zielgruppen", href: "/#zielgruppen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "FAQ", href: "/faq" },
];

export type Service = {
  id: string;
  href: string;
  shortTitle: string;
  title: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    id: "seo",
    href: "/services/seo",
    shortTitle: "SEO",
    title: "Suchmaschinenoptimierung",
    description:
      "Nachhaltige Sichtbarkeit bei Google & Co. – technisch saubere Basis, starke Inhalte, relevante Backlinks.",
    bullets: [
      "Technisches SEO & Core Web Vitals",
      "Content- & Keyword-Strategie",
      "Local SEO für regionale Reichweite",
    ],
  },
  {
    id: "geo",
    href: "/services/geo",
    shortTitle: "GEO",
    title: "Generative Engine Optimization",
    description:
      "Wir positionieren dein Business in den Antworten von ChatGPT, Gemini & Perplexity – dort, wo Kaufentscheidungen heute entstehen.",
    bullets: [
      "Optimierung für KI-Suchassistenten",
      "Strukturierte, zitierfähige Inhalte",
      "Markenpräsenz in KI-Antworten",
    ],
  },
  {
    id: "aeo",
    href: "/services/aeo",
    shortTitle: "AEO",
    title: "Answer Engine Optimization",
    description:
      "Klare Antworten auf echte Fragen. Wir strukturieren deine Inhalte so, dass Suchmaschinen sie direkt als Antwort ausspielen.",
    bullets: [
      "FAQ- & Schema-Strukturierung",
      "Featured Snippets & Direct Answers",
      "Sprachsuche-Optimierung",
    ],
  },
  {
    id: "google-ads",
    href: "/services/google-ads",
    shortTitle: "Google Ads",
    title: "Google Ads Betreuung",
    description:
      "Suchkampagnen mit klarer Keyword-Struktur, relevanten Zielseiten und messbaren Anfragen.",
    bullets: [
      "Suchanzeigen & Kampagnenstruktur",
      "Conversion-Tracking",
      "Optimierung der Kosten pro Anfrage",
    ],
  },
  {
    id: "meta-ads",
    href: "/services/meta-ads",
    shortTitle: "Meta Ads",
    title: "Facebook & Instagram Ads",
    description:
      "Zielgruppenorientierte Kampagnen für Reichweite, Leads, Retargeting und Wiedererkennung.",
    bullets: ["Creative-Tests", "Lead-Kampagnen", "Retargeting"],
  },
  {
    id: "youtube-ads",
    href: "/services/youtube-ads",
    shortTitle: "YouTube",
    title: "YouTube Ads Betreuung",
    description:
      "Videoanzeigen für Aufmerksamkeit, Markenaufbau und erklärungsbedürftige Angebote.",
    bullets: ["Video-Strategie", "Remarketing", "Zielgruppen & Placements"],
  },
  {
    id: "local-seo",
    href: "/services/local-seo",
    shortTitle: "Local SEO",
    title: "Regionale Auffindbarkeit",
    description:
      "Bessere Präsenz in Google Maps, lokalen Suchergebnissen und relevanten Standortanfragen.",
    bullets: ["Google Unternehmensprofil", "Standortseiten", "Lokale Suchanfragen"],
  },
  {
    id: "technical-seo",
    href: "/services/technical-seo",
    shortTitle: "Technical",
    title: "Technical SEO",
    description:
      "Technische Grundlagen für Crawling, Indexierung, Ladezeiten und strukturierte Daten.",
    bullets: ["Core Web Vitals", "Sitemap & Canonicals", "Indexierbarkeit"],
  },
  {
    id: "content-seo",
    href: "/services/content-seo",
    shortTitle: "Content",
    title: "Content SEO",
    description:
      "Inhalte entlang von Suchintentionen, Themenclustern und klaren Antwortformaten.",
    bullets: ["Keyword-Cluster", "Leistungsseiten", "GEO- & AEO-Struktur"],
  },
  {
    id: "conversion",
    href: "/services/conversion-optimierung",
    shortTitle: "CRO",
    title: "Conversion-Optimierung",
    description:
      "Klare Nutzerführung, CTAs und Formulare, die vorhandenen Traffic besser in Anfragen übersetzen.",
    bullets: ["Landingpages", "Formularoptimierung", "Messbare Anfragequote"],
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Was ist SEO?",
    answer:
      "SEO steht für Suchmaschinenoptimierung. Technik, Inhalte und interne Verlinkung werden so verbessert, dass Suchmaschinen relevante Seiten verstehen und für passende Suchanfragen anzeigen können.",
  },
  {
    question: "Was macht Klickfunden?",
    answer:
      "Klickfunden unterstützt Unternehmen bei SEO, GEO, AEO, Google Ads, Meta Ads, YouTube Ads, Local SEO und Conversion-Optimierung, damit sie online besser gefunden werden und mehr qualifizierte Anfragen erhalten.",
  },
  {
    question: "Was bedeutet GEO (Generative Engine Optimization)?",
    answer:
      "GEO steht für Generative Engine Optimization. Dabei werden Inhalte so strukturiert, dass KI-Suchsysteme wie ChatGPT, Gemini oder Perplexity ein Unternehmen besser verstehen und als relevante Quelle einordnen können.",
  },
  {
    question: "Was bedeutet AEO (Answer Engine Optimization)?",
    answer:
      "AEO steht für Answer Engine Optimization. Ziel ist es, Inhalte so klar zu formulieren, dass Suchmaschinen und Antwortsysteme direkte Antworten aus einer Seite ableiten können.",
  },
  {
    question: "Wie lange dauert es, bis ich Ergebnisse sehe?",
    answer:
      "Performance-Ads liefern oft schon innerhalb der ersten Wochen erste Resultate. SEO, GEO und AEO sind nachhaltige Strategien, die in der Regel nach zwei bis vier Monaten spürbar an Fahrt gewinnen und langfristig wachsen.",
  },
  {
    question: "Was kostet die Zusammenarbeit mit Klickfunden?",
    answer:
      "Jedes Business hat andere Ziele, Kanäle und einen anderen Wettbewerb. Deshalb erstellen wir kein Standardpaket, sondern ein individuelles Angebot nach einem kurzen, kostenlosen Erstgespräch. Fordere dazu einfach dein persönliches Angebot über unser Formular an.",
  },
  {
    question: "Für welche Unternehmen ist das Angebot von Klickfunden geeignet?",
    answer:
      "Wir arbeiten mit lokalen Dienstleistern, wachsenden B2B-Unternehmen und E-Commerce-Marken, die online sichtbarer werden und planbar neue Kund:innen gewinnen möchten.",
  },
  {
    question: "Was ist der Unterschied zwischen SEO, GEO und AEO?",
    answer:
      "SEO optimiert für klassische Suchmaschinen wie Google. AEO optimiert Inhalte für direkte Antworten. GEO optimiert Inhalte für KI-Suchsysteme und generative Antworten.",
  },
  {
    question: "Wann sind Google Ads sinnvoll?",
    answer:
      "Google Ads sind sinnvoll, wenn Menschen bereits aktiv nach einer Leistung suchen und kurzfristig qualifizierte Besucher oder Anfragen gewonnen werden sollen.",
  },
  {
    question: "Wann sind Meta Ads sinnvoll?",
    answer:
      "Meta Ads eignen sich besonders für Reichweite, Zielgruppenansprache, Wiedererkennung, Retargeting und Angebote, die visuell oder emotional erklärt werden können.",
  },
  {
    question: "Wann sind YouTube Ads sinnvoll?",
    answer:
      "YouTube Ads sind sinnvoll, wenn ein Angebot visuell erklärt werden muss, Aufmerksamkeit aufgebaut oder eine bereits bekannte Zielgruppe per Retargeting erneut erreicht werden soll.",
  },
  {
    question: "Was ist Local SEO?",
    answer:
      "Local SEO verbessert die Auffindbarkeit eines Unternehmens in regionalen Suchergebnissen, Google Maps und standortbezogenen Suchanfragen.",
  },
  {
    question: "Was ist Conversion-Optimierung?",
    answer:
      "Conversion-Optimierung verbessert Nutzerführung, Vertrauen, CTAs und Formulare, damit mehr passende Besucher den nächsten sinnvollen Schritt bis zur qualifizierten Anfrage gehen.",
  },
  {
    question: "Wie läuft eine Zusammenarbeit ab?",
    answer:
      "Nach einem Erstgespräch analysiert Klickfunden Ziele, Nachfrage und bestehende Kanäle. Daraus entstehen priorisierte Maßnahmen, eine strukturierte Umsetzung und regelmäßige Auswertungen anhand nachvollziehbarer Kennzahlen.",
  },
];
