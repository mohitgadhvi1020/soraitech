"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />

      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Design &middot; Development &middot; Product Management
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-[1.1] mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your Product Team,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
              Ready to Ship
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We handle the full product lifecycle — from Figma wireframes to production code. UI/UX design, frontend, backend, Webflow, workflows, and dedicated product management. One team, zero gaps.
          </motion.p>

          {/* Capability pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-14"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              "UI/UX Design",
              "Figma",
              "React / Next.js",
              "Webflow",
              "Node.js / Python",
              "Workflow Automation",
              "Product Management",
              "Cloud & DevOps",
            ].map((cap) => (
              <span
                key={cap}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-orange-400/30 hover:text-white transition-colors duration-200"
              >
                {cap}
              </span>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {[
              { number: "15+", label: "Products shipped" },
              { number: "6+", label: "US & global clients" },
              { number: "50+", label: "Engineers & designers" },
              { number: "100%", label: "Client retention" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-orange-400">{stat.number}</p>
                <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity duration-200 inline-block text-lg">
              Let&apos;s Build Together
            </Link>
            <Link href="/services" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/15 transition-colors duration-200 inline-block">
              See What We Do
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
