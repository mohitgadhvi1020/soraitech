"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
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

      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Engineering Smart Solutions with{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
                AI & Code
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-pink-600 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Sorai Tech builds future-ready software with AI-first thinking. We transform your ideas into intelligent, scalable solutions that drive real business results.
          </motion.p>

          {/* Product Shipping Excellence Section */}
          <motion.div
            className="mb-12 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="p-10 bg-gray-900/95 border border-gray-700/50 rounded-xl shadow-2xl backdrop-blur-sm hover-lift">
              <div className="flex items-center justify-center gap-4 mb-6">
                <motion.span 
                  className="text-4xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  🚀
                </motion.span>
                <h3 className="text-lg md:text-xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
                  Ship Products Smoothly, Deliver Business Outcomes
                </h3>
                <motion.span 
                  className="text-4xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  ⚡
                </motion.span>
              </div>
              <p className="text-base md:text-lg text-white leading-relaxed">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 text-lg">We don&apos;t just code – we deliver results!</span> 
                Through efficient sprints and agile methodologies, we help you 
                <span className="font-bold text-orange-400 text-lg"> ship products that matter</span> and 
                <span className="font-bold text-pink-600 text-lg"> drive real business outcomes</span>. 
                It&apos;s not just about building software – it&apos;s about building success! 🎯
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="flex items-center justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="relative h-10 w-10 hover-scale">
              <Image 
                src="/images/clients/iit-logo.png"
                alt="IIT Bombay logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
              Founded and led by IITians from IIT Bombay
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-32"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-block">
                Let&apos;s Talk
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/services" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 inline-block">
                See Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="flex flex-col items-center space-y-3">
          <motion.p 
            className="text-xs font-semibold text-white uppercase tracking-widest"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
          >
            Scroll to explore
          </motion.p>
          <motion.div 
            className="w-7 h-11 border-2 border-white/30 rounded-full flex justify-center bg-white/5 backdrop-blur-sm shadow-lg"
            whileHover={{ scale: 1.1, borderColor: "rgba(251, 146, 60, 0.5)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-1.5 h-3 bg-gradient-to-b from-orange-400 to-pink-600 rounded-full mt-2 shadow-lg"
              animate={{ 
                y: [0, 14, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 