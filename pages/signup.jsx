import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { authUtils, validateEmail, validatePassword } from '../utils/auth';

export default function SignupProfessional() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!formData.fullName.trim()) {
      setError('Full name is required');
      setLoading(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email');
      setLoading(false);
      return;
    }

    if (!validatePassword(formData.password)) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    const result = authUtils.signup(
      formData.email,
      formData.password,
      formData.fullName
    );
    if (result.success) {
      router.push('/login');
    } else {
      setError(result.message);
    }

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Sign Up - Irtiza Riaz</title>
        <meta name="description" content="Create your account." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Get Started
            </h1>
            <p className="text-gray-600">Create your account today</p>
          </div>

          {/* Auth Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-300 rounded-lg">
                <p className="text-red-700 text-sm font-medium">{error}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name Field */}
              <div>
                <label className="block text-gray-900 font-semibold mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 transition-all duration-300 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-900 font-semibold mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 transition-all duration-300 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-gray-900 font-semibold mb-3">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 transition-all duration-300 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  required
                />
                <p className="text-xs text-gray-600 mt-2">
                  At least 6 characters
                </p>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className="block text-gray-900 font-semibold mb-3">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 transition-all duration-300 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Creating account...' : 'Create Account'}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">or</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Sign In Link */}
            <p className="text-center text-gray-600">
              Already have an account?{' '}
              <Link
                href="/login"
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
              >
                Sign in here
              </Link>
            </p>
          </div>

          {/* Demo Note */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Demo only:</span> accounts are
              stored in your browser — nothing is sent to a server.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
