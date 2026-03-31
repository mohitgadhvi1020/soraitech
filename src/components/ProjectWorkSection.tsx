"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const projects = [
  {
    title: "Cybersecurity Expert Platform",
    desc: "Designed and built a professional platform for cybersecurity strategist Pete Slade — establishing credibility with government and enterprise clients.",
    tags: ["Design", "Development", "Deployment"],
    metrics: [
      { value: "95%", label: "Lighthouse Score" },
      { value: "4 weeks", label: "End to end" },
    ],
    deliverables: [
      "Complete UI/UX design in Figma",
      "Responsive frontend (React + Next.js)",
      "Content architecture for thought leadership",
      "Performance optimization & secure deployment",
    ],
    video: "/video/project 1.mp4",
  },
  {
    title: "Fulcrum Pro — Production Scheduling",
    desc: "Contributed to Fulcrum Pro's scheduling engine — auto-adjusting manufacturing shop floor plans for optimal throughput.",
    tags: ["Backend", "DevOps", "Development"],
    metrics: [
      { value: "10k+", label: "Users handled" },
      { value: "40%", label: "Performance gain" },
    ],
    deliverables: [
      "Real-time schedule optimization algorithms",
      "Production monitoring dashboards",
      "PostgreSQL + AWS infrastructure",
      "Docker/Kubernetes pipeline",
    ],
    video: "/video/fulcrum video.mp4",
  },
];

export default function ProjectWorkSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <SectionWrapper id="case-studies">
      <SectionHeader
        label="Case Studies"
        title={
          <>
            Recent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
              Work
            </span>
          </>
        }
        subtitle="Products we've designed, built, and shipped for our clients."
      />

      <div className="space-y-20">
        {projects.map((project, pIdx) => (
          <motion.div
            key={project.title}
            className="grid lg:grid-cols-2 gap-10 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            {/* Video */}
            <div className={`${pIdx % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-card-hover border border-gray-200/60 group">
                <video
                  ref={pIdx === 0 ? videoRef : undefined}
                  className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-500"
                  autoPlay={pIdx > 0}
                  loop
                  muted
                  playsInline
                  controls={false}
                >
                  <source src={project.video} type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Content */}
            <div className={`space-y-5 ${pIdx % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>

              <p className="text-gray-600 leading-relaxed">{project.desc}</p>

              <ul className="space-y-2">
                {project.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-brand-500 mt-0.5 flex-shrink-0">&#x2022;</span>
                    {d}
                  </li>
                ))}
              </ul>

              {/* Metrics */}
              <div className="flex gap-8 pt-4 border-t border-gray-200">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-xl font-bold text-brand-600">{m.value}</p>
                    <p className="text-xs text-gray-500">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
