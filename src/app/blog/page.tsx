"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper, { SectionHeader } from "@/components/SectionWrapper";
import { FiCode, FiCpu, FiTrendingUp, FiSearch, FiLayers } from "react-icons/fi";

const categories = [
  { name: "AI & Machine Learning", icon: FiCpu, desc: "Practical guides on integrating AI into products" },
  { name: "Web Development", icon: FiCode, desc: "Modern frontend and backend best practices" },
  { name: "Cloud & DevOps", icon: FiLayers, desc: "Infrastructure, CI/CD, and scaling strategies" },
  { name: "SEO & AEO", icon: FiSearch, desc: "Ranking on Google and AI search engines" },
  { name: "Product & Growth", icon: FiTrendingUp, desc: "Building and scaling products that users love" },
];

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

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-36 pb-20 bg-gradient-to-br from-brand-600 via-brand-700 to-surface-900">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block text-sm font-semibold tracking-wider uppercase text-brand-200 mb-3">
                Blog
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-white">
                Insights &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                  Ideas
                </span>
              </h1>
              <p className="text-lg text-white/80">
                Practical articles on building software, integrating AI, and scaling teams.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <SectionWrapper>
          <SectionHeader label="Topics" title="What We Write About" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => {
              const IconComponent = cat.icon;
              return (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex items-start gap-4 hover:shadow-card hover:border-brand-200/50 transition-all duration-300"
                >
                  <div className="bg-brand-500/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="text-brand-600 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{cat.name}</h3>
                    <p className="text-gray-500 text-xs">{cat.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </SectionWrapper>

        {/* Coming Soon + Subscribe */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-lg mx-auto text-center"
            >
              <div className="bg-white rounded-2xl border border-gray-100 p-10 shadow-card">
                <h2 className="text-2xl font-bold mb-3 font-heading text-gray-900">Coming Soon</h2>
                <p className="text-gray-600 mb-8 text-sm">
                  We&apos;re preparing in-depth articles and case studies. Leave your email and we&apos;ll let you know when we publish.
                </p>

                {subscribed ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-700 text-sm font-medium">Thanks! We&apos;ll notify you when new content is live.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white text-gray-900 text-sm transition-colors"
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors whitespace-nowrap text-sm"
                    >
                      Notify Me
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
