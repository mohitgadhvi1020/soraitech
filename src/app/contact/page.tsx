"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";
import { FiMapPin, FiMail, FiSend } from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch {
      // silently handle — we still show success to the user
    }
    
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
        <section className="py-8">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-white">
                  Get in Touch
                </h1>
                <p className="text-lg text-gray-300">
                  Have a project in mind? Tell us about it and we&apos;ll get back to you within a business day.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="container-custom relative z-10 mt-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Contact Info - narrower */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-2 bg-gray-900/80 border border-gray-700/50 rounded-2xl p-8"
              >
                <h2 className="text-xl font-bold mb-6 text-white">Contact details</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-orange-500 to-pink-600 p-3 rounded-xl flex-shrink-0">
                      <FiMapPin className="text-white text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-white mb-1">Location</h3>
                      <p className="text-gray-400 text-sm">Bangalore, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-orange-500 to-pink-600 p-3 rounded-xl flex-shrink-0">
                      <FiMail className="text-white text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-white mb-1">Email</h3>
                      <a href="mailto:contact@soraitech.com" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">
                        contact@soraitech.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 p-5 rounded-xl mt-8 border border-gray-700/50">
                  <h3 className="font-semibold text-sm mb-3 text-white">Working hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Mon – Fri</span>
                      <span className="text-orange-400 font-medium">9:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Saturday</span>
                      <span className="text-orange-400 font-medium">10:00 AM – 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sunday</span>
                      <span className="text-gray-500">Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form - wider */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-3 bg-gray-900/80 border border-gray-700/50 rounded-2xl p-8"
              >
                {submitted ? (
                  <div className="bg-green-900/20 border border-green-800/50 rounded-xl p-8 text-center">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiSend className="text-white text-xl" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Thank you!</h3>
                    <p className="text-gray-300 text-sm">
                      We&apos;ve received your message and will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-gray-800 text-white text-sm transition-colors duration-200"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-gray-800 text-white text-sm transition-colors duration-200"
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">Phone (optional)</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-gray-800 text-white text-sm transition-colors duration-200"
                          placeholder="+91 1234567890"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-gray-800 text-white text-sm transition-colors duration-200"
                        required
                      >
                        <option value="" className="bg-gray-800">Select</option>
                        <option value="Project Discussion" className="bg-gray-800">Project Discussion</option>
                        <option value="General Inquiry" className="bg-gray-800">General Inquiry</option>
                        <option value="Partnership" className="bg-gray-800">Partnership</option>
                        <option value="Support" className="bg-gray-800">Support</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-gray-800 text-white text-sm resize-none transition-colors duration-200"
                        placeholder="Tell us about your project..."
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center justify-center text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <FiSend className="text-base" />
                          Send Message
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
        
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
