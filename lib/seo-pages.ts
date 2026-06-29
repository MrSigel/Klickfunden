import type { Metadata } from "next";

export type FaqItem = {
  question: string;
  answer: string;
};

export type SeoPage = {
  path: string;
  category: "Leistung" | "Branche";
  eyebrow: string;
  title: string;
  description: string;
  serviceType: string;
  keywords: string[];
  badges: string[];
  benefits: {
    title: string;
    text: string;
  }[];
  process: {
    title: string;
    text: string;
  }[];
  faq: FaqItem[];
  metadata: Metadata;
};

type SeoPageInput = Omit<SeoPage, "metadata"> & {
  metaTitle: string;
  metaDescription: string;
};

const siteUrl = "https://www.klickfunden.de";

function definePage(page: SeoPageInput): SeoPage {
  const url = `${siteUrl}${page.path}`;

  return {
    ...page,
    metadata: {
      title: page.metaTitle,
      description: page.metaDescription,
      keywords: page.keywords,
      alternates: {
        canonical: page.path,
      },
      openGraph: {
        title: page.metaTitle,
        description: page.metaDescription,
        url,
        siteName: "Klickfunden",
        locale: "de_DE",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: page.metaTitle,
        description: page.metaDescription,
      },
    },
  };
}

export const seoPages = {
  "services-seo": definePage({
    path: "/services/seo",
    category: "Leistung",
    eyebrow: "SEO Agentur",
    title: "SEO, das Nachfrage sichtbar macht",
    metaTitle: "SEO Agentur für bessere Sichtbarkeit bei Google | Klickfunden",
    metaDescription:
      "Klickfunden entwickelt SEO-Strategien für nachhaltige Google-Sichtbarkeit, relevante Rankings und qualifizierte Anfragen.",
    description:
      "Wir verbinden technische Suchmaschinenoptimierung, klare Content-Architektur und Conversion-orientierte Seitenstruktur, damit dein Unternehmen nicht nur gefunden, sondern gewählt wird.",
    serviceType: "Suchmaschinenoptimierung",
    keywords: ["SEO Agentur", "Suchmaschinenoptimierung", "Google Sichtbarkeit", "Google Ranking verbessern", "Klickfunden"],
    badges: ["Technisches SEO", "Content-Cluster", "E-E-A-T", "Lead-Fokus"],
    benefits: [
      {
        title: "Technisches Fundament",
        text: "Indexierung, Core Web Vitals, interne Verlinkung und Crawl-Struktur werden so priorisiert, dass Google deine wichtigsten Seiten schnell versteht.",
      },
      {
        title: "Keyword- und Themenarchitektur",
        text: "Wir bauen Seiten um echte Suchintentionen herum: Informationssuche, Vergleich, lokale Nachfrage und kaufnahe Anfragepunkte.",
      },
      {
        title: "Content mit Antwortqualität",
        text: "Texte, FAQ-Blöcke und semantische Abschnitte werden so erstellt, dass sie auch in KI-Antworten und Snippets verwertbar sind.",
      },
      {
        title: "Messbare Anfragepfade",
        text: "SEO wird mit klaren CTAs, Formularübergängen und Tracking-Logik verbunden, damit Sichtbarkeit in qualifizierte Leads übersetzt wird.",
      },
    ],
    process: [
      {
        title: "SEO-Audit und Suchintention",
        text: "Wir analysieren Technik, Rankings, Wettbewerber und Nachfragecluster, bevor priorisiert wird.",
      },
      {
        title: "Seitenstruktur und Content",
        text: "Leistungsseiten, Ratgeber und FAQ-Elemente werden entlang der wichtigsten Suchmuster aufgebaut.",
      },
      {
        title: "Optimierung und Ausbau",
        text: "Rankings, Nutzerverhalten und Leads werden fortlaufend überprüft und gezielt weiterentwickelt.",
      },
    ],
    faq: [
      {
        question: "Für wen ist SEO mit Klickfunden geeignet?",
        answer:
          "SEO eignet sich für Unternehmen, die planbar über Google gefunden werden möchten: Dienstleister, lokale Betriebe, B2B-Anbieter, E-Commerce-Shops und beratungsintensive Angebote.",
      },
      {
        question: "Wie schnell zeigen sich SEO-Ergebnisse?",
        answer:
          "Erste technische Verbesserungen wirken oft kurzfristig. Stabile Ranking- und Lead-Effekte entstehen meist über mehrere Monate, weil Google Vertrauen, Relevanz und Nutzerverhalten bewertet.",
      },
      {
        question: "Ist SEO auch für KI-Suchen relevant?",
        answer:
          "Ja. Saubere Informationsarchitektur, zitierfähige Inhalte und klare Antworten erhöhen die Chance, dass Inhalte auch von generativen Suchsystemen verstanden und verwendet werden.",
      },
    ],
  }),
  "services-geo": definePage({
    path: "/services/geo",
    category: "Leistung",
    eyebrow: "Generative Engine Optimization",
    title: "GEO für Sichtbarkeit in ChatGPT, Gemini und Perplexity",
    metaTitle: "GEO Agentur für Sichtbarkeit in KI-Suchen | Klickfunden",
    metaDescription:
      "Klickfunden optimiert Inhalte für generative Suchsysteme und KI-Antworten, damit Unternehmen in ChatGPT, Gemini und Perplexity auffindbar werden.",
    description:
      "Generative Engine Optimization macht dein Unternehmen für KI-Systeme verständlich, zitierfähig und empfehlungswürdig. Wir strukturieren Inhalte so, dass sie in Antworten statt nur in Linklisten auftauchen können.",
    serviceType: "Generative Engine Optimization",
    keywords: ["GEO Agentur", "Generative Engine Optimization", "KI-Suche optimieren", "Sichtbarkeit in ChatGPT", "Sichtbarkeit in Gemini", "Sichtbarkeit in Perplexity"],
    badges: ["KI-Suche", "Entitäten", "Zitierfähigkeit", "Markenpräsenz"],
    benefits: [
      {
        title: "Entitäten klar definieren",
        text: "Wir schärfen, wofür dein Unternehmen steht, welche Leistungen es anbietet und welche Belege KI-Systeme dafür lesen können.",
      },
      {
        title: "Antwortfähige Inhaltsmodule",
        text: "Leistungsseiten, FAQ und Vergleichsabschnitte werden so formuliert, dass generative Engines konkrete Antworten daraus ableiten können.",
      },
      {
        title: "Quellen- und Vertrauenssignale",
        text: "Wir stärken Autorität durch klare Fakten, strukturierte Daten, konsistente Markensignale und hilfreiche Belege.",
      },
      {
        title: "GEO-Monitoring",
        text: "Relevante KI-Antworten werden beobachtet, damit Themenlücken, falsche Einordnungen und Chancen sichtbar werden.",
      },
    ],
    process: [
      {
        title: "KI-Sichtbarkeitsanalyse",
        text: "Wir prüfen, ob und wie dein Unternehmen in generativen Antworten erscheint.",
      },
      {
        title: "Entity- und Content-Mapping",
        text: "Marke, Leistungen, Zielgruppen und Nachweise werden als klare Wissensbausteine geplant.",
      },
      {
        title: "Optimierung für Antwortsysteme",
        text: "Inhalte werden präzisiert, strukturiert und mit FAQ- sowie Schema-Elementen ergänzt.",
      },
    ],
    faq: [
      {
        question: "Was ist GEO?",
        answer:
          "GEO steht für Generative Engine Optimization. Ziel ist es, Inhalte so aufzubereiten, dass KI-Suchsysteme wie ChatGPT, Gemini oder Perplexity ein Unternehmen korrekt verstehen, zitieren und empfehlen können.",
      },
      {
        question: "Ersetzt GEO klassisches SEO?",
        answer:
          "Nein. GEO ergänzt SEO. Technische Qualität, starke Inhalte und klare Autorität bleiben wichtig, werden aber zusätzlich auf generative Antwortsysteme ausgerichtet.",
      },
      {
        question: "Welche Inhalte funktionieren für GEO besonders gut?",
        answer:
          "Klare Definitionen, nachvollziehbare Leistungsbeschreibungen, Vergleiche, FAQ-Antworten, strukturierte Daten und belastbare Expertise-Signale sind besonders wertvoll.",
      },
    ],
  }),
  "services-aeo": definePage({
    path: "/services/aeo",
    category: "Leistung",
    eyebrow: "Answer Engine Optimization",
    title: "AEO: Antworten liefern, bevor Wettbewerber gefunden werden",
    metaTitle: "AEO Agentur für direkte Antworten & Sprachsuche | Klickfunden",
    metaDescription:
      "Klickfunden optimiert Websites für Answer Engines, Featured Snippets, KI-Antworten und sprachbasierte Suchanfragen.",
    description:
      "Answer Engine Optimization macht Inhalte so klar, präzise und strukturiert, dass Suchmaschinen und KI-Systeme konkrete Antworten direkt erkennen können.",
    serviceType: "Answer Engine Optimization",
    keywords: ["AEO Agentur", "Answer Engine Optimization", "Featured Snippets", "FAQ SEO", "Sprachsuche"],
    badges: ["FAQPage Schema", "Direct Answers", "Snippet-Fokus", "Voice Search"],
    benefits: [
      {
        title: "Fragencluster statt Textwände",
        text: "Wir identifizieren echte Kundenfragen und ordnen sie nach Kaufphase, Suchintention und Antworttiefe.",
      },
      {
        title: "Klare Antwortformate",
        text: "Absätze, Listen, Definitionen und FAQ-Blöcke werden so geschrieben, dass sie schnell extrahierbar sind.",
      },
      {
        title: "Strukturierte Daten",
        text: "FAQPage, ProfessionalService und weitere passende Schema.org-Elemente helfen Suchsystemen beim Einordnen.",
      },
      {
        title: "Mehr Vertrauen im Entscheidungsprozess",
        text: "AEO beantwortet Einwände früh und führt Nutzer gezielt zum nächsten sinnvollen Schritt.",
      },
    ],
    process: [
      {
        title: "Fragen recherchieren",
        text: "Wir sammeln Suchfragen aus Google, SERPs, Kundengesprächen und branchentypischen Entscheidungsprozessen.",
      },
      {
        title: "Antworten strukturieren",
        text: "Jede Antwort erhält eine klare Aussage, Kontext und einen passenden Folgepfad zur Conversion.",
      },
      {
        title: "Schema einbinden",
        text: "Relevante FAQ- und Service-Daten werden maschinenlesbar in die Seiten integriert.",
      },
    ],
    faq: [
      {
        question: "Was ist der Unterschied zwischen SEO und AEO?",
        answer:
          "SEO optimiert für Rankings in Suchergebnissen. AEO optimiert zusätzlich für direkte Antworten, Featured Snippets, Sprachsuche und KI-generierte Zusammenfassungen.",
      },
      {
        question: "Welche Seiten profitieren von AEO?",
        answer:
          "Leistungsseiten, Branchen-Unterseiten, FAQ-Bereiche, Ratgeber und Vergleichsseiten profitieren besonders, weil dort konkrete Fragen und Entscheidungen zusammenkommen.",
      },
      {
        question: "Warum sind FAQ-Daten wichtig?",
        answer:
          "FAQ-Daten geben Suchmaschinen und KI-Systemen eine klare Frage-Antwort-Struktur. Das erhöht die Chance, dass Inhalte korrekt extrahiert und angezeigt werden.",
      },
    ],
  }),
  "services-google-ads": definePage({
    path: "/services/google-ads",
    category: "Leistung",
    eyebrow: "Google Ads",
    title: "Google Ads für Nachfrage, die jetzt kaufbereit ist",
    metaTitle: "Google Ads Agentur für qualifizierte Anfragen | Klickfunden",
    metaDescription:
      "Klickfunden plant und optimiert Google Ads Kampagnen für B2B, lokale Dienstleister und wachstumsorientierte Unternehmen.",
    description:
      "Google Ads Kampagnen erstellen lassen bedeutet bei Klickfunden: sauber getrennte Keywords, klare Suchanzeigen, relevante Landingpages, Conversion Tracking und ein Fokus auf qualifizierte Leads statt Budgetstreuverlust.",
    serviceType: "Google Ads Management",
    keywords: ["Google Ads Agentur", "SEA Agentur", "Google Werbung", "Lead Kampagnen", "Performance Marketing"],
    badges: ["Search Ads", "Landingpages", "Conversion Tracking", "Budgetsteuerung"],
    benefits: [
      {
        title: "Suchintention vor Keyword-Menge",
        text: "Kampagnen werden nach Kaufnähe, Branche, Region und Angebotslogik segmentiert.",
      },
      {
        title: "Anzeigen mit klarer Botschaft",
        text: "Wir formulieren Anzeigen, die Qualifikation, Vertrauen und Nutzen direkt im Suchmoment vermitteln.",
      },
      {
        title: "Landingpage-Abgleich",
        text: "Anzeige, Keyword und Zielseite werden konsequent aufeinander abgestimmt, damit Klicks nicht versanden.",
      },
      {
        title: "Laufende Optimierung",
        text: "Suchbegriffe, Gebote, Assets und Conversion-Daten werden regelmäßig geprüft und verbessert.",
      },
    ],
    process: [
      {
        title: "Kampagnenstruktur planen",
        text: "Wir definieren Suchcluster, Regionen, Ausschlüsse und Conversion-Ziele.",
      },
      {
        title: "Anzeigen und Zielseiten verbinden",
        text: "Jede Kampagne erhält eine passende Aussage und einen klaren Anfragepfad.",
      },
      {
        title: "Skalieren nach Qualität",
        text: "Budget wird dort erhöht, wo Leads, Abschlusschancen und Suchintention zusammenpassen.",
      },
    ],
    faq: [
      {
        question: "Wann lohnen sich Google Ads?",
        answer:
          "Google Ads lohnen sich, wenn bereits aktive Nachfrage existiert und Nutzer nach konkreten Leistungen, Produkten oder Lösungen suchen.",
      },
      {
        question: "Wie reduziert Klickfunden Streuverluste?",
        answer:
          "Durch genaue Keyword-Struktur, negative Keywords, regionale Eingrenzung, klare Anzeigen und Landingpages, die zur Suchintention passen.",
      },
      {
        question: "Kann Google Ads mit SEO kombiniert werden?",
        answer:
          "Ja. Ads liefern kurzfristige Nachfrage, während SEO langfristig organische Sichtbarkeit aufbaut. Zusammen entsteht ein stabilerer Akquise-Mix.",
      },
    ],
  }),
  "services-meta-ads": definePage({
    path: "/services/meta-ads",
    category: "Leistung",
    eyebrow: "Meta Ads",
    title: "Meta Ads, die Aufmerksamkeit in Anfragen verwandeln",
    metaTitle: "Meta Ads Agentur für Facebook & Instagram | Klickfunden",
    metaDescription:
      "Klickfunden entwickelt Meta Ads Kampagnen für Reichweite, Leads und Retargeting auf Facebook und Instagram.",
    description:
      "Meta Ads funktionieren, wenn Zielgruppe, Creative, Angebot und Funnel zusammenpassen. Wir entwickeln Kampagnen, die nicht nur Reichweite erzeugen, sondern konkrete Nachfrage aufbauen.",
    serviceType: "Meta Ads Management",
    keywords: ["Meta Ads Agentur", "Facebook Ads", "Instagram Ads", "Social Ads", "Leadgenerierung"],
    badges: ["Facebook Ads", "Instagram Ads", "Creatives", "Retargeting"],
    benefits: [
      {
        title: "Zielgruppen sauber segmentieren",
        text: "Wir trennen kalte Zielgruppen, warme Kontakte und Retargeting-Signale, damit Botschaften zum Kontext passen.",
      },
      {
        title: "Creative-Testing",
        text: "Anzeigenmotive, Hooks und Angebote werden systematisch getestet, statt auf einzelne Bauchgefühl-Kampagnen zu setzen.",
      },
      {
        title: "Lead-Funnel statt Einzelanzeige",
        text: "Kampagnen führen Nutzer von Aufmerksamkeit zu Vertrauen und anschließend zur Anfrage.",
      },
      {
        title: "Performance verständlich machen",
        text: "Wir bewerten nicht nur Klickpreise, sondern Leadqualität, Formularraten und echte Geschäftschancen.",
      },
    ],
    process: [
      {
        title: "Angebot und Zielgruppe schärfen",
        text: "Wir definieren, warum jemand jetzt reagieren sollte und welche Einwände vorher beantwortet werden müssen.",
      },
      {
        title: "Kreative Varianten entwickeln",
        text: "Mehrere Hooks, Bildwelten und Textansätze werden auf echte Resonanz getestet.",
      },
      {
        title: "Retargeting aufbauen",
        text: "Interessenten werden mit relevanten Folgeargumenten zurück in den Anfrageprozess geführt.",
      },
    ],
    faq: [
      {
        question: "Für welche Unternehmen eignen sich Meta Ads?",
        answer:
          "Meta Ads eignen sich für Unternehmen, die erklärbare Angebote, lokale Dienstleistungen, visuelle Leistungen oder wiederkehrende Nachfrage mit gezielter Ansprache bewerben möchten.",
      },
      {
        question: "Sind Meta Ads besser als Google Ads?",
        answer:
          "Nicht besser, sondern anders. Google Ads fangen aktive Nachfrage ab, Meta Ads erzeugen Aufmerksamkeit und bauen Nachfrage über Zielgruppen und Creatives auf.",
      },
      {
        question: "Warum ist Creative-Testing wichtig?",
        answer:
          "Weil bei Social Ads die Anzeige selbst oft der wichtigste Performance-Hebel ist. Unterschiedliche Hooks und Motive zeigen, welche Botschaft wirklich wirkt.",
      },
    ],
  }),
  "services-youtube-ads": definePage({
    path: "/services/youtube-ads",
    category: "Leistung",
    eyebrow: "YouTube Ads",
    title: "YouTube Ads für erklärungsstarke Angebote",
    metaTitle: "YouTube Ads Betreuung für Sichtbarkeit & Leads | Klickfunden",
    metaDescription:
      "Klickfunden plant YouTube Ads Kampagnen für Markenaufbau, Nachfragegenerierung und Performance-orientierte Video-Funnels.",
    description:
      "YouTube Ads verbinden Reichweite mit Such- und Interessenintention. Wir entwickeln Video-Kampagnen, die komplexe Leistungen verständlich machen und Vertrauen vor der Anfrage aufbauen.",
    serviceType: "YouTube Ads Management",
    keywords: ["YouTube Ads Agentur", "Video Ads", "YouTube Werbung", "Video Funnel", "Performance Video"],
    badges: ["Video Funnel", "Awareness", "Retargeting", "Lead-Pfade"],
    benefits: [
      {
        title: "Botschaft in Sekunden klären",
        text: "Die ersten Sekunden entscheiden. Wir schärfen Hook, Nutzenversprechen und Zielgruppenansprache.",
      },
      {
        title: "Kampagnen nach Funnel-Phase",
        text: "Awareness, Consideration und Retargeting werden mit jeweils passenden Videoformaten bespielt.",
      },
      {
        title: "Zielseiten für Video-Traffic",
        text: "YouTube-Nutzer brauchen klare Folgeargumente und einen leichten Anfrageweg auf der Zielseite.",
      },
      {
        title: "Lernen aus Signalen",
        text: "View Rates, Interaktionen und Conversion-Daten zeigen, welche Botschaft Vertrauen aufbaut.",
      },
    ],
    process: [
      {
        title: "Video-Strategie entwickeln",
        text: "Wir definieren Zielgruppe, Einwand, Angebot und passenden Videoaufbau.",
      },
      {
        title: "Kampagnen und Zielgruppen aufsetzen",
        text: "Placements, Keywords, Interessen und Remarketing werden strukturiert kombiniert.",
      },
      {
        title: "Performance auswerten",
        text: "Video- und Lead-Signale fließen in Creatives, Zielgruppen und Landingpages zurück.",
      },
    ],
    faq: [
      {
        question: "Wann sind YouTube Ads sinnvoll?",
        answer:
          "YouTube Ads sind sinnvoll, wenn ein Angebot erklärungsbedürftig ist, Vertrauen aufgebaut werden muss oder eine Marke früh im Entscheidungsprozess präsent sein soll.",
      },
      {
        question: "Brauche ich dafür professionelles Videomaterial?",
        answer:
          "Professionelles Material hilft, ist aber nicht immer zwingend. Entscheidend sind klare Botschaft, verständlicher Aufbau und ein glaubwürdiger Auftritt.",
      },
      {
        question: "Können YouTube Ads Leads erzeugen?",
        answer:
          "Ja, besonders in Kombination mit Retargeting und passenden Landingpages. Häufig stärken sie außerdem die Wirkung von Google Ads und SEO.",
      },
    ],
  }),
  "services-local-seo": definePage({
    path: "/services/local-seo",
    category: "Leistung",
    eyebrow: "Local SEO",
    title: "Local SEO für regionale Nachfrage",
    metaTitle: "Local SEO Agentur für Google Maps & regionale Sichtbarkeit | Klickfunden",
    metaDescription:
      "Klickfunden optimiert lokale Sichtbarkeit in Google Maps, regionalen Suchergebnissen und standortbezogenen Anfragepfaden.",
    description:
      "Lokale Suchanfragen sind oft kaufnah. Wir optimieren Google Unternehmensprofil, Standortseiten und regionale Inhalte, damit dein Betrieb in der Nähe sichtbar und vertrauenswürdig erscheint.",
    serviceType: "Local SEO",
    keywords: ["Local SEO", "Google Maps Optimierung", "regionale Sichtbarkeit", "Google Unternehmensprofil", "lokale SEO Agentur"],
    badges: ["Google Maps", "Standortseiten", "Bewertungen", "lokale Leads"],
    benefits: [
      {
        title: "Google Unternehmensprofil stärken",
        text: "Kategorien, Leistungen, Bilder, Beiträge und Bewertungslogik werden auf lokale Suchmuster abgestimmt.",
      },
      {
        title: "Regionale Landingpages",
        text: "Standorte, Einzugsgebiete und Leistungen werden mit klarer Suchintention verbunden.",
      },
      {
        title: "Vertrauenssignale sichtbar machen",
        text: "Bewertungen, Referenzen, Leistungen und lokale Nachweise helfen bei der Entscheidung.",
      },
      {
        title: "Anfragen leichter machen",
        text: "Kontaktwege, Telefonnummern, Formularpfade und mobile Nutzerführung werden konsequent vereinfacht.",
      },
    ],
    process: [
      {
        title: "Lokale Nachfrage analysieren",
        text: "Wir prüfen Suchbegriffe, Wettbewerber, Karten-Ergebnisse und regionale Chancen.",
      },
      {
        title: "Profil und Seiten optimieren",
        text: "Google Unternehmensprofil und Website werden konsistent auf Leistungen und Orte ausgerichtet.",
      },
      {
        title: "Bewertungen und Inhalte ausbauen",
        text: "Relevante Signale werden regelmäßig ergänzt und gepflegt.",
      },
    ],
    faq: [
      {
        question: "Was ist Local SEO?",
        answer:
          "Local SEO optimiert die Sichtbarkeit für standortbezogene Suchanfragen, zum Beispiel in Google Maps, im lokalen Suchpaket und auf regionalen Leistungsseiten.",
      },
      {
        question: "Welche Branchen profitieren von Local SEO?",
        answer:
          "Handwerker, Ärzte, Pflegeanbieter, Kanzleien, Immobilienmakler, Gastronomie und lokale Dienstleister profitieren besonders von regionaler Sichtbarkeit.",
      },
      {
        question: "Ist das Google Unternehmensprofil wichtig?",
        answer:
          "Ja. Es ist einer der wichtigsten Kontaktpunkte in der lokalen Suche und beeinflusst Vertrauen, Klicks, Anrufe und Routenanfragen.",
      },
    ],
  }),
  "services-technical-seo": definePage({
    path: "/services/technical-seo",
    category: "Leistung",
    eyebrow: "Technical SEO",
    title: "Technisches SEO für saubere Indexierung",
    metaTitle: "Technical SEO für Crawling, Indexierung & Ladezeiten | Klickfunden",
    metaDescription:
      "Klickfunden prüft und optimiert technische SEO-Grundlagen: Indexierung, Core Web Vitals, Crawling, Struktur und Performance.",
    description:
      "Technisches SEO sorgt dafür, dass Suchmaschinen deine wichtigsten Inhalte effizient crawlen, verstehen und bewerten können. Wir priorisieren technische Arbeit nach Ranking- und Business-Wirkung.",
    serviceType: "Technical SEO",
    keywords: ["Technical SEO", "SEO Audit", "Core Web Vitals", "Crawl Optimierung", "Indexierung"],
    badges: ["Crawling", "Indexierung", "Performance", "Struktur"],
    benefits: [
      {
        title: "Crawl-Budget sinnvoll nutzen",
        text: "Wichtige Seiten werden leichter erreichbar, während irrelevante oder doppelte URLs reduziert werden.",
      },
      {
        title: "Core Web Vitals verbessern",
        text: "Ladezeit, Stabilität und Interaktion werden mit Blick auf Nutzererlebnis und Suchmaschinen bewertet.",
      },
      {
        title: "Indexierung kontrollieren",
        text: "Noindex, Canonicals, Sitemaps und interne Links werden auf Konsistenz geprüft.",
      },
      {
        title: "Technik verständlich priorisieren",
        text: "Du erhältst keine lange Fehlerliste, sondern konkrete Prioritäten nach Auswirkung und Aufwand.",
      },
    ],
    process: [
      {
        title: "Technischen Crawl durchführen",
        text: "Wir prüfen Statuscodes, Metadaten, interne Links, Canonicals, Weiterleitungen und Indexsignale.",
      },
      {
        title: "Performance und UX prüfen",
        text: "Core Web Vitals und mobile Darstellung werden in die Bewertung einbezogen.",
      },
      {
        title: "Priorisierte Umsetzung begleiten",
        text: "Empfehlungen werden so formuliert, dass Entwicklung, Redaktion und Marketing sie umsetzen können.",
      },
    ],
    faq: [
      {
        question: "Wann braucht eine Website technisches SEO?",
        answer:
          "Technisches SEO ist wichtig bei Relaunches, sinkenden Rankings, vielen Seiten, langsamer Ladezeit, Indexierungsproblemen oder unklarer Seitenstruktur.",
      },
      {
        question: "Sind Core Web Vitals rankingrelevant?",
        answer:
          "Core Web Vitals sind ein Qualitäts- und Nutzererlebnis-Signal. Sie ersetzen keine relevanten Inhalte, können aber die Gesamtperformance einer Seite verbessern.",
      },
      {
        question: "Was liefert ein Technical SEO Audit?",
        answer:
          "Ein gutes Audit liefert konkrete technische Probleme, deren Auswirkung und eine priorisierte Reihenfolge für die Umsetzung.",
      },
    ],
  }),
  "services-content-seo": definePage({
    path: "/services/content-seo",
    category: "Leistung",
    eyebrow: "Content SEO",
    title: "Content SEO für Themenführerschaft und Leads",
    metaTitle: "Content SEO für Suchintention, Themencluster & Leads | Klickfunden",
    metaDescription:
      "Klickfunden entwickelt Content-SEO-Strategien mit Themenclustern, Leistungsseiten, FAQ-Struktur und conversionstarken Inhalten.",
    description:
      "Content SEO macht Nachfrage sichtbar, beantwortet Einwände und führt Nutzer zur Anfrage. Wir planen Inhalte nicht als Blog-Füllmaterial, sondern als systematische Sichtbarkeitsarchitektur.",
    serviceType: "Content SEO",
    keywords: ["Content SEO", "SEO Texte", "Keyword-Cluster", "Suchintention", "Ratgeberseiten", "SEO Content Agentur"],
    badges: ["Themencluster", "SEO-Texte", "FAQ-Struktur", "Conversion"],
    benefits: [
      {
        title: "Themen statt Einzelkeywords",
        text: "Wir bauen Cluster, die Hauptleistungen, Unterfragen und Entscheidungsphasen sinnvoll verbinden.",
      },
      {
        title: "Texte mit klarer Suchintention",
        text: "Jede Seite beantwortet eine konkrete Nachfrage und führt Nutzer zum nächsten Schritt.",
      },
      {
        title: "AEO-fähige Struktur",
        text: "Definitionen, FAQ, Listen und präzise Antworten erhöhen die Nutzbarkeit für KI- und Antwortsysteme.",
      },
      {
        title: "Interne Verlinkung mit Plan",
        text: "Leistungsseiten, Ratgeber und Brancheninhalte stärken sich gegenseitig.",
      },
    ],
    process: [
      {
        title: "Themenlandkarte erstellen",
        text: "Wir ordnen Suchbegriffe nach Nachfrage, Intent, Wettbewerb und Business-Relevanz.",
      },
      {
        title: "Seitenbriefings schreiben",
        text: "Jede Seite erhält klare H1, Struktur, Fragen, Keywords und Conversion-Ziel.",
      },
      {
        title: "Content laufend verbessern",
        text: "Rankingdaten und Nutzerverhalten zeigen, welche Inhalte erweitert oder geschärft werden müssen.",
      },
    ],
    faq: [
      {
        question: "Was unterscheidet Content SEO von normalen Website-Texten?",
        answer:
          "Content SEO verbindet Suchintention, fachliche Tiefe, klare Struktur und Conversion-Ziel. Es geht nicht nur um schöne Texte, sondern um auffindbare Antworten.",
      },
      {
        question: "Braucht jedes Unternehmen einen Blog?",
        answer:
          "Nein. Oft sind starke Leistungsseiten, Branchenunterseiten und FAQ-Bereiche wichtiger als ein klassischer Blog.",
      },
      {
        question: "Wie wird Content für KI-Suche optimiert?",
        answer:
          "Durch klare Definitionen, präzise Antworten, strukturierte Abschnitte, nachvollziehbare Expertise und konsistente Entitätsinformationen.",
      },
    ],
  }),
  "services-conversion-optimierung": definePage({
    path: "/services/conversion-optimierung",
    category: "Leistung",
    eyebrow: "Conversion Optimierung",
    title: "Mehr Anfragen aus bestehender Sichtbarkeit",
    metaTitle: "Conversion-Optimierung für mehr Anfragen | Klickfunden",
    metaDescription:
      "Klickfunden optimiert Landingpages, CTAs und Nutzerführung, damit SEO- und Ads-Traffic mehr qualifizierte Anfragen erzeugt.",
    description:
      "Sichtbarkeit ist nur der erste Schritt. Conversion-Optimierung verbessert Anfragequote, CTA-Struktur, Nutzerführung, Formularoptimierung und Landingpage-Optimierung auf einer messbaren Grundlage.",
    serviceType: "Conversion Rate Optimization",
    keywords: ["Conversion Optimierung", "Landingpage Optimierung", "CRO", "Leadgenerierung", "CTA Optimierung"],
    badges: ["Landingpages", "CTA-Logik", "Trust-Signale", "Lead-Qualität"],
    benefits: [
      {
        title: "Klare Wertversprechen",
        text: "Nutzer müssen sofort verstehen, warum dein Angebot relevant ist und was der nächste Schritt bringt.",
      },
      {
        title: "Reibung reduzieren",
        text: "Formulare, Buttons, mobile Layouts und Informationshierarchie werden auf einfache Entscheidungen ausgerichtet.",
      },
      {
        title: "Vertrauen sichtbar machen",
        text: "Referenzen, Belege, Prozesse und klare Erwartungen stärken die Anfragebereitschaft.",
      },
      {
        title: "Traffic besser verwerten",
        text: "SEO und Ads werden profitabler, wenn bestehende Besucher häufiger zu qualifizierten Kontakten werden.",
      },
    ],
    process: [
      {
        title: "Seitenfluss analysieren",
        text: "Wir prüfen Einstieg, Scrolltiefe, CTA-Positionen, Einwände und mobile Nutzung.",
      },
      {
        title: "Botschaft schärfen",
        text: "Headlines, Nutzenargumente und Vertrauenselemente werden verständlicher geordnet.",
      },
      {
        title: "Anfrageweg optimieren",
        text: "CTA, Formular und Folgekommunikation werden auf weniger Reibung und bessere Qualität ausgerichtet.",
      },
    ],
    faq: [
      {
        question: "Wann lohnt sich Conversion Optimierung?",
        answer:
          "Sie lohnt sich, wenn bereits Besucher über SEO, Ads oder Empfehlungen kommen, aber zu wenige davon Kontakt aufnehmen oder qualifiziert anfragen.",
      },
      {
        question: "Was wird bei einer Landingpage optimiert?",
        answer:
          "Headline, Nutzenargumente, Struktur, Trust-Signale, CTA, Formular, mobile Darstellung und Einwandbehandlung werden systematisch geprüft.",
      },
      {
        question: "Ist Conversion Optimierung auch für SEO wichtig?",
        answer:
          "Ja. Eine bessere Nutzerführung hilft nicht nur bei Leads, sondern kann auch Nutzersignale und Inhaltsqualität stärken.",
      },
    ],
  }),
  "industries-handwerker": definePage({
    path: "/industries/handwerker",
    category: "Branche",
    eyebrow: "Marketing für Handwerker",
    title: "SEO, Local SEO und Ads für Handwerksbetriebe",
    metaTitle: "Online-Marketing für Handwerker: SEO, Ads & Local SEO | Klickfunden",
    metaDescription:
      "Klickfunden macht Handwerksbetriebe regional sichtbar: Google Maps, lokale SEO, Leistungsseiten und Ads für qualifizierte Anfragen.",
    description:
      "Ob Sanitär, Elektro, Dach, Gartenbau oder Ausbau: Wir helfen Handwerksbetrieben, in ihrer Region gefunden zu werden und planbar bessere Anfragen zu erhalten.",
    serviceType: "Digitalmarketing für Handwerker",
    keywords: ["SEO für Handwerker", "Handwerker Marketing", "Google Ads Handwerker", "Local SEO Handwerker", "Google Maps Handwerker"],
    badges: ["Regionale Leads", "Google Maps", "Notdienst-SEO", "Anfragequalität"],
    benefits: [
      {
        title: "Sichtbarkeit im Einzugsgebiet",
        text: "Leistungs- und Standortseiten zeigen Google, für welche Arbeiten und Regionen dein Betrieb relevant ist.",
      },
      {
        title: "Google Maps professionell nutzen",
        text: "Das Unternehmensprofil wird auf Leistungen, Bewertungen, Bilder und lokale Suchmuster optimiert.",
      },
      {
        title: "Anfragen besser qualifizieren",
        text: "Seiten beantworten typische Fragen zu Leistung, Ablauf und Kontakt, bevor der Kunde anruft.",
      },
      {
        title: "Ads für dringende Nachfrage",
        text: "Google Ads können kaufnahe Suchanfragen abfangen, während SEO langfristig regionale Autorität aufbaut.",
      },
    ],
    process: [
      {
        title: "Leistungen und Orte priorisieren",
        text: "Wir klären, welche Arbeiten wirtschaftlich wichtig sind und wo neue Aufträge entstehen sollen.",
      },
      {
        title: "Lokale Suchstruktur aufbauen",
        text: "Website, Google Profil und Anzeigen werden konsistent auf Region und Leistung ausgerichtet.",
      },
      {
        title: "Anfragen messbar verbessern",
        text: "Anrufwege, Formulare und Kampagnen werden auf Qualität statt bloße Klickmenge optimiert.",
      },
    ],
    faq: [
      {
        question: "Warum brauchen Handwerker Local SEO?",
        answer:
          "Viele Kunden suchen lokal und kaufnah, etwa nach einer konkreten Leistung in der Nähe. Local SEO hilft, genau in diesen Momenten sichtbar zu werden.",
      },
      {
        question: "Sind Google Ads für Handwerker sinnvoll?",
        answer:
          "Ja, besonders für dringende oder wirtschaftlich attraktive Leistungen. Wichtig sind regionale Eingrenzung, passende Keywords und klare Zielseiten.",
      },
      {
        question: "Welche Inhalte braucht eine Handwerker-Website?",
        answer:
          "Wichtige Leistungsseiten, regionale Informationen, Referenzen, Bewertungen, FAQ und einfache Kontaktmöglichkeiten sind zentral.",
      },
    ],
  }),
  "industries-dienstleister": definePage({
    path: "/industries/dienstleister",
    category: "Branche",
    eyebrow: "Marketing für Dienstleister",
    title: "Mehr qualifizierte Anfragen für Dienstleister",
    metaTitle: "SEO & Ads für Dienstleister | Klickfunden",
    metaDescription:
      "Klickfunden entwickelt SEO-, GEO-, AEO- und Ads-Strategien für Dienstleister, die online sichtbarer und gezielter gefunden werden möchten.",
    description:
      "Dienstleistungen werden oft über Vertrauen, Expertise und klare Problemlösung verkauft. Wir machen diese Signale sichtbar und führen Interessenten strukturiert zur Anfrage.",
    serviceType: "Digitalmarketing für Dienstleister",
    keywords: ["SEO für Dienstleister", "Online Marketing Dienstleister", "Leadgenerierung Dienstleister", "Google Ads Dienstleister", "B2B Dienstleister SEO"],
    badges: ["Expertise sichtbar", "Lead-Funnel", "AEO", "B2B-Fokus"],
    benefits: [
      {
        title: "Leistung verständlich positionieren",
        text: "Komplexe Angebote werden so erklärt, dass Zielkunden Relevanz und nächsten Schritt schnell erkennen.",
      },
      {
        title: "Suchintentionen abdecken",
        text: "Wir planen Seiten für Probleme, Leistungen, Branchen und Entscheidungskriterien.",
      },
      {
        title: "Vertrauen vor der Anfrage aufbauen",
        text: "Case-Argumente, Prozesse, FAQ und klare Erwartungen reduzieren Unsicherheit.",
      },
      {
        title: "SEO und Ads verbinden",
        text: "Organische Sichtbarkeit und Performance-Kampagnen werden auf denselben Anfragepfad ausgerichtet.",
      },
    ],
    process: [
      {
        title: "Angebot und Zielkunden schärfen",
        text: "Wir übersetzen deine Leistung in Suchthemen, Nutzenargumente und Entscheidungsfragen.",
      },
      {
        title: "Seitenarchitektur entwickeln",
        text: "Leistungs-, Branchen- und FAQ-Seiten werden für SEO, GEO und AEO strukturiert.",
      },
      {
        title: "Lead-Pfade optimieren",
        text: "CTAs, Formulare und Inhalte werden auf qualifizierte Gespräche ausgerichtet.",
      },
    ],
    faq: [
      {
        question: "Wie gewinnen Dienstleister über SEO mehr Anfragen?",
        answer:
          "Durch Seiten, die konkrete Probleme, Leistungen und Entscheidungskriterien abdecken und Vertrauen vor dem Erstkontakt aufbauen.",
      },
      {
        question: "Warum sind FAQ für Dienstleister wichtig?",
        answer:
          "FAQ beantworten Einwände und machen Expertise maschinenlesbar. Das unterstützt SEO, AEO und generative Suchsysteme.",
      },
      {
        question: "Kann Klickfunden auch erklärungsbedürftige Leistungen vermarkten?",
        answer:
          "Ja. Gerade erklärungsbedürftige Dienstleistungen profitieren von klarer Struktur, Answer-Content und einem starken Lead-Funnel.",
      },
    ],
  }),
  "industries-pflege": definePage({
    path: "/industries/pflege",
    category: "Branche",
    eyebrow: "Marketing für Pflege & Pflegedienste",
    title: "Digitale Auffindbarkeit für Pflegeanbieter",
    metaTitle: "SEO & Google Ads für Pflegedienste | Klickfunden",
    metaDescription:
      "Klickfunden unterstützt Pflegedienste mit Local SEO, Google-Sichtbarkeit, AEO-Inhalten und Kampagnen für regionale Anfragen.",
    description:
      "Pflegeentscheidungen sind sensibel, lokal und vertrauensbasiert. Wir helfen Pflegediensten, Pflegeeinrichtungen und Beratungsangeboten, online verständlich und auffindbar zu werden.",
    serviceType: "Digitalmarketing für Pflegedienste",
    keywords: ["SEO Pflegedienst", "Marketing Pflege", "Local SEO Pflegedienst", "Google Ads Pflege", "Pflegeanbieter sichtbar machen"],
    badges: ["Regional", "Vertrauen", "FAQ-Antworten", "Angehörige erreichen"],
    benefits: [
      {
        title: "Lokale Pflege-Suchanfragen abdecken",
        text: "Standort- und Leistungsseiten beantworten, welche Pflegeleistungen in welchem Gebiet angeboten werden.",
      },
      {
        title: "Vertrauen und Klarheit vermitteln",
        text: "Abläufe, Leistungen, Kostenfragen und Kontaktwege werden verständlich erklärt.",
      },
      {
        title: "Angehörige und Betroffene erreichen",
        text: "Inhalte werden auf die Fragen ausgerichtet, die vor einer Kontaktaufnahme wirklich entstehen.",
      },
      {
        title: "Google Profil und Website verbinden",
        text: "Google Unternehmensprofil, Bewertungen und Website-Inhalte werden konsistent gepflegt.",
      },
    ],
    process: [
      {
        title: "Leistungen und Einzugsgebiet erfassen",
        text: "Wir klären, welche Pflegeleistungen sichtbar werden sollen und welche Orte relevant sind.",
      },
      {
        title: "Antwortseiten aufbauen",
        text: "Häufige Fragen zu Pflege, Beratung und Kontakt werden SEO- und AEO-fähig strukturiert.",
      },
      {
        title: "Kontaktwege vereinfachen",
        text: "Formulare, Telefonnummern und CTA-Elemente werden für schnelle Orientierung optimiert.",
      },
    ],
    faq: [
      {
        question: "Warum ist SEO für Pflegedienste wichtig?",
        answer:
          "Viele Angehörige suchen kurzfristig und regional nach Unterstützung. SEO hilft, bei relevanten Pflegefragen und lokalen Suchanfragen sichtbar zu werden.",
      },
      {
        question: "Welche Inhalte braucht ein Pflegedienst online?",
        answer:
          "Wichtige Inhalte sind Leistungen, Einzugsgebiet, Ablauf, Kostenorientierung, FAQ, Kontaktwege und Vertrauenssignale wie Team, Bewertungen oder Zertifikate.",
      },
      {
        question: "Sind Ads für Pflegeanbieter sinnvoll?",
        answer:
          "Ads können sinnvoll sein, wenn sie verantwortungsvoll eingesetzt werden und auf klare, hilfreiche Informationen statt aggressive Versprechen führen.",
      },
    ],
  }),
  "industries-aerzte": definePage({
    path: "/industries/aerzte",
    category: "Branche",
    eyebrow: "SEO für Ärzte & Praxen",
    title: "Mehr Sichtbarkeit für Praxen und medizinische Angebote",
    metaTitle: "SEO & Local SEO für Ärzte und Praxen | Klickfunden",
    metaDescription:
      "Klickfunden optimiert lokale Sichtbarkeit, Praxis-Websites und medizinische FAQ-Inhalte für Ärzte und Gesundheitsanbieter.",
    description:
      "Patienten suchen lokal, vertrauensbasiert und häufig mit konkreten Fragen. Wir strukturieren Praxis-Websites so, dass Leistungen, Standort und Expertise verständlich sichtbar werden.",
    serviceType: "Digitalmarketing für Arztpraxen",
    keywords: ["SEO Arztpraxis", "Local SEO Ärzte", "Praxismarketing", "SEO für Ärzte", "Google Sichtbarkeit Praxis"],
    badges: ["Praxis-SEO", "Local SEO", "Patientenfragen", "Vertrauen"],
    benefits: [
      {
        title: "Leistungen auffindbar machen",
        text: "Behandlungsangebote werden klar beschrieben und auf relevante lokale Suchmuster ausgerichtet.",
      },
      {
        title: "Patientenfragen beantworten",
        text: "FAQ-Abschnitte geben Orientierung, ohne medizinische Beratung zu ersetzen.",
      },
      {
        title: "Google Profil verbessern",
        text: "Öffnungszeiten, Kategorien, Bewertungen und Standortdaten werden konsistent gepflegt.",
      },
      {
        title: "Terminwege erleichtern",
        text: "Kontakt- und Buchungswege werden prominent und mobil nutzbar eingebunden.",
      },
    ],
    process: [
      {
        title: "Praxisangebot analysieren",
        text: "Wir erfassen Fachgebiete, Leistungen, Standort und typische Patientenfragen.",
      },
      {
        title: "SEO-Struktur planen",
        text: "Leistungsseiten, lokale Signale und FAQ-Bereiche werden sauber gegliedert.",
      },
      {
        title: "Sichtbarkeit pflegen",
        text: "Inhalte und lokale Profile werden regelmäßig auf Aktualität und Nachfrage geprüft.",
      },
    ],
    faq: [
      {
        question: "Dürfen Arztpraxen SEO nutzen?",
        answer:
          "Ja. Wichtig ist eine sachliche, vertrauenswürdige und rechtlich angemessene Darstellung der Leistungen und Informationen.",
      },
      {
        question: "Was bringt Local SEO für Ärzte?",
        answer:
          "Local SEO hilft, bei regionalen Suchanfragen und in Google Maps sichtbar zu werden, wenn Patienten eine Praxis in der Nähe suchen.",
      },
      {
        question: "Welche Inhalte sind für Praxis-Websites wichtig?",
        answer:
          "Standort, Leistungen, Team, Öffnungszeiten, Terminwege, häufige Fragen und klare Orientierung für neue Patienten sind besonders wichtig.",
      },
    ],
  }),
  "industries-anwaelte": definePage({
    path: "/industries/anwaelte",
    category: "Branche",
    eyebrow: "SEO für Kanzleien",
    title: "Sichtbarkeit für Anwälte und Kanzleien",
    metaTitle: "SEO & Google Ads für Anwälte und Kanzleien | Klickfunden",
    metaDescription:
      "Klickfunden entwickelt SEO-, AEO- und Ads-Strategien für Kanzleien, die in relevanten Rechtsgebieten und Regionen sichtbar werden möchten.",
    description:
      "Mandanten suchen meist mit konkretem Problem, Ort und hoher Dringlichkeit. Wir helfen Kanzleien, Fachgebiete klar zu positionieren und qualifizierte Erstkontakte zu gewinnen.",
    serviceType: "Digitalmarketing für Kanzleien",
    keywords: ["SEO Anwalt", "Kanzlei SEO", "Google Ads Anwälte", "Local SEO Kanzlei", "Anwaltsmarketing"],
    badges: ["Rechtsgebiete", "Local SEO", "AEO-Fragen", "Mandatsanfragen"],
    benefits: [
      {
        title: "Rechtsgebiete präzise strukturieren",
        text: "Jedes relevante Rechtsgebiet erhält eine klare Seite mit verständlicher Problem- und Lösungslogik.",
      },
      {
        title: "Lokale Mandatsnachfrage erreichen",
        text: "Standortsignale und lokale Suchseiten unterstützen Sichtbarkeit in der Region.",
      },
      {
        title: "Erstfragen beantworten",
        text: "FAQ-Elemente helfen Mandanten bei Orientierung, Ablauf und Kontaktentscheidung.",
      },
      {
        title: "Ads kontrolliert einsetzen",
        text: "Google Ads können dringende Nachfrage abfangen, wenn Keywords, Budget und Landingpages eng geführt werden.",
      },
    ],
    process: [
      {
        title: "Rechtsgebiete priorisieren",
        text: "Wir klären, welche Mandate wirtschaftlich wichtig sind und welche Suchintention dahintersteht.",
      },
      {
        title: "Kanzlei-Seiten aufbauen",
        text: "Fachgebiete, Standort und FAQ werden in eine klare Seitenarchitektur übersetzt.",
      },
      {
        title: "Anfragen qualifizieren",
        text: "Inhalte und CTAs werden so gestaltet, dass passende Mandanten schneller Kontakt aufnehmen.",
      },
    ],
    faq: [
      {
        question: "Warum ist SEO für Kanzleien wichtig?",
        answer:
          "Viele Mandanten beginnen mit einer Google-Suche nach Problem, Rechtsgebiet und Ort. SEO hilft, in diesen Momenten sichtbar zu sein.",
      },
      {
        question: "Welche Kanzlei-Seiten sind besonders wichtig?",
        answer:
          "Leistungsseiten zu Rechtsgebieten, Standortseiten, FAQ-Bereiche, Anwaltprofile und klare Kontaktwege sind besonders wichtig.",
      },
      {
        question: "Sind Google Ads für Anwälte teuer?",
        answer:
          "Rechtsbegriffe können hohe Klickpreise haben. Deshalb sind genaue Keyword-Auswahl, Ausschlüsse und starke Landingpages entscheidend.",
      },
    ],
  }),
  "industries-immobilien": definePage({
    path: "/industries/immobilien",
    category: "Branche",
    eyebrow: "Marketing für Immobilien",
    title: "SEO und Ads für Immobilienanbieter",
    metaTitle: "SEO & Ads für Immobilienmakler | Klickfunden",
    metaDescription:
      "Klickfunden unterstützt Immobilienmakler und Immobilienunternehmen mit lokaler Sichtbarkeit, Lead-Funnels und Performance-Kampagnen.",
    description:
      "Immobilienentscheidungen sind lokal, vertrauensbasiert und wettbewerbsintensiv. Wir helfen, Verkäufer, Käufer und Eigentümer mit klaren Seiten und Kampagnen zu erreichen.",
    serviceType: "Digitalmarketing für Immobilienanbieter",
    keywords: ["SEO Immobilienmakler", "Immobilien Marketing", "Google Ads Immobilien", "Local SEO Makler", "Immobilien Leads"],
    badges: ["Eigentümer-Leads", "Regionale SEO", "Trust", "Landingpages"],
    benefits: [
      {
        title: "Regionale Autorität aufbauen",
        text: "Stadt- und Leistungsseiten zeigen Kompetenz in konkreten Märkten.",
      },
      {
        title: "Eigentümer gezielt ansprechen",
        text: "Inhalte rund um Bewertung, Verkauf, Vermietung und Ablauf führen zu qualifizierten Kontakten.",
      },
      {
        title: "Vertrauen vor der Anfrage stärken",
        text: "Prozess, Referenzen, Marktkenntnis und klare Erwartungen werden sichtbar gemacht.",
      },
      {
        title: "Ads für Kampagnen nutzen",
        text: "Google und Meta Ads können Eigentümer- und Suchkampagnen gezielt ergänzen.",
      },
    ],
    process: [
      {
        title: "Zielgruppen trennen",
        text: "Eigentümer, Käufer, Vermieter und Investoren brauchen unterschiedliche Botschaften.",
      },
      {
        title: "Regionale Landingpages planen",
        text: "Leistungen und Orte werden in eine klare SEO-Struktur gebracht.",
      },
      {
        title: "Lead-Pfade messen",
        text: "Kontaktformulare, Bewertungsanfragen und Kampagnen werden auf Qualität geprüft.",
      },
    ],
    faq: [
      {
        question: "Wie gewinnen Immobilienmakler über SEO Leads?",
        answer:
          "Durch regionale Seiten, Inhalte zu Verkauf und Bewertung, klare Vertrauenssignale und einfache Kontaktwege für Eigentümer.",
      },
      {
        question: "Welche Rolle spielt Local SEO für Makler?",
        answer:
          "Local SEO zeigt Marktkenntnis in konkreten Städten oder Stadtteilen und verbessert die Sichtbarkeit bei regionalen Suchanfragen.",
      },
      {
        question: "Sind Meta Ads für Immobilien geeignet?",
        answer:
          "Ja, besonders für Eigentümeransprache, Retargeting und Kampagnen mit starkem lokalen Bezug.",
      },
    ],
  }),
  "industries-steuerberater": definePage({
    path: "/industries/steuerberater",
    category: "Branche",
    eyebrow: "SEO für Steuerberater",
    title: "Digitale Sichtbarkeit für Steuerkanzleien",
    metaTitle: "SEO & Local SEO für Steuerberater | Klickfunden",
    metaDescription:
      "Klickfunden optimiert Steuerkanzlei-Websites für lokale Sichtbarkeit, B2B-Anfragen, AEO-Fragen und qualifizierte Mandantenkontakte.",
    description:
      "Steuerberatung lebt von Vertrauen, Spezialisierung und passender Mandantschaft. Wir machen Kanzleileistungen verständlich sichtbar und richten die Website auf qualifizierte Anfragen aus.",
    serviceType: "Digitalmarketing für Steuerberater",
    keywords: ["SEO Steuerberater", "Steuerkanzlei Marketing", "Local SEO Steuerberater", "Mandanten gewinnen", "Kanzlei SEO"],
    badges: ["Mandantenqualität", "B2B-Sichtbarkeit", "Local SEO", "FAQ"],
    benefits: [
      {
        title: "Spezialisierungen sichtbar machen",
        text: "Leistungen für Gründer, GmbHs, E-Commerce oder Lohnbuchhaltung werden als eigene Nachfragefelder abgebildet.",
      },
      {
        title: "Lokale Kanzleisichtbarkeit stärken",
        text: "Google Profil, Standortsignale und regionale Seiten unterstützen Anfragen im Einzugsgebiet.",
      },
      {
        title: "Komplexe Themen erklären",
        text: "AEO-optimierte FAQ und Leistungsseiten beantworten typische Erstfragen verständlich.",
      },
      {
        title: "Passende Mandanten anziehen",
        text: "Botschaften und Anfragewege werden auf Qualität statt Masse ausgerichtet.",
      },
    ],
    process: [
      {
        title: "Mandatsprofil klären",
        text: "Wir bestimmen, welche Zielgruppen und Leistungen sichtbar werden sollen.",
      },
      {
        title: "SEO-Struktur aufbauen",
        text: "Leistungs-, Branchen- und Standortseiten werden konsistent gegliedert.",
      },
      {
        title: "Anfragequalität verbessern",
        text: "Inhalte und CTAs werden so formuliert, dass sie passende Mandanten ansprechen.",
      },
    ],
    faq: [
      {
        question: "Warum brauchen Steuerberater SEO?",
        answer:
          "SEO hilft Steuerberatern, bei relevanten lokalen und fachlichen Suchanfragen sichtbar zu werden und passende Mandanten anzuziehen.",
      },
      {
        question: "Welche Inhalte funktionieren für Steuerkanzleien?",
        answer:
          "Leistungsseiten, Zielgruppenseiten, Standortinformationen, FAQ und klare Kontaktwege funktionieren besonders gut.",
      },
      {
        question: "Kann SEO die Mandantenqualität verbessern?",
        answer:
          "Ja, wenn Inhalte gezielt auf gewünschte Mandate, Spezialisierungen und Anforderungen ausgerichtet werden.",
      },
    ],
  }),
  "industries-ecommerce": definePage({
    path: "/industries/ecommerce",
    category: "Branche",
    eyebrow: "SEO & Ads für E-Commerce",
    title: "Mehr Sichtbarkeit und Umsatz für Online-Shops",
    metaTitle: "E-Commerce SEO, GEO & Ads für Online-Shops | Klickfunden",
    metaDescription:
      "Klickfunden optimiert Online-Shops mit technischer SEO, Kategorie-Content, Shopping-nahen Kampagnen und Conversion-Fokus.",
    description:
      "E-Commerce braucht saubere Technik, starke Kategorien, klare Produktinformationen und rentable Kampagnen. Wir optimieren Shop-Strukturen für Suche, KI-Antworten und Kaufentscheidungen.",
    serviceType: "E-Commerce SEO und Ads",
    keywords: ["E-Commerce SEO", "Shop SEO", "Online Shop Marketing", "Google Ads E-Commerce", "Conversion Optimierung Shop"],
    badges: ["Kategorie-SEO", "Technical SEO", "Produktdaten", "CRO"],
    benefits: [
      {
        title: "Kategorie-SEO stärken",
        text: "Kategorieseiten werden auf Suchintention, interne Verlinkung und Kaufberatung ausgerichtet.",
      },
      {
        title: "Technische Shop-Probleme lösen",
        text: "Filter, Facetten, Duplikate, Canonicals und Ladezeiten werden suchmaschinenfreundlich geordnet.",
      },
      {
        title: "Produktinformationen strukturieren",
        text: "FAQs, Vergleiche und klare Daten helfen Nutzern und generativen Suchsystemen.",
      },
      {
        title: "Traffic profitabler machen",
        text: "SEO, Ads und Conversion Optimierung werden gemeinsam auf Umsatzqualität geprüft.",
      },
    ],
    process: [
      {
        title: "Shop-Audit durchführen",
        text: "Wir prüfen Technik, Kategorien, Produktdaten, interne Links und Conversion-Pfade.",
      },
      {
        title: "Wachstumsbereiche priorisieren",
        text: "Kategorien, Produkte und Kampagnen werden nach Nachfrage und Marge bewertet.",
      },
      {
        title: "Optimierung skalieren",
        text: "Templates, Inhalte und Datenstrukturen werden so verbessert, dass sie im Shop wachsen können.",
      },
    ],
    faq: [
      {
        question: "Was ist bei E-Commerce SEO besonders wichtig?",
        answer:
          "Kategorie-Struktur, technische Indexierung, interne Verlinkung, Produktdaten, Ladezeit und kaufnahe Inhalte sind besonders wichtig.",
      },
      {
        question: "Wie werden Filterseiten SEO-freundlich?",
        answer:
          "Durch klare Regeln für Indexierung, Canonicals, interne Links und sinnvolle Kombinationen, damit keine unnötigen Duplikate entstehen.",
      },
      {
        question: "Kann GEO für Online-Shops relevant sein?",
        answer:
          "Ja. KI-Systeme können Produktempfehlungen, Vergleiche und Kaufberatung aus gut strukturierten Shop-Inhalten ableiten.",
      },
    ],
  }),
  "industries-b2b": definePage({
    path: "/industries/b2b",
    category: "Branche",
    eyebrow: "B2B SEO & Demand Generation",
    title: "Digitale Sichtbarkeit für B2B-Entscheidungen",
    metaTitle: "B2B SEO, GEO & Ads für komplexe Angebote | Klickfunden",
    metaDescription:
      "Klickfunden entwickelt B2B-Sichtbarkeitsstrategien für SEO, GEO, AEO, Google Ads und qualifizierte Leadgenerierung.",
    description:
      "B2B-Kaufprozesse sind lang, informationsintensiv und vertrauensbasiert. Wir strukturieren Inhalte so, dass Entscheider dein Angebot verstehen, vergleichen und anfragen können.",
    serviceType: "B2B Digitalmarketing",
    keywords: ["B2B SEO", "B2B Leadgenerierung", "GEO B2B", "AEO B2B", "Google Ads B2B"],
    badges: ["Buying Committee", "Leadqualität", "GEO", "Thought Leadership"],
    benefits: [
      {
        title: "Komplexe Angebote verständlich machen",
        text: "Wir übersetzen technische oder beratungsintensive Leistungen in klare Entscheidungsargumente.",
      },
      {
        title: "Buying Journey abdecken",
        text: "Problem-, Lösungs-, Vergleichs- und Anbieterfragen werden als Content-Architektur abgebildet.",
      },
      {
        title: "KI-Sichtbarkeit aufbauen",
        text: "Entitäten, FAQ und strukturierte Inhalte helfen generativen Suchsystemen, dein Angebot einzuordnen.",
      },
      {
        title: "Leads besser qualifizieren",
        text: "CTA-Logik, Formulare und Inhalte filtern stärker nach Bedarf und Passung.",
      },
    ],
    process: [
      {
        title: "Zielkunden und Kaufprozess verstehen",
        text: "Wir analysieren Stakeholder, Einwände, Suchmuster und Entscheidungsphasen.",
      },
      {
        title: "Content- und Kampagnenarchitektur planen",
        text: "SEO, GEO, AEO und Ads werden entlang derselben Entscheidungslogik aufgebaut.",
      },
      {
        title: "Leadqualität auswerten",
        text: "Performance wird nicht nur nach Traffic, sondern nach Anfragen und Geschäftschancen bewertet.",
      },
    ],
    faq: [
      {
        question: "Warum ist B2B SEO anders als B2C SEO?",
        answer:
          "B2B-Suchen sind oft komplexer, informationsreicher und betreffen mehrere Entscheider. Inhalte müssen Vertrauen, Expertise und Entscheidungsgrundlagen liefern.",
      },
      {
        question: "Wie hilft GEO im B2B-Marketing?",
        answer:
          "GEO hilft, in KI-gestützten Recherchen und Anbieterempfehlungen sichtbar zu werden, wenn Entscheider Alternativen vergleichen.",
      },
      {
        question: "Welche Inhalte braucht B2B Leadgenerierung?",
        answer:
          "Leistungsseiten, Use Cases, Brancheninhalte, FAQ, Vergleichsinhalte und klare Kontaktangebote sind besonders wichtig.",
      },
    ],
  }),
  "industries-gastronomie": definePage({
    path: "/industries/gastronomie",
    category: "Branche",
    eyebrow: "Marketing für Gastronomie",
    title: "Mehr lokale Sichtbarkeit für Restaurants und Gastronomie",
    metaTitle: "Local SEO & Ads für Restaurants und Gastronomie | Klickfunden",
    metaDescription:
      "Klickfunden optimiert Gastronomie-Betriebe für Google Maps, lokale Suche, Bewertungen, Reservierungen und regionale Kampagnen.",
    description:
      "Gäste suchen mobil, lokal und oft spontan. Wir sorgen dafür, dass Restaurant, Café oder Bar in Google Maps, lokaler Suche und relevanten Entscheidungsfragen sichtbar wird.",
    serviceType: "Digitalmarketing für Gastronomie",
    keywords: ["Local SEO Restaurant", "Gastronomie Marketing", "Google Maps Restaurant", "Restaurant SEO", "Reservierungen steigern"],
    badges: ["Google Maps", "Bewertungen", "Reservierungen", "Mobile Suche"],
    benefits: [
      {
        title: "Google Maps Präsenz verbessern",
        text: "Profil, Kategorien, Bilder, Speisekarte, Öffnungszeiten und Bewertungen werden professionell gepflegt.",
      },
      {
        title: "Lokale Suchanfragen gewinnen",
        text: "Seiten und Profile werden auf Küche, Stadtteil, Anlass und Suchintention ausgerichtet.",
      },
      {
        title: "Reservierungen leichter machen",
        text: "Kontakt-, Buchungs- und Routenpfade werden für mobile Nutzer klar sichtbar.",
      },
      {
        title: "Anlässe gezielt bewerben",
        text: "Ads und Inhalte können Mittagsangebote, Events, Catering oder saisonale Aktionen unterstützen.",
      },
    ],
    process: [
      {
        title: "Lokale Suchmomente analysieren",
        text: "Wir prüfen, wonach Gäste in deiner Region und Kategorie wirklich suchen.",
      },
      {
        title: "Profil und Website abstimmen",
        text: "Google Profil, Website, Speisekarte und Reservierungswege werden konsistent verbunden.",
      },
      {
        title: "Bewertungen und Inhalte pflegen",
        text: "Aktuelle Signale stärken Vertrauen und erhöhen die Chance auf Klicks, Anrufe und Reservierungen.",
      },
    ],
    faq: [
      {
        question: "Warum ist Local SEO für Restaurants wichtig?",
        answer:
          "Viele Gäste suchen direkt in Google oder Maps nach Küche, Ort oder Öffnungszeiten. Local SEO verbessert die Sichtbarkeit in diesen spontanen Suchmomenten.",
      },
      {
        question: "Was sollte ein Google Profil für Gastronomie enthalten?",
        answer:
          "Wichtige Informationen sind aktuelle Öffnungszeiten, Speisekarte, Bilder, Kategorien, Reservierungslink, Telefonnummer und gepflegte Bewertungen.",
      },
      {
        question: "Können Ads Reservierungen steigern?",
        answer:
          "Ja, besonders für lokale Aktionen, Events, Catering oder saisonale Angebote, wenn Anzeigen auf klare Reservierungs- oder Kontaktwege führen.",
      },
    ],
  }),
} as const;

export type SeoPageKey = keyof typeof seoPages;
