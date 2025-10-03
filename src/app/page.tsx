import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectWorkSection from "@/components/ProjectWorkSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectWorkSection />
        <ProcessSection />
        <ServicesSection />
        <TestimonialSection />
      </main>
      <Footer />
    </>
  );
}
