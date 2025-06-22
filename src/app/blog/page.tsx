"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiCalendar, FiUser, FiArrowRight, FiTrendingUp, FiCode, FiCpu } from "react-icons/fi";

export default function BlogPage() {
  const featuredPosts = [
    {
      title: "The Future of AI in Software Development",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and deploy software applications.",
      author: "Mohit Ghanghaniya",
      date: "2024-01-15",
      category: "AI & Machine Learning",
      image: "/images/blog/ai-future.jpg",
      readTime: "5 min read"
    },
    {
      title: "Building Scalable Full-Stack Applications",
      excerpt: "Best practices for architecting modern web applications that can handle growth and complexity.",
      author: "Sorai Tech Team",
      date: "2024-01-10",
      category: "Web Development",
      image: "/images/blog/fullstack.jpg",
      readTime: "8 min read"
    },
    {
      title: "Cloud-First Architecture: A Modern Approach",
      excerpt: "Why cloud-native solutions are essential for businesses looking to scale and innovate quickly.",
      author: "Mohit Ghanghaniya",
      date: "2024-01-05",
      category: "Cloud & DevOps",
      image: "/images/blog/cloud-architecture.jpg",
      readTime: "6 min read"
    }
  ];

  const categories = [
    { name: "AI & Machine Learning", icon: FiCpu, count: 12 },
    { name: "Web Development", icon: FiCode, count: 18 },
    { name: "Cloud & DevOps", icon: FiTrendingUp, count: 8 },
    { name: "Industry Insights", icon: FiUser, count: 15 }
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
              Blog & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Stay updated with the latest trends in AI, software development, and digital transformation.
            </p>
          </motion.div>
        </section>

        {/* Categories */}
        <section className="container-custom mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 font-heading">Popular Categories</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore our content by topic
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-dark/50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-primary text-xl" />
                  </div>
                  <h3 className="font-bold mb-2">{category.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{category.count} articles</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Featured Posts */}
        <section className="container-custom mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 font-heading">Featured Articles</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our latest insights and technical deep-dives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-dark/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary">
                    {post.category.split(' ')[0][0]}{post.category.split(' ')[1]?.[0] || ''}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 font-heading">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <FiUser size={16} />
                      <span>{post.author}</span>
                      <FiCalendar size={16} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    
                    <button className="text-primary hover:text-secondary transition-colors">
                      <FiArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="bg-gray-50 dark:bg-dark/30 py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-4 font-heading">More Content Coming Soon</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We&apos;re working on bringing you more insights, tutorials, and industry analysis. 
                Subscribe to our newsletter to get notified when new articles are published.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark/50"
                />
                <button
                  type="submit"
                  className="btn-primary px-6 py-3 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 