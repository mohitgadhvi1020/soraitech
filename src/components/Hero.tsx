"use client";

import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import CalendlyButton from "./CalendlyButton";
import { FiChevronDown } from "react-icons/fi";
import { CALENDLY_URL } from "@/config/calendly";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-950">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-400/15 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/[0.07] rounded-full blur-[150px]" />

      <div className="container-custom relative z-10 pt-28 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-brand-500/10 border border-brand-500/20 rounded-full text-sm text-brand-300 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Product Studio &middot; AI &middot; SEO &middot; AEO
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-hero lg:text-hero-lg font-bold font-heading leading-[1.08] mb-7 text-white"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Build, Launch &amp; Grow{" "}
            <br className="hidden sm:block" />
            Your Product —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
              with Dev, AI &amp; SEO/AEO
            </span>{" "}
            in One Team
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We help startups and businesses turn ideas into scalable products — and grow them using SEO, AEO (AI search optimization), and automation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <CalendlyButton url={CALENDLY_URL} variant="primary" size="lg">
              Book Free Strategy Call
            </CalendlyButton>
            <CTAButton href="#case-studies" variant="outline" size="lg">
              See Our Work
            </CTAButton>
          </motion.div>

          {/* Trust text */}
          <motion.p
            className="text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            Trusted by startups &amp; growing businesses
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {[
              { number: "15+", label: "Products shipped" },
              { number: "6+", label: "Global clients" },
              { number: "50+", label: "Engineers & designers" },
              { number: "100%", label: "Client retention" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-brand-400">{stat.number}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <FiChevronDown className="text-gray-500 text-2xl animate-scroll-hint" />
      </motion.div>
    </section>
  );
}
