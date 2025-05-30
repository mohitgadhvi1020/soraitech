import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientsSection from "@/components/ClientsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientsSection />
        <ServicesSection />
        <ProcessSection />
        <CaseStudiesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
