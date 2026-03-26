"use client";

import { motion } from "framer-motion";
import { FiSearch, FiPenTool, FiCode, FiTrendingUp } from "react-icons/fi";

const processSteps = [
  {
    title: "Research & Scope",
    description: "We understand your users, market, and goals. Then we define a clear scope, timeline, and team structure — so everyone's aligned before we start.",
    icon: <FiSearch className="text-white text-xl" />,
  },
  {
    title: "Design in Figma",
    description: "Wireframes, high-fidelity mockups, and interactive prototypes — all in Figma. You review and approve every screen before a single line of code is written.",
    icon: <FiPenTool className="text-white text-xl" />,
  },
  {
    title: "Build & Iterate",
    description: "Frontend, backend, integrations — built in weekly sprints. You get a demo every week, give feedback, and we adjust. No surprises at the end.",
    icon: <FiCode className="text-white text-xl" />,
  },
  {
    title: "Launch & Support",
    description: "We deploy to production, set up monitoring, and stay on for support. As your product grows, we scale the team and features with you.",
    icon: <FiTrendingUp className="text-white text-xl" />,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-28 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">Deliver</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A structured process from first conversation to live product — with you in the loop the entire time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/80 border border-gray-700/50 rounded-xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-orange-500 to-pink-600 p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  {step.icon}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/60 text-sm font-medium">0{index + 1}</span>
                  <h3 className="font-bold text-lg text-white">{step.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
