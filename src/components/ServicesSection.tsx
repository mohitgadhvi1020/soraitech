"use client";

import { motion } from "framer-motion";
import { 
  FiActivity, 
  FiCode, 
  FiServer, 
  FiDatabase, 
  FiLayers, 
  FiRefreshCw,
  FiUsers,
  FiZap
} from "react-icons/fi";
import Link from "next/link";

const services = [
  {
    id: "ai-automation",
    title: "AI Automation & Intelligence",
    description: "Transform your business with cutting-edge AI solutions, machine learning models, and intelligent automation systems that reduce costs and boost productivity significantly.",
    icon: <FiActivity className="text-orange-400 text-4xl" />,
    stats: "5+ AI Projects",
    delay: 0.1,
    gradient: "from-blue-500/10 to-purple-500/10",
  },
  {
    id: "fullstack-development",
    title: "Full-Stack Development Agency",
    description: "Growing full-stack development team specializing in scalable web applications, mobile apps, and enterprise solutions using React, Node.js, Python, and modern cloud technologies.",
    icon: <FiCode className="text-orange-400 text-4xl" />,
    stats: "10+ Applications Built",
    delay: 0.2,
    gradient: "from-green-500/10 to-blue-500/10",
  },
  {
    id: "freelancer-network",
    title: "Curated Developer Network",
    description: "Access our carefully selected network of 50+ skilled developers and specialists across key tech domains. We provide the right talent match for your specific project needs.",
    icon: <FiUsers className="text-orange-400 text-4xl" />,
    stats: "50+ Skilled Developers",
    delay: 0.3,
    gradient: "from-orange-500/10 to-red-500/10",
  },
  {
    id: "enterprise-solutions",
    title: "Enterprise Digital Solutions",
    description: "Focused digital transformation for growing businesses. We modernize systems, implement cloud infrastructure, and create scalable architectures that grow with your business.",
    icon: <FiLayers className="text-orange-400 text-4xl" />,
    stats: "6+ Happy Clients",
    delay: 0.4,
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Excellence",
    description: "Accelerate your development cycle with our cloud-native solutions, automated CI/CD pipelines, and infrastructure-as-code. Reliable and efficient deployment practices.",
    icon: <FiServer className="text-orange-400 text-4xl" />,
    stats: "Reliable Deployment",
    delay: 0.5,
    gradient: "from-teal-500/10 to-cyan-500/10",
  },
  {
    id: "rapid-deployment",
    title: "Rapid Product Development",
    description: "From MVP to market efficiently. Our agile methodology and proven components enable rapid prototyping, faster iterations, and quicker time-to-market for your innovative ideas.",
    icon: <FiZap className="text-orange-400 text-4xl" />,
    stats: "Fast Delivery",
    delay: 0.6,
    gradient: "from-yellow-500/10 to-orange-500/10",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <motion.div 
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold mb-8 border border-white/20"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FiActivity className="mr-2 text-orange-400" />
            Powering Innovation Across India
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">Premium Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            India&apos;s emerging technology partner, connecting businesses with skilled talent and delivering 
            quality AI automation, full-stack development, and enterprise solutions that drive real results.
          </p>
          
          {/* Enhanced Stats Bar */}
          <motion.div 
            className="flex flex-wrap justify-center gap-12 mt-16 pt-12 border-t border-charcoal-200/50 dark:border-charcoal-700/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { number: "50+", label: "Skilled Developers", delay: 0 },
              { number: "15+", label: "Projects Delivered", delay: 0.1 },
              { number: "100%", label: "Client Satisfaction", delay: 0.2 },
              { number: "24/7", label: "Dedicated Support", delay: 0.3 }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center group hover-scale"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.delay }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-navy-700 to-professional-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-charcoal-600 dark:text-charcoal-400 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: service.delay, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gray-900/95 border border-gray-700/50 rounded-xl shadow-2xl backdrop-blur-sm group relative overflow-hidden p-10 hover:shadow-[0_20px_50px_rgba(251,146,60,0.3)] transition-all duration-300"
            >
              {/* Enhanced Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <motion.div 
                    className="p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-orange-400 group-hover:text-pink-600 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </motion.div>
                  <div className="text-right">
                    <div className="text-xs font-semibold text-white bg-white/10 px-4 py-2 rounded-full border border-white/20">
                      {service.stats}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-heading font-bold mb-5 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-600 transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/5 to-pink-600/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 group-hover:rotate-45 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-600/5 to-orange-400/5 rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 group-hover:-rotate-45 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Enhanced Offshore Development Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-32 mb-20"
        >
          <div className="bg-gradient-to-r from-orange-500 via-pink-600 to-orange-500 p-1 rounded-3xl">
            <div className="bg-gray-900/95 rounded-3xl p-16 text-center relative overflow-hidden border border-gray-700/50 backdrop-blur-sm">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-20 h-20 bg-orange-400 rounded-full"></div>
                <div className="absolute top-32 right-16 w-16 h-16 bg-pink-600 rounded-full"></div>
                <div className="absolute bottom-20 left-20 w-12 h-12 bg-orange-500 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-500 rounded-full"></div>
              </div>
              <div className="flex justify-center mb-8 relative z-10">
                <div className="relative">
                  <motion.div 
                    className="w-24 h-24 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full flex items-center justify-center shadow-2xl"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 4,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="text-4xl">🌍</span>
                  </motion.div>
                  <motion.div 
                    className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ 
                      y: [0, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="text-lg">✨</span>
                  </motion.div>
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white relative z-10">
                Why Choose Us? Because We <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">Ship Results!</span> 🚀
              </h3>
              
              <p className="text-lg text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed relative z-10">
                While others are still planning, we&apos;re already shipping! 
                Our development approach isn&apos;t just about writing code – it&apos;s about delivering 
                business outcomes through efficient sprints and proven methodologies that drive real results.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 relative z-10">
                {[
                  {
                    icon: "⚡",
                    title: "Efficient Sprint Delivery",
                    description: "We deliver business outcomes through efficient sprints, not just code. Every sprint moves you closer to your goals.",
                    delay: 0
                  },
                  {
                    icon: "🎯",
                    title: "Results-Driven Approach",
                    description: "We focus on shipping products that matter and driving real business outcomes, not just technical features.",
                    delay: 0.1
                  },
                  {
                    icon: "🚀",
                    title: "Smooth Product Shipping",
                    description: "From concept to market, we ensure your product ships smoothly with minimal friction and maximum impact.",
                    delay: 0.2
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(251,146,60,0.3)] hover:-translate-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: item.delay }}
                  >
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-600 transition-all duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>


              <div className="text-center relative z-10">
                <p className="text-sm text-gray-400 mb-6 font-medium">
                  🏆 Trusted by 6+ growing companies | 🌟 5/5 client satisfaction rating
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center text-lg px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <span className="mr-3">🚀</span>
                    Launch Your Offshore Team Today
                    <span className="ml-3">→</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-24"
        >
          <div className="bg-gradient-premium p-12 rounded-3xl text-white shadow-premium-lg relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Transform Your Business?</h3>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join our growing community of satisfied clients who trust Sorai Tech for their digital transformation journey. 
                Let&apos;s build something extraordinary together.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/contact" className="bg-white text-navy-700 px-10 py-4 rounded-xl font-semibold hover:bg-charcoal-50 transition-all duration-300 shadow-premium inline-block">
                    Start Your Project
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/services" className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-navy-700 transition-all duration-300 inline-block">
                    View All Services
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 