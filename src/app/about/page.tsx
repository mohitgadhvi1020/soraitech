"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiTarget, FiEye, FiHeart, FiUsers, FiCode, FiCpu } from "react-icons/fi";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container-custom mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Sorai Tech</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We&apos;re passionate technologists who believe in the transformative power of AI and intelligent software solutions.
            </p>
          </motion.div>
        </section>

        {/* Story Section */}
        <section className="container-custom mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 font-heading">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Founded with a vision to bridge the gap between cutting-edge AI technology and practical business solutions, 
                Sorai Tech was born from the recognition that the future belongs to businesses that can effectively leverage 
                artificial intelligence and smart software development.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Based in Rajkot, Gujarat, we&apos;ve grown from a small team of passionate developers to a comprehensive 
                technology consultancy that serves clients across various industries, helping them navigate the complex 
                landscape of digital transformation.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Our expertise spans across AI integration, full-stack development, cloud solutions, and technical architecture, 
                making us your one-stop destination for modern software solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
                  <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary mb-2">20+</h3>
                  <p className="text-gray-600 dark:text-gray-300">Happy Clients</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary mb-2">3+</h3>
                  <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary mb-2">10+</h3>
                  <p className="text-gray-600 dark:text-gray-300">Technologies</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="bg-gray-50 dark:bg-dark/30 py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Our Foundation</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Everything we do is guided by our core principles and commitment to excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white dark:bg-dark/50 rounded-xl p-8 text-center"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiTarget className="text-primary text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-heading">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To democratize AI and advanced technology solutions, making them accessible and practical for businesses of all sizes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white dark:bg-dark/50 rounded-xl p-8 text-center"
              >
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiEye className="text-secondary text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-heading">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To be the leading AI-first software consultancy that transforms how businesses operate in the digital age.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white dark:bg-dark/50 rounded-xl p-8 text-center"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiHeart className="text-primary text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-heading">Our Values</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Innovation, integrity, and client success drive everything we do. We believe in transparent communication and delivering exceptional results.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="container-custom py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">What Sets Us Apart</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We&apos;re not just another development agency. Here&apos;s what makes Sorai Tech unique.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FiCpu className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">AI-First Approach</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We integrate AI thinking into every project, ensuring your solutions are future-ready and intelligent.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6"
            >
              <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FiCode className="text-secondary text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Full-Stack Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300">
                From frontend to backend, cloud infrastructure to mobile apps - we handle the complete technology stack.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FiUsers className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Client-Centric Focus</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your success is our success. We work as an extension of your team, not just an external vendor.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 