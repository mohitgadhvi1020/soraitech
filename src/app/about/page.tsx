"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper, { SectionHeader } from "@/components/SectionWrapper";
import CalendlyButton from "@/components/CalendlyButton";
import { CALENDLY_URL } from "@/config/calendly";
import { FiTarget, FiEye, FiHeart, FiCpu, FiCode, FiUsers } from "react-icons/fi";

const stats = [
  { value: "15+", label: "Products Shipped" },
  { value: "6+", label: "US & Global Clients" },
  { value: "3+", label: "Years in Business" },
  { value: "50+", label: "Engineers & Designers" },
];

const values = [
  {
    icon: <FiTarget className="text-xl" />,
    title: "Ship, Don\u2019t Stall",
    desc: "We bias toward shipping. Clear scope, tight sprints, working software every week. No endless discovery phases.",
    color: "text-brand-500",
    bg: "bg-brand-500/10",
  },
  {
    icon: <FiEye className="text-xl" />,
    title: "Full Transparency",
    desc: "Daily standups, shared boards, weekly demos. You see everything \u2014 designs, code progress, blockers \u2014 in real time.",
    color: "text-accent-500",
    bg: "bg-accent-500/10",
  },
  {
    icon: <FiHeart className="text-xl" />,
    title: "Own the Outcome",
    desc: "We don\u2019t just hand over files. We own the result \u2014 from design to deployment to post-launch support.",
    color: "text-brand-500",
    bg: "bg-brand-500/10",
  },
];

const reasons = [
  {
    icon: <FiCpu className="text-2xl" />,
    title: "Design + Code Under One Roof",
    desc: "No handoff friction. Our designers and engineers work side by side \u2014 what gets designed is exactly what gets built.",
    color: "text-brand-500",
  },
  {
    icon: <FiCode className="text-2xl" />,
    title: "Flexible on Tech Stack",
    desc: "Figma, React, Next.js, Webflow, WordPress, Node.js, Python \u2014 we pick the right tool for the job, not the one we\u2019re most comfortable with.",
    color: "text-accent-500",
  },
  {
    icon: <FiUsers className="text-2xl" />,
    title: "US-Friendly Operations",
    desc: "Our team overlaps with US timezones. Daily async updates, weekly syncs, and Slack channels you can reach anytime.",
    color: "text-brand-500",
  },
];

export default function AboutPage() {
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
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-white">
                A Product Studio That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                  Ships
                </span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                We design, build, and launch products so you don&apos;t have to hire 8 people to get one product out the door.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story + Stats */}
        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 font-heading text-gray-900">Our Story</h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Sorai Tech started because we saw too many businesses stuck between two bad options: expensive agencies that over-scope everything, or freelancers that disappear mid-project. We wanted to build something in between &mdash; a tight, reliable product team that you can trust to deliver.
              </p>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Founded by IIT Bombay alumni in Bangalore, we&apos;ve grown into a team of designers, engineers, and product managers who&apos;ve shipped products across cybersecurity, manufacturing, fintech, and more. Our clients are primarily in the US, and we operate on US-friendly timezones.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We handle everything from Figma wireframes to React frontends to backend APIs to deployment. You bring the idea and the domain expertise &mdash; we bring the team and the execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl border border-gray-100 p-10"
            >
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="text-center"
                  >
                    <p className="text-3xl font-bold text-brand-600 mb-1">{stat.value}</p>
                    <p className="text-gray-500 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Values */}
        <SectionWrapper className="bg-gray-50">
          <SectionHeader
            label="Our Values"
            title="What We Stand For"
            subtitle="Principles that guide every decision, every sprint, every deployment."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 p-8 text-center hover:shadow-card hover:border-brand-200/50 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${v.bg} flex items-center justify-center ${v.color} mx-auto mb-5`}>
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Why Teams Choose Us */}
        <SectionWrapper>
          <SectionHeader
            label="Why Us"
            title="Why Teams Choose Us"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6"
              >
                <div className={`${r.color} mb-4`}>{r.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-brand-600 to-brand-700">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
                Ready to Build Something Great?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Let&apos;s talk about your product idea and how we can bring it to life.
              </p>
              <CalendlyButton url={CALENDLY_URL} variant="secondary" size="lg">
                Book a Free Strategy Call
              </CalendlyButton>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
