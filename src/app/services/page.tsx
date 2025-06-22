import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-custom mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-heading">Our Services</h1>
          <p className="text-lg mb-6 max-w-3xl">
            Sorai Tech provides comprehensive software and AI solutions to help businesses innovate and transform in the digital age.
          </p>
        </div>
        
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
} 