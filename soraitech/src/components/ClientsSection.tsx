"use client";

import { motion } from "framer-motion";
import { FiDatabase, FiDollarSign, FiShoppingCart, FiBook } from "react-icons/fi";

export default function ClientsSection() {
  const clients = [
    { 
      name: "Innoplexus",
      icon: <FiDatabase size={36} className="text-[#FFCC00]" />,
      description: "Healthcare Data Analytics"
    },
    { 
      name: "Piramal Finance",
      icon: <FiDollarSign size={36} className="text-[#FF4C2F]" />,
      description: "Financial Services"
    },
    { 
      name: "Amazon",
      icon: <FiShoppingCart size={36} className="text-[#FF9900]" />,
      description: "E-commerce & Cloud"
    },
    { 
      name: "IIT Bombay",
      icon: <FiBook size={36} className="text-[#0078FF]" />,
      description: "Academic Institution"
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-dark/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold font-heading mb-2">Clients We&apos;ve Worked With</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Delivering innovative solutions for industry leaders
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all h-full flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 bg-gray-100 dark:bg-dark/20 p-3 rounded-lg">
                  {client.icon}
                </div>
                <h3 className="font-bold text-lg">{client.name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{client.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <p className="text-sm text-primary">Case Study Available</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 