"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  outcome: string;
  bullets: string[];
  icon: React.ReactNode;
  index: number;
}

export default function ServiceCard({ title, outcome, bullets, icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="glass-card p-7 group hover:border-brand-400/30 hover:shadow-glow transition-all duration-300 cursor-default"
    >
      <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 mb-5 group-hover:bg-brand-500/20 transition-colors">
        {icon}
      </div>

      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>

      <p className="text-sm text-gray-400 mb-4 leading-relaxed">{outcome}</p>

      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
            <span className="text-brand-400 mt-0.5 flex-shrink-0">&#x2713;</span>
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
