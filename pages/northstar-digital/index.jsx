import Head from 'next/head';
import Link from 'next/link';
import { NorthstarDigitalNav, NorthstarDigitalFooter } from '../../components/AllRemainingNavFooter';

export default function NorthstarDigitalHome() {
  const services = [
    { title: 'Web Design', description: 'Beautiful, modern websites that convert' },
    { title: 'Development', description: 'Scalable, performant, secure solutions' },
    { title: 'Strategy', description: 'Data-driven digital marketing strategies' },
    { title: 'Branding', description: 'Distinctive visual identities and messaging' },
    { title: 'Mobile Apps', description: 'Native and cross-platform applications' },
    { title: 'Consulting', description: 'Expert guidance on digital transformation' },
  ];

  const caseStudies = [
    { title: 'E-Commerce Platform', industry: 'Retail', result: '300% Revenue Increase' },
    { title: 'SaaS Platform', industry: 'Technology', result: '2M Users' },
    { title: 'Brand Redesign', industry: 'Fashion', result: 'Industry Recognition' },
  ];

  return (
    <>
      <Head>
        <title>Northstar Digital - Creative Technology Agency</title>
        <meta name="description" content="Premium digital agency specializing in web design, development, and digital strategy." />
      </Head>

      <NorthstarDigitalNav />

      <main className="flex-1">
        {/* Hero */}
        <section className="min-h-screen bg-gradient-to-br from-northstar-900 via-northstar-900 to-northstar-900 text-white flex items-center relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-northstar-accent/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-northstar-accent2/20 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
            <div className="max-w-3xl">
              <p className="text-northstar-accent font-semibold mb-4 text-lg">Welcome to the future</p>
              <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
                Digital Solutions<br />That Transform
              </h1>
              <p className="text-2xl text-white/70 mb-12 font-light max-w-2xl">
                We craft digital experiences that drive business growth. Strategy, design, technology – all working in harmony.
              </p>
              <div className="flex gap-4 flex-col sm:flex-row">
                <Link
                  href="/northstar-digital/work"
                  className="px-8 py-4 bg-gradient-to-r from-northstar-accent to-northstar-accent2 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-northstar-accent/50 transition text-lg"
                >
                  View Our Work
                </Link>
                <Link
                  href="/northstar-digital/contact"
                  className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg font-bold transition text-lg"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-32 bg-northstar-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-northstar-900 mb-4">Services</h2>
              <p className="text-northstar-900/70 text-xl">Comprehensive solutions for your digital needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-white rounded-lg border border-gray-200 hover:border-northstar-accent hover:shadow-lg transition group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-northstar-accent to-northstar-accent2 rounded-lg mb-4 group-hover:scale-110 transition" />
                  <h3 className="text-xl font-bold text-northstar-900 mb-3">{service.title}</h3>
                  <p className="text-northstar-900/70">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-northstar-900 mb-4">Featured Work</h2>
              <p className="text-northstar-900/70 text-xl">Projects that delivered real results</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, idx) => (
                <Link key={idx} href="/northstar-digital/work" className="group">
                  <div className="aspect-video bg-gradient-to-br from-northstar-accent/20 to-northstar-accent2/20 rounded-lg mb-4 group-hover:shadow-lg transition flex items-center justify-center">
                    <span className="text-northstar-900/30 font-bold text-2xl">{study.industry}</span>
                  </div>
                  <h3 className="text-xl font-bold text-northstar-900 mb-2 group-hover:text-northstar-accent transition">{study.title}</h3>
                  <p className="text-northstar-accent font-semibold">{study.result}</p>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/northstar-digital/work"
                className="inline-block px-8 py-4 border-2 border-northstar-900 text-northstar-900 rounded-lg font-bold hover:bg-northstar-900 hover:text-white transition"
              >
                See All Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-32 bg-northstar-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-northstar-900 mb-16 text-center">Our Process</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, title: 'Strategy', description: 'Understanding your goals and market' },
                { step: 2, title: 'Design', description: 'Creating compelling visual experiences' },
                { step: 3, title: 'Build', description: 'Developing with precision and care' },
                { step: 4, title: 'Launch', description: 'Deploying and optimizing for success' },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="bg-white p-8 rounded-lg border-2 border-northstar-accent/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-northstar-accent to-northstar-accent2 text-white rounded-full flex items-center justify-center font-black text-lg mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-northstar-900 mb-2">{item.title}</h3>
                    <p className="text-northstar-900/70">{item.description}</p>
                  </div>
                  {item.step < 4 && (
                    <div className="hidden md:block absolute top-1/3 -right-4 w-8 h-0.5 bg-gradient-to-r from-northstar-accent to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-northstar-900 to-northstar-900 text-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-white/80 mb-8 text-lg">Let's discuss how we can help your business thrive in the digital world.</p>
            <Link
              href="/northstar-digital/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-northstar-accent to-northstar-accent2 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-northstar-accent/50 transition text-lg"
            >
              Start a Conversation
            </Link>
          </div>
        </section>
      </main>

      <NorthstarDigitalFooter />
    </>
  );
}
