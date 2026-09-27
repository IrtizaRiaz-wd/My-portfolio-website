import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import RestaurantNav from '../../components/RestaurantNav';
import RestaurantFooter from '../../components/RestaurantFooter';
import { authUtils, validateEmail, validatePassword } from '../../utils/auth';

export default function RestaurantSignup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email');
      return;
    }

    if (!validatePassword(formData.password)) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const result = authUtils.signup(formData.email, formData.password, formData.name);
      setLoading(false);
      
      if (result.success) {
        router.push('/restaurant/login');
      } else {
        setError(result.message);
      }
    }, 500);
  };

  return (
    <>
      <Head>
        <title>Sign Up - Ember & Plate</title>
        <meta name="description" content="Create your Ember & Plate account." />
      </Head>

      <RestaurantNav />

      <main className="flex-1">
        <section className="py-20 md:py-32 bg-cream">
          <div className="max-w-md mx-auto px-4">
            <h1 className="text-3xl font-bold text-ember-900 mb-8 text-center">
              Create Account
            </h1>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border-2 border-ember-900/10">
              {error && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div className="mb-6">
                <label className="block text-ember-900 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-ember-900/20 rounded-lg focus:outline-none focus:border-ember-600"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label className="block text-ember-900 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-ember-900/20 rounded-lg focus:outline-none focus:border-ember-600"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-ember-900 font-semibold mb-2">Password</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-ember-900/20 rounded-lg focus:outline-none focus:border-ember-600"
                  placeholder="••••••••"
                />
              </div>

              <div className="mb-6">
                <label className="block text-ember-900 font-semibold mb-2">Confirm Password</label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-ember-900/20 rounded-lg focus:outline-none focus:border-ember-600"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-ember-900 text-cream rounded-lg font-semibold hover:bg-ember-800 transition disabled:opacity-50"
              >
                {loading ? 'Creating account...' : 'Sign Up'}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-ember-800">
                Already have an account?{' '}
                <Link href="/restaurant/login" className="text-ember-600 font-semibold hover:text-ember-700">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <RestaurantFooter />
    </>
  );
}
