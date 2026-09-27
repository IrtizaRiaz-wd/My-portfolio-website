import Head from 'next/head';
import Link from 'next/link';
import NovaThreadsNav from '../../components/NovaThreadsNav';
import NovaThreadsFooter from '../../components/NovaThreadsFooter';

export default function NovaThreadsHome() {
  const featured = [
    { name: 'Essential Tee', price: '$45', color: 'Black' },
    { name: 'Tailored Blazer', price: '$180', color: 'Navy' },
    { name: 'Minimal Jeans', price: '$89', color: 'Dark Blue' },
    { name: 'Premium Sweater', price: '$120', color: 'Cream' },
  ];

  return (
    <>
      <Head>
        <title>Nova Threads - Contemporary Fashion</title>
        <meta name="description" content="Modern fashion for the contemporary individual." />
      </Head>

      <NovaThreadsNav />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-nova-50 to-nova-50 py-32 md:py-48">
          <div className="max-width7xl mx-auto px-4 text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-nova-900 mb-4">NOVA THREADS</h1>
            <p className="text-xl text-nova-900/70 mb-8">Contemporary Fashion Redefined</p>
            <p className="max-w-2xl mx-auto text-nova-900/60 mb-12">
              Curated collections for the modern individual. Quality fabrics. Timeless design. Everyday elegance.
            </p>
            <div className="flex gap-4 justify-center flex-col sm:flex-row">
              <Link
                href="/nova-threads/shop"
                className="px-8 py-4 bg-nova-900 hover:bg-nova-900/90 text-white rounded font-semibold transition"
              >
                Shop Now
              </Link>
              <Link
                href="/nova-threads/collections"
                className="px-8 py-4 border-2 border-nova-900 text-nova-900 hover:bg-nova-50 rounded font-semibold transition"
              >
                Explore Collections
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-nova-900 mb-4 text-center">Featured Pieces</h2>
            <p className="text-center text-nova-900/70 mb-16">This season's must-haves</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {featured.map((item, idx) => (
                <Link key={idx} href="/nova-threads/shop" className="group">
                  <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg mb-4 group-hover:shadow-lg transition" />
                  <h3 className="font-semibold text-nova-900 text-lg mb-1">{item.name}</h3>
                  <p className="text-nova-900/70 text-sm mb-2">{item.color}</p>
                  <p className="font-bold text-nova-900">{item.price}</p>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/nova-threads/shop"
                className="inline-block px-8 py-4 border-2 border-nova-900 text-nova-900 rounded font-semibold hover:bg-nova-50 transition"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 md:py-32 bg-nova-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-nova-900 mb-2">Quality Assured</h3>
                <p className="text-nova-900/70">Premium materials carefully selected for durability and comfort</p>
              </div>
              <div className="text-center p-8">
                <div className="text-4xl mb-4">→</div>
                <h3 className="text-xl font-bold text-nova-900 mb-2">Fast Shipping</h3>
                <p className="text-nova-900/70">Quick and reliable delivery to your doorstep</p>
              </div>
              <div className="text-center p-8">
                <div className="text-4xl mb-4">↺</div>
                <h3 className="text-xl font-bold text-nova-900 mb-2">Easy Returns</h3>
                <p className="text-nova-900/70">30-day return policy for your peace of mind</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 md:py-32 bg-nova-900 text-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-white/80 mb-8">Subscribe to get exclusive offers and new arrivals</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 text-nova-900 rounded focus:outline-none"
              />
              <button className="px-6 py-3 bg-white text-nova-900 rounded font-semibold hover:bg-nova-50 transition">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <NovaThreadsFooter />
    </>
  );
}
