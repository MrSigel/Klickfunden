import type { LandingPage } from "./content-types";

/**
 * Industry landing pages — local & intent-driven SEO ("Marketing für …").
 * Shorter than service pages but each distinct on its keyword.
 */
export const INDUSTRIES: LandingPage[] = [
  {
    slug: "gastronomie",
    category: "branche",
    name: "Gastronomie",
    serviceType: "Marketing für Gastronomie",
    metaTitle: "Marketing für Restaurants & Gastronomie | Klickfunden",
    metaDescription:
      "Mehr Gäste für dein Restaurant: bessere Google-Bewertungen, Top-Platzierung auf Google Maps und Social Ads, die den Laden füllen. Jetzt schreiben.",
    keywords: [
      "Marketing für Restaurants",
      "Gastronomie Marketing",
      "mehr Gäste gewinnen",
      "Restaurant Google Bewertungen",
    ],
    eyebrow: "Branche: Gastronomie",
    h1: "Mehr Gäste für dein Restaurant — nicht mehr leere Tische.",
    lead: "Gäste entscheiden am Handy, wo sie essen: nach Sternen, Fotos und dem, was oben in Google Maps steht. Wir sorgen dafür, dass dein Laden dort gewinnt.",
    sections: [
      {
        h2: "Sterne und Fotos füllen deine Tische",
        body: "Ein Restaurant mit 4,7 Sternen und guten Fotos wird gewählt, eines mit 3,9 übersehen. Wir bauen deine Google-Bewertungen aus und pflegen dein Profil so, dass es hungrig macht.",
        bullets: [
          "Mehr echte Google-Bewertungen über QR-Codes am Tisch",
          "Optimiertes Google-Profil mit Speisekarte und Fotos",
          "Top-Platzierung für ‚Restaurant in der Nähe‘",
        ],
      },
      {
        h2: "Social Ads, die den Laden füllen",
        body: "Mit gezielten Instagram- und TikTok-Ads erreichst du genau die Menschen in deinem Umkreis, die heute Abend noch einen Tisch suchen — mit Bildern, die sofort Appetit machen.",
        bullets: [
          "Lokale Meta- und TikTok-Kampagnen",
          "Aktionen und Events gezielt bewerben",
          "Reservierungen und Anrufe statt nur Likes",
        ],
      },
    ],
    benefits: [
      "Bessere Bewertungen, vollere Tische",
      "Sichtbar bei ‚in der Nähe‘",
      "Lokale Ads mit Appetit-Faktor",
      "Weniger Leerlauf unter der Woche",
    ],
    faq: [
      {
        q: "Wir haben kaum Zeit fürs Marketing — geht das trotzdem?",
        a: "Genau dafür sind wir da. Wir übernehmen Profil, Bewertungen und Ads, du kümmerst dich um deine Gäste.",
      },
      {
        q: "Bringt das auch unter der Woche was?",
        a: "Ja. Mit gezielten Aktionen und Ads füllen wir gerade die schwachen Tage — dort liegt oft das größte Potenzial.",
      },
    ],
    related: ["google-bewertungen", "local-seo", "meta-ads"],
  },

  {
    slug: "zahnaerzte",
    category: "branche",
    name: "Zahnärzte",
    serviceType: "Marketing für Zahnärzte",
    metaTitle: "Marketing für Zahnärzte & Zahnarztpraxen | Klickfunden",
    metaDescription:
      "Mehr Wunschpatienten für deine Zahnarztpraxis: bessere Bewertungen, Top-Rankings bei Google und ein Profil, das Vertrauen schafft. Jetzt schreiben.",
    keywords: [
      "Marketing für Zahnärzte",
      "Zahnarzt Marketing",
      "Patientengewinnung Zahnarzt",
      "Zahnarztpraxis Google Bewertungen",
    ],
    eyebrow: "Branche: Zahnärzte",
    h1: "Mehr Wunschpatienten für deine Zahnarztpraxis.",
    lead: "Patienten suchen ihren Zahnarzt online — und vertrauen dabei auf Bewertungen und den ersten Eindruck. Wir sorgen dafür, dass deine Praxis genau diesen Eindruck gewinnt.",
    sections: [
      {
        h2: "Vertrauen entscheidet über den ersten Termin",
        body: "Bei der Wahl der Praxis zählt Vertrauen mehr als der Preis. Ein starker Sterne-Schnitt auf Google und Jameda und ein professionelles Profil bringen genau die Patienten, die du dir wünschst.",
        bullets: [
          "Bewertungsaufbau auf Google und Jameda",
          "Optimiertes Profil, das Kompetenz zeigt",
          "Top-Ranking für ‚Zahnarzt + deine Stadt‘",
        ],
      },
      {
        h2: "Sichtbar für hochwertige Behandlungen",
        body: "Ob Implantate, Bleaching oder Angstpatienten — für lukrative Leistungen suchen Patienten gezielt. Wir positionieren deine Praxis genau für diese Suchbegriffe.",
        bullets: [
          "Leistungsseiten für Implantate, Ästhetik & Co.",
          "Local SEO für dein Einzugsgebiet",
          "Optional: Google Ads für schnelle Termine",
        ],
      },
    ],
    benefits: [
      "Mehr Anfragen von Wunschpatienten",
      "Starker Schnitt auf Google & Jameda",
      "Sichtbar für lukrative Behandlungen",
      "Professioneller, seriöser Auftritt",
    ],
    faq: [
      {
        q: "Ist Praxismarketing rechtlich überhaupt erlaubt?",
        a: "Ja, im Rahmen des Heilmittelwerbegesetzes. Wir kennen die Grenzen und arbeiten seriös und regelkonform.",
      },
      {
        q: "Wir sind gut ausgelastet — lohnt sich das?",
        a: "Dann geht es um bessere Patienten statt mehr: gezielt für hochwertige Behandlungen und ein Profil, das die richtigen anzieht.",
      },
    ],
    related: ["reputationsmanagement", "local-seo", "seo"],
  },

  {
    slug: "handwerk",
    category: "branche",
    name: "Handwerk",
    serviceType: "Marketing für Handwerker",
    metaTitle: "Marketing für Handwerker & Handwerksbetriebe | Klickfunden",
    metaDescription:
      "Mehr hochwertige Aufträge für deinen Handwerksbetrieb: gefunden werden bei Google, überzeugen mit Bewertungen, Anfragen statt Preisdrücker. Jetzt schreiben.",
    keywords: [
      "Marketing für Handwerker",
      "Handwerk Marketing",
      "Aufträge für Handwerksbetrieb",
      "Handwerker Kundengewinnung",
    ],
    eyebrow: "Branche: Handwerk",
    h1: "Mehr gute Aufträge für dein Handwerk — ohne Preisdrücker.",
    lead: "Gute Handwerker sind gefragt, aber online oft unsichtbar. Wir machen deinen Betrieb bei Google sichtbar und so überzeugend, dass die richtigen Kunden anrufen — nicht nur die billigsten.",
    sections: [
      {
        h2: "Gefunden werden, wenn es dringend ist",
        body: "Wenn die Heizung ausfällt oder das Dach undicht ist, googeln Menschen sofort — und rufen den an, der oben steht und gut bewertet ist. Genau dort bringen wir dich hin.",
        bullets: [
          "Top-Platzierung für dein Gewerk und deine Region",
          "Google-Profil mit Bewertungen und Referenzbildern",
          "Optional Google Ads für dringende Anfragen",
        ],
      },
      {
        h2: "Qualität sichtbar machen",
        body: "Deine Arbeit ist gut — das muss man online auch sehen. Mit echten Bewertungen und Vorher-Nachher-Referenzen ziehst du Kunden an, die Qualität schätzen und bereit sind zu zahlen.",
        bullets: [
          "Bewertungsaufbau nach jedem Auftrag",
          "Referenzen und Projektbilder, die überzeugen",
          "Website, die Anfragen statt nur Klicks bringt",
        ],
      },
    ],
    benefits: [
      "Sichtbar bei dringenden Suchen",
      "Kunden, die Qualität zahlen",
      "Starke Bewertungen & Referenzen",
      "Volle Auftragsbücher",
    ],
    faq: [
      {
        q: "Wir bekommen Aufträge nur über Empfehlung — reicht das nicht?",
        a: "Empfehlungen sind Gold — aber online verstärkst du genau diesen Effekt. Wer dich empfohlen bekommt, googelt dich trotzdem. Dann sollte der Auftritt stimmen.",
      },
      {
        q: "Ich habe keine Zeit für Social Media.",
        a: "Musst du auch nicht. Für viele Gewerke reichen ein starkes Google-Profil, Bewertungen und gezielte Anzeigen — das übernehmen wir.",
      },
    ],
    related: ["local-seo", "google-bewertungen", "google-ads"],
  },

  {
    slug: "friseure-beauty",
    category: "branche",
    name: "Friseure & Beauty",
    serviceType: "Marketing für Friseure und Beauty-Salons",
    metaTitle: "Marketing für Friseure & Beauty-Salons | Klickfunden",
    metaDescription:
      "Mehr Kundinnen und Kunden für deinen Salon: volle Terminkalender durch Bewertungen, Instagram und lokale Sichtbarkeit. Jetzt schreiben und durchstarten.",
    keywords: [
      "Marketing für Friseure",
      "Beauty Salon Marketing",
      "mehr Kunden Friseur",
      "Nagelstudio Marketing",
    ],
    eyebrow: "Branche: Beauty",
    h1: "Volle Terminkalender für deinen Salon.",
    lead: "Im Beauty-Geschäft entscheidet der visuelle Eindruck — und der passiert auf Instagram und in Google-Bewertungen. Wir machen deinen Salon zum sichtbaren Favoriten in deiner Stadt.",
    sections: [
      {
        h2: "Instagram ist dein Schaufenster",
        body: "Vorher-Nachher-Bilder verkaufen deine Arbeit besser als jeder Text. Wir bauen einen Auftritt auf, der neue Kundinnen und Kunden anzieht und sie direkt zur Terminbuchung führt.",
        bullets: [
          "Content-Strategie mit Vorher-Nachher-Formaten",
          "Lokale Instagram- und TikTok-Ads",
          "Klarer Weg zur Terminbuchung oder zum Anruf",
        ],
      },
      {
        h2: "Bewertungen füllen den Kalender",
        body: "Neue Kundschaft prüft zuerst die Sterne. Mit einem systematischen Bewertungsaufbau und einem Top-Google-Profil wirst du zur ersten Wahl in deinem Viertel.",
        bullets: [
          "Bewertungsaufbau nach jedem Termin",
          "Optimiertes Google-Profil mit Leistungen und Fotos",
          "Sichtbarkeit für ‚Friseur / Kosmetik in der Nähe‘",
        ],
      },
    ],
    benefits: [
      "Voller Terminkalender",
      "Starker Instagram-Auftritt",
      "Top-Bewertungen in deiner Stadt",
      "Neue Stammkundschaft",
    ],
    faq: [
      {
        q: "Ich poste schon auf Instagram, es bringt aber nichts.",
        a: "Meist fehlt Strategie und ein klarer Handlungsschritt. Wir richten deinen Auftritt so aus, dass aus Followern Terminbuchungen werden.",
      },
      {
        q: "Lohnen sich Ads bei kleinem Budget?",
        a: "Ja — lokal sind schon kleine Budgets wirksam, weil wir sehr gezielt Menschen in deiner Nähe ansprechen.",
      },
    ],
    related: ["social-media-marketing", "meta-ads", "google-bewertungen"],
  },

  {
    slug: "fitnessstudios",
    category: "branche",
    name: "Fitnessstudios",
    serviceType: "Marketing für Fitnessstudios",
    metaTitle: "Marketing für Fitnessstudios & Personal Trainer | Klickfunden",
    metaDescription:
      "Mehr Mitglieder für dein Fitnessstudio: Lead-Kampagnen auf Meta & TikTok, starke Bewertungen und lokale Sichtbarkeit. Jetzt schreiben und Mitglieder gewinnen.",
    keywords: [
      "Marketing für Fitnessstudios",
      "Mitglieder gewinnen Fitnessstudio",
      "Fitnessstudio Werbung",
      "Personal Trainer Marketing",
    ],
    eyebrow: "Branche: Fitness",
    h1: "Mehr Mitglieder für dein Studio — planbar statt zufällig.",
    lead: "Neue Mitglieder gewinnst du nicht durch Zufall, sondern durch ein System aus Reichweite, Angebot und Nachfassen. Wir bauen dir genau dieses System.",
    sections: [
      {
        h2: "Lead-Kampagnen, die Probetrainings bringen",
        body: "Mit gezielten Meta- und TikTok-Kampagnen füllen wir deinen Kalender mit Probetrainings — bei Menschen in deiner Nähe, die gerade nach einem Studio suchen.",
        bullets: [
          "Angebots-Kampagnen für Probetraining und Aktionen",
          "Lokales Targeting in deinem Einzugsgebiet",
          "Klarer Prozess vom Klick zum Probetraining",
        ],
      },
      {
        h2: "Vertrauen durch Bewertungen und Community",
        body: "Menschen bleiben, wo sie sich wohlfühlen. Ein starker Social-Auftritt und gute Bewertungen zeigen deine Community und senken die Hemmschwelle für den ersten Schritt.",
        bullets: [
          "Bewertungsaufbau bei zufriedenen Mitgliedern",
          "Content, der deine Community und Erfolge zeigt",
          "Sichtbarkeit für ‚Fitnessstudio in der Nähe‘",
        ],
      },
    ],
    benefits: [
      "Planbare Probetrainings",
      "Volle Kampagnen-Pipeline",
      "Starke lokale Sichtbarkeit",
      "Mehr Mitglieder pro Monat",
    ],
    faq: [
      {
        q: "Wie messt ihr den Erfolg?",
        a: "An echten Leads und Probetrainings, nicht an Reichweite. Du siehst, was jede Kampagne an konkreten Anfragen bringt.",
      },
      {
        q: "Funktioniert das auch für kleine Studios?",
        a: "Ja. Gerade kleinere Studios profitieren von präzisem lokalem Targeting und persönlicher Ansprache.",
      },
    ],
    related: ["meta-ads", "tiktok-ads", "social-media-marketing"],
  },

  {
    slug: "immobilienmakler",
    category: "branche",
    name: "Immobilienmakler",
    serviceType: "Marketing für Immobilienmakler",
    metaTitle: "Marketing für Immobilienmakler | Klickfunden",
    metaDescription:
      "Mehr Eigentümer-Kontakte und Verkäufer-Leads für dein Maklerbüro: Vertrauen durch Bewertungen, Sichtbarkeit bei Google und gezielte Ads. Jetzt schreiben.",
    keywords: [
      "Marketing für Immobilienmakler",
      "Makler Leads",
      "Eigentümer gewinnen",
      "Immobilienmakler Kundengewinnung",
    ],
    eyebrow: "Branche: Immobilien",
    h1: "Mehr Eigentümer-Kontakte für dein Maklerbüro.",
    lead: "Im Maklergeschäft ist Vertrauen alles — und der Kampf um Objekte hart. Wir positionieren dich als die vertrauenswürdige Adresse in deiner Region und bringen dir qualifizierte Verkäufer-Kontakte.",
    sections: [
      {
        h2: "Vertrauen gewinnt das Mandat",
        body: "Eigentümer geben ihr wertvollstes Gut in die Hände, denen sie vertrauen. Ein starker Sterne-Schnitt, echte Referenzen und ein seriöser Auftritt entscheiden das Mandat für dich.",
        bullets: [
          "Bewertungsaufbau bei zufriedenen Verkäufern und Käufern",
          "Referenzen und Verkaufserfolge sichtbar machen",
          "Persönliche, vertrauensbildende Positionierung",
        ],
      },
      {
        h2: "Verkäufer-Leads gezielt gewinnen",
        body: "Mit Kampagnen und einer Website, die auf die Eigentümer-Anfrage ausgerichtet ist, füllst du deine Pipeline mit echten Verkaufsobjekten statt bloßer Neugier.",
        bullets: [
          "Meta- und Google-Kampagnen für Eigentümer",
          "Landingpages für die kostenfreie Wertermittlung als Einstieg",
          "Local SEO für ‚Immobilienmakler + Region‘",
        ],
      },
    ],
    benefits: [
      "Mehr Verkäufer-Kontakte",
      "Vertrauensvorsprung durch Bewertungen",
      "Sichtbar als Makler der Region",
      "Volle Objekt-Pipeline",
    ],
    faq: [
      {
        q: "Wie qualifiziert sind die Leads?",
        a: "Wir richten die Kampagnen auf echte Verkaufsabsicht aus und filtern über die Ansprache. Ziel sind Mandate, nicht bloße Klicks.",
      },
      {
        q: "Hebt sich das von Portalen wie ImmoScout ab?",
        a: "Ja. Wir bauen deine eigene Sichtbarkeit und Marke auf — unabhängig von Portalen und deren Kosten.",
      },
    ],
    related: ["reputationsmanagement", "meta-ads", "local-seo"],
  },

  {
    slug: "kanzleien",
    category: "branche",
    name: "Kanzleien",
    serviceType: "Marketing für Anwälte und Steuerberater",
    metaTitle: "Marketing für Anwälte & Steuerberater | Klickfunden",
    metaDescription:
      "Mehr passende Mandate für deine Kanzlei: seriöse Sichtbarkeit bei Google, Vertrauen durch Bewertungen und gezielte Positionierung. Jetzt schreiben.",
    keywords: [
      "Marketing für Anwälte",
      "Steuerberater Marketing",
      "Kanzlei Marketing",
      "Mandantengewinnung",
    ],
    eyebrow: "Branche: Kanzleien",
    h1: "Mehr passende Mandate für deine Kanzlei.",
    lead: "Mandanten suchen Rechtsrat und Steuerberatung heute online — diskret, aber gründlich. Wir machen deine Kanzlei sichtbar und vertrauenswürdig, ganz ohne marktschreierische Werbung.",
    sections: [
      {
        h2: "Seriös sichtbar bei Google",
        body: "Für ‚Fachanwalt‘ oder ‚Steuerberater‘ plus Stadt suchen genau die Mandanten, die du willst. Wir bringen deine Kanzlei für diese Begriffe nach oben — sachlich und seriös.",
        bullets: [
          "SEO für deine Rechtsgebiete und deine Region",
          "Optimiertes Google-Profil mit Bewertungen",
          "Fachbeiträge, die Kompetenz und Autorität zeigen",
        ],
      },
      {
        h2: "Vertrauen als wichtigste Währung",
        body: "Bei sensiblen Themen zählt Vertrauen doppelt. Echte Bewertungen und ein professioneller Auftritt nehmen dem Erstkontakt die Hürde und bringen dir qualifizierte Anfragen.",
        bullets: [
          "Diskreter, DSGVO-konformer Bewertungsaufbau",
          "Klare Positionierung auf deine Schwerpunkte",
          "Website, die Kompetenz und Seriosität ausstrahlt",
        ],
      },
    ],
    benefits: [
      "Mehr qualifizierte Mandate",
      "Seriöse, sachliche Sichtbarkeit",
      "Vertrauen durch Bewertungen",
      "Klare fachliche Positionierung",
    ],
    faq: [
      {
        q: "Passt aggressive Werbung zu einer Kanzlei?",
        a: "Nein — und genau das machen wir nicht. Wir setzen auf seriöse Sichtbarkeit, Fachkompetenz und Vertrauen statt auf laute Werbung.",
      },
      {
        q: "Ist der Bewertungsaufbau berufsrechtlich zulässig?",
        a: "Ja, im zulässigen Rahmen. Wir arbeiten sachlich und regelkonform und stimmen das Vorgehen mit dir ab.",
      },
    ],
    related: ["seo", "reputationsmanagement", "local-seo"],
  },

  {
    slug: "autohaus-kfz",
    category: "branche",
    name: "Autohaus & Kfz",
    serviceType: "Marketing für Autohäuser und Kfz-Betriebe",
    metaTitle: "Marketing für Autohäuser & Kfz-Werkstätten | Klickfunden",
    metaDescription:
      "Mehr Verkäufe und Werkstatt-Termine: lokale Sichtbarkeit, starke Bewertungen und Ads für Autohaus und Kfz-Betrieb. Jetzt schreiben und mehr Kunden gewinnen.",
    keywords: [
      "Marketing für Autohaus",
      "Kfz Werkstatt Marketing",
      "Autohaus Kundengewinnung",
      "Werkstatt mehr Kunden",
    ],
    eyebrow: "Branche: Automotive",
    h1: "Mehr Verkäufe und Werkstatt-Termine für deinen Betrieb.",
    lead: "Ob Fahrzeugverkauf oder Werkstatt-Termin — Kunden starten die Suche online. Wir bringen deinen Betrieb dorthin, wo sie schauen, und machen aus Interesse konkrete Termine.",
    sections: [
      {
        h2: "Lokal gefunden für Verkauf und Service",
        body: "‚Werkstatt in der Nähe‘, ‚Reifenwechsel‘, ‚Gebrauchtwagen + Stadt‘ — für diese Suchen wollen Kunden dich finden. Wir optimieren dein Google-Profil und deine Sichtbarkeit genau darauf.",
        bullets: [
          "Local SEO für Verkauf und Werkstatt",
          "Optimiertes Google-Profil mit Bewertungen",
          "Sichtbarkeit für saisonale Services (Reifen, TÜV, Klima)",
        ],
      },
      {
        h2: "Ads, die Fahrzeuge und Termine bewegen",
        body: "Mit gezielten Kampagnen bewirbst du konkrete Fahrzeuge, Aktionen und Services bei genau den Menschen in deinem Umkreis, die gerade Bedarf haben.",
        bullets: [
          "Meta- und Google-Kampagnen für Angebote",
          "Retargeting für Website- und Fahrzeug-Interessenten",
          "Klarer Weg zum Anruf oder zur Terminbuchung",
        ],
      },
    ],
    benefits: [
      "Mehr Werkstatt-Auslastung",
      "Schnellere Fahrzeugverkäufe",
      "Starke lokale Sichtbarkeit",
      "Planbare Termine",
    ],
    faq: [
      {
        q: "Wir sind Vertragswerkstatt — dürfen wir eigenes Marketing machen?",
        a: "In der Regel ja, im Rahmen deiner Vereinbarungen. Wir stärken deine lokale Sichtbarkeit zusätzlich zur Marke.",
      },
      {
        q: "Bringt Marketing auch für die Werkstatt was?",
        a: "Gerade dort. Services wie Reifenwechsel, TÜV und Inspektion sind planbar bewerbbar und füllen ruhige Zeiten.",
      },
    ],
    related: ["local-seo", "google-bewertungen", "google-ads"],
  },

  {
    slug: "einzelhandel",
    category: "branche",
    name: "Einzelhandel",
    serviceType: "Marketing für lokalen Einzelhandel",
    metaTitle: "Marketing für lokalen Einzelhandel & Geschäfte | Klickfunden",
    metaDescription:
      "Mehr Laufkundschaft und Umsatz für dein Geschäft: lokale Sichtbarkeit, starke Bewertungen und Social Ads, die Menschen in den Laden bringen. Jetzt schreiben.",
    keywords: [
      "Marketing für Einzelhandel",
      "lokales Geschäft Marketing",
      "mehr Laufkundschaft",
      "Ladengeschäft Werbung",
    ],
    eyebrow: "Branche: Einzelhandel",
    h1: "Mehr Kundschaft in deinem Laden — nicht nur online.",
    lead: "Auch der stationäre Handel wird online entschieden: Menschen prüfen Öffnungszeiten, Sortiment und Bewertungen, bevor sie kommen. Wir machen deinen Laden zum sichtbaren Ziel in deiner Stadt.",
    sections: [
      {
        h2: "Online gefunden, offline gekauft",
        body: "Die Reise zum Kauf im Laden beginnt bei Google. Ein gepflegtes Profil mit Fotos, Öffnungszeiten und Bewertungen entscheidet, ob jemand den Weg zu dir macht.",
        bullets: [
          "Optimiertes Google-Profil mit Sortiment und Fotos",
          "Bewertungsaufbau für mehr Vertrauen",
          "Sichtbarkeit für ‚Geschäft / Produkt in der Nähe‘",
        ],
      },
      {
        h2: "Social Ads, die Menschen in den Laden bringen",
        body: "Mit lokalen Instagram- und TikTok-Kampagnen bewirbst du Neuheiten, Aktionen und Events gezielt in deinem Umkreis — und machst aus Aufmerksamkeit echten Besuch.",
        bullets: [
          "Lokale Meta- und TikTok-Ads",
          "Aktionen und Events wirksam bewerben",
          "Wiederkehrende Kundschaft durch Social-Präsenz",
        ],
      },
    ],
    benefits: [
      "Mehr Laufkundschaft",
      "Sichtbar bei lokalen Suchen",
      "Starke Bewertungen",
      "Volle Aktionstage",
    ],
    faq: [
      {
        q: "Gegen den Online-Handel haben wir doch keine Chance?",
        a: "Doch — mit lokaler Nähe, Erlebnis und Vertrauen. Genau diese Stärken machen wir online sichtbar, damit Menschen bewusst zu dir kommen.",
      },
      {
        q: "Wir haben kein großes Budget.",
        a: "Lokales Marketing wirkt schon mit kleinem Budget, weil wir sehr gezielt Menschen in deiner Nähe ansprechen.",
      },
    ],
    related: ["local-seo", "google-bewertungen", "meta-ads"],
  },
];
