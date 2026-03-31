"use client";

import { motion } from "framer-motion";
import { FiMessageCircle, FiCode, FiTrendingUp } from "react-icons/fi";

const steps = [
  {
    icon: <FiMessageCircle className="text-xl" />,
    title: "Discovery",
    desc: "We understand your product, users, and goals. Then we define scope, timeline, and the right team.",
    color: "from-brand-500 to-brand-400",
  },
  {
    icon: <FiCode className="text-xl" />,
    title: "Build",
    desc: "Weekly sprints with demos. Design in Figma, full-stack development, QA — all in lockstep.",
    color: "from-brand-400 to-emerald-400",
  },
  {
    icon: <FiTrendingUp className="text-xl" />,
    title: "Launch & Scale",
    desc: "Deploy to production, set up monitoring, activate SEO/AEO, and scale as you grow.",
    color: "from-emerald-400 to-cyan-400",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-surface-900 text-white relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-brand-400 mb-3">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-section font-bold font-heading mb-5 text-white">
            Simple, Fast, Transparent
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From first conversation to live product — with you in the loop every step.
          </p>
        </motion.div>

        {/* Horizontal stepper */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated connecting line */}
          <div className="hidden md:block absolute top-14 left-[16.67%] right-[16.67%] h-[2px]">
            <div className="w-full h-full bg-white/10 rounded-full" />
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-500 via-emerald-400 to-cyan-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
                className="text-center relative"
              >
                {/* Circle */}
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white mx-auto mb-6 relative z-10 shadow-glow`}>
                  {step.icon}
                </div>

                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
                  Step {i + 1}
                </span>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
