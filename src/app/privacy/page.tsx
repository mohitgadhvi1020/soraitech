"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal Information: When you contact us, subscribe to our newsletter, or use our services, we may collect personal information such as your name, email address, phone number, and company details.",
        "Usage Data: We collect information about how you interact with our website, including pages visited, time spent, and other analytics data.",
        "Technical Data: This includes your IP address, browser type, device information, and other technical details for security and optimization purposes."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "Service Delivery: To provide our consulting and development services, communicate about projects, and deliver requested information.",
        "Communication: To respond to your inquiries, send updates about our services, and share relevant industry insights (with your consent).",
        "Website Improvement: To analyze usage patterns, improve our website functionality, and enhance user experience.",
        "Legal Compliance: To comply with applicable laws, regulations, and legal processes."
      ]
    },
    {
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties.",
        "We may share information with trusted service providers who assist us in operating our website and conducting business, under strict confidentiality agreements.",
        "We may disclose information when required by law or to protect our rights, property, or safety.",
        "In the event of a business transfer, your information may be transferred as part of the transaction."
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        "We use industry-standard encryption and security protocols to safeguard data transmission and storage.",
        "Access to personal information is restricted to authorized personnel only.",
        "We regularly review and update our security measures to ensure ongoing protection."
      ]
    },
    {
      title: "Your Rights",
      content: [
        "Access: You have the right to request access to the personal information we hold about you.",
        "Correction: You can request correction of any inaccurate or incomplete personal information.",
        "Deletion: You may request deletion of your personal information, subject to legal requirements.",
        "Opt-out: You can unsubscribe from our communications at any time using the unsubscribe link in emails.",
        "Data Portability: You have the right to receive your personal information in a structured, machine-readable format."
      ]
    },
    {
      title: "Cookies and Tracking",
      content: [
        "We use cookies and similar technologies to enhance your browsing experience and analyze website traffic.",
        "Essential cookies are necessary for website functionality and cannot be disabled.",
        "Analytics cookies help us understand how visitors interact with our website.",
        "You can control cookie preferences through your browser settings."
      ]
    },
    {
      title: "Third-Party Links",
      content: [
        "Our website may contain links to third-party websites that are not operated by us.",
        "We are not responsible for the privacy practices of these external sites.",
        "We encourage you to review the privacy policies of any third-party websites you visit.",
        "This privacy policy applies only to our website and services."
      ]
    },
    {
      title: "Changes to This Policy",
      content: [
        "We may update this privacy policy from time to time to reflect changes in our practices or legal requirements.",
        "We will notify you of any material changes by posting the updated policy on our website.",
        "The 'Last Updated' date at the top of this policy indicates when it was last revised.",
        "Continued use of our services after changes constitutes acceptance of the updated policy."
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container-custom mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Privacy Policy</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Last updated: January 1, 2024
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              At Sorai Tech, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This privacy policy explains how we collect, use, and protect your information when you visit our website or use our services.
            </p>
          </motion.div>
        </section>

        {/* Privacy Policy Sections */}
        <section className="container-custom">
          <div className="max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold mb-6 font-heading">{section.title}</h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 dark:bg-dark/30 py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6 font-heading">Questions About This Policy?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                If you have any questions about this privacy policy or how we handle your personal information, 
                please don&apos;t hesitate to contact us.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div>
                  <h3 className="font-bold mb-2">Email Us</h3>
                  <a 
                    href="mailto:privacy@soraitech.com" 
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    privacy@soraitech.com
                  </a>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Contact Form</h3>
                  <a 
                    href="/contact" 
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    Use our contact form
                  </a>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white dark:bg-dark/50 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Sorai Tech</strong><br />
                  Bangalore, India<br />
                  Email: info@soraitech.com
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