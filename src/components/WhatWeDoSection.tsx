"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import { FiZap, FiTrendingUp, FiSearch } from "react-icons/fi";

const pillars = [
  {
    icon: <FiZap className="text-2xl" />,
    title: "Idea to MVP",
    description: "UI/UX design + full-stack development. We take your concept and turn it into a working product.",
    color: "from-brand-500 to-brand-400",
  },
  {
    icon: <FiTrendingUp className="text-2xl" />,
    title: "MVP to Scale",
    description: "Backend architecture, DevOps, and performance optimization to handle real growth.",
    color: "from-brand-400 to-emerald-400",
  },
  {
    icon: <FiSearch className="text-2xl" />,
    title: "Growth",
    description: "SEO, AEO (AI search optimization) & automation to drive organic traffic and conversions.",
    color: "from-emerald-400 to-cyan-400",
  },
];

export default function WhatWeDoSection() {
  return (
    <SectionWrapper id="what-we-do">
      <SectionHeader
        label="What We Do"
        title={
          <>
            From Idea → Product →{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
              Growth
            </span>
          </>
        }
        subtitle="We cover the full product lifecycle — from first sketch to scaling your business."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ y: -6 }}
            className="relative p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-card-hover hover:border-brand-200/50 transition-all duration-300 group"
          >
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
              {pillar.icon}
            </div>

            <h3 className="text-xl font-bold mb-3 text-gray-900">{pillar.title}</h3>
            <p className="text-gray-600 leading-relaxed">{pillar.description}</p>

            {/* Step number */}
            <span className="absolute top-6 right-6 text-6xl font-bold text-gray-100 group-hover:text-brand-100/60 transition-colors duration-300 select-none">
              {index + 1}
            </span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
