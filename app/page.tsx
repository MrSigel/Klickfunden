import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import References from "@/components/References";
import AboutFounder from "@/components/AboutFounder";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <ServicesGrid />
      <References />
      <AboutFounder />
      <FAQ />
      <LeadForm />
      <Footer />
    </main>
  );
}
