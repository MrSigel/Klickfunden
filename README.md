# Klickfunden.de — Landing Page (Frontend-Template)

Eine vollständig responsive, animierte Next.js-Landingpage für eine
Digital-Marketing-Agentur (SEO, GEO, AEO, Ads). **Reines Frontend-Template**
— es ist keine Datenbank- oder Backend-Logik enthalten. Das Lead-Formular
speichert seinen Zustand aktuell nur clientseitig (React State); für eine
echte Einreichung muss `handleSubmit` in `components/LeadForm.tsx` an eine
API-Route, ein CRM oder einen E-Mail-Dienst angebunden werden.

## Tech-Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS** (Design-Tokens für Farben, Typo, Schatten)
- **Framer Motion** (Seiten-, Scroll- und Hover-Animationen)
- **lucide-react** (Icons)

## Schnellstart

```bash
npm install
npm run dev
```

Die Seite läuft danach unter `http://localhost:3000`.

Build für Produktion:

```bash
npm run build
npm run start
```

## Projektstruktur

```
app/
  layout.tsx        Root-Layout, Google Fonts, Meta-Tags
  page.tsx           Setzt alle Sections zusammen
  globals.css         Tailwind-Basis, Utility-Klassen (Buttons, Eyebrow, ...)
components/
  Header.tsx          Sticky Navigation mit CTA
  Hero.tsx             Hero-Section inkl. animiertem "Sichtbarkeits-Radar"
  ServicesGrid.tsx     SEO / GEO / AEO / Ads Karten
  AboutFounder.tsx     Gründer:in- / Über-uns-Section
  FAQ.tsx              Animiertes Accordion + FAQPage Schema.org JSON-LD
  LeadForm.tsx         3-stufiges Lead-Formular (Ziel → Website → Kontakt)
  Footer.tsx           Footer mit Linkspalten, Impressum/Datenschutz
lib/
  data.ts              Zentrale Inhalte: Navigation, Services, FAQ
```

## Design-Tokens

Definiert in `tailwind.config.ts`:

- `ink` — Hintergrund-Grünpalette (Basis `#003333`)
- `marsgreen` — Akzent- / CTA-Farbe (`#99CC33`)
- `mist` — Grautöne für sekundären Text
- Schriften: **Plus Jakarta Sans** (Display/Headlines) + **Inter** (Fließtext),
  eingebunden über `next/font/google`

## Anpassung

- Inhalte (Texte, FAQ, Services, Navigation) zentral in `lib/data.ts` pflegen.
- Farben/Schriften in `tailwind.config.ts` anpassen.
- Lead-Formular an ein echtes Backend anbinden: `handleSubmit` in
  `components/LeadForm.tsx` ersetzen (z. B. `fetch("/api/lead", ...)`).
- Bilder/Fotos für die Über-uns-Section in `public/` ablegen und in
  `components/AboutFounder.tsx` per `next/image` einbinden.

## Hinweise zur Barrierefreiheit & Performance

- Sichtbare Fokus-Zustände (`:focus-visible`) global definiert.
- `prefers-reduced-motion` wird respektiert (Animationen werden reduziert).
- Alle Sections sind mobile-first und bis 320px Breite getestet.
