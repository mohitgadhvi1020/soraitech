'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

const TestimonialSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      text: "Sorai Tech delivered an exceptional AI solution that transformed our business operations. Their expertise in machine learning is unmatched!",
      name: "Sarah Chen",
      title: "CTO at InnovateCorp",
      rating: 5
    },
    {
      id: 2,
      text: "The team's attention to detail and innovative approach exceeded our expectations. Our productivity increased by 300%!",
      name: "Michael Rodriguez",
      title: "CEO at TechFlow",
      rating: 5
    },
    {
      id: 3,
      text: "Working with Sorai Tech was a game-changer. They delivered a scalable solution that perfectly fit our needs.",
      name: "Emily Johnson",
      title: "Product Manager at DataSync",
      rating: 5
    },
    {
      id: 4,
      text: "Outstanding work! The AI integration was seamless and the results were immediate. Highly recommended!",
      name: "David Park",
      title: "Founder at StartupVibe",
      rating: 5
    },
    {
      id: 5,
      text: "Professional, efficient, and innovative. Sorai Tech helped us stay ahead of the competition with cutting-edge technology.",
      name: "Lisa Zhang",
      title: "Operations Director at CloudTech",
      rating: 5
    },
    {
      id: 6,
      text: "The quality of their work is exceptional. They transformed our vision into reality with precision and creativity.",
      name: "James Wilson",
      title: "Head of Engineering at FutureSoft",
      rating: 5
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal 
          className="text-center mb-16"
          direction="up"
          preVisible={true}
          duration={1}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            They said{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
              WHAT?! 🤯
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Don&apos;t just take our word for it. See what our amazing clients have to say about their experience working with us.
          </motion.p>
        </ScrollReveal>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Testimonials */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-12"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <ScrollReveal
                key={testimonial.id}
                className="flex-shrink-0 w-80 md:w-96"
                direction="up"
                delay={index * 0.1}
                duration={0.5}
                preVisible={index < 2} // Make first 2 cards pre-visible
                distance={50}
              >
                <motion.div
                  className="p-6 bg-gray-900/95 border border-gray-700/50 rounded-xl shadow-2xl backdrop-blur-sm group hover:shadow-orange-500/20 hover:shadow-2xl transition-all duration-300 h-full"
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                  }}
                >
                {/* Stars Rating */}
                <div className="flex space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ scale: 0, rotate: 180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + i * 0.05, type: "spring" }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white text-lg leading-relaxed mb-6 line-clamp-4">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg group-hover:text-orange-400 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 to-pink-600/0 group-hover:from-orange-400/10 group-hover:to-pink-600/10 rounded-xl transition-all duration-500 pointer-events-none" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/contact">
            <motion.div
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
              whileHover={{ 
                boxShadow: "0 20px 40px rgba(255, 107, 0, 0.3)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Success Story
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection; 