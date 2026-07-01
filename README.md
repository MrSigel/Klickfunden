# Klickfunden.de — Landing Page (Frontend-Template)

Responsive Next.js-Website für Klickfunden mit Supabase-Anfrageformular und
geschütztem Admin-Bereich für SEO, GEO, AEO, Ads und interne Prozesse.

## Tech-Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS** (Design-Tokens für Farben, Typo, Schatten)
- **Framer Motion** (Seiten-, Scroll- und Hover-Animationen)
- **lucide-react** (Icons)
- **Supabase** (Anfragen und Admin-Daten)

## Schnellstart

```bash
npm install
npm run dev
```

Die Seite läuft danach unter `http://localhost:3000`.

## Admin-Konfiguration

Der Admin-Bereich liegt unter `/admin`, die Anmeldung unter `/login`. Vor dem
ersten Einsatz muss `supabase_schema.sql` einmal im Supabase SQL Editor
ausgeführt werden. Zusätzlich müssen lokal und im Deployment ausschließlich
serverseitig folgende Werte gesetzt sein:

- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET` mit mindestens 32 zufälligen Zeichen
- `SUPABASE_SERVICE_ROLE_KEY`

Vorlagen stehen in `.env.example`. `.env.local` und echte Zugangsdaten dürfen
nicht committed werden.

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
- Eingehende Website-Anfragen werden in `admin_inquiries` gespeichert und im
  Admin-Bereich unter `/admin/anfragen` verwaltet.
- Bilder/Fotos für die Über-uns-Section in `public/` ablegen und in
  `components/AboutFounder.tsx` per `next/image` einbinden.

## Hinweise zur Barrierefreiheit & Performance

- Sichtbare Fokus-Zustände (`:focus-visible`) global definiert.
- `prefers-reduced-motion` wird respektiert (Animationen werden reduziert).
- Alle Sections sind mobile-first und bis 320px Breite getestet.
