import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import RestaurantNav from '../../components/RestaurantNav';
import RestaurantFooter from '../../components/RestaurantFooter';
import { authUtils } from '../../utils/auth';

export default function RestaurantDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = authUtils.getCurrentUser();
    if (!currentUser) {
      router.push('/restaurant/login');
    } else {
      setUser(currentUser);
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Dashboard - Ember & Plate</title>
        <meta name="description" content="Your Ember & Plate account dashboard." />
      </Head>

      <RestaurantNav />

      <main className="flex-1">
        <section className="py-20 md:py-32 bg-cream">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-ember-900 mb-2">
              Welcome, {user.name}
            </h1>
            <p className="text-ember-700 mb-8">Here's your account dashboard</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Reservations */}
              <div className="bg-white p-8 rounded-lg border-2 border-ember-900/10">
                <h2 className="text-2xl font-bold text-ember-900 mb-4">Your Reservations</h2>
                <p className="text-ember-700 mb-6">You don't have any upcoming reservations.</p>
                <a href="/restaurant/contact" className="inline-block px-6 py-3 bg-ember-900 text-cream rounded font-semibold hover:bg-ember-800 transition">
                  Make a Reservation
                </a>
              </div>

              {/* Account Settings */}
              <div className="bg-white p-8 rounded-lg border-2 border-ember-900/10">
                <h2 className="text-2xl font-bold text-ember-900 mb-4">Account Settings</h2>
                <div className="space-y-3 mb-6">
                  <p className="text-ember-800">
                    <span className="font-semibold">Name:</span> {user.name}
                  </p>
                  <p className="text-ember-800">
                    <span className="font-semibold">Email:</span> {user.email}
                  </p>
                </div>
                <button className="px-6 py-3 border-2 border-ember-900 text-ember-900 rounded font-semibold hover:bg-cream transition">
                  Update Profile
                </button>
              </div>

              {/* Preferences */}
              <div className="bg-white p-8 rounded-lg border-2 border-ember-900/10">
                <h2 className="text-2xl font-bold text-ember-900 mb-4">Preferences</h2>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <span className="text-ember-800">Receive newsletter</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer mt-3">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <span className="text-ember-800">Special offers</span>
                </label>
              </div>

              {/* Loyalty */}
              <div className="bg-white p-8 rounded-lg border-2 border-ember-900/10">
                <h2 className="text-2xl font-bold text-ember-900 mb-4">Loyalty Points</h2>
                <p className="text-3xl font-bold text-ember-600 mb-2">450 Points</p>
                <p className="text-ember-700 text-sm">50 more points to your next reward!</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <RestaurantFooter />
    </>
  );
}
