"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiCode, FiCpu, FiTrendingUp } from "react-icons/fi";

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const categories = [
    { name: "AI & Machine Learning", icon: FiCpu },
    { name: "Web Development", icon: FiCode },
    { name: "Cloud & DevOps", icon: FiTrendingUp },
  ];

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
              Blog & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">Insights</span>
            </h1>
            <p className="text-lg text-gray-300">
              Practical articles on building software, integrating AI, and scaling teams.
            </p>
          </motion.div>
        </section>

        <section className="container-custom mb-20">
          <h2 className="text-xl font-bold mb-6 text-white">Topics we write about</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-900/80 border border-gray-700/50 rounded-xl p-6 flex items-center gap-4"
                >
                  <div className="bg-white/5 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="text-orange-400 text-lg" />
                  </div>
                  <h3 className="font-semibold text-white text-sm">{category.name}</h3>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="bg-gray-900/80 border border-gray-700/50 rounded-2xl p-10">
              <h2 className="text-2xl font-bold mb-3 font-heading text-white">Coming Soon</h2>
              <p className="text-gray-300 mb-8 text-sm">
                We&apos;re preparing in-depth articles and case studies. Leave your email and we&apos;ll let you know when we publish.
              </p>
              
              {subscribed ? (
                <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4">
                  <p className="text-green-400 text-sm font-medium">Thanks! We&apos;ll notify you when new content is live.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-gray-800 text-white text-sm transition-colors duration-200"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 whitespace-nowrap text-sm"
                  >
                    Notify Me
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
