import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import CookieSettingsButton from "@/components/CookieSettingsButton";

const footerColumns = [
  {
    title: "Leistungen",
    links: [
      { label: "SEO", href: "/services/seo" },
      { label: "GEO", href: "/services/geo" },
      { label: "AEO", href: "/services/aeo" },
      { label: "Google Ads", href: "/services/google-ads" },
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "YouTube Ads", href: "/services/youtube-ads" },
      { label: "Local SEO", href: "/services/local-seo" },
      { label: "Technical SEO", href: "/services/technical-seo" },
      { label: "Content SEO", href: "/services/content-seo" },
      {
        label: "Conversion Optimierung",
        href: "/services/conversion-optimierung",
      },
    ],
  },
  {
    title: "Branchen",
    links: [
      { label: "Handwerker", href: "/industries/handwerker" },
      { label: "Dienstleister", href: "/industries/dienstleister" },
      { label: "Pflege & Pflegedienste", href: "/industries/pflege" },
      { label: "Ärzte & Praxen", href: "/industries/aerzte" },
      { label: "Anwälte & Kanzleien", href: "/industries/anwaelte" },
      { label: "Immobilien", href: "/industries/immobilien" },
      { label: "Steuerberater", href: "/industries/steuerberater" },
      { label: "E-Commerce", href: "/industries/ecommerce" },
      { label: "B2B", href: "/industries/b2b" },
      { label: "Gastronomie", href: "/industries/gastronomie" },
    ],
  },
  {
    title: "Agentur",
    links: [
      { label: "Über uns", href: "/#ueber-uns" },
      { label: "FAQ", href: "/#faq" },
      { label: "Angebot anfordern", href: "/#angebot" },
      { label: "Standort Castrop-Rauxel", href: "/standort/castrop-rauxel" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-900">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <a
              href="/"
              className="inline-flex items-center"
              aria-label="Klickfunden Startseite"
            >
              <Image
                src="/brand/klickfunden/logo-footer.png"
                alt="Klickfunden Logo"
                width={501}
                height={116}
                className="h-10 w-auto max-w-[210px] sm:h-11 sm:max-w-[240px]"
              />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist-100/75 [text-wrap:pretty]">
              Digital-Marketing-Agentur für SEO, GEO, AEO und Performance Ads. Wir machen dein Business nicht nur in klassischen Suchmaschinen sichtbar, sondern platzieren dich genau dort, wo deine Kund:innen heute und morgen nach Antworten suchen – von Google bis zur KI-Suche. Smart, messbar und ergebnisorientiert.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-sm font-semibold text-white">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-mist-100/75 transition-colors hover:text-marsgreen"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-mist-100/75 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Klickfunden. Betreiber: Klickhafen.
            Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <CookieSettingsButton />
            <p>GESUCHT. GEFUNDEN. GEBUCHT.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
