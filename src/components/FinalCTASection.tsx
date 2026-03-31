"use client";

import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import CalendlyButton from "./CalendlyButton";
import { CALENDLY_URL } from "@/config/calendly";

export default function FinalCTASection() {
  return (
    <section className="py-20 md:py-28 bg-surface-950 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 via-brand-500/10 to-brand-700/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-500/15 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-section font-bold font-heading text-white mb-6">
            Have an Idea or Want to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
              Scale Your Product?
            </span>
          </h2>

          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tell us what you&apos;re building. We&apos;ll put together the right team — design, engineering, SEO/AEO — whatever you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CalendlyButton url={CALENDLY_URL} variant="primary" size="lg">
              Book Free Strategy Call
            </CalendlyButton>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Get Free Product Audit
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
