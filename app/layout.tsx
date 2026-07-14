import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "@/components/Providers";
import { JsonLd } from "@/components/JsonLd";
import { SiteChrome } from "@/components/SiteChrome";
import { organizationLd, websiteLd } from "@/lib/jsonld";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://klickfunden.de"),
  title: {
    default: "Marketingagentur für Reputation, SEO & Wachstum | Klickfunden",
    template: "%s",
  },
  description:
    "Klickfunden ist deine Marketingagentur für Reputationsmanagement, SEO, GEO/AEO und Performance-Ads. Wir machen lokale Betriebe sichtbar, vertrauenswürdig und wachstumsstark — messbar in 90 Tagen.",
  keywords: [
    "Marketingagentur",
    "Online Marketing Agentur",
    "SEO Agentur",
    "Reputationsmanagement",
    "Google Bewertungen verbessern",
    "GEO AEO Optimierung",
    "Google Ads Agentur",
    "Social Media Marketing",
    "Marketingagentur Castrop-Rauxel",
    "Marketingagentur NRW",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Klickfunden — Reputation, Sichtbarkeit & Wachstum",
    description:
      "Aus schwachen Bewertungen, unsichtbaren Rankings und verpufften Budgets machen wir ein Markenbild, das verkauft — messbar in 90 Tagen.",
    locale: "de_DE",
    type: "website",
    siteName: "Klickfunden",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klickfunden — Reputation, Sichtbarkeit & Wachstum",
    description:
      "Reputation, Sichtbarkeit & Wachstum für lokale Betriebe. SEO, GEO, AEO, CRO und Performance-Ads.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05080a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={jakarta.variable}>
      <body>
        <JsonLd data={[organizationLd(), websiteLd()]} />
        <Providers>
          <SiteChrome>{children}</SiteChrome>
        </Providers>
      </body>
    </html>
  );
}
