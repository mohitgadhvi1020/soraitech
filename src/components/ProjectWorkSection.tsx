'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ProjectWorkSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">Work</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Products we&apos;ve designed, built, and shipped for our clients.
          </p>
        </motion.div>

        {/* Project 1 */}
        <motion.div 
          className="grid lg:grid-cols-5 gap-10 items-start mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <video 
                ref={videoRef}
                className="w-full h-auto"
                loop 
                muted 
                playsInline
                controls={false}
              >
                <source src="/video/project 1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-2 space-y-5">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-[11px] font-medium uppercase tracking-wider text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full">Design</span>
                <span className="text-[11px] font-medium uppercase tracking-wider text-pink-400 bg-pink-400/10 px-3 py-1 rounded-full">Development</span>
                <span className="text-[11px] font-medium uppercase tracking-wider text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">Deployment</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Cybersecurity Expert Platform
              </h3>
              <p className="text-gray-300 leading-relaxed text-[15px]">
                Designed and built a professional platform for cybersecurity strategist Pete Slade — establishing credibility with government and enterprise clients.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">What we delivered</h4>
              <ul className="space-y-2">
                {[
                  "Complete UI/UX design in Figma",
                  "Responsive frontend (React + Next.js)",
                  "Content architecture for thought leadership",
                  "Performance optimization (95% Lighthouse)",
                  "Secure deployment with ongoing support",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-orange-400 mt-1 flex-shrink-0">&#x2022;</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-6 pt-4 border-t border-gray-700/50">
              <div>
                <p className="text-lg font-bold text-orange-400">4 people</p>
                <p className="text-xs text-gray-500">Team size</p>
              </div>
              <div>
                <p className="text-lg font-bold text-orange-400">4 weeks</p>
                <p className="text-xs text-gray-500">End to end</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div 
          className="grid lg:grid-cols-5 gap-10 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <video 
                className="w-full h-auto"
                autoPlay
                loop 
                muted 
                playsInline
                controls={false}
              >
                <source src="/video/fulcrum video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-2 space-y-5">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-[11px] font-medium uppercase tracking-wider text-pink-400 bg-pink-400/10 px-3 py-1 rounded-full">Development</span>
                <span className="text-[11px] font-medium uppercase tracking-wider text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">Backend</span>
                <span className="text-[11px] font-medium uppercase tracking-wider text-green-400 bg-green-400/10 px-3 py-1 rounded-full">DevOps</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Fulcrum Pro — Production Scheduling
              </h3>
              <p className="text-gray-300 leading-relaxed text-[15px]">
                Contributed to Fulcrum Pro&apos;s scheduling engine — auto-adjusting manufacturing shop floor plans for optimal throughput.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">What we delivered</h4>
              <ul className="space-y-2">
                {[
                  "Real-time schedule optimization algorithms",
                  "Production monitoring dashboards (React + Node.js)",
                  "PostgreSQL data layer with AWS infrastructure",
                  "Docker/Kubernetes deployment pipeline",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-orange-400 mt-1 flex-shrink-0">&#x2022;</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-6 pt-4 border-t border-gray-700/50">
              <div>
                <p className="text-lg font-bold text-orange-400">18 people</p>
                <p className="text-xs text-gray-500">Team size</p>
              </div>
              <div>
                <p className="text-lg font-bold text-orange-400">6 technologies</p>
                <p className="text-xs text-gray-500">Stack depth</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectWorkSection;
