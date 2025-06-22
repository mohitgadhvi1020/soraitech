"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const caseStudies = [
  {
    id: "case1",
    title: "AI-Powered Customer Service Platform",
    category: "Artificial Intelligence",
    description: "We built an intelligent customer service platform using LLMs to automate 75% of support requests and reduce response times by 90%.",
    bgColor: "bg-primary",
    delay: 0.1,
  },
  {
    id: "case2",
    title: "E-Commerce Transformation & Scale",
    category: "Full-Stack Development",
    description: "Migrated a legacy e-commerce platform to a modern tech stack, improving performance by 300% and enabling global scale.",
    bgColor: "bg-secondary",
    delay: 0.2,
  },
  {
    id: "case3",
    title: "Cloud Migration & DevOps Automation",
    category: "Cloud & DevOps",
    description: "Implemented a complete cloud migration with CI/CD pipelines, reducing deployment time from days to minutes.",
    bgColor: "bg-primary/80",
    delay: 0.3,
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Explore how we&apos;ve helped businesses solve complex challenges with our expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: study.delay }}
              className={`${study.bgColor} rounded-xl p-8 text-white hover:shadow-lg transition-all h-full flex flex-col`}
            >
              <div className="mb-4">
                <span className="text-white/80 text-sm font-medium">{study.category}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 font-heading">{study.title}</h3>
              <p className="mb-6 text-white/90 flex-grow">{study.description}</p>
              <Link 
                href={`/case-studies/${study.id}`} 
                className="inline-flex items-center text-white hover:underline"
              >
                View Case Study
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/case-studies" className="btn-primary">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
} 