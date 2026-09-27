import Link from 'next/link';

export default function RestaurantFooter() {
  return (
    <footer className="bg-ember-900 text-cream py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EMBER & PLATE</h3>
            <p className="text-cream/80 text-sm">Premium fine dining experience with locally sourced ingredients.</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Hours</h3>
            <ul className="text-cream/80 text-sm space-y-1">
              <li>Mon - Thu: 5PM - 11PM</li>
              <li>Fri - Sat: 5PM - 1AM</li>
              <li>Sun: 5PM - 10PM</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-cream/80 text-sm mb-2">
              <a href="tel:03022669408" className="hover:text-cream transition">
                03022669408
              </a>
            </p>
            <p className="text-cream/80 text-sm">123 Main Street</p>
          </div>
        </div>

        <div className="border-t border-ember-700 pt-8 text-center text-sm text-cream/60">
          <p>
            Designed & developed by{' '}
            <Link href="/" className="text-cream hover:text-ember-100 transition font-semibold">
              Irtiza Riaz
            </Link>
          </p>
          <p className="mt-2">&copy; 2024 Ember & Plate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
