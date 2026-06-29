import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import References from "@/components/References";
import AboutFounder from "@/components/AboutFounder";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import AgencyOverview from "@/components/AgencyOverview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klickfunden – SEO, GEO, AEO & Ads Agentur für digitale Sichtbarkeit",
  description:
    "Klickfunden unterstützt Unternehmen mit SEO, GEO, AEO, Google Ads, Meta Ads, YouTube Ads, Local SEO und Conversion-Optimierung.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Klickfunden – Agentur für SEO, GEO, AEO & Ads",
    description:
      "Digitale Sichtbarkeit bei Google und in KI-Suchen sowie Kampagnen für qualifizierte Anfragen.",
    url: "https://www.klickfunden.de",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klickfunden – SEO, GEO, AEO & Ads Agentur",
    description:
      "Digitale Sichtbarkeit, Auffindbarkeit und Conversion-Optimierung für Unternehmen.",
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://www.klickfunden.de/#organization",
      name: "Klickfunden",
      url: "https://www.klickfunden.de",
      email: "kontakt@klickfunden.de",
      telephone: "+49 155 63535989",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Gerther Straße 76",
        postalCode: "44577",
        addressLocality: "Castrop-Rauxel",
        addressRegion: "Nordrhein-Westfalen",
        addressCountry: "DE",
      },
      areaServed: "Deutschland",
      knowsAbout: [
        "SEO", "GEO", "AEO", "Google Ads", "Meta Ads", "YouTube Ads",
        "Local SEO", "Technical SEO", "Content SEO", "Conversion-Optimierung",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.klickfunden.de/#website",
      url: "https://www.klickfunden.de",
      name: "Klickfunden",
      inLanguage: "de-DE",
      publisher: { "@id": "https://www.klickfunden.de/#organization" },
    },
  ],
};

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Hero />
      <AgencyOverview />
      <ServicesGrid />
      <References />
      <AboutFounder />
      <FAQ />
      <LeadForm />
      <Footer />
    </main>
  );
}
