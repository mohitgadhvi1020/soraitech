import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudiesSection from "@/components/CaseStudiesSection";

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-custom mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-heading">Case Studies</h1>
          <p className="text-lg mb-6 max-w-3xl">
            Explore our successful projects and see how we&apos;ve helped businesses solve complex challenges.
          </p>
        </div>
        
        <CaseStudiesSection />
      </main>
      <Footer />
    </>
  );
} 