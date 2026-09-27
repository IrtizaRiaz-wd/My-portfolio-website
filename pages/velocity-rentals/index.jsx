import Head from 'next/head';
import Link from 'next/link';
import { VelocityRentalsNav, VelocityRentalsFooter } from '../../components/AllRemainingNavFooter';

export default function VelocityRentalsHome() {
  const vehicles = [
    { name: 'Economy', price: '$35/day', type: 'Perfect for city driving' },
    { name: 'Premium', price: '$89/day', type: 'Comfort and style' },
    { name: 'Luxury', price: '$199/day', type: 'Premium experience' },
    { name: 'SUV', price: '$120/day', type: 'Space and power' },
  ];

  return (
    <>
      <Head>
        <title>Velocity Rentals - Premium Car Rental</title>
        <meta name="description" content="Premium vehicle rental service with luxury cars and competitive pricing." />
      </Head>

      <VelocityRentalsNav />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-velocity-800 via-velocity-900 to-black py-32 md:py-48 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-80 h-80 bg-velocity-accent rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-velocity-accent rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <h1 className="text-6xl md:text-7xl font-black mb-4">VELOCITY</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-velocity-accent mb-8">PREMIUM CAR RENTALS</h2>
            <p className="max-w-2xl mx-auto text-white/70 mb-12 text-lg">
              Experience luxury on the road. Premium vehicles, competitive rates, exceptional service.
            </p>
            <div className="flex gap-4 justify-center flex-col sm:flex-row">
              <Link
                href="/velocity-rentals/vehicles"
                className="px-8 py-4 bg-velocity-accent hover:bg-red-600 text-white rounded font-bold transition text-lg"
              >
                Browse Fleet
              </Link>
              <Link
                href="/velocity-rentals/booking"
                className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded font-bold transition text-lg"
              >
                Book Now
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Badge */}
        <section className="bg-velocity-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div><p className="text-3xl font-black text-velocity-accent">15+</p><p className="text-white/80">Years Experience</p></div>
            <div><p className="text-3xl font-black text-velocity-accent">5000+</p><p className="text-white/80">Happy Customers</p></div>
            <div><p className="text-3xl font-black text-velocity-accent">200+</p><p className="text-white/80">Vehicles</p></div>
            <div><p className="text-3xl font-black text-velocity-accent">24/7</p><p className="text-white/80">Support</p></div>
          </div>
        </section>

        {/* Vehicle Categories */}
        <section className="py-20 md:py-32 bg-velocity-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-velocity-900 mb-4 text-center">Our Fleet</h2>
            <p className="text-center text-velocity-900/70 mb-16">Choose the perfect vehicle for your journey</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {vehicles.map((vehicle, idx) => (
                <Link key={idx} href="/velocity-rentals/vehicles" className="group">
                  <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg mb-4 group-hover:shadow-xl transition" />
                  <h3 className="text-xl font-bold text-velocity-900 mb-1">{vehicle.name}</h3>
                  <p className="text-velocity-accent font-bold mb-2">{vehicle.price}</p>
                  <p className="text-velocity-900/70 text-sm">{vehicle.type}</p>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/velocity-rentals/vehicles"
                className="inline-block px-8 py-4 bg-velocity-900 text-white rounded font-bold hover:opacity-90 transition text-lg"
              >
                View Full Fleet
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border-l-4 border-velocity-accent">
                <h3 className="text-2xl font-bold text-velocity-900 mb-3">Competitive Pricing</h3>
                <p className="text-velocity-900/70">Best rates in the industry with transparent pricing</p>
              </div>
              <div className="p-8 border-l-4 border-velocity-accent">
                <h3 className="text-2xl font-bold text-velocity-900 mb-3">Wide Selection</h3>
                <p className="text-velocity-900/70">Choose from economy to luxury vehicles</p>
              </div>
              <div className="p-8 border-l-4 border-velocity-accent">
                <h3 className="text-2xl font-bold text-velocity-900 mb-3">24/7 Support</h3>
                <p className="text-velocity-900/70">Round-the-clock customer support and roadside assistance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-velocity-900 to-black text-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Hit the Road?</h2>
            <p className="text-white/80 mb-8 text-lg">Simple booking process, competitive rates, luxury experience</p>
            <Link
              href="/velocity-rentals/booking"
              className="inline-block px-8 py-4 bg-velocity-accent text-white rounded font-bold hover:bg-red-600 transition text-lg"
            >
              Start Your Booking
            </Link>
          </div>
        </section>
      </main>

      <VelocityRentalsFooter />
    </>
  );
}
