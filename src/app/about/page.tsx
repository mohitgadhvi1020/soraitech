import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-heading">About Sorai Tech</h1>
          <p className="text-lg mb-6">
            Page under development. Check back soon!
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
} 