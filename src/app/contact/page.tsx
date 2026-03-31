"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalendlyButton from "@/components/CalendlyButton";
import { CALENDLY_URL } from "@/config/calendly";
import { FiMapPin, FiMail, FiSend, FiClock } from "react-icons/fi";

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
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      // silently handle
    }

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-36 pb-16 bg-gradient-to-br from-brand-600 via-brand-700 to-surface-900">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block text-sm font-semibold tracking-wider uppercase text-brand-200 mb-3">
                Contact
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-white">
                Get in Touch
              </h1>
              <p className="text-lg text-white/80">
                Have a project in mind? Tell us about it and we&apos;ll get back to you within a business day.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form + Info */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <h2 className="text-xl font-bold mb-6 text-gray-900">Contact Details</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-500/10 p-3 rounded-xl flex-shrink-0">
                        <FiMapPin className="text-brand-600 text-lg" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-gray-900 mb-1">Location</h3>
                        <p className="text-gray-500 text-sm">Bangalore, India</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-brand-500/10 p-3 rounded-xl flex-shrink-0">
                        <FiMail className="text-brand-600 text-lg" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-gray-900 mb-1">Email</h3>
                        <a href="mailto:contact@soraitech.com" className="text-gray-500 text-sm hover:text-brand-600 transition-colors">
                          contact@soraitech.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <FiClock className="text-brand-500" />
                    <h3 className="font-semibold text-sm text-gray-900">Working Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Mon &ndash; Fri</span>
                      <span className="text-brand-600 font-medium">9:00 AM &ndash; 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Saturday</span>
                      <span className="text-brand-600 font-medium">10:00 AM &ndash; 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Sunday</span>
                      <span className="text-gray-400">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl p-6 text-white">
                  <h3 className="font-bold mb-2">Prefer a quick chat?</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Book a free 30-minute strategy call and let&apos;s discuss your project.
                  </p>
                  <CalendlyButton url={CALENDLY_URL} variant="secondary" size="md">
                    Book a Call
                  </CalendlyButton>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-3 bg-gray-50 border border-gray-100 rounded-2xl p-8"
              >
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiSend className="text-white text-xl" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Thank you!</h3>
                    <p className="text-gray-600 text-sm">
                      We&apos;ve received your message and will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white text-gray-900 text-sm transition-colors"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white text-gray-900 text-sm transition-colors"
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Phone (optional)</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white text-gray-900 text-sm transition-colors"
                          placeholder="+91 1234567890"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white text-gray-900 text-sm transition-colors"
                        required
                      >
                        <option value="">Select</option>
                        <option value="Project Discussion">Project Discussion</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Support">Support</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white text-gray-900 text-sm resize-none transition-colors"
                        placeholder="Tell us about your project..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-brand-700 transition-colors flex items-center justify-center text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
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
        </section>
      </main>
      <Footer />
    </>
  );
}
