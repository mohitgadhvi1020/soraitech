"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiMapPin, FiClock, FiDollarSign, FiUsers, FiHeart, FiTrendingUp, FiAward, FiCoffee } from "react-icons/fi";

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Bangalore, Karnataka / Remote",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹8-15 LPA",
      description: "We're looking for a skilled full-stack developer to join our growing team and work on cutting-edge AI-powered applications.",
      requirements: [
        "Strong experience with React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Knowledge of AI/ML integration is a plus",
        "Excellent problem-solving skills"
      ]
    },
    {
      title: "AI/ML Engineer",
      department: "Engineering",
      location: "Bangalore, Karnataka / Remote",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹10-18 LPA",
      description: "Join our AI team to develop intelligent solutions that solve real-world business problems.",
      requirements: [
        "Strong background in Python and ML frameworks",
        "Experience with TensorFlow, PyTorch, or similar",
        "Knowledge of NLP, Computer Vision, or Deep Learning",
        "Experience with MLOps and model deployment"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Bangalore, Karnataka / Remote",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹7-12 LPA",
      description: "Help us build and maintain scalable infrastructure for our AI and web applications.",
      requirements: [
        "Experience with Docker, Kubernetes, and CI/CD",
        "Knowledge of cloud platforms and infrastructure as code",
        "Strong scripting skills (Bash, Python)",
        "Experience with monitoring and logging tools"
      ]
    }
  ];

  const benefits = [
    {
      icon: FiHeart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs for you and your family."
    },
    {
      icon: FiTrendingUp,
      title: "Growth Opportunities",
      description: "Continuous learning budget and clear career progression paths."
    },
    {
      icon: FiUsers,
      title: "Flexible Work",
      description: "Remote-first culture with flexible working hours and work-life balance."
    },
    {
      icon: FiAward,
      title: "Performance Bonuses",
      description: "Competitive salary with performance-based bonuses and equity options."
    },
    {
      icon: FiCoffee,
      title: "Great Environment",
      description: "Modern office space, free meals, and a collaborative team culture."
    },
    {
      icon: FiClock,
      title: "Paid Time Off",
      description: "Generous vacation policy and personal development days."
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
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              Join Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Build the future of AI and software with passionate innovators who care about making a real impact.
            </p>
          </motion.div>
        </section>

        {/* Why Work With Us */}
        <section className="bg-gray-50 dark:bg-dark/30 py-20 mb-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Why Choose Sorai Tech?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We&apos;re not just building software; we&apos;re building the future. Join us and be part of something extraordinary.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-dark/50 rounded-xl p-6"
                  >
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-heading">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="container-custom mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Open Positions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find your next opportunity and grow your career with us.
            </p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-dark/50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold font-heading">{position.title}</h3>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {position.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-300 mb-4">
                      <div className="flex items-center gap-2">
                        <FiMapPin size={16} />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiClock size={16} />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiUsers size={16} />
                        <span>{position.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiDollarSign size={16} />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{position.description}</p>
                    
                    <div>
                      <h4 className="font-bold mb-2">Key Requirements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <button className="btn-primary w-full mb-4">
                      Apply Now
                    </button>
                    <button className="btn-secondary w-full">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="bg-gray-50 dark:bg-dark/30 py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Our Hiring Process</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We&apos;ve designed a fair and transparent process to find the best fit for both you and our team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Application", description: "Submit your resume and cover letter through our portal." },
                { step: "2", title: "Screening", description: "Initial phone/video call to discuss your background and interests." },
                { step: "3", title: "Technical", description: "Technical interview or coding challenge relevant to the role." },
                { step: "4", title: "Final Round", description: "Meet the team and discuss culture fit and career goals." }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-heading">{process.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container-custom py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Don&apos;t See a Perfect Fit?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We&apos;re always interested in connecting with talented individuals. Send us your resume anyway!
            </p>
            <a 
              href="mailto:careers@soraitech.com" 
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
} 