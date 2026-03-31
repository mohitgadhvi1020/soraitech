"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import { FiCheck } from "react-icons/fi";

const audiences = [
  {
    label: "SaaS Founders",
    desc: "Turn your idea into a launched product with a dedicated dev team.",
  },
  {
    label: "Startups Without a Tech Team",
    desc: "Get senior engineers, designers, and PMs on demand — no hiring overhead.",
  },
  {
    label: "Businesses Wanting AI + SEO Growth",
    desc: "Automate workflows and rank on Google & AI search engines.",
  },
  {
    label: "Scaling Teams",
    desc: "Augment your existing team with specialists who ship fast.",
  },
];

export default function WhoIsThisForSection() {
  return (
    <SectionWrapper id="who-is-this-for">
      <SectionHeader
        label="Who It's For"
        title={
          <>
            Built for Teams Who Want to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
              Move Fast
            </span>
          </>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {audiences.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-200/50 hover:shadow-card transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500 flex-shrink-0">
              <FiCheck className="text-lg" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{item.label}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
