import Link from 'next/link';

export default function PortfolioFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Irtiza Riaz</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I build modern, responsive websites for small businesses. Specializing in creating professional web solutions that drive results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#work" className="text-gray-400 hover:text-white transition">
                  My Work
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-white transition">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-white transition">
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/IrtizaRiaz-wd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/Irtiza_devs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="tel:03022669408"
                  className="text-gray-400 hover:text-white transition"
                >
                  Call: 03022669408
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Irtiza Riaz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
