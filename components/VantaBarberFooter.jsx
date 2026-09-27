import Link from 'next/link';

export default function VantaBarberFooter() {
  return (
    <footer className="bg-vanta-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">VANTA BARBER</h3>
            <p className="text-white/70 text-sm">Premium barbershop and grooming services.</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Hours</h3>
            <ul className="text-white/70 text-sm space-y-1">
              <li>Tue - Fri: 10AM - 8PM</li>
              <li>Sat: 9AM - 6PM</li>
              <li>Sun & Mon: Closed</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-white/70 text-sm mb-2">
              <a href="tel:03022669408" className="hover:text-white transition">
                03022669408
              </a>
            </p>
            <p className="text-white/70 text-sm">456 Barbershop Lane</p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>
            Designed & developed by{' '}
            <Link href="/" className="text-white hover:text-white/80 transition font-semibold">
              Irtiza Riaz
            </Link>
          </p>
          <p className="mt-2">&copy; 2024 Vanta Barber. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
