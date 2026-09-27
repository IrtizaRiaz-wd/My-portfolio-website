import Head from 'next/head';
import Link from 'next/link';
import PortfolioNav from '../components/PortfolioNav';
import PortfolioFooter from '../components/PortfolioFooter';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');

  const projects = [
    {
      id: 1,
      name: 'Ember & Plate',
      category: 'Restaurant',
      description: 'Premium restaurant website with menu, reservations, gallery and responsive design.',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      link: '/restaurant',
      color: 'from-red-600 to-amber-600',
    },
    {
      id: 2,
      name: 'Nova Threads',
      category: 'E-Commerce',
      description: 'Modern fashion e-commerce interface with product filtering, cart functionality and responsive design.',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      link: '/nova-threads',
      color: 'from-gray-900 to-gray-700',
    },
    {
      id: 3,
      name: 'Vanta Barber',
      category: 'Barbershop',
      description: 'Premium barbershop website with services, barber profiles and appointment interface.',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      link: '/vanta-barber',
      color: 'from-red-700 to-gray-900',
    },
    {
      id: 4,
      name: 'Iron District',
      category: 'Fitness',
      description: 'High-energy fitness website with programs, memberships and trainer profiles.',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      link: '/iron-district',
      color: 'from-red-600 to-black',
    },
    {
      id: 5,
      name: 'Northline Estates',
      category: 'Real Estate',
      description: 'Luxury real estate platform with property search, filtering and detailed property pages.',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      link: '/northline-estates',
      color: 'from-yellow-700 to-blue-900',
    },
    {
      id: 6,
      name: 'Velocity Rentals',
      category: 'Car Rental',
      description: 'Modern vehicle rental website with vehicle filtering, pricing and booking interface.',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      link: '/velocity-rentals',
      color: 'from-red-600 to-gray-900',
    },
    {
      id: 7,
      name: 'Northstar Digital',
      category: 'Digital Agency',
      description: 'Modern agency website showcasing services, case studies and conversion-focused layouts.',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      link: '/northstar-digital',
      color: 'from-indigo-600 to-purple-700',
    },
  ];

  const services = [
    {
      title: 'Business Websites',
      description: 'Professional websites for small businesses designed to convert visitors into customers.',
    },
    {
      title: 'Landing Pages',
      description: 'High-converting landing pages optimized for specific campaigns and goals.',
    },
    {
      title: 'Website Redesigns',
      description: 'Modern makeovers for existing websites to improve performance and user experience.',
    },
    {
      title: 'E-Commerce Websites',
      description: 'Full-featured online stores with product catalogs, shopping carts, and payment integration.',
    },
    {
      title: 'Responsive Web Design',
      description: 'Websites that look perfect on desktop, tablet, and mobile devices.',
    },
    {
      title: 'Frontend Development',
      description: 'Expert frontend development using modern technologies and best practices.',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
      return;
    }

    // Simulate form submission
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Irtiza Riaz - Web Developer</title>
        <meta name="description" content="Professional web developer building modern websites for small businesses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      <PortfolioNav />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 md:py-32">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Irtiza
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
                Web Developer
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I build modern websites for small businesses. Clean design, fast performance, and results-driven development.
              </p>
              <div className="flex gap-4 flex-col sm:flex-row">
                <a
                  href="#work"
                  className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition text-center"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition text-center"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-20 md:py-32 bg-white">
          <div className="container-custom">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Featured Work
              </h2>
              <p className="text-xl text-gray-600">
                Here are some of the projects I've built for clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 transition"
                >
                  {/* Project Image Placeholder */}
                  <div className={`bg-gradient-to-br ${project.color} h-48 flex items-center justify-center text-white text-center p-6 group-hover:shadow-lg transition`}>
                    <div>
                      <p className="text-sm font-semibold text-white/80 mb-2">{project.category}</p>
                      <p className="text-lg font-bold">{project.name}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <p className="text-xs font-semibold text-gray-500 mb-2 uppercase">Technologies</p>
                      <div className="flex gap-2 flex-wrap">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={project.link}
                      className="inline-block w-full text-center px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-32 bg-gray-50">
          <div className="container-custom">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Services
              </h2>
              <p className="text-xl text-gray-600">
                What I can help you with.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-lg border border-gray-200 hover:border-gray-300 transition"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 bg-white">
          <div className="container-custom max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              About Me
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm Irtiza Riaz, a web developer focused on creating modern, responsive websites for small businesses. With expertise in front-end development and a passion for clean design, I help businesses establish a professional online presence.
              </p>

              <p>
                My approach combines strategic thinking with technical excellence. I understand that every business is unique, and I tailor my solutions to meet specific goals and audience needs.
              </p>

              <p>
                I specialize in building websites that are not only visually compelling but also performant, accessible, and optimized for conversion. My goal is to create digital experiences that help your business grow.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 bg-gray-900 text-white">
          <div className="container-custom max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-300 text-xl mb-12">
              Have a project in mind? Let's talk about how I can help.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="text-gray-400 mb-1">Phone</p>
                    <a
                      href="tel:03022669408"
                      className="text-white hover:text-gray-300 transition"
                    >
                      03022669408
                    </a>
                  </li>
                  <li>
                    <p className="text-gray-400 mb-1">Instagram</p>
                    <a
                      href="https://www.instagram.com/Irtiza_devs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 transition"
                    >
                      @Irtiza_devs
                    </a>
                  </li>
                  <li>
                    <p className="text-gray-400 mb-1">GitHub</p>
                    <a
                      href="https://github.com/IrtizaRiaz-wd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 transition"
                    >
                      IrtizaRiaz-wd
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder=" Dont send messege through this Its currently not working just for demo "
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition disabled:opacity-50"
                  >
                    {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                  {formStatus === 'success' && (
                    <p className="text-green-400 text-sm text-center">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  )}
                  {formStatus === 'error' && (
                    <p className="text-red-400 text-sm text-center">
                      Please fill in all fields.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PortfolioFooter />
    </>
  );
}
