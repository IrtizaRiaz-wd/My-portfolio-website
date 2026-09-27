import Link from 'next/link';

export default function NovaThreadsFooter() {
  return (
    <footer className="bg-nova-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NOVA THREADS</h3>
            <p className="text-white/70 text-sm">Contemporary fashion for the modern individual.</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Shop</h3>
            <ul className="text-white/70 text-sm space-y-2">
              <li><Link href="/nova-threads/shop" className="hover:text-white transition">All Products</Link></li>
              <li><Link href="/nova-threads/shop?category=mens" className="hover:text-white transition">Men's</Link></li>
              <li><Link href="/nova-threads/shop?category=womens" className="hover:text-white transition">Women's</Link></li>
              <li><Link href="/nova-threads/collections" className="hover:text-white transition">Collections</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="text-white/70 text-sm space-y-2">
              <li><Link href="/nova-threads/contact" className="hover:text-white transition">Contact</Link></li>
              <li><a href="tel:03022669408" className="hover:text-white transition">Call: 03022669408</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>
            Designed & developed by{' '}
            <Link href="/" className="text-white hover:text-white/80 transition font-semibold">
              Irtiza Riaz
            </Link>
          </p>
          <p className="mt-2">&copy; 2024 Nova Threads. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
