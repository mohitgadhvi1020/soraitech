import Link from "next/link";
import { FiLinkedin, FiTwitter, FiGithub, FiMail } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sorai Tech
            </h3>
            <p className="text-gray-300 mb-4">
              Engineering smart solutions with AI & code. We build future-ready software with AI-first thinking.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FiTwitter size={20} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FiGithub size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services#ai-consulting" className="text-gray-300 hover:text-primary transition-colors">
                  AI Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#software-development" className="text-gray-300 hover:text-primary transition-colors">
                  Full-Stack Development
                </Link>
              </li>
              <li>
                <Link href="/services#product-development" className="text-gray-300 hover:text-primary transition-colors">
                  Product Development
                </Link>
              </li>
              <li>
                <Link href="/services#cloud-devops" className="text-gray-300 hover:text-primary transition-colors">
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link href="/services#technical-architecture" className="text-gray-300 hover:text-primary transition-colors">
                  Technical Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-300 hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-primary transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <div className="flex items-center space-x-3 mb-4">
              <FiMail className="text-primary" />
              <a 
                href="mailto:info@soraitech.com" 
                className="text-gray-300 hover:text-primary transition-colors"
              >
                info@soraitech.com
              </a>
            </div>
            <p className="text-gray-300 mb-6">
              123 Tech Avenue <br />
              Rajkot, Gujarat <br />
              India
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {year} Sorai Tech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 