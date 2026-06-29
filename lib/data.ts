export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "FAQ", href: "#faq" },
];

export type Service = {
  id: string;
  shortTitle: string;
  title: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    id: "seo",
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
    id: "ads",
    shortTitle: "Ads",
    title: "Performance Ads",
    description:
      "Bezahlte Reichweite mit Plan: Google, Meta und TikTok Ads, die wirklich zu Leads und Umsatz führen.",
    bullets: [
      "Google & YouTube Ads",
      "Meta Ads (Facebook & Instagram)",
      "TikTok Ads für junge Zielgruppen",
    ],
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Was unterscheidet Klickhafen von einer klassischen SEO-Agentur?",
    answer:
      "Klickhafen denkt Sichtbarkeit ganzheitlich: Neben klassischem SEO optimieren wir gezielt für KI-Suchassistenten (GEO) und Answer Engines (AEO) und kombinieren das mit performanten Ads auf Google, Meta und TikTok. So wirst du dort gefunden, wo deine Zielgruppe heute tatsächlich sucht.",
  },
  {
    question: "Was bedeutet GEO (Generative Engine Optimization)?",
    answer:
      "GEO ist die Optimierung von Inhalten für generative KI-Systeme wie ChatGPT, Gemini oder Perplexity. Ziel ist es, dass dein Unternehmen in KI-generierten Antworten erwähnt, zitiert oder empfohlen wird – ein zunehmend wichtiger Kanal neben der klassischen Google-Suche.",
  },
  {
    question: "Was bedeutet AEO (Answer Engine Optimization)?",
    answer:
      "AEO strukturiert deine Inhalte so, dass Suchmaschinen sie direkt als Antwort anzeigen können, etwa in Featured Snippets oder Sprachassistenten. Klare Frage-Antwort-Formate und strukturierte Daten sind dabei zentrale Werkzeuge.",
  },
  {
    question: "Wie lange dauert es, bis ich Ergebnisse sehe?",
    answer:
      "Performance-Ads liefern oft schon innerhalb der ersten Wochen erste Resultate. SEO, GEO und AEO sind nachhaltige Strategien, die in der Regel nach zwei bis vier Monaten spürbar an Fahrt gewinnen und langfristig wachsen.",
  },
  {
    question: "Was kostet die Zusammenarbeit mit Klickhafen?",
    answer:
      "Jedes Business hat andere Ziele, Kanäle und einen anderen Wettbewerb. Deshalb erstellen wir kein Standardpaket, sondern ein individuelles Angebot nach einem kurzen, kostenlosen Erstgespräch. Fordere dazu einfach dein persönliches Angebot über unser Formular an.",
  },
  {
    question: "Für welche Unternehmen ist das Angebot von Klickhafen geeignet?",
    answer:
      "Wir arbeiten mit lokalen Dienstleistern, wachsenden B2B-Unternehmen und E-Commerce-Marken, die online sichtbarer werden und planbar neue Kund:innen gewinnen möchten.",
  },
];
