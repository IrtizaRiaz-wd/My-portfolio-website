import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import RestaurantNav from '../../components/RestaurantNav';
import RestaurantFooter from '../../components/RestaurantFooter';
import { validateEmail } from '../../utils/auth';

export default function RestaurantForgotPassword() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !validateEmail(email)) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Forgot Password - Ember & Plate</title>
        <meta name="description" content="Reset your Ember & Plate password." />
      </Head>

      <RestaurantNav />

      <main className="flex-1">
        <section className="py-20 md:py-32 bg-cream">
          <div className="max-w-md mx-auto px-4">
            <h1 className="text-3xl font-bold text-ember-900 mb-4 text-center">
              Reset Password
            </h1>
            <p className="text-center text-ember-700 mb-8">
              Enter your email address and we'll send you a link to reset your password.
            </p>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border-2 border-ember-900/10">
              <div className="mb-6">
                <label className="block text-ember-900 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-ember-900/20 rounded-lg focus:outline-none focus:border-ember-600"
                  placeholder="your@email.com"
                />
              </div>

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-sm">
                  Please enter a valid email address.
                </div>
              )}

              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-sm">
                  Check your email for password reset instructions.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 bg-ember-900 text-cream rounded-lg font-semibold hover:bg-ember-800 transition disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>

            <div className="mt-8 text-center space-y-4">
              <p className="text-ember-800">
                Remember your password?{' '}
                <Link href="/restaurant/login" className="text-ember-600 font-semibold hover:text-ember-700">
                  Back to login
                </Link>
              </p>
              <p className="text-ember-800">
                Need help?{' '}
                <Link href="/restaurant/contact" className="text-ember-600 font-semibold hover:text-ember-700">
                  Contact us
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
