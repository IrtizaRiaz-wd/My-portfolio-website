import Head from 'next/head';
import Link from 'next/link';
import VantaBarberNav from '../../components/VantaBarberNav';
import VantaBarberFooter from '../../components/VantaBarberFooter';

export default function VantaBarberHome() {
  const services = [
    { name: 'Classic Cut', price: '$25', description: 'Precision haircut tailored to your style' },
    { name: 'Skin Fade', price: '$30', description: 'Seamless fade with sharp finish' },
    { name: 'Beard Sculpt', price: '$20', description: 'Shape, line up and hot towel treatment' },
    { name: 'Hot Towel Shave', price: '$35', description: 'Traditional straight razor experience' },
  ];

  const barbers = [
    { name: 'Marcus Cole', role: 'Master Barber', experience: '12 yrs' },
    { name: 'Andre Silva', role: 'Fade Specialist', experience: '8 yrs' },
    { name: 'Jamal Reed', role: 'Beard Expert', experience: '10 yrs' },
    { name: 'Leo Vance', role: 'Stylist', experience: '6 yrs' },
  ];

  return (
    <>
      <Head>
        <title>Vanta Barber - Premium Barbershop</title>
        <meta name="description" content="Premium barbershop offering precision cuts, skin fades, beard sculpting and traditional hot towel shaves." />
      </Head>

      <VantaBarberNav />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-vanta-700 via-vanta-900 to-black py-32 md:py-48 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-10 w-96 h-96 bg-vanta-accent rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <h1 className="text-6xl md:text-7xl font-black mb-4 tracking-widest">VANTA BARBER</h1>
            <p className="text-2xl text-vanta-accent mb-8 font-light">SHARP LOOKS. PRECISE CUTS.</p>
            <p className="max-w-2xl mx-auto text-white/70 mb-12">
              Premium grooming services in a modern atmosphere. Master barbers, precision tools, and attention to every detail.
            </p>
            <div className="flex gap-4 justify-center flex-col sm:flex-row">
              <Link
                href="/vanta-barber/booking"
                className="px-8 py-4 bg-vanta-accent hover:bg-red-700 text-white rounded font-bold transition text-lg"
              >
                Book Now
              </Link>
              <Link
                href="/vanta-barber/services"
                className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded font-bold transition text-lg"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-vanta-900 text-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div><p className="text-4xl font-black text-vanta-accent">10+</p><p className="text-white/70">Years Experience</p></div>
            <div><p className="text-4xl font-black text-vanta-accent">15k+</p><p className="text-white/70">Cuts Completed</p></div>
            <div><p className="text-4xl font-black text-vanta-accent">4.9</p><p className="text-white/70">Client Rating</p></div>
            <div><p className="text-4xl font-black text-vanta-accent">8</p><p className="text-white/70">Expert Barbers</p></div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-32 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-black text-white mb-4 text-center">Our Services</h2>
            <p className="text-center text-white/70 mb-16">Precision grooming for the modern gentleman</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {services.map((service, idx) => (
                <div key={idx} className="bg-vanta-700 p-8 rounded-lg border-l-4 border-vanta-accent hover:border-white transition flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-white/80">{service.description}</p>
                  </div>
                  <p className="text-2xl font-black text-vanta-accent whitespace-nowrap">{service.price}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/vanta-barber/services"
                className="inline-block px-8 py-4 bg-vanta-accent text-white rounded font-bold hover:bg-red-700 transition text-lg"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Barbers */}
        <section className="py-20 md:py-32 bg-vanta-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Meet The Barbers</h2>
            <p className="text-center text-gray-600 mb-16">Skilled hands, sharp eyes, years of craft</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {barbers.map((barber, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-vanta-accent transition text-center">
                  <div className="w-20 h-20 bg-vanta-900 text-vanta-accent rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">
                    {barber.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{barber.name}</h3>
                  <p className="text-vanta-accent font-medium mb-2">{barber.role}</p>
                  <p className="text-gray-500 text-sm">{barber.experience} experience</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/vanta-barber/barbers"
                className="inline-block px-8 py-4 bg-vanta-900 text-white rounded font-bold hover:bg-vanta-700 transition text-lg"
              >
                Meet The Team
              </Link>
            </div>
          </div>
        </section>

        {/* Visit */}
        <section className="py-20 md:py-32 bg-vanta-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-black mb-4">Walk Ins Welcome</h2>
            <p className="text-white/70 text-lg mb-8">
              Tue - Fri: 10AM - 8PM · Sat: 9AM - 6PM · Sun & Mon: Closed
            </p>
            <p className="text-white/70 mb-12">456 Barbershop Lane</p>
            <Link
              href="/vanta-barber/booking"
              className="inline-block px-8 py-4 bg-vanta-accent text-white rounded font-bold hover:bg-red-700 transition text-lg"
            >
              Book Your Chair
            </Link>
          </div>
        </section>
      </main>

      <VantaBarberFooter />
    </>
  );
}
