import Head from 'next/head';
import Link from 'next/link';
import { NorthlineEstatesNav, NorthlineEstatesFooter } from '../../components/AllRemainingNavFooter';

export default function NorthlineEstatesHome() {
  const featured = [
    { address: 'Luxury Penthouse', price: '$2,450,000', beds: 4, baths: 3, sqft: '5,200' },
    { address: 'Modern Villa', price: '$1,850,000', beds: 5, baths: 4, sqft: '6,100' },
    { address: 'Downtown Loft', price: '$995,000', beds: 2, baths: 2, sqft: '2,800' },
  ];

  return (
    <>
      <Head>
        <title>Northline Estates - Luxury Real Estate</title>
        <meta name="description" content="Luxury real estate and property management services." />
      </Head>

      <NorthlineEstatesNav />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-northline-navy via-blue-900 to-northline-navy py-32 md:py-48 text-white relative">
          <div className="absolute right-0 top-0 w-96 h-96 bg-northline-gold/10 rounded-full blur-3xl" />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <h1 className="text-6xl md:text-7xl font-bold mb-4">NORTHLINE ESTATES</h1>
            <p className="text-2xl text-white/80 mb-8 font-light">Premium Real Estate Solutions</p>
            <p className="max-w-2xl text-white/70 mb-12">
              Discover luxury properties and professional real estate services for your lifestyle.
            </p>
            <div className="flex gap-4 flex-col sm:flex-row">
              <Link
                href="/northline-estates/properties"
                className="px-8 py-4 bg-northline-gold text-northline-navy rounded font-semibold hover:opacity-90 transition"
              >
                Browse Properties
              </Link>
              <Link
                href="/northline-estates/contact"
                className="px-8 py-4 border-2 border-northline-gold text-northline-gold rounded font-semibold hover:bg-northline-gold/10 transition"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="py-20 md:py-32 bg-northline-cream">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-northline-navy mb-4 text-center">Featured Properties</h2>
            <p className="text-center text-northline-navy/70 mb-16">Exceptional homes in premium locations</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featured.map((prop, idx) => (
                <Link key={idx} href="/northline-estates/properties" className="group">
                  <div className="aspect-video bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg mb-4 group-hover:shadow-xl transition" />
                  <h3 className="text-xl font-bold text-northline-navy mb-2">{prop.address}</h3>
                  <p className="text-northline-gold font-bold text-lg mb-3">{prop.price}</p>
                  <div className="flex gap-4 text-sm text-northline-navy/70">
                    <span>{prop.beds} Beds</span>
                    <span>{prop.baths} Baths</span>
                    <span>{prop.sqft} sqft</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/northline-estates/properties"
                className="inline-block px-8 py-4 bg-northline-navy text-white rounded font-semibold hover:opacity-90 transition"
              >
                View All Properties
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-northline-navy to-blue-900 h-80 rounded-lg" />
              <div>
                <h2 className="text-4xl font-bold text-northline-navy mb-6">Why Choose Northline?</h2>
                <ul className="space-y-4 text-northline-navy/80 mb-8">
                  <li className="flex gap-3">
                    <span className="text-northline-gold font-bold">✓</span>
                    <span>20+ Years of Real Estate Excellence</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-northline-gold font-bold">✓</span>
                    <span>Expert Team of Agents</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-northline-gold font-bold">✓</span>
                    <span>Luxury Properties Portfolio</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-northline-gold font-bold">✓</span>
                    <span>Personalized Service</span>
                  </li>
                </ul>
                <Link
                  href="/northline-estates/agents"
                  className="inline-block px-8 py-4 bg-northline-navy text-white rounded font-semibold hover:opacity-90 transition"
                >
                  Meet Our Agents
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-northline-navy text-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
            <p className="text-white/80 mb-8">Our team is ready to help you find the perfect property.</p>
            <Link
              href="/northline-estates/contact"
              className="inline-block px-8 py-4 bg-northline-gold text-northline-navy rounded font-semibold hover:opacity-90 transition text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <NorthlineEstatesFooter />
    </>
  );
}
