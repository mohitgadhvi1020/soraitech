"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import { FiSmartphone, FiCode, FiLayers, FiZap, FiUsers, FiTrendingUp } from "react-icons/fi";

export default function ServicesPage() {
  const mobileFeatures = [
    {
      icon: <FiSmartphone className="text-primary text-2xl" />,
      title: "Native iOS & Android Apps",
      description: "Platform-specific development using Swift, Kotlin, and native frameworks for optimal performance."
    },
    {
      icon: <FiCode className="text-primary text-2xl" />,
      title: "Cross-Platform Solutions",
      description: "React Native and Flutter development for consistent experience across all devices."
    },
    {
      icon: <FiLayers className="text-primary text-2xl" />,
      title: "Progressive Web Apps",
      description: "Modern web applications that work seamlessly across desktop and mobile platforms."
    },
    {
      icon: <FiZap className="text-primary text-2xl" />,
      title: "App Store Optimization",
      description: "Complete deployment and optimization for Google Play Store and Apple App Store."
    }
  ];

  const fullStackFeatures = [
    {
      icon: <FiCode className="text-secondary text-2xl" />,
      title: "Frontend Development",
      description: "Modern React, Next.js, Vue.js, and Angular applications with responsive design."
    },
    {
      icon: <FiLayers className="text-secondary text-2xl" />,
      title: "Backend Architecture",
      description: "Scalable Node.js, Python, and Java backends with microservices architecture."
    },
    {
      icon: <FiUsers className="text-secondary text-2xl" />,
      title: "Database Design",
      description: "PostgreSQL, MongoDB, and Redis implementations for optimal data management."
    },
    {
      icon: <FiTrendingUp className="text-secondary text-2xl" />,
      title: "API Development",
      description: "RESTful APIs and GraphQL services with comprehensive documentation."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
        <div className="container-custom mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-heading text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">Services</span>
          </h1>
          <p className="text-lg mb-6 max-w-3xl text-gray-300">
            Sorai Tech provides comprehensive software and AI solutions to help businesses innovate and transform in the digital age.
          </p>
        </div>
        
        <ServicesSection />

        {/* Mobile Development Section */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium mb-6 border border-white/20">
                <FiSmartphone className="mr-2 text-orange-400" />
                Mobile Development Excellence
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">App Development</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Create powerful, user-friendly mobile applications that engage your audience and drive business growth. 
                From native iOS and Android apps to cross-platform solutions, we deliver mobile experiences that users love.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {mobileFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/95 border border-gray-700/50 p-6 rounded-xl shadow-2xl backdrop-blur-sm hover:shadow-[0_20px_40px_rgba(251,146,60,0.3)] transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-white/10 rounded-lg mr-4">
                      <FiSmartphone className="text-orange-400 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r from-orange-500 to-pink-600 text-white p-8 rounded-2xl text-center border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4">Mobile Development Technologies</h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white/30 px-4 py-2 rounded-full font-medium">React Native</span>
                <span className="bg-white/30 px-4 py-2 rounded-full font-medium">Flutter</span>
                <span className="bg-white/30 px-4 py-2 rounded-full font-medium">Swift</span>
                <span className="bg-white/30 px-4 py-2 rounded-full font-medium">Kotlin</span>
                <span className="bg-white/30 px-4 py-2 rounded-full font-medium">Firebase</span>
                <span className="bg-white/30 px-4 py-2 rounded-full font-medium">PWA</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Full-Stack Development Section */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium mb-6 border border-white/20">
                <FiCode className="mr-2 text-pink-600" />
                Full-Stack Development Mastery
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Full-Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">Web Development</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                End-to-end web application development from concept to deployment. Our full-stack expertise covers 
                everything from responsive frontends to scalable backends, ensuring your web applications perform 
                flawlessly and scale with your business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {fullStackFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/95 border border-gray-700/50 p-6 rounded-xl shadow-2xl backdrop-blur-sm hover:shadow-[0_20px_40px_rgba(251,146,60,0.3)] transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-white/10 rounded-lg mr-4">
                      <FiCode className="text-pink-600 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r from-orange-500 to-pink-600 text-white p-8 rounded-2xl text-center border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4">Full-Stack Technology Stack</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Frontend</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-white/30 px-3 py-1 rounded-full font-medium">React</span>
                    <span className="bg-white/30 px-3 py-1 rounded-full font-medium">Next.js</span>
                    <span className="bg-white/30 px-3 py-1 rounded-full font-medium">Vue.js</span>
                    <span className="bg-white/30 px-3 py-1 rounded-full font-medium">TypeScript</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Backend</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-white/30 px-3 py-1 rounded-full font-medium">Node.js</span>
                    <span className="bg-white/30 px-3 py-1 rounded-full font-medium">Python</span>
                    <span className="bg-white/30 px-3 py-1 rounded-full font-medium">Java</span>
                    <span className="bg-white/30 px-3 py-1 rounded-full font-medium">GraphQL</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Database</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-white/30 px-3 py-1 rounded-full font-medium">PostgreSQL</span>
                    <span className="bg-white/30 px-3 py-1 rounded-full font-medium">MongoDB</span>
                    <span className="bg-white/30 px-3 py-1 rounded-full font-medium">Redis</span>
                    <span className="bg-white/30 px-3 py-1 rounded-full font-medium">AWS</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 