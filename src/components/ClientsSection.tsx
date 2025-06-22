"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ClientsSection() {
  const clients = [
    { 
      name: "Innoplexus",
      logo: "/images/clients/innoplexus.png",
      width: 180,
      height: 60
    },
    { 
      name: "Piramal Finance",
      logo: "/images/clients/piramal finance.jpg",
      width: 180,
      height: 60
    },
    { 
      name: "Amazon",
      logo: "/images/clients/Amazon-Logo.png",
      width: 180,
      height: 60
    },
    { 
      name: "IIT Bombay",
      logo: "/images/clients/iit-logo.png",
      width: 120,
      height: 80
    },
  ];

  // Create three sets of clients for smoother infinite scrolling
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-16 bg-white overflow-hidden">
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

        <div className="relative w-full overflow-hidden">
          <div 
            className="flex animate-marquee whitespace-nowrap hover:animate-marquee-pause"
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="mx-6 bg-white flex-shrink-0 h-24 w-56 flex items-center justify-center"
                style={{ background: "#ffffff" }}
              >
                <div className="relative w-full h-full flex items-center justify-center p-4">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={client.width}
                    height={client.height}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 