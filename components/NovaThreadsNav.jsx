import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { authUtils } from '../utils/auth';

export default function NovaThreadsNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(authUtils.isLoggedIn());
    setIsOpen(false);
    
    // Update cart count
    if (typeof window !== 'undefined') {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const count = cart.reduce((total, item) => total + item.quantity, 0);
      setCartCount(count);
    }
  }, [router.pathname]);

  const handleLogout = () => {
    authUtils.logout();
    setIsLoggedIn(false);
    router.push('/nova-threads');
  };

  return (
    <nav className="bg-nova-50 border-b border-gray-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        <Link href="/nova-threads" className="text-2xl font-bold text-nova-900 tracking-wider">
          NOVA THREADS
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="/nova-threads" className="text-nova-900 hover:text-nova-900/70 transition font-medium">
            Home
          </Link>
          <Link href="/nova-threads/shop" className="text-nova-900 hover:text-nova-900/70 transition font-medium">
            Shop
          </Link>
          <Link href="/nova-threads/collections" className="text-nova-900 hover:text-nova-900/70 transition font-medium">
            Collections
          </Link>
          <Link href="/nova-threads/about" className="text-nova-900 hover:text-nova-900/70 transition font-medium">
            About
          </Link>
          <Link href="/nova-threads/contact" className="text-nova-900 hover:text-nova-900/70 transition font-medium">
            Contact
          </Link>
          <Link href="/nova-threads/cart" className="text-nova-900 hover:text-nova-900/70 transition font-medium relative">
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-nova-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          {isLoggedIn ? (
            <>
              <Link href="/nova-threads/account" className="text-nova-900 hover:text-nova-900/70 transition font-medium">
                Account
              </Link>
              <button onClick={handleLogout} className="text-nova-900 hover:text-nova-900/70 transition font-medium">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/nova-threads/login" className="text-nova-900 hover:text-nova-900/70 transition font-medium">
                Login
              </Link>
              <Link href="/nova-threads/signup" className="bg-nova-900 text-white px-4 py-2 rounded hover:bg-nova-900/90 transition font-medium">
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
          <div className="w-6 h-0.5 bg-nova-900" />
          <div className="w-6 h-0.5 bg-nova-900" />
          <div className="w-6 h-0.5 bg-nova-900" />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-nova-50 border-b border-gray-300 md:hidden">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/nova-threads" className="text-nova-900 hover:text-nova-900/70 font-medium">
                Home
              </Link>
              <Link href="/nova-threads/shop" className="text-nova-900 hover:text-nova-900/70 font-medium">
                Shop
              </Link>
              <Link href="/nova-threads/collections" className="text-nova-900 hover:text-nova-900/70 font-medium">
                Collections
              </Link>
              <Link href="/nova-threads/about" className="text-nova-900 hover:text-nova-900/70 font-medium">
                About
              </Link>
              <Link href="/nova-threads/contact" className="text-nova-900 hover:text-nova-900/70 font-medium">
                Contact
              </Link>
              <Link href="/nova-threads/cart" className="text-nova-900 hover:text-nova-900/70 font-medium">
                Cart {cartCount > 0 && `(${cartCount})`}
              </Link>
              {isLoggedIn ? (
                <>
                  <Link href="/nova-threads/account" className="text-nova-900 hover:text-nova-900/70 font-medium">
                    Account
                  </Link>
                  <button onClick={handleLogout} className="text-left text-nova-900 hover:text-nova-900/70 font-medium">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/nova-threads/login" className="text-nova-900 hover:text-nova-900/70 font-medium">
                    Login
                  </Link>
                  <Link href="/nova-threads/signup" className="text-nova-900 hover:text-nova-900/70 font-medium">
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
