"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import TechStackSection from "@/components/TechStackSection";
import SectionWrapper, { SectionHeader } from "@/components/SectionWrapper";
import CalendlyButton from "@/components/CalendlyButton";
import { CALENDLY_URL } from "@/config/calendly";

const engagementModels = [
  {
    title: "Full Product Team",
    desc: "Designer + Frontend + Backend + PM. We own the product end to end \u2014 from Figma to production.",
    best: "Best for new products & MVPs",
  },
  {
    title: "Team Extension",
    desc: "Plug 1\u20133 engineers or a designer into your existing team. We integrate with your tools and workflows.",
    best: "Best for scaling existing teams",
  },
  {
    title: "Project-Based",
    desc: "Fixed scope, fixed timeline, fixed price. We define deliverables upfront and execute against them.",
    best: "Best for well-defined projects",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-36 pb-20 bg-gradient-to-br from-brand-600 via-brand-700 to-surface-900">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block text-sm font-semibold tracking-wider uppercase text-brand-200 mb-3">
                Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-white">
                Everything You Need to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                  Build & Grow
                </span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                We provide the full product team &mdash; designers, engineers, and product managers &mdash; so you can focus on your business while we handle the build.
              </p>
            </motion.div>
          </div>
        </section>

        <ServicesSection />

        {/* Engagement Models */}
        <SectionWrapper className="bg-gray-50">
          <SectionHeader
            label="How We Work"
            title={
              <>
                Flexible{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
                  Engagement Models
                </span>
              </>
            }
            subtitle="Whether you need a full team or a single specialist, we adapt to your needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model, i) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col hover:shadow-card hover:border-brand-200/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{model.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{model.desc}</p>
                <p className="text-xs font-semibold text-brand-600 uppercase tracking-wider">{model.best}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <CalendlyButton url={CALENDLY_URL} variant="primary" size="lg">
              Discuss Your Needs
            </CalendlyButton>
          </div>
        </SectionWrapper>

        <TechStackSection />
      </main>
      <Footer />
    </>
  );
}
