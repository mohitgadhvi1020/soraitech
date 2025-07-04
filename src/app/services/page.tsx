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
      <main className="pt-32 pb-20">
        <div className="container-custom mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-heading">Our Services</h1>
          <p className="text-lg mb-6 max-w-3xl">
            Sorai Tech provides comprehensive software and AI solutions to help businesses innovate and transform in the digital age.
          </p>
        </div>
        
        <ServicesSection />

        {/* Mobile Development Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-blue/5">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
                <FiSmartphone className="mr-2" />
                Mobile Development Excellence
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Mobile App Development
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
              className="bg-gradient-to-r from-primary to-blue-600 text-white p-8 rounded-2xl text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Mobile Development Technologies</h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white/20 px-4 py-2 rounded-full">React Native</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">Flutter</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">Swift</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">Kotlin</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">Firebase</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">PWA</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Full-Stack Development Section */}
        <section className="py-20 bg-gradient-to-br from-secondary/5 to-purple/5">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium mb-6">
                <FiCode className="mr-2" />
                Full-Stack Development Mastery
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-secondary to-purple-600 bg-clip-text text-transparent">
                Full-Stack Web Development
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-secondary/10 rounded-lg mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
              className="bg-gradient-to-r from-secondary to-purple-600 text-white p-8 rounded-2xl text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Full-Stack Technology Stack</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full">React</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">Next.js</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">Vue.js</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">TypeScript</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full">Node.js</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">Python</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">Java</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">GraphQL</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Database</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full">PostgreSQL</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">MongoDB</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">Redis</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">AWS</span>
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