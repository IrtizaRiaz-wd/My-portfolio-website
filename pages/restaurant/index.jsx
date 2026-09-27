import Head from 'next/head';
import Link from 'next/link';
import RestaurantNav from '../../components/RestaurantNav';
import RestaurantFooter from '../../components/RestaurantFooter';

export default function RestaurantHome() {
  const specialDishes = [
    {
      name: 'Pan-Seared Salmon',
      description: 'Norwegian salmon with seasonal vegetables and lemon beurre blanc',
      price: '$32',
    },
    {
      name: 'Wagyu Ribeye',
      description: 'Premium Japanese Wagyu with truffle mash and red wine reduction',
      price: '$52',
    },
    {
      name: 'Lobster Tail',
      description: 'Fresh Atlantic lobster tail with drawn butter and herb seasoning',
      price: '$45',
    },
  ];

  return (
    <>
      <Head>
        <title>Ember & Plate - Premium Restaurant</title>
        <meta name="description" content="Fine dining experience with premium ingredients and exceptional service." />
      </Head>

      <RestaurantNav />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-ember-900 to-black text-cream py-32 md:py-48 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">EMBER & PLATE</h1>
          <p className="text-2xl text-cream/80 mb-8 font-light">Premium Fine Dining</p>
          <p className="max-w-2xl mx-auto px-4 text-cream/70 mb-12">
            Experience culinary excellence with locally sourced ingredients, innovative techniques, and impeccable service.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link
              href="/restaurant/menu"
              className="px-8 py-4 bg-ember-600 hover:bg-ember-700 text-cream rounded font-semibold transition"
            >
              View Menu
            </Link>
            <Link
              href="/restaurant/contact"
              className="px-8 py-4 border-2 border-cream text-cream hover:bg-cream/10 rounded font-semibold transition"
            >
              Make Reservation
            </Link>
          </div>
        </section>

        {/* Featured Dishes */}
        <section className="py-20 md:py-32 bg-cream">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-ember-900 mb-4 text-center">
              Chef's Specialties
            </h2>
            <p className="text-center text-ember-700 mb-16 max-w-2xl mx-auto">
              Handpicked seasonal dishes prepared by our award-winning culinary team
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialDishes.map((dish, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-lg border-2 border-ember-900/10 hover:border-ember-600 transition"
                >
                  <h3 className="text-xl font-bold text-ember-900 mb-2">{dish.name}</h3>
                  <p className="text-ember-700 text-sm mb-4">{dish.description}</p>
                  <p className="text-2xl font-bold text-ember-600">{dish.price}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/restaurant/menu"
                className="inline-block px-8 py-4 bg-ember-900 text-cream rounded font-semibold hover:bg-ember-800 transition"
              >
                Explore Full Menu
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-ember-600 to-ember-900 h-96 rounded-lg" />
              <div>
                <h2 className="text-4xl font-bold text-ember-900 mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Ember & Plate was born from a passion for exceptional cuisine and hospitality. Our restaurant celebrates the artistry of cooking with a commitment to quality, creativity, and impeccable service.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Every dish is crafted with premium ingredients, many sourced from local farmers and purveyors. We believe in sustainable practices and building relationships with our suppliers to deliver the freshest flavors to your table.
                </p>
                <Link
                  href="/restaurant/about"
                  className="inline-block px-6 py-3 bg-ember-900 text-cream rounded font-semibold hover:bg-ember-800 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Hours & Location */}
        <section className="py-20 md:py-32 bg-cream">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg border-2 border-ember-900/10">
                <h3 className="text-2xl font-bold text-ember-900 mb-6">Hours</h3>
                <ul className="space-y-3 text-ember-800">
                  <li className="flex justify-between">
                    <span>Monday - Thursday</span>
                    <span className="font-semibold">5:00 PM - 11:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Friday - Saturday</span>
                    <span className="font-semibold">5:00 PM - 1:00 AM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">5:00 PM - 10:00 PM</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg border-2 border-ember-900/10">
                <h3 className="text-2xl font-bold text-ember-900 mb-6">Location & Contact</h3>
                <p className="text-ember-800 mb-2">123 Main Street</p>
                <p className="text-ember-800 mb-6">Downtown District</p>
                <a
                  href="tel:03022669408"
                  className="inline-block text-ember-600 hover:text-ember-700 font-semibold transition"
                >
                  📞 03022669408
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <RestaurantFooter />
    </>
  );
}
