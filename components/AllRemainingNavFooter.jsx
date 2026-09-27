// Iron District Nav/Footer
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { authUtils } from '../utils/auth';

export function IronDistrictNav() {
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
    router.push('/iron-district');
  };

  return (
    <nav className="bg-iron-900 border-b-2 border-iron-accent sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        <Link href="/iron-district" className="text-2xl font-bold text-white tracking-widest">
          IRON DISTRICT
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="/iron-district" className="text-white hover:text-iron-accent transition font-medium">Home</Link>
          <Link href="/iron-district/programs" className="text-white hover:text-iron-accent transition font-medium">Programs</Link>
          <Link href="/iron-district/membership" className="text-white hover:text-iron-accent transition font-medium">Membership</Link>
          <Link href="/iron-district/trainers" className="text-white hover:text-iron-accent transition font-medium">Trainers</Link>
          {isLoggedIn ? (
            <>
              <Link href="/iron-district/account" className="text-white hover:text-iron-accent transition font-medium">Account</Link>
              <button onClick={handleLogout} className="text-white hover:text-iron-accent transition font-medium">Logout</button>
            </>
          ) : (
            <>
              <Link href="/iron-district/login" className="text-white hover:text-iron-accent transition font-medium">Login</Link>
              <Link href="/iron-district/signup" className="bg-iron-accent text-white px-4 py-2 rounded hover:opacity-90 transition">Sign Up</Link>
            </>
          )}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5">
          <div className="w-6 h-0.5 bg-white" /><div className="w-6 h-0.5 bg-white" /><div className="w-6 h-0.5 bg-white" />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-iron-900 border-b-2 border-iron-accent md:hidden">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/iron-district" className="text-white hover:text-iron-accent">Home</Link>
              <Link href="/iron-district/programs" className="text-white hover:text-iron-accent">Programs</Link>
              <Link href="/iron-district/membership" className="text-white hover:text-iron-accent">Membership</Link>
              <Link href="/iron-district/trainers" className="text-white hover:text-iron-accent">Trainers</Link>
              {isLoggedIn ? (
                <><Link href="/iron-district/account" className="text-white hover:text-iron-accent">Account</Link>
                <button onClick={handleLogout} className="text-left text-white hover:text-iron-accent">Logout</button></>
              ) : (
                <><Link href="/iron-district/login" className="text-white hover:text-iron-accent">Login</Link>
                <Link href="/iron-district/signup" className="text-white hover:text-iron-accent">Sign Up</Link></>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export function IronDistrictFooter() {
  return (
    <footer className="bg-iron-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div><h3 className="text-xl font-bold mb-4">IRON DISTRICT</h3><p className="text-white/70 text-sm">Premium fitness and training facility.</p></div>
          <div><h3 className="font-bold mb-4">Hours</h3><ul className="text-white/70 text-sm space-y-1"><li>Mon - Fri: 5AM - 11PM</li><li>Sat - Sun: 7AM - 9PM</li></ul></div>
          <div><h3 className="font-bold mb-4">Contact</h3><p className="text-white/70 text-sm"><a href="tel:03022669408" className="hover:text-white transition">03022669408</a></p></div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60"><p>Designed & developed by <Link href="/" className="text-white hover:text-white/80 transition font-semibold">Irtiza Riaz</Link></p><p className="mt-2">&copy; 2024 Iron District. All rights reserved.</p></div>
      </div>
    </footer>
  );
}

// Real Estate Nav/Footer
export function NorthlineEstatesNav() {
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
    router.push('/northline-estates');
  };

  return (
    <nav className="bg-white border-b-2 border-northline-navy sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        <Link href="/northline-estates" className="text-2xl font-bold text-northline-navy">NORTHLINE ESTATES</Link>
        <div className="hidden md:flex gap-8">
          <Link href="/northline-estates" className="text-northline-navy hover:text-northline-gold transition font-medium">Home</Link>
          <Link href="/northline-estates/properties" className="text-northline-navy hover:text-northline-gold transition font-medium">Properties</Link>
          <Link href="/northline-estates/agents" className="text-northline-navy hover:text-northline-gold transition font-medium">Agents</Link>
          <Link href="/northline-estates/contact" className="text-northline-navy hover:text-northline-gold transition font-medium">Contact</Link>
          {isLoggedIn ? (
            <><Link href="/northline-estates/account" className="text-northline-navy hover:text-northline-gold transition font-medium">Account</Link>
            <button onClick={handleLogout} className="text-northline-navy hover:text-northline-gold transition font-medium">Logout</button></>
          ) : (
            <><Link href="/northline-estates/login" className="text-northline-navy hover:text-northline-gold transition font-medium">Login</Link>
            <Link href="/northline-estates/signup" className="bg-northline-navy text-white px-4 py-2 rounded hover:opacity-90 transition">Sign Up</Link></>
          )}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5">
          <div className="w-6 h-0.5 bg-northline-navy" /><div className="w-6 h-0.5 bg-northline-navy" /><div className="w-6 h-0.5 bg-northline-navy" />
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b-2 border-northline-navy md:hidden">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/northline-estates" className="text-northline-navy">Home</Link>
              <Link href="/northline-estates/properties" className="text-northline-navy">Properties</Link>
              <Link href="/northline-estates/agents" className="text-northline-navy">Agents</Link>
              <Link href="/northline-estates/contact" className="text-northline-navy">Contact</Link>
              {isLoggedIn ? (
                <><Link href="/northline-estates/account" className="text-northline-navy">Account</Link>
                <button onClick={handleLogout} className="text-left text-northline-navy">Logout</button></>
              ) : (
                <><Link href="/northline-estates/login" className="text-northline-navy">Login</Link>
                <Link href="/northline-estates/signup" className="text-northline-navy">Sign Up</Link></>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export function NorthlineEstatesFooter() {
  return (
    <footer className="bg-northline-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div><h3 className="text-xl font-bold mb-4 text-northline-gold">NORTHLINE ESTATES</h3><p className="text-white/70 text-sm">Luxury real estate services.</p></div>
          <div><h3 className="font-bold mb-4">Services</h3><ul className="text-white/70 text-sm space-y-1"><li>Residential Sales</li><li>Property Management</li><li>Investment Consulting</li></ul></div>
          <div><h3 className="font-bold mb-4">Contact</h3><p className="text-white/70 text-sm"><a href="tel:03022669408" className="hover:text-white transition">03022669408</a></p></div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60"><p>Designed & developed by <Link href="/" className="text-white hover:text-white/80 transition font-semibold">Irtiza Riaz</Link></p><p className="mt-2">&copy; 2024 Northline Estates. All rights reserved.</p></div>
      </div>
    </footer>
  );
}

// Car Rental Nav/Footer
export function VelocityRentalsNav() {
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
    router.push('/velocity-rentals');
  };

  return (
    <nav className="bg-velocity-900 border-b-2 border-velocity-accent sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        <Link href="/velocity-rentals" className="text-2xl font-bold text-white tracking-widest">VELOCITY RENTALS</Link>
        <div className="hidden md:flex gap-8">
          <Link href="/velocity-rentals" className="text-white hover:text-velocity-accent transition font-medium">Home</Link>
          <Link href="/velocity-rentals/vehicles" className="text-white hover:text-velocity-accent transition font-medium">Vehicles</Link>
          <Link href="/velocity-rentals/booking" className="text-white hover:text-velocity-accent transition font-medium">Book</Link>
          <Link href="/velocity-rentals/pricing" className="text-white hover:text-velocity-accent transition font-medium">Pricing</Link>
          {isLoggedIn ? (
            <><Link href="/velocity-rentals/account" className="text-white hover:text-velocity-accent transition font-medium">Account</Link>
            <button onClick={handleLogout} className="text-white hover:text-velocity-accent transition font-medium">Logout</button></>
          ) : (
            <><Link href="/velocity-rentals/login" className="text-white hover:text-velocity-accent transition font-medium">Login</Link>
            <Link href="/velocity-rentals/signup" className="bg-velocity-accent text-white px-4 py-2 rounded hover:opacity-90 transition">Sign Up</Link></>
          )}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5">
          <div className="w-6 h-0.5 bg-white" /><div className="w-6 h-0.5 bg-white" /><div className="w-6 h-0.5 bg-white" />
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-velocity-900 border-b-2 border-velocity-accent md:hidden">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/velocity-rentals" className="text-white">Home</Link>
              <Link href="/velocity-rentals/vehicles" className="text-white">Vehicles</Link>
              <Link href="/velocity-rentals/booking" className="text-white">Book</Link>
              <Link href="/velocity-rentals/pricing" className="text-white">Pricing</Link>
              {isLoggedIn ? (
                <><Link href="/velocity-rentals/account" className="text-white">Account</Link>
                <button onClick={handleLogout} className="text-left text-white">Logout</button></>
              ) : (
                <><Link href="/velocity-rentals/login" className="text-white">Login</Link>
                <Link href="/velocity-rentals/signup" className="text-white">Sign Up</Link></>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export function VelocityRentalsFooter() {
  return (
    <footer className="bg-velocity-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div><h3 className="text-xl font-bold mb-4">VELOCITY RENTALS</h3><p className="text-white/70 text-sm">Premium vehicle rental services.</p></div>
          <div><h3 className="font-bold mb-4">Hours</h3><ul className="text-white/70 text-sm space-y-1"><li>Mon - Sun: 8AM - 8PM</li><li>24/7 Roadside Support</li></ul></div>
          <div><h3 className="font-bold mb-4">Contact</h3><p className="text-white/70 text-sm"><a href="tel:03022669408" className="hover:text-white transition">03022669408</a></p></div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60"><p>Designed & developed by <Link href="/" className="text-white hover:text-white/80 transition font-semibold">Irtiza Riaz</Link></p><p className="mt-2">&copy; 2024 Velocity Rentals. All rights reserved.</p></div>
      </div>
    </footer>
  );
}

// Digital Agency Nav/Footer
export function NorthstarDigitalNav() {
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
    router.push('/northstar-digital');
  };

  return (
    <nav className="bg-northstar-900 border-b border-northstar-accent sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        <Link href="/northstar-digital" className="text-2xl font-bold text-white tracking-wider">NORTHSTAR</Link>
        <div className="hidden md:flex gap-8">
          <Link href="/northstar-digital" className="text-white hover:text-northstar-accent transition font-medium">Home</Link>
          <Link href="/northstar-digital/services" className="text-white hover:text-northstar-accent transition font-medium">Services</Link>
          <Link href="/northstar-digital/work" className="text-white hover:text-northstar-accent transition font-medium">Work</Link>
          <Link href="/northstar-digital/process" className="text-white hover:text-northstar-accent transition font-medium">Process</Link>
          {isLoggedIn ? (
            <><Link href="/northstar-digital/account" className="text-white hover:text-northstar-accent transition font-medium">Account</Link>
            <button onClick={handleLogout} className="text-white hover:text-northstar-accent transition font-medium">Logout</button></>
          ) : (
            <><Link href="/northstar-digital/login" className="text-white hover:text-northstar-accent transition font-medium">Login</Link>
            <Link href="/northstar-digital/signup" className="bg-gradient-to-r from-northstar-accent to-northstar-accent2 text-white px-4 py-2 rounded hover:opacity-90 transition">Sign Up</Link></>
          )}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5">
          <div className="w-6 h-0.5 bg-white" /><div className="w-6 h-0.5 bg-white" /><div className="w-6 h-0.5 bg-white" />
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-northstar-900 border-b border-northstar-accent md:hidden">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/northstar-digital" className="text-white">Home</Link>
              <Link href="/northstar-digital/services" className="text-white">Services</Link>
              <Link href="/northstar-digital/work" className="text-white">Work</Link>
              <Link href="/northstar-digital/process" className="text-white">Process</Link>
              {isLoggedIn ? (
                <><Link href="/northstar-digital/account" className="text-white">Account</Link>
                <button onClick={handleLogout} className="text-left text-white">Logout</button></>
              ) : (
                <><Link href="/northstar-digital/login" className="text-white">Login</Link>
                <Link href="/northstar-digital/signup" className="text-white">Sign Up</Link></>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export function NorthstarDigitalFooter() {
  return (
    <footer className="bg-northstar-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div><h3 className="text-xl font-bold mb-4 text-northstar-accent">NORTHSTAR DIGITAL</h3><p className="text-white/70 text-sm">Premium digital agency services.</p></div>
          <div><h3 className="font-bold mb-4">Services</h3><ul className="text-white/70 text-sm space-y-1"><li>Web Design & Development</li><li>Digital Strategy</li><li>Creative Solutions</li></ul></div>
          <div><h3 className="font-bold mb-4">Contact</h3><p className="text-white/70 text-sm"><a href="tel:03022669408" className="hover:text-white transition">03022669408</a></p></div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60"><p>Designed & developed by <Link href="/" className="text-white hover:text-white/80 transition font-semibold">Irtiza Riaz</Link></p><p className="mt-2">&copy; 2024 Northstar Digital. All rights reserved.</p></div>
      </div>
    </footer>
  );
}
