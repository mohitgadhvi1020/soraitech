import Link from "next/link";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 border-t border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
              Sorai Tech
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-service product studio — design, development, and product management. We build and ship products end to end.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider text-gray-400">Services</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services#design" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services#frontend" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Frontend Development
                </Link>
              </li>
              <li>
                <Link href="/services#backend" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Backend Engineering
                </Link>
              </li>
              <li>
                <Link href="/services#webflow" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Webflow
                </Link>
              </li>
              <li>
                <Link href="/services#product-management" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Product Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider text-gray-400">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider text-gray-400">Get in Touch</h4>
            <div className="flex items-center space-x-3 mb-3">
              <FiMail className="text-orange-400 text-base flex-shrink-0" />
              <a 
                href="mailto:contact@soraitech.com" 
                className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
              >
                contact@soraitech.com
              </a>
            </div>
            <p className="text-gray-400 text-sm mb-5">
              Bangalore, India
            </p>
            <Link href="/contact" className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity duration-200 inline-block text-sm">
              Start a Project
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8 text-gray-500 text-xs flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {year} Sorai Tech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
