"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiLinkedin, FiGithub, FiMail, FiUsers, FiAward, FiHeart } from "react-icons/fi";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Mohit Ghanghaniya",
      role: "Founder & Lead Developer",
      bio: "Full-stack developer with expertise in AI integration and modern web technologies. Passionate about creating intelligent solutions that solve real-world problems.",
      image: "/images/team/mohit.jpg", // Add actual image
      linkedin: "https://linkedin.com/in/mohitghanghaniya",
      github: "https://github.com/mohitgadhvi1020",
      email: "mohit@soraitech.com"
    },
    // Add more team members as needed
  ];

  const culturePoints = [
    {
      icon: FiUsers,
      title: "Collaborative Environment",
      description: "We believe in the power of teamwork and open communication to achieve extraordinary results."
    },
    {
      icon: FiAward,
      title: "Continuous Learning",
      description: "We encourage our team to stay updated with the latest technologies and industry best practices."
    },
    {
      icon: FiHeart,
      title: "Work-Life Balance",
      description: "We maintain a healthy balance between professional growth and personal well-being."
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
              Meet Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              The talented individuals who make Sorai Tech&apos;s vision a reality.
            </p>
          </motion.div>
        </section>

        {/* Team Members */}
        <section className="container-custom mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Our Leadership</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the passionate individuals driving innovation at Sorai Tech.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-dark/50 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-primary">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-2 font-heading">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{member.bio}</p>
                
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <FiLinkedin size={20} />
                  </a>
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <FiMail size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Company Culture */}
        <section className="bg-gray-50 dark:bg-dark/30 py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Our Culture</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We&apos;ve built a culture that fosters innovation, collaboration, and personal growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {culturePoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-dark/50 rounded-xl p-8 text-center"
                  >
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="text-primary text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 font-heading">{point.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{point.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="container-custom py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Join Our Team</h2>
            <p className="text-xl mb-8 opacity-90">
              We&apos;re always looking for talented individuals who share our passion for innovation.
            </p>
            <a 
              href="/careers" 
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              View Open Positions
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
} 