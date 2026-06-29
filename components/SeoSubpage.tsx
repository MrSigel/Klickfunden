import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoSubpageContent from "@/components/SeoSubpageContent";
import type { SeoPage } from "@/lib/seo-pages";

type SeoSubpageProps = {
  page: SeoPage;
};

function buildStructuredData(page: SeoPage) {
  const url = `https://klickfunden.de${page.path}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${url}#service`,
        name: `Klickhafen - ${page.serviceType}`,
        url,
        description: page.description,
        serviceType: page.serviceType,
        areaServed: {
          "@type": "Country",
          name: "Deutschland",
        },
        provider: {
          "@type": "Organization",
          name: "Klickhafen",
          legalName: "Enrico Gross",
          alternateName: "Klickfunden.de",
          url: "https://klickfunden.de",
        },
        brand: {
          "@type": "Brand",
          name: "Klickhafen",
          url: "https://klickfunden.de",
        },
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
