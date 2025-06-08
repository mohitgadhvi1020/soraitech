'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TestimonialSection = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  const testimonials = [
    {
      id: 1,
      text: "Sorai Tech delivered an exceptional AI solution that transformed our business operations. Their expertise in machine learning is unmatched!",
      name: "Sarah Chen",
      title: "CTO at InnovateCorp",
      avatar: "/images/avatar-1.jpg",
      rating: 5
    },
    {
      id: 2,
      text: "The team's attention to detail and innovative approach exceeded our expectations. Our productivity increased by 300%!",
      name: "Michael Rodriguez",
      title: "CEO at TechFlow",
      avatar: "/images/avatar-2.jpg",
      rating: 5
    },
    {
      id: 3,
      text: "Working with Sorai Tech was a game-changer. They delivered a scalable solution that perfectly fit our needs.",
      name: "Emily Johnson",
      title: "Product Manager at DataSync",
      avatar: "/images/avatar-3.jpg",
      rating: 5
    },
    {
      id: 4,
      text: "Outstanding work! The AI integration was seamless and the results were immediate. Highly recommended!",
      name: "David Park",
      title: "Founder at StartupVibe",
      avatar: "/images/avatar-4.jpg",
      rating: 5
    },
    {
      id: 5,
      text: "Professional, efficient, and innovative. Sorai Tech helped us stay ahead of the competition with cutting-edge technology.",
      name: "Lisa Zhang",
      title: "Operations Director at CloudTech",
      avatar: "/images/avatar-5.jpg",
      rating: 5
    },
    {
      id: 6,
      text: "The quality of their work is exceptional. They transformed our vision into reality with precision and creativity.",
      name: "James Wilson",
      title: "Head of Engineering at FutureSoft",
      avatar: "/images/avatar-6.jpg",
      rating: 5
    }
  ];

  const getStrategicPosition = (index: number) => {
    const isMobile = windowSize.width < 768;
    const isTablet = windowSize.width < 1200;
    
    // Center coordinates
    const centerX = windowSize.width / 2;
    const centerY = windowSize.height / 2;
    
    // Much tighter clustering around center
    const positions = [
      { x: -200, y: -150 }, // Top left near center
      { x: 180, y: -120 },  // Top right near center
      { x: -250, y: 50 },   // Middle left
      { x: 220, y: 80 },    // Middle right
      { x: -150, y: 200 },  // Bottom left near center
      { x: 160, y: 180 }    // Bottom right near center
    ];
    
    const position = positions[index % positions.length];
    
    if (isMobile) {
      return {
        x: Math.max(10, Math.min(windowSize.width - 290, centerX + position.x * 0.4)),
        y: Math.max(200, centerY + position.y * 0.5),
      };
    } else if (isTablet) {
      return {
        x: Math.max(20, Math.min(windowSize.width - 330, centerX + position.x * 0.6)),
        y: Math.max(250, centerY + position.y * 0.7),
      };
    } else {
      return {
        x: Math.max(50, Math.min(windowSize.width - 370, centerX + position.x)),
        y: Math.max(300, centerY + position.y),
      };
    }
  };

  const floatingVariants = {
    animate: (customIndex: number) => ({
      x: [0, 10, -5, 8, 0],
      y: [0, -8, 4, -6, 0],
      rotate: [0, 1, -0.5, 0.8, 0],
      transition: {
        duration: 6 + customIndex * 1,
        repeat: Infinity,
        ease: "easeInOut",
        delay: customIndex * 0.3
      }
    })
  };

  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      scale: 0.3,
      rotate: Math.random() * 40 - 20,
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    }),
    visible: (index: number) => ({
      opacity: [0.4, 0.7, 0.9, 1][index % 4],
      scale: [0.7, 0.8, 1.0, 1.2][index % 4],
      rotate: [-15, -8, 5, 12, 25, -10][index % 6],
      x: 0,
      y: 0,
      transition: {
        duration: 1.5,
        delay: index * 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden py-20">
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
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
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
            Don't just take our word for it. See what our amazing clients have to say about their experience working with us.
          </motion.p>
        </motion.div>
      </div>

             {/* Floating Testimonial Cards */}
       <div className="absolute inset-0 pointer-events-none">
         {testimonials.slice(0, 5).map((testimonial, index) => {
           const position = getStrategicPosition(index);
          
          return (
            <motion.div
              key={testimonial.id}
              className="absolute pointer-events-auto"
              style={{
                left: position.x,
                top: position.y + 100,
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              custom={index}
            >
              <motion.div
                variants={floatingVariants}
                animate="animate"
                custom={index}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0,
                  zIndex: 50,
                  boxShadow: "0 25px 50px rgba(255, 255, 255, 0.1)"
                }}
                transition={{ duration: 0.3 }}
                                 className="w-64 md:w-72 p-4 bg-gray-900/95 border border-gray-700/50 rounded-xl shadow-2xl cursor-pointer group backdrop-blur-sm"
                style={{
                  willChange: "transform",
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
                      transition={{ delay: index * 0.2 + i * 0.1, type: "spring" }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <motion.p 
                  className="text-white text-base md:text-lg leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  "{testimonial.text}"
                </motion.p>

                {/* Reviewer Info */}
                <motion.div 
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.7 }}
                >
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
                </motion.div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 to-pink-600/0 group-hover:from-orange-400/10 group-hover:to-pink-600/10 rounded-2xl transition-all duration-500 pointer-events-none" />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action */}
      <motion.div 
        className="relative z-10 text-center mt-32"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          whileHover={{ 
            boxShadow: "0 20px 40px rgba(255, 107, 0, 0.3)",
            y: -2
          }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Success Story
        </motion.button>
      </motion.div>

      {/* CSS for reduced motion */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection; 