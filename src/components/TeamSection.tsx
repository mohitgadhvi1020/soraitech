"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import { FiUser, FiPenTool, FiCode, FiSearch } from "react-icons/fi";

const roles = [
  { icon: <FiUser className="text-xl" />, title: "Product Manager", desc: "Owns roadmap, runs sprints, aligns stakeholders" },
  { icon: <FiPenTool className="text-xl" />, title: "Designers", desc: "UI/UX, Figma prototypes, design systems" },
  { icon: <FiCode className="text-xl" />, title: "Engineers", desc: "Full-stack, backend, DevOps, cloud infra" },
  { icon: <FiSearch className="text-xl" />, title: "SEO/AEO Experts", desc: "Technical SEO, content strategy, AI discoverability" },
];

const comparison = [
  { category: "Speed to start", freelancers: "1–2 weeks", inHouse: "2–3 months", sorai: "48 hours" },
  { category: "Full team coverage", freelancers: "Limited", inHouse: "Expensive", sorai: "All-in-one" },
  { category: "SEO + AEO included", freelancers: "No", inHouse: "Separate hire", sorai: "Built-in" },
  { category: "Scalability", freelancers: "Hard", inHouse: "Slow", sorai: "On-demand" },
  { category: "Cost efficiency", freelancers: "Medium", inHouse: "High", sorai: "Optimized" },
];

export default function TeamSection() {
  return (
    <SectionWrapper id="team">
      <SectionHeader
        label="Your Team"
        title={
          <>
            Your On-Demand{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
              Product Team
            </span>
          </>
        }
        subtitle="Instead of hiring 5–8 people, get a ready-made team that's already worked together."
      />

      {/* Role cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
        {roles.map((role, i) => (
          <motion.div
            key={role.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center hover:shadow-card hover:border-brand-200/50 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500 mx-auto mb-4">
              {role.icon}
            </div>
            <h4 className="font-semibold text-gray-900 mb-1 text-sm">{role.title}</h4>
            <p className="text-xs text-gray-500 leading-relaxed">{role.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Comparison table */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
          Why Teams Choose Sorai Tech
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-4 pr-6 text-sm font-semibold text-gray-500 uppercase tracking-wider" />
                <th className="py-4 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider text-center">Freelancers</th>
                <th className="py-4 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider text-center">In-House</th>
                <th className="py-4 px-4 text-sm font-semibold text-brand-600 uppercase tracking-wider text-center bg-brand-50/50 rounded-t-xl">Sorai Tech</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={row.category} className={`border-b border-gray-100 ${i === comparison.length - 1 ? "border-none" : ""}`}>
                  <td className="py-4 pr-6 text-sm font-medium text-gray-700">{row.category}</td>
                  <td className="py-4 px-4 text-sm text-gray-500 text-center">{row.freelancers}</td>
                  <td className="py-4 px-4 text-sm text-gray-500 text-center">{row.inHouse}</td>
                  <td className="py-4 px-4 text-sm text-brand-600 font-semibold text-center bg-brand-50/50">{row.sorai}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
