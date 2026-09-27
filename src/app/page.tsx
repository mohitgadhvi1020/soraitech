import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/site/Hero";
import {
  ClientStrip,
  Services,
  UseCases,
  Approach,
  Process,
  Principles,
  Testimonials,
  Founder,
  FAQ,
  FinalCTA,
} from "@/components/site/Sections";

export default function Home() {
  return (
    <div className="font-grotesk text-ink">
      <Navbar />
      <main>
        <Hero />
        <ClientStrip />
        <Services />
        <UseCases />
        <Approach />
        <Process />
        <Principles />
        <Testimonials />
        <Founder />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
