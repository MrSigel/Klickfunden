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
  applicationName: "Klickfunden.de",
  title: "Klickfunden.de – Sichtbarkeit für dein Business | SEO, GEO, AEO & Ads",
  description:
    "Klickhafen macht dein Business über Klickfunden.de in Google, KI-Antworten und Social Ads sichtbar. SEO, GEO, AEO und Performance-Ads aus einer Hand – individuell, messbar, partnerschaftlich.",
  manifest: "/site.webmanifest",
  keywords: [
    "SEO Agentur",
    "GEO Generative Engine Optimization",
    "AEO Answer Engine Optimization",
    "Google Ads Agentur",
    "Meta Ads",
    "TikTok Ads",
    "Klickfunden.de",
  ],
  openGraph: {
    title: "Klickfunden.de – Lass dich finden.",
    description:
      "SEO, GEO, AEO und Ads aus einer Hand. Wir machen dein Business überall dort sichtbar, wo deine Kund:innen heute suchen.",
    siteName: "Klickfunden.de",
    locale: "de_DE",
    type: "website",
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
