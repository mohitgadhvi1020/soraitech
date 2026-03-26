"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Mohit Ghanghaniya",
      role: "Founder & CEO",
      bio: "IIT Bombay alumnus with deep expertise in full-stack development and product delivery. Leads client relationships, technical architecture, and team building. Has shipped products across cybersecurity, fintech, and manufacturing for US and global clients.",
      linkedin: "https://linkedin.com/in/mohitghanghaniya",
      github: "https://github.com/mohitgadhvi1020",
      email: "mohit@soraitech.com"
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
        <section className="container-custom mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">Team</span>
            </h1>
            <p className="text-lg text-gray-300">
              The people behind Sorai Tech.
            </p>
          </motion.div>
        </section>

        <section className="container-custom mb-20">
          <h2 className="text-xl font-bold mb-6 text-white">Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-900/80 border border-gray-700/50 rounded-xl p-7"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400/20 to-pink-600/20 rounded-full mb-5 flex items-center justify-center text-2xl font-bold text-white border border-orange-400/20">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-bold mb-1 text-white">{member.name}</h3>
                <p className="text-orange-400 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-5">{member.bio}</p>
                
                <div className="flex gap-3">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-400 transition-colors">
                    <FiLinkedin size={18} />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-400 transition-colors">
                    <FiGithub size={18} />
                  </a>
                  <a href={`mailto:${member.email}`} className="text-gray-500 hover:text-orange-400 transition-colors">
                    <FiMail size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container-custom mb-20">
          <h2 className="text-xl font-bold mb-6 text-white">How we work together</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Small teams, big ownership", desc: "Everyone contributes to architecture, code, and client conversations. No siloed roles." },
              { title: "Continuous improvement", desc: "Weekly retros, shared code reviews, and a culture of honest feedback." },
              { title: "Sustainable pace", desc: "We ship consistently without burnouts. Quality work comes from rested minds." },
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-900/80 border border-gray-700/50 rounded-xl p-7"
              >
                <h3 className="text-sm font-bold mb-2 text-white">{point.title}</h3>
                <p className="text-gray-400 text-sm">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container-custom">
          <div className="bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Want to join us?</h2>
            <p className="text-white/90 mb-6 text-sm">
              We&apos;re looking for engineers who want to build real products, not just clock hours.
            </p>
            <Link 
              href="/careers" 
              className="inline-block bg-white text-gray-900 px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-sm"
            >
              View Open Positions
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
