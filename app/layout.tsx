import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import ConsentAnalytics from "@/components/ConsentAnalytics";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.klickfunden.de"),
  applicationName: "Klickfunden.de",
  title: "Klickfunden – SEO, GEO, AEO & Ads für digitale Sichtbarkeit",
  description:
    "Klickfunden unterstützt Unternehmen mit SEO, GEO, AEO, Google Ads, Meta Ads, YouTube Ads, Local SEO und Conversion-Optimierung.",
  manifest: "/site.webmanifest",
  keywords: [
    "SEO Agentur",
    "GEO Generative Engine Optimization",
    "AEO Answer Engine Optimization",
    "Google Ads Agentur",
    "Meta Ads",
    "YouTube Ads Betreuung",
    "Local SEO",
    "Conversion-Optimierung",
    "Klickfunden.de",
  ],
  openGraph: {
    title: "Klickfunden – SEO, GEO, AEO & Ads Agentur",
    description:
      "SEO, GEO, AEO und Ads aus einer Hand. Wir machen dein Business überall dort sichtbar, wo deine Kund:innen heute suchen.",
    siteName: "Klickfunden.de",
    locale: "de_DE",
    type: "website",
    url: "https://www.klickfunden.de",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    title: "Klickfunden.de",
    capable: true,
    statusBarStyle: "default",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klickfunden – Agentur für digitale Sichtbarkeit",
    description:
      "SEO, GEO, AEO, Ads, Local SEO und Conversion-Optimierung für Unternehmen.",
  },
};

export const viewport: Viewport = {
  themeColor: "#003333",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-body antialiased">
        {children}
        <ConsentAnalytics />
        <CookieBanner />
      </body>
    </html>
  );
}
