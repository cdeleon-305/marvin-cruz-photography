import Link from "next/link";
import { FiInstagram, FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-display text-lg font-semibold mb-4">
              About
            </h3>
            <p className="text-sm leading-relaxed">
              Miami-based professional photographer specializing in corporate
              events, weddings, engagements, and portraits.
              Bringing your most memorable moments to life with creativity and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display text-lg font-semibold mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:marvindcruzjr@gmail.com"
                  className="flex items-center space-x-2 text-sm hover:text-white transition-colors"
                >
                  <FiMail className="w-4 h-4" />
                  <span>marvindcruzjr@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+13054847595"
                  className="flex items-center space-x-2 text-sm hover:text-white transition-colors"
                >
                  <FiPhone className="w-4 h-4" />
                  <span>(305) 484-7595</span>
                </a>
              </li>
              <li className="flex items-center space-x-4 pt-2">
                <a
                  href="https://instagram.com/marvincruzphotography"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <FiInstagram className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Marvin Cruz Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
