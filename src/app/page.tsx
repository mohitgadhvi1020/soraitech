import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientsSection from "@/components/ClientsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectWorkSection from "@/components/ProjectWorkSection";
import TestimonialSection from "@/components/TestimonialSection";
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
        <ProjectWorkSection />
        <TestimonialSection />
        <CaseStudiesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
