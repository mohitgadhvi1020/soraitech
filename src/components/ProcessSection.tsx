"use client";

import { motion } from "framer-motion";
import { FiSearch, FiLayout, FiCode, FiTrendingUp } from "react-icons/fi";

const processSteps = [
  {
    title: "Discover",
    description: "We begin by understanding your business goals, challenges, and requirements through in-depth consultation.",
    icon: <FiSearch className="text-white text-2xl" />,
    delay: 0.1,
    bgColor: "bg-primary",
  },
  {
    title: "Design",
    description: "Our team creates detailed technical specifications and designs that align with your business objectives.",
    icon: <FiLayout className="text-white text-2xl" />,
    delay: 0.2,
    bgColor: "bg-primary/90",
  },
  {
    title: "Build",
    description: "We develop your solution using agile methodologies, ensuring quality and frequent communication.",
    icon: <FiCode className="text-white text-2xl" />,
    delay: 0.3,
    bgColor: "bg-primary/80",
  },
  {
    title: "Scale",
    description: "We help deploy, monitor, and scale your solution while providing ongoing support and optimization.",
    icon: <FiTrendingUp className="text-white text-2xl" />,
    delay: 0.4,
    bgColor: "bg-primary/70",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We follow a systematic approach to deliver successful outcomes for your projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: step.delay }}
              className="bg-gray-900/95 border border-gray-700/50 rounded-xl shadow-2xl backdrop-blur-sm overflow-hidden hover-lift group"
            >
              <div className="bg-gradient-to-r from-orange-500 to-pink-600 p-6 flex justify-center items-center">
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  {step.icon}
                </motion.div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400/20 to-pink-600/20 text-orange-400 flex items-center justify-center font-bold mr-4 border border-orange-400/30">
                    {index + 1}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-600 transition-all duration-300">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:block relative mt-16">
          <motion.div 
            className="absolute h-1 bg-gradient-to-r from-orange-400 to-pink-600 top-0 left-[12.5%] right-[12.5%] rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
} 