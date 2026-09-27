import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { authUtils } from '../utils/auth';

export default function RestaurantNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(authUtils.isLoggedIn());
    setIsOpen(false);
  }, [router.pathname]);

  const handleLogout = () => {
    authUtils.logout();
    setIsLoggedIn(false);
    router.push('/restaurant');
  };

  return (
    <nav className="bg-cream border-b-2 border-ember-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        <Link href="/restaurant" className="text-2xl font-bold text-ember-900">
          EMBER & PLATE
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="/restaurant" className="text-ember-900 hover:text-ember-600 transition font-medium">
            Home
          </Link>
          <Link href="/restaurant/menu" className="text-ember-900 hover:text-ember-600 transition font-medium">
            Menu
          </Link>
          <Link href="/restaurant/gallery" className="text-ember-900 hover:text-ember-600 transition font-medium">
            Gallery
          </Link>
          <Link href="/restaurant/about" className="text-ember-900 hover:text-ember-600 transition font-medium">
            About
          </Link>
          <Link href="/restaurant/contact" className="text-ember-900 hover:text-ember-600 transition font-medium">
            Contact
          </Link>
          {isLoggedIn ? (
            <>
              <Link href="/restaurant/dashboard" className="text-ember-900 hover:text-ember-600 transition font-medium">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="text-ember-900 hover:text-ember-600 transition font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/restaurant/login" className="text-ember-900 hover:text-ember-600 transition font-medium">
                Login
              </Link>
              <Link href="/restaurant/signup" className="text-white bg-ember-700 px-4 py-2 rounded hover:bg-ember-600 transition font-medium">
                Sign Up
              </Link>
            </>
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-ember-900" />
          <div className="w-6 h-0.5 bg-ember-900" />
          <div className="w-6 h-0.5 bg-ember-900" />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-cream border-b-2 border-ember-900 md:hidden">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/restaurant" className="text-ember-900 hover:text-ember-600 font-medium">
                Home
              </Link>
              <Link href="/restaurant/menu" className="text-ember-900 hover:text-ember-600 font-medium">
                Menu
              </Link>
              <Link href="/restaurant/gallery" className="text-ember-900 hover:text-ember-600 font-medium">
                Gallery
              </Link>
              <Link href="/restaurant/about" className="text-ember-900 hover:text-ember-600 font-medium">
                About
              </Link>
              <Link href="/restaurant/contact" className="text-ember-900 hover:text-ember-600 font-medium">
                Contact
              </Link>
              {isLoggedIn ? (
                <>
                  <Link href="/restaurant/dashboard" className="text-ember-900 hover:text-ember-600 font-medium">
                    Dashboard
                  </Link>
                  <button onClick={handleLogout} className="text-left text-ember-900 hover:text-ember-600 font-medium">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/restaurant/login" className="text-ember-900 hover:text-ember-600 font-medium">
                    Login
                  </Link>
                  <Link href="/restaurant/signup" className="text-white bg-ember-700 px-4 py-2 rounded hover:bg-ember-600 font-medium inline-block">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
