"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Information We Collect",
    content: [
      "Personal Information: When you contact us, subscribe to our newsletter, or use our services, we may collect personal information such as your name, email address, phone number, and company details.",
      "Usage Data: We collect information about how you interact with our website, including pages visited, time spent, and other analytics data.",
      "Technical Data: This includes your IP address, browser type, device information, and other technical details for security and optimization purposes.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "Service Delivery: To provide our consulting and development services, communicate about projects, and deliver requested information.",
      "Communication: To respond to your inquiries, send updates about our services, and share relevant industry insights (with your consent).",
      "Website Improvement: To analyze usage patterns, improve our website functionality, and enhance user experience.",
      "Legal Compliance: To comply with applicable laws, regulations, and legal processes.",
    ],
  },
  {
    title: "Information Sharing",
    content: [
      "We do not sell, trade, or rent your personal information to third parties.",
      "We may share information with trusted service providers who assist us in operating our website and conducting business, under strict confidentiality agreements.",
      "We may disclose information when required by law or to protect our rights, property, or safety.",
      "In the event of a business transfer, your information may be transferred as part of the transaction.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      "We use industry-standard encryption and security protocols to safeguard data transmission and storage.",
      "Access to personal information is restricted to authorized personnel only.",
      "We regularly review and update our security measures to ensure ongoing protection.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "Access: You have the right to request access to the personal information we hold about you.",
      "Correction: You can request correction of any inaccurate or incomplete personal information.",
      "Deletion: You may request deletion of your personal information, subject to legal requirements.",
      "Opt-out: You can unsubscribe from our communications at any time using the unsubscribe link in emails.",
      "Data Portability: You have the right to receive your personal information in a structured, machine-readable format.",
    ],
  },
  {
    title: "Cookies and Tracking",
    content: [
      "We use cookies and similar technologies to enhance your browsing experience and analyze website traffic.",
      "Essential cookies are necessary for website functionality and cannot be disabled.",
      "Analytics cookies help us understand how visitors interact with our website.",
      "You can control cookie preferences through your browser settings.",
    ],
  },
  {
    title: "Third-Party Links",
    content: [
      "Our website may contain links to third-party websites that are not operated by us.",
      "We are not responsible for the privacy practices of these external sites.",
      "We encourage you to review the privacy policies of any third-party websites you visit.",
      "This privacy policy applies only to our website and services.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this privacy policy from time to time to reflect changes in our practices or legal requirements.",
      "We will notify you of any material changes by posting the updated policy on our website.",
      "The \u2018Last Updated\u2019 date at the top of this policy indicates when it was last revised.",
      "Continued use of our services after changes constitutes acceptance of the updated policy.",
    ],
  },
];

export default function PrivacyPage() {
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
              className="max-w-3xl"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-white">Privacy Policy</h1>
              <p className="text-white/60 text-sm">Last updated: March 1, 2026</p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-gray-600 leading-relaxed mb-12 text-lg"
              >
                At Sorai Tech, we are committed to protecting your privacy and ensuring the security of your personal information.
                This privacy policy explains how we collect, use, and protect your information when you visit our website or use our services.
              </motion.p>

              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  className="mb-12"
                >
                  <h2 className="text-xl font-bold mb-4 font-heading text-gray-900">{section.title}</h2>
                  <div className="space-y-3">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-600 leading-relaxed text-sm">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-2xl font-bold mb-4 font-heading text-gray-900">Questions About This Policy?</h2>
              <p className="text-gray-600 mb-8">
                If you have any questions about this privacy policy or how we handle your personal information, please don&apos;t hesitate to contact us.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto mb-8">
                <div>
                  <h3 className="font-bold mb-1 text-gray-900 text-sm">Email Us</h3>
                  <a href="mailto:contact@soraitech.com" className="text-brand-600 hover:text-brand-700 transition-colors text-sm">
                    contact@soraitech.com
                  </a>
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-gray-900 text-sm">Contact Form</h3>
                  <a href="/contact" className="text-brand-600 hover:text-brand-700 transition-colors text-sm">
                    Use our contact form
                  </a>
                </div>
              </div>

              <div className="p-5 bg-white border border-gray-100 rounded-xl">
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-900">Sorai Tech</strong><br />
                  Bangalore, India<br />
                  Email: contact@soraitech.com
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
