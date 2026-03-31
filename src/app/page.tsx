import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ServicesSection from "@/components/ServicesSection";
import SEOAEOSection from "@/components/SEOAEOSection";
import WhoIsThisForSection from "@/components/WhoIsThisForSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectWorkSection from "@/components/ProjectWorkSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialSection from "@/components/TestimonialSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeDoSection />
        <ServicesSection />
        <TechStackSection />
        <SEOAEOSection />
        <WhoIsThisForSection />
        <ProjectWorkSection />
        <ProcessSection />
        <TestimonialSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
