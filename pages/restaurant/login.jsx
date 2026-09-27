import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import RestaurantNav from '../../components/RestaurantNav';
import RestaurantFooter from '../../components/RestaurantFooter';
import { authUtils, validateEmail } from '../../utils/auth';

export default function RestaurantLogin() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const result = authUtils.login(formData.email, formData.password);
      setLoading(false);
      
      if (result.success) {
        router.push('/restaurant/dashboard');
      } else {
        setError(result.message);
      }
    }, 500);
  };

  return (
    <>
      <Head>
        <title>Login - Ember & Plate</title>
        <meta name="description" content="Login to your Ember & Plate account." />
      </Head>

      <RestaurantNav />

      <main className="flex-1">
        <section className="py-20 md:py-32 bg-cream">
          <div className="max-w-md mx-auto px-4">
            <h1 className="text-3xl font-bold text-ember-900 mb-8 text-center">
              Login
            </h1>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border-2 border-ember-900/10">
              {error && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}

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

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-ember-900 text-cream rounded-lg font-semibold hover:bg-ember-800 transition disabled:opacity-50"
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>

            <div className="mt-8 text-center space-y-4">
              <p className="text-ember-800">
                Don't have an account?{' '}
                <Link href="/restaurant/signup" className="text-ember-600 font-semibold hover:text-ember-700">
                  Sign up
                </Link>
              </p>
              <p className="text-ember-800">
                <Link href="/restaurant/forgot-password" className="text-ember-600 font-semibold hover:text-ember-700">
                  Forgot password?
                </Link>
              </p>
              <p className="text-sm text-ember-700 mt-6 border-t border-ember-900/10 pt-6">
                Test credentials: demo@example.com / password123
              </p>
            </div>
          </div>
        </section>
      </main>

      <RestaurantFooter />
    </>
  );
}
