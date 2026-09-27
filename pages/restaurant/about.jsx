import Head from 'next/head';
import Link from 'next/link';
import RestaurantNav from '../../components/RestaurantNav';
import RestaurantFooter from '../../components/RestaurantFooter';

export default function About() {
  const team = [
    { name: 'Chef Marcus', role: 'Executive Chef', specialty: 'French Cuisine' },
    { name: 'Chef Sarah', role: 'Sous Chef', specialty: 'Italian Pasta' },
    { name: 'Chef David', role: 'Pastry Chef', specialty: 'Desserts & Pastries' },
  ];

  return (
    <>
      <Head>
        <title>About - Ember & Plate</title>
        <meta name="description" content="Learn about Ember & Plate restaurant and our culinary team." />
      </Head>

      <RestaurantNav />

      <main className="flex-1">
        <section className="bg-cream py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-ember-900 mb-4">About Us</h1>
            <p className="text-ember-700 text-lg">Discover the story behind Ember & Plate</p>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="bg-gradient-to-br from-ember-600 to-ember-900 h-96 rounded-lg" />
              <div>
                <h2 className="text-4xl font-bold text-ember-900 mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Ember & Plate was founded in 2010 with a simple mission: to create an unforgettable dining experience through exceptional cuisine and hospitality.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Our restaurant celebrates the artistry of cooking with a commitment to quality, creativity, and impeccable service. We believe in building relationships with our guests and creating memories that last a lifetime.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, Ember & Plate is recognized as one of the region's premier fine dining establishments, earning accolades for both culinary excellence and service.
                </p>
              </div>
            </div>

            <div className="bg-cream p-12 rounded-lg mb-16">
              <h2 className="text-3xl font-bold text-ember-900 mb-8 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-ember-900 mb-3">Quality</h3>
                  <p className="text-ember-700">Premium ingredients sourced from trusted suppliers</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-ember-900 mb-3">Innovation</h3>
                  <p className="text-ember-700">Creative techniques and seasonal inspiration</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-ember-900 mb-3">Hospitality</h3>
                  <p className="text-ember-700">Exceptional service and warm welcome</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-ember-900 mb-8 text-center">Our Culinary Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {team.map((member, idx) => (
                  <div key={idx} className="bg-cream p-8 rounded-lg text-center border-2 border-ember-900/10">
                    <div className="w-24 h-24 bg-gradient-to-br from-ember-600 to-ember-900 rounded-full mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-ember-900 mb-1">{member.name}</h3>
                    <p className="text-ember-700 font-semibold mb-2">{member.role}</p>
                    <p className="text-ember-700 text-sm">{member.specialty}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <RestaurantFooter />
    </>
  );
}
