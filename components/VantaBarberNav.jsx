import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { authUtils } from '../utils/auth';

export default function VantaBarberNav() {
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
    router.push('/vanta-barber');
  };

  return (
    <nav className="bg-vanta-900 border-b-2 border-vanta-accent sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        <Link href="/vanta-barber" className="text-2xl font-bold text-white tracking-widest">
          VANTA BARBER
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="/vanta-barber" className="text-white hover:text-vanta-accent transition font-medium">
            Home
          </Link>
          <Link href="/vanta-barber/services" className="text-white hover:text-vanta-accent transition font-medium">
            Services
          </Link>
          <Link href="/vanta-barber/barbers" className="text-white hover:text-vanta-accent transition font-medium">
            Barbers
          </Link>
          <Link href="/vanta-barber/booking" className="text-white hover:text-vanta-accent transition font-medium">
            Book
          </Link>
          <Link href="/vanta-barber/gallery" className="text-white hover:text-vanta-accent transition font-medium">
            Gallery
          </Link>
          {isLoggedIn ? (
            <>
              <Link href="/vanta-barber/account" className="text-white hover:text-vanta-accent transition font-medium">
                Account
              </Link>
              <button onClick={handleLogout} className="text-white hover:text-vanta-accent transition font-medium">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/vanta-barber/login" className="text-white hover:text-vanta-accent transition font-medium">
                Login
              </Link>
              <Link href="/vanta-barber/signup" className="bg-vanta-accent text-white px-4 py-2 rounded hover:opacity-90 transition font-medium">
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
          <div className="w-6 h-0.5 bg-white" />
          <div className="w-6 h-0.5 bg-white" />
          <div className="w-6 h-0.5 bg-white" />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-vanta-900 border-b-2 border-vanta-accent md:hidden">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/vanta-barber" className="text-white hover:text-vanta-accent font-medium">
                Home
              </Link>
              <Link href="/vanta-barber/services" className="text-white hover:text-vanta-accent font-medium">
                Services
              </Link>
              <Link href="/vanta-barber/barbers" className="text-white hover:text-vanta-accent font-medium">
                Barbers
              </Link>
              <Link href="/vanta-barber/booking" className="text-white hover:text-vanta-accent font-medium">
                Book
              </Link>
              <Link href="/vanta-barber/gallery" className="text-white hover:text-vanta-accent font-medium">
                Gallery
              </Link>
              {isLoggedIn ? (
                <>
                  <Link href="/vanta-barber/account" className="text-white hover:text-vanta-accent font-medium">
                    Account
                  </Link>
                  <button onClick={handleLogout} className="text-left text-white hover:text-vanta-accent font-medium">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/vanta-barber/login" className="text-white hover:text-vanta-accent font-medium">
                    Login
                  </Link>
                  <Link href="/vanta-barber/signup" className="text-white hover:text-vanta-accent font-medium">
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
