import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoSubpageContent from "@/components/SeoSubpageContent";
import type { SeoPage } from "@/lib/seo-pages";

type SeoSubpageProps = {
  page: SeoPage;
};

function buildStructuredData(page: SeoPage) {
  const url = `https://www.klickfunden.de${page.path}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `Klickfunden – ${page.serviceType}`,
        url,
        description: page.description,
        serviceType: page.serviceType,
        areaServed: {
          "@type": "Country",
          name: "Deutschland",
        },
        provider: {
          "@type": "Organization",
          "@id": "https://www.klickfunden.de/#organization",
          name: "Klickfunden",
          url: "https://www.klickfunden.de",
        },
        brand: {
          "@type": "Brand",
          name: "Klickfunden",
          url: "https://www.klickfunden.de",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Startseite",
            item: "https://www.klickfunden.de",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.category === "Leistung" ? "Leistungen" : "Branchen",
            item: `https://www.klickfunden.de/#${page.category === "Leistung" ? "leistungen" : "zielgruppen"}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.eyebrow,
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export default function SeoSubpage({ page }: SeoSubpageProps) {
  const { metadata: _metadata, ...contentPage } = page;

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildStructuredData(page)),
        }}
      />
      <SeoSubpageContent page={contentPage} />
      <Footer />
    </>
  );
}
