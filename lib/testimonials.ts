/**
 * Placeholder testimonials — replace with real Google/Trustpilot reviews.
 * Attributions use role + industry instead of invented company names.
 */
export type Testimonial = { quote: string; author: string };

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Unser Google-Schnitt ist von 3,8 auf 4,7 gestiegen — und wir merken es direkt an den Anfragen. Endlich eine Agentur, die liefert statt nur verspricht.",
    author: "Inhaber, Gastronomie",
  },
  {
    quote:
      "Die neue Website sieht nicht nur stark aus, sie bringt auch messbar mehr Termine. Betreuung schnell, ehrlich und auf Augenhöhe.",
    author: "Praxisinhaberin, Zahnmedizin",
  },
  {
    quote:
      "Endlich werden wir bei Google gefunden, wenn Kunden nach unserem Gewerk suchen. Die Anfragen sind hochwertiger geworden.",
    author: "Geschäftsführer, Handwerksbetrieb",
  },
  {
    quote:
      "Transparent, schnell und kompetent. Die Ads laufen profitabel und wir sehen genau, was jeder Euro bringt.",
    author: "Marketingleiter, E-Commerce",
  },
  {
    quote:
      "Das Reputationsmanagement hat unser Bild komplett gedreht. Neue Bewertungen kommen jetzt automatisch rein.",
    author: "Inhaberin, Beauty & Kosmetik",
  },
  {
    quote:
      "Professionelles Team, klare Kommunikation, echte Ergebnisse. Klare Weiterempfehlung für jeden lokalen Betrieb.",
    author: "Geschäftsführer, Immobilien",
  },
];

export const RATING = { value: "5,0", count: 40 };
