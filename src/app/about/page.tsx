"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiTarget, FiEye, FiHeart, FiUsers, FiCode, FiCpu } from "react-icons/fi";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
        <section className="container-custom mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-white">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">Sorai Tech</span>
            </h1>
            <p className="text-xl text-gray-300">
              A product studio that designs, builds, and ships — so you don&apos;t have to hire 8 people to get one product out the door.
            </p>
          </motion.div>
        </section>

        <section className="container-custom mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-5 font-heading text-white">Our Story</h2>
              <p className="text-gray-300 mb-5">
                Sorai Tech started because we saw too many businesses stuck between two bad options: expensive agencies that over-scope everything, or freelancers that disappear mid-project. We wanted to build something in between — a tight, reliable product team that you can trust to deliver.
              </p>
              <p className="text-gray-300 mb-5">
                Founded by IIT Bombay alumni in Bangalore, we&apos;ve grown into a team of designers, engineers, and product managers who&apos;ve shipped products across cybersecurity, manufacturing, fintech, and more. Our clients are primarily in the US, and we operate on US-friendly timezones.
              </p>
              <p className="text-gray-300">
                We handle everything from Figma wireframes to React frontends to backend APIs to deployment. You bring the idea and the domain expertise — we bring the team and the execution.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-900/80 border border-gray-700/50 rounded-2xl p-8"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-400 mb-1">15+</p>
                  <p className="text-gray-400 text-sm">Products Shipped</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-400 mb-1">6+</p>
                  <p className="text-gray-400 text-sm">US & Global Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-400 mb-1">3+</p>
                  <p className="text-gray-400 text-sm">Years in Business</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-400 mb-1">50+</p>
                  <p className="text-gray-400 text-sm">Engineers & Designers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 font-heading text-white">What We Stand For</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-900/80 border border-gray-700/50 rounded-xl p-7 text-center"
              >
                <div className="bg-white/5 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5">
                  <FiTarget className="text-orange-400 text-xl" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">Ship, Don&apos;t Stall</h3>
                <p className="text-gray-300 text-sm">
                  We bias toward shipping. Clear scope, tight sprints, working software every week. No endless discovery phases.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-gray-900/80 border border-gray-700/50 rounded-xl p-7 text-center"
              >
                <div className="bg-white/5 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5">
                  <FiEye className="text-pink-500 text-xl" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">Full Transparency</h3>
                <p className="text-gray-300 text-sm">
                  Daily standups, shared boards, weekly demos. You see everything — designs, code progress, blockers — in real time.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-900/80 border border-gray-700/50 rounded-xl p-7 text-center"
              >
                <div className="bg-white/5 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5">
                  <FiHeart className="text-orange-400 text-xl" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">Own the Outcome</h3>
                <p className="text-gray-300 text-sm">
                  We don&apos;t just hand over files. We own the result — from design to deployment to post-launch support.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="container-custom py-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 font-heading text-white">Why Teams Choose Us</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6">
              <FiCpu className="text-orange-400 text-2xl mb-4" />
              <h3 className="text-lg font-bold mb-2 text-white">Design + Code Under One Roof</h3>
              <p className="text-gray-300 text-sm">
                No handoff friction. Our designers and engineers work side by side — what gets designed is exactly what gets built.
              </p>
            </div>

            <div className="p-6">
              <FiCode className="text-pink-500 text-2xl mb-4" />
              <h3 className="text-lg font-bold mb-2 text-white">Flexible on Tech Stack</h3>
              <p className="text-gray-300 text-sm">
                Figma, React, Next.js, Webflow, WordPress, Node.js, Python — we pick the right tool for the job, not the one we&apos;re most comfortable with.
              </p>
            </div>

            <div className="p-6">
              <FiUsers className="text-orange-400 text-2xl mb-4" />
              <h3 className="text-lg font-bold mb-2 text-white">US-Friendly Operations</h3>
              <p className="text-gray-300 text-sm">
                Our team overlaps with US timezones. Daily async updates, weekly syncs, and Slack channels you can reach anytime.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
