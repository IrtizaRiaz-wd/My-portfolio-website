import Head from 'next/head';
import { useState } from 'react';
import RestaurantNav from '../../components/RestaurantNav';
import RestaurantFooter from '../../components/RestaurantFooter';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: '',
      });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Contact - Ember & Plate</title>
        <meta name="description" content="Contact Ember & Plate to make a reservation or inquire about catering." />
      </Head>

      <RestaurantNav />

      <main className="flex-1">
        <section className="bg-cream py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-ember-900 mb-4">Get in Touch</h1>
            <p className="text-ember-700 text-lg">Make a reservation or contact us</p>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-ember-900 mb-8">Contact Information</h2>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-ember-900 mb-2">Address</h3>
                  <p className="text-ember-800">123 Main Street</p>
                  <p className="text-ember-800">Downtown District</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-ember-900 mb-2">Phone</h3>
                  <a href="tel:03022669408" className="text-ember-600 hover:text-ember-700 font-semibold">
                    03022669408
                  </a>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-ember-900 mb-2">Hours</h3>
                  <p className="text-ember-800 mb-1">Mon - Thu: 5PM - 11PM</p>
                  <p className="text-ember-800 mb-1">Fri - Sat: 5PM - 1AM</p>
                  <p className="text-ember-800">Sun: 5PM - 10PM</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-ember-900 mb-4">Special Events</h3>
                  <p className="text-ember-800 mb-3">Hosting a special event? We offer private dining and catering services.</p>
                  <p className="text-ember-700 text-sm">Contact us for details and availability</p>
                </div>
              </div>

              {/* Reservation Form */}
              <div>
                <h2 className="text-3xl font-bold text-ember-900 mb-8">Make a Reservation</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-ember-900 font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-ember-900/20 rounded-lg focus:outline-none focus:border-ember-600"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-ember-900 font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-ember-900/20 rounded-lg focus:outline-none focus:border-ember-600"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-ember-900 font-semibold mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-ember-900/20 rounded-lg focus:outline-none focus:border-ember-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-ember-900 font-semibold mb-2">Date</label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-ember-900/20 rounded-lg focus:outline-none focus:border-ember-600"
                      />
                    </div>
                    <div>
                      <label className="block text-ember-900 font-semibold mb-2">Time</label>
                      <input
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-ember-900/20 rounded-lg focus:outline-none focus:border-ember-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-ember-900 font-semibold mb-2">Number of Guests</label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-ember-900/20 rounded-lg focus:outline-none focus:border-ember-600"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6+ Guests</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-ember-900 font-semibold mb-2">Special Requests</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-ember-900/20 rounded-lg focus:outline-none focus:border-ember-600 resize-none"
                      rows="4"
                      placeholder="Any dietary restrictions or special occasions?"
                    />
                  </div>

                  {status === 'success' && (
                    <div className="p-4 bg-green-100 text-green-700 rounded-lg text-sm">
                      Reservation request received! We'll confirm shortly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3 bg-ember-900 text-cream rounded-lg font-semibold hover:bg-ember-800 transition disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Sending...' : 'Request Reservation'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <RestaurantFooter />
    </>
  );
}
