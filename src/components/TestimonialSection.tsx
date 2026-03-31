"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const testimonials = [
  {
    id: 1,
    text: "Sorai Tech demonstrated exceptional commitment and technical skills throughout our finance platform project. Their expertise in full-stack development, cloud deployment, and payment integrations was outstanding.",
    name: "Parag Agarwal",
    title: "Engineering Manager at Piramal Finance",
    avatar: "PA",
    rating: 5,
  },
  {
    id: 2,
    text: "I needed a professional cybersecurity website that would establish credibility with government clients. Their team of 3 developers built it in 4 weeks — attention to SEO and content structure was impressive.",
    name: "Pete Slade",
    title: "Founder & Cybersecurity Strategist",
    avatar: "PS",
    rating: 5,
  },
  {
    id: 3,
    text: "Working with Sorai Tech was seamless. Strong skills in TypeScript, responsive design, and security best practices. Daily standups, weekly demos, and clear communication. Delivered on time and within budget.",
    name: "Nate Wondra",
    title: "Team Lead at Pete Slade Consulting",
    avatar: "NW",
    rating: 5,
  },
];

export default function TestimonialSection() {
  return (
    <SectionWrapper id="testimonials">
      <SectionHeader
        label="Testimonials"
        title={
          <>
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
              Clients Say
            </span>
          </>
        }
        subtitle="Hear from the teams and founders we've worked with."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.id}
            className="p-7 bg-gray-50 border border-gray-100 rounded-2xl hover:shadow-card-hover hover:border-brand-200/40 transition-all duration-300 flex flex-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            {/* Stars */}
            <div className="flex space-x-1 mb-5">
              {Array.from({ length: t.rating }).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed mb-6 flex-1 text-[15px]">
              &ldquo;{t.text}&rdquo;
            </p>

            <div className="flex items-center gap-3 pt-5 border-t border-gray-200/60">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-400 flex items-center justify-center text-white font-semibold text-sm">
                {t.avatar}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">{t.name}</h4>
                <p className="text-gray-500 text-xs">{t.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
