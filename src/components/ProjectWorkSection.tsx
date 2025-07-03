'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProjectWorkSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);



  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play failed, which is fine
      });
    }
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.2
      }
    }
  };

  const detailsVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const featuresContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const processVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const processContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  // Viewport settings
  const viewportSettings = {
    once: true,
    amount: 0.2,
    margin: "-100px"
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-10 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-20"
        animate={{ 
          rotate: [360, 0],
          scale: [1, 0.8, 1],
          y: [0, 15, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          variants={headerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            variants={headerVariants}
          >
            Our Project Work
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={headerVariants}
          >
            Explore our innovative solutions and see our projects in action. 
            We deliver cutting-edge technology solutions that drive business success.
          </motion.p>
        </motion.div>

        {/* Project 1 */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-12 items-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={projectVariants}
        >
          {/* Project 1 Video - Takes 2 columns */}
          <motion.div 
            className="order-2 lg:order-1 lg:col-span-2"
            variants={videoVariants}
            style={{ y: y1 }}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <video 
                ref={videoRef}
                className="w-full h-auto"
                loop 
                muted 
                playsInline
                controls={false}
              >
                <source src="/video/project 1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>

          {/* Project 1 Details - Takes 1 column */}
          <motion.div 
            className="order-1 lg:order-2 lg:col-span-1 space-y-8"
            variants={detailsVariants}
          >
            <motion.div className="space-y-6" variants={detailsVariants}>
              <motion.h3 
                className="text-2xl font-bold text-gray-900"
                variants={detailsVariants}
              >
                Project 1 - Cybersecurity Expert Platform
              </motion.h3>
              <motion.p 
                className="text-gray-600 leading-relaxed"
                variants={detailsVariants}
              >
                Professional website development for cybersecurity strategist Pete Slade, 
                showcasing expertise and enabling thought leadership in the cybersecurity domain.
              </motion.p>
            </motion.div>

            {/* Project 1 Features */}
            <motion.div 
              className="space-y-4"
              variants={featuresContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              <motion.h4 
                className="text-xl font-semibold text-gray-900"
                variants={featureVariants}
              >
                Key Features
              </motion.h4>
              <motion.div 
                className="grid gap-3"
                variants={featuresContainerVariants}
              >
                {[
                  "✅ High-performance platform for Pete Slade 🌐 (cybersecurity strategist & AI technologist)",
                  "🎯 Goal: Showcase credentials, enable outreach, reinforce thought leadership",
                  "🛡️ Website: Credible, content-rich, secure for a Congressional cybersecurity advisor",
                  "👥 Team: 4 (2 React frontend, 2 Node.js backend, 1 designer)",
                  "🚀 Delivered: UI/UX, front-end, content structuring, optimization, secure deployment",
                  "🤝 Client benefits: 💰 Cost-effective, ⏱️ fast delivery, 🏢 enterprise security, 🔄 ongoing support"
                ].map((feature, index) => (
                  <motion.div 
                    key={`p1-${index}`} 
                    className="flex items-start"
                    variants={featureVariants}
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Project 1 Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200"
              variants={detailsVariants}
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="text-2xl font-bold text-blue-600"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  95%
                </motion.div>
                <div className="text-sm text-gray-600">Performance Score</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="text-2xl font-bold text-green-600"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  100%
                </motion.div>
                <div className="text-sm text-gray-600">User Satisfaction</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Project 2 */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={projectVariants}
        >
          {/* Project 2 Details - Takes 1 column (Left side) */}
          <motion.div 
            className="order-1 lg:order-1 lg:col-span-1 space-y-8"
            variants={detailsVariants}
          >
            <motion.div className="space-y-6" variants={detailsVariants}>
              <motion.h3 
                className="text-2xl font-bold text-gray-900"
                variants={detailsVariants}
              >
                Project 2 - Piramal Finance Platform
              </motion.h3>
              <motion.p 
                className="text-gray-600 leading-relaxed"
                variants={detailsVariants}
              >
                We delivered a modern, user-friendly site that streamlined applications and boosted engagement.
                Complete with tailored UX/UI, backend integration, content, and automation for the Indian market.
              </motion.p>
            </motion.div>

            {/* Project 2 Features */}
            <motion.div 
              className="space-y-4"
              variants={featuresContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              <motion.h4 
                className="text-xl font-semibold text-gray-900"
                variants={featureVariants}
              >
                Key Features
              </motion.h4>
              <motion.div 
                className="grid gap-3"
                variants={featuresContainerVariants}
              >
                {[
                  "✅ Team: 10 developers, 2 QA, 3 managers",
                  "✅ Cut development costs by 35% 💰",
                  "✅ Reduced time-to-market by 40% ⚡",
                  "✅ Achieved faster, smoother loan approvals 📈",
                  "🚀 Tech Stack: React, Node.js, MongoDB, AWS",
                  "🎯 Tailored UX/UI for Indian financial market"
                ].map((feature, index) => (
                  <motion.div 
                    key={`p2-${index}`} 
                    className="flex items-start"
                    variants={featureVariants}
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Project 2 Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200"
              variants={detailsVariants}
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="text-2xl font-bold text-purple-600"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  99.9%
                </motion.div>
                <div className="text-sm text-gray-600">Uptime</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="text-2xl font-bold text-indigo-600"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  50+
                </motion.div>
                <div className="text-sm text-gray-600">Features</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Project 2 Video - Takes 2 columns (Right side) */}
          <motion.div 
            className="order-2 lg:order-2 lg:col-span-2"
            variants={videoVariants}
            style={{ y: y2 }}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <video 
                className="w-full h-auto"
                autoPlay
                loop 
                muted 
                playsInline
                controls={false}
              >
                <source src="/video/poject 2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Project Work Structure */}
        <motion.div 
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-900 text-center mb-12"
            variants={headerVariants}
          >
            Our Work Process
          </motion.h3>
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={processContainerVariants}
          >
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your requirements and project goals",
                icon: "🔍"
              },
              {
                step: "02", 
                title: "Planning",
                description: "Strategic roadmap and technical architecture design",
                icon: "📋"
              },
              {
                step: "03",
                title: "Development",
                description: "Agile development with continuous integration",
                icon: "⚡"
              },
              {
                step: "04",
                title: "Delivery",
                description: "Testing, deployment, and ongoing support",
                icon: "🚀"
              }
            ].map((phase, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                variants={processVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div className="relative mb-6">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl mx-auto"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 5
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300,
                      damping: 10
                    }}
                  >
                    {phase.icon}
                  </motion.div>
                  <motion.div 
                    className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-blue-600 shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      delay: index * 0.1 + 0.3, 
                      type: "spring", 
                      stiffness: 200 
                    }}
                    viewport={{ once: true }}
                  >
                    {phase.step}
                  </motion.div>
                </motion.div>
                <motion.h4 
                  className="text-lg font-semibold text-gray-900 mb-2"
                  variants={processVariants}
                >
                  {phase.title}
                </motion.h4>
                <motion.p 
                  className="text-sm text-gray-600 leading-relaxed"
                  variants={processVariants}
                >
                  {phase.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectWorkSection; 