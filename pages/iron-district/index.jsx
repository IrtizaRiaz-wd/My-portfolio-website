import Head from 'next/head';
import Link from 'next/link';
import { IronDistrictNav } from '../../components/AllRemainingNavFooter';
import { IronDistrictFooter } from '../../components/AllRemainingNavFooter';

export default function IronDistrictHome() {
  const programs = [
    { name: 'Strength Training', focus: 'Build muscle and power' },
    { name: 'Cardio Bootcamp', focus: 'High-intensity workouts' },
    { name: 'Functional Fitness', focus: 'Everyday strength' },
    { name: 'Powerlifting', focus: 'Advanced technique' },
  ];

  return (
    <>
      <Head>
        <title>Iron District - Premium Fitness</title>
        <meta name="description" content="Premium fitness gym with training programs, professional trainers, and state-of-the-art equipment." />
      </Head>

      <IronDistrictNav />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-iron-700 via-iron-900 to-black py-32 md:py-48 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-10 w-96 h-96 bg-iron-accent rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <h1 className="text-6xl md:text-7xl font-black mb-4">IRON DISTRICT</h1>
            <p className="text-2xl text-white/80 mb-8 font-light">TRANSFORM YOUR BODY</p>
            <p className="max-w-2xl mx-auto text-white/70 mb-12">
              State-of-the-art facilities, professional trainers, and a community dedicated to your fitness success.
            </p>
            <div className="flex gap-4 justify-center flex-col sm:flex-row">
              <Link
                href="/iron-district/membership"
                className="px-8 py-4 bg-iron-accent hover:bg-red-700 text-white rounded font-bold transition text-lg"
              >
                Join Now
              </Link>
              <Link
                href="/iron-district/programs"
                className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded font-bold transition text-lg"
              >
                View Programs
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-iron-900 text-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div><p className="text-4xl font-black text-iron-accent">500+</p><p className="text-white/70">Active Members</p></div>
            <div><p className="text-4xl font-black text-iron-accent">50+</p><p className="text-white/70">Classes/Week</p></div>
            <div><p className="text-4xl font-black text-iron-accent">20+</p><p className="text-white/70">Expert Trainers</p></div>
            <div><p className="text-4xl font-black text-iron-accent">24/7</p><p className="text-white/70">Access</p></div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-20 md:py-32 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-black text-white mb-4 text-center">Training Programs</h2>
            <p className="text-center text-white/70 mb-16">Choose your path to transformation</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {programs.map((prog, idx) => (
                <div key={idx} className="bg-iron-700 p-8 rounded-lg border-l-4 border-iron-accent hover:border-white transition">
                  <h3 className="text-2xl font-bold text-white mb-2">{prog.name}</h3>
                  <p className="text-white/80">{prog.focus}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/iron-district/programs"
                className="inline-block px-8 py-4 bg-iron-accent text-white rounded font-bold hover:bg-red-700 transition text-lg"
              >
                Explore All Programs
              </Link>
            </div>
          </div>
        </section>

        {/* Membership */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Membership Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Starter', price: '$49', features: ['Gym Access', 'Open Gym Only', 'Basic Support'] },
                { name: 'Pro', price: '$99', features: ['All Access', 'Classes Included', 'Personal Trainer Access', 'Priority Support'], featured: true },
                { name: 'Elite', price: '$199', features: ['All Pro Features', '2 Personal Training Sessions', 'Nutrition Consulting', 'Premium Facilities'] },
              ].map((plan, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-lg border-2 ${
                    plan.featured
                      ? 'border-iron-accent bg-black text-white scale-105'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-3xl font-black mb-6 ${plan.featured ? 'text-iron-accent' : 'text-iron-accent'}`}>
                    {plan.price}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-iron-accent">✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/iron-district/membership"
                    className={`block text-center py-3 rounded font-bold transition ${
                      plan.featured
                        ? 'bg-iron-accent text-white hover:bg-red-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <IronDistrictFooter />
    </>
  );
}
