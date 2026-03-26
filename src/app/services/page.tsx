"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import TechStackSection from "@/components/TechStackSection";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
        <div className="container-custom mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">Services</span>
            </h1>
            <p className="text-lg max-w-3xl text-gray-300">
              We provide the full product team — designers, engineers, and product managers — so you can focus on your business while we handle the build.
            </p>
          </motion.div>
        </div>
        
        <ServicesSection />

        {/* How we staff your project */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">Engagement Models</span>
              </h2>
              <p className="text-gray-300 max-w-2xl">
                Whether you need a full team or a single specialist, we adapt to your needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Full Product Team",
                  desc: "Designer + Frontend + Backend + PM. We own the product end to end — from Figma to production.",
                  best: "Best for new products & MVPs",
                },
                {
                  title: "Team Extension",
                  desc: "Plug 1-3 engineers or a designer into your existing team. We integrate with your tools and workflows.",
                  best: "Best for scaling existing teams",
                },
                {
                  title: "Project-Based",
                  desc: "Fixed scope, fixed timeline, fixed price. We define deliverables upfront and execute against them.",
                  best: "Best for well-defined projects",
                },
              ].map((model, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-gray-900/80 border border-gray-700/50 rounded-xl p-7 flex flex-col"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{model.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{model.desc}</p>
                  <p className="text-xs text-orange-400 font-medium">{model.best}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity duration-200"
              >
                Discuss Your Needs
              </Link>
            </div>
          </div>
        </section>

        <TechStackSection />
      </main>
      <Footer />
    </>
  );
}
