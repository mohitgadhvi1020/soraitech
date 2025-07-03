"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";

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
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      // Send form data to our API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero Section with Gradient Background */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 via-blue-50 to-secondary/5 dark:from-primary/10 dark:via-gray-900 dark:to-secondary/10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-50" />
          <div className="container-custom relative">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
                  <FiMail className="mr-2" />
                  Let&apos;s Start a Conversation
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Contact Us
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Ready to transform your ideas into reality? Let&apos;s discuss your project and create something amazing together.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="container-custom -mt-10 relative z-10">
          <div className="max-w-7xl mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold font-heading mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Get in Touch
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <motion.div 
                    className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-gradient-to-r from-primary to-blue-600 p-4 rounded-xl group-hover:shadow-lg transition-shadow">
                      <FiMapPin className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Our Location</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg">
                        Floor 234, Rajkot, Gujarat<br />
                        India
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-gradient-to-r from-secondary to-purple-600 p-4 rounded-xl group-hover:shadow-lg transition-shadow">
                      <FiPhone className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Phone Numbers</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg">
                        +91 7231972519<br />
                        +91 6351068776
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-gradient-to-r from-green-500 to-teal-600 p-4 rounded-xl group-hover:shadow-lg transition-shadow">
                      <FiMail className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Email Address</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg">
                        contact@soraitech.com<br />
                        soraitech@gmail.com
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-2xl mt-8 border border-primary/20">
                  <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">Working Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Monday - Friday</span>
                      <span className="text-primary font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Saturday</span>
                      <span className="text-primary font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Sunday</span>
                      <span className="text-gray-500">Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold font-heading mb-4 bg-gradient-to-r from-secondary to-purple-600 bg-clip-text text-transparent">
                    Send a Message
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Tell us about your project and we&apos;ll get back to you within 24 hours.
                  </p>
                </div>
                
                {submitted ? (
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center"
                  >
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiSend className="text-white text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Message Sent Successfully!</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      Thanks for reaching out! We&apos;ll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-600 dark:text-red-400">
                        {error}
                      </div>
                    )}
                    <div>
                      <label htmlFor="name" className="block mb-3 font-semibold text-gray-700 dark:text-gray-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 dark:bg-gray-700 text-lg hover:border-primary/50"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block mb-3 font-semibold text-gray-700 dark:text-gray-300">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 dark:bg-gray-700 text-lg hover:border-primary/50"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block mb-3 font-semibold text-gray-700 dark:text-gray-300">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 dark:bg-gray-700 text-lg hover:border-primary/50"
                          placeholder="+91 1234567890"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block mb-3 font-semibold text-gray-700 dark:text-gray-300">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 dark:bg-gray-700 text-lg hover:border-primary/50"
                        required
                      >
                        <option value="">Select an option</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Project Discussion">Project Discussion</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Support">Support</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-3 font-semibold text-gray-700 dark:text-gray-300">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 dark:bg-gray-700 text-lg hover:border-primary/50 resize-none"
                        placeholder="Tell us about your project or inquiry..."
                        required
                      ></textarea>
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <FiSend className="mr-3 text-xl" />
                          Send Message
                        </span>
                      )}
                    </motion.button>
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