import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function PortfolioNav({ brandName = 'Irtiza' }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-blue-100">
      {/* Main Navigation Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 md:py-6">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold transition-all duration-300 group text-gray-900 hover:text-blue-600"
          >
            {brandName}
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-8 lg:gap-10 items-center">
            <Link
              href="/"
              className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link href="/#work" className="nav-link">
              Work
            </Link>
            <Link href="/#services" className="nav-link">
              Services
            </Link>
            <Link href="/#about" className="nav-link">
              About
            </Link>
            <Link href="/#contact" className="nav-link">
              Contact
            </Link>

            {/* WhatsApp CTA Button */}
            <a
              href="https://wa.me/923022669408?text=Hi%20Irtiza%2C%20I'm%20interested%20in%20hiring%20you%20for%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transform"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div
              className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <div
              className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <div
              className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 pb-3 border-b border-gray-100"
            >
              Home
            </Link>
            <Link
              href="/#work"
              className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 pb-3 border-b border-gray-100"
            >
              Work
            </Link>
            <Link
              href="/#services"
              className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 pb-3 border-b border-gray-100"
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 pb-3 border-b border-gray-100"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 pb-3 border-b border-gray-100"
            >
              Contact
            </Link>

            {/* Mobile WhatsApp Button */}
            <a
              href="https://wa.me/923022669408?text=Hi%20Irtiza%2C%20I'm%20interested%20in%20hiring%20you%20for%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg text-center transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
