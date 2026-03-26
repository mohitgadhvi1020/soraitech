'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "Sorai Tech demonstrated exceptional commitment and technical skills throughout our 6-week finance platform project. Their expertise in full-stack development, cloud deployment, and payment integrations was outstanding. The team's dedication to quality and timely delivery made this collaboration a great success.",
      name: "Parag Agarwal",
      title: "Engineering Manager at Piramal Finance",
      rating: 5
    },
    {
      id: 2,
      text: "I needed a professional cybersecurity website that would establish credibility with government clients. Sorai Tech's team of 3 developers built it in 4 weeks using React, Next.js, and implemented advanced security features. Their attention to content structure and SEO optimization was impressive.",
      name: "Pete Slade",
      title: "Founder & Cybersecurity Strategist",
      rating: 5
    },
    {
      id: 3,
      text: "Working with Sorai Tech for 8 weeks was seamless. Their developers showed strong skills in TypeScript, responsive design, and security best practices. Daily standups, weekly demos, and clear communication made the collaboration smooth. They delivered on time and within budget.",
      name: "Nate Wondra",
      title: "Team Lead at Pete Slade Consulting",
      rating: 5
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hear from the teams and founders we&apos;ve worked with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="p-8 bg-gray-900/80 border border-gray-700/50 rounded-xl relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex space-x-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-200 leading-relaxed mb-6 text-[15px]">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center space-x-3 mt-auto pt-5 border-t border-gray-700/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400/30 to-pink-600/30 flex items-center justify-center text-white font-semibold text-sm border border-orange-400/20">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-xs">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity duration-200"
          >
            Work With Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
