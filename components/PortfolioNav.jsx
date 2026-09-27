import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function PortfolioNav() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors duration-300 transform hover:scale-105"
        >
          <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Irtiza
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}>
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

          {/* Hire Me Button - WhatsApp */}
          <a
            href="https://wa.me/923022669408?text=Hi%20Irtiza%2C%20I'm%20interested%20in%20hiring%20you%20for%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 text-center font-semibold"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6 h-6"
          aria-label="Toggle menu"
        >
          <div className="w-full h-0.5 bg-gray-900 transition-all" />
          <div className="w-full h-0.5 bg-gray-900 transition-all" />
          <div className="w-full h-0.5 bg-gray-900 transition-all" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden">
          <div className="container-custom py-4 flex flex-col gap-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/#work" className="text-gray-700 hover:text-gray-900">
              Work
            </Link>
            <Link href="/#services" className="text-gray-700 hover:text-gray-900">
              Services
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <a
              href="https://wa.me/923022669408?text=Hi%20Irtiza%2C%20I'm%20interested%20in%20hiring%20you%20for%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 text-center font-semibold"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
