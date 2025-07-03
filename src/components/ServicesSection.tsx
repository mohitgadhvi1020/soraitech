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
    icon: <FiActivity className="text-primary text-4xl" />,
    stats: "5+ AI Projects",
    delay: 0.1,
    gradient: "from-blue-500/10 to-purple-500/10",
  },
  {
    id: "fullstack-development",
    title: "Full-Stack Development Agency",
    description: "Growing full-stack development team specializing in scalable web applications, mobile apps, and enterprise solutions using React, Node.js, Python, and modern cloud technologies.",
    icon: <FiCode className="text-primary text-4xl" />,
    stats: "10+ Applications Built",
    delay: 0.2,
    gradient: "from-green-500/10 to-blue-500/10",
  },
  {
    id: "freelancer-network",
    title: "Curated Developer Network",
    description: "Access our carefully selected network of 50+ skilled developers and specialists across key tech domains. We provide the right talent match for your specific project needs.",
    icon: <FiUsers className="text-primary text-4xl" />,
    stats: "50+ Skilled Developers",
    delay: 0.3,
    gradient: "from-orange-500/10 to-red-500/10",
  },
  {
    id: "enterprise-solutions",
    title: "Enterprise Digital Solutions",
    description: "Focused digital transformation for growing businesses. We modernize systems, implement cloud infrastructure, and create scalable architectures that grow with your business.",
    icon: <FiLayers className="text-primary text-4xl" />,
    stats: "6+ Happy Clients",
    delay: 0.4,
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Excellence",
    description: "Accelerate your development cycle with our cloud-native solutions, automated CI/CD pipelines, and infrastructure-as-code. Reliable and efficient deployment practices.",
    icon: <FiServer className="text-primary text-4xl" />,
    stats: "Reliable Deployment",
    delay: 0.5,
    gradient: "from-teal-500/10 to-cyan-500/10",
  },
  {
    id: "rapid-deployment",
    title: "Rapid Product Development",
    description: "From MVP to market efficiently. Our agile methodology and proven components enable rapid prototyping, faster iterations, and quicker time-to-market for your innovative ideas.",
    icon: <FiZap className="text-primary text-4xl" />,
    stats: "Fast Delivery",
    delay: 0.6,
    gradient: "from-yellow-500/10 to-orange-500/10",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-dark dark:to-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
            <FiActivity className="mr-2" />
            Powering Innovation Across India
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            India&apos;s emerging technology partner, connecting businesses with skilled talent and delivering 
            quality AI automation, full-stack development, and enterprise solutions that drive real results.
          </p>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Skilled Developers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Dedicated Support</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: service.delay }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`group relative overflow-hidden bg-white dark:bg-dark/80 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 backdrop-blur-sm`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {service.stats}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/5 rounded-full translate-y-10 -translate-x-10 group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Offshore Development Section - Playful */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-24 mb-16"
        >
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-3xl">
            <div className="bg-white dark:bg-dark rounded-3xl p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-3xl">🌍</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                    <span className="text-sm">✨</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Why Go Offshore? Because We&apos;re Ocean-Deep in Talent! 🌊
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
                While others are still fishing for developers, we&apos;ve already built an entire tech ecosystem! 
                Our offshore development isn&apos;t just about cost savings – it&apos;s about diving into a treasure trove 
                of innovation that never sleeps.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-4">🕒</div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">24/7 Development Cycle</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    While you sleep, we code! Our global team ensures your project never stops moving forward.
                  </p>
                </div>
                
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-4">💰</div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Premium Quality, Smart Pricing</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get Silicon Valley quality at India prices. It&apos;s like finding a unicorn, but we have a whole herd!
                  </p>
                </div>
                
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-4">🚀</div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Rocket-Speed Delivery</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our developers don&apos;t just write code – they craft digital magic at warp speed!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl mb-8">
                <div className="flex flex-wrap justify-center items-center gap-6 text-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🎯</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Zero Time Zone Hassles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🛡️</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Bank-Level Security</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🎨</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Creative Problem Solving</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">📞</span>
                    <span className="font-semibold text-gray-900 dark:text-white">English-First Communication</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  🏆 Trusted by 6+ growing companies | 🌟 5/5 client satisfaction rating
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <span className="mr-2">🚀</span>
                  Launch Your Offshore Team Today
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-primary-light mb-6 max-w-2xl mx-auto">
              Join our growing community of satisfied clients who trust Sorai Tech for their digital transformation journey. 
              Let&apos;s build something extraordinary together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
              </Link>
              <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
            View All Services
          </Link>
        </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 