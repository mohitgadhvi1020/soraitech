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
    <section className="py-20 bg-gray-50 dark:bg-dark/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            We follow a systematic approach to deliver successful outcomes for your projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.delay }}
              className="rounded-lg overflow-hidden shadow-md bg-white dark:bg-dark/50 hover:shadow-lg transition-all"
            >
              <div className={`${step.bgColor} p-4 flex justify-center items-center`}>
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mr-3">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-xl font-heading">{step.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:block relative mt-12">
          <div className="absolute h-1 bg-gradient-to-r from-primary to-secondary top-0 left-[12.5%] right-[12.5%] rounded-full" />
        </div>
      </div>
    </section>
  );
} 