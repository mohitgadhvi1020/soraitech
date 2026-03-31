"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const features = [
  {
    title: "Technical SEO",
    desc: "Site speed, structured data, crawlability — the foundation of organic visibility.",
  },
  {
    title: "Content Strategy",
    desc: "Keyword research, topic clusters, and content that ranks and converts.",
  },
  {
    title: "AI Discoverability (AEO)",
    desc: "Optimize your content so AI tools like ChatGPT, Perplexity, and Gemini cite you as a source.",
  },
];

export default function SEOAEOSection() {
  return (
    <section className="py-20 md:py-28 bg-surface-950 text-white relative overflow-hidden">
      {/* Background gradient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-400/[0.07] rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-brand-400 mb-4">
              SEO + AEO
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-section font-bold font-heading mb-6">
              Built for the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-300 to-cyan-400">
                Future of Search
              </span>
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed mb-10">
              We help you rank not just on Google, but also inside AI tools like ChatGPT, Perplexity, and Gemini using{" "}
              <strong className="text-white">AEO (Answer Engine Optimization)</strong>.
            </p>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <FiCheckCircle className="text-brand-400 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="glass-card p-10 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-brand-500/20 rounded-full blur-[80px]" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-sm text-gray-400">Your content is optimized</span>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Google Search", value: "Page 1", bar: "85%" },
                    { label: "ChatGPT Citations", value: "Referenced", bar: "70%" },
                    { label: "Perplexity Sources", value: "Top 3", bar: "75%" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300">{item.label}</span>
                        <span className="text-brand-400 font-medium">{item.value}</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-brand-500 to-brand-400 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: item.bar }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-500">
                    Illustrative — actual results vary by industry and competition.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
