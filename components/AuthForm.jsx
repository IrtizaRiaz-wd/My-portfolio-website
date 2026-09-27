import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { authUtils, validateEmail, validatePassword } from '../utils/auth';

const themes = {
  nova: {
    page: 'bg-nova-50',
    heading: 'text-gray-900',
    kicker: 'text-nova-accent',
    button: 'bg-nova-accent hover:bg-nova-900',
    link: 'text-nova-accent hover:text-nova-900',
  },
  vanta: {
    page: 'bg-vanta-900',
    heading: 'text-white',
    kicker: 'text-vanta-accent',
    button: 'bg-vanta-accent hover:bg-vanta-700',
    link: 'text-vanta-accent hover:text-white',
  },
  iron: {
    page: 'bg-iron-900',
    heading: 'text-white',
    kicker: 'text-iron-accent',
    button: 'bg-iron-accent hover:bg-red-700',
    link: 'text-iron-accent hover:text-white',
  },
  northline: {
    page: 'bg-northline-50',
    heading: 'text-northline-navy',
    kicker: 'text-northline-gold',
    button: 'bg-northline-navy hover:bg-northline-gold',
    link: 'text-northline-gold hover:text-northline-navy',
  },
  velocity: {
    page: 'bg-velocity-900',
    heading: 'text-white',
    kicker: 'text-velocity-accent',
    button: 'bg-velocity-accent hover:bg-red-700',
    link: 'text-velocity-accent hover:text-white',
  },
  northstar: {
    page: 'bg-northstar-900',
    heading: 'text-white',
    kicker: 'text-northstar-accent',
    button: 'bg-northstar-accent hover:bg-northstar-accent2',
    link: 'text-northstar-accent hover:text-northstar-accent2',
  },
};

export default function AuthForm({ mode, theme, site, home }) {
  const isSignup = mode === 'signup';
  const t = themes[theme] || themes.nova;
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const update = (field) => (e) => setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isSignup && !formData.name) {
      setError('Please fill in all fields');
      return;
    }

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email');
      return;
    }

    if (isSignup && !validatePassword(formData.password)) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (isSignup && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      let result;
      if (isSignup) {
        result = authUtils.signup(formData.email, formData.password, formData.name);
        if (result.success) {
          authUtils.login(formData.email, formData.password);
        }
      } else {
        result = authUtils.login(formData.email, formData.password);
      }
      setLoading(false);

      if (result.success) {
        router.push(home);
      } else {
        setError(result.message);
      }
    }, 500);
  };

  const inputClass = 'w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500';
  const labelClass = 'block text-gray-900 font-semibold mb-2';

  return (
    <section className={'py-20 md:py-32 ' + t.page}>
      <div className="max-w-md mx-auto px-4">
        <p className={'text-center font-semibold tracking-widest uppercase text-sm mb-2 ' + t.kicker}>{site}</p>
        <h1 className={'text-3xl font-bold mb-8 text-center ' + t.heading}>
          {isSignup ? 'Create Account' : 'Login'}
        </h1>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl">
          {error && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-sm">{error}</div>
          )}

          {isSignup && (
            <div className="mb-6">
              <label htmlFor="auth-name" className={labelClass}>Full Name</label>
              <input
                id="auth-name"
                type="text"
                value={formData.name}
                onChange={update('name')}
                className={inputClass}
                placeholder="Your name"
              />
            </div>
          )}

          <div className="mb-6">
            <label htmlFor="auth-email" className={labelClass}>Email</label>
            <input
              id="auth-email"
              type="email"
              value={formData.email}
              onChange={update('email')}
              className={inputClass}
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="auth-password" className={labelClass}>Password</label>
            <input
              id="auth-password"
              type="password"
              value={formData.password}
              onChange={update('password')}
              className={inputClass}
              placeholder="••••••••"
            />
          </div>

          {isSignup && (
            <div className="mb-6">
              <label htmlFor="auth-confirm" className={labelClass}>Confirm Password</label>
              <input
                id="auth-confirm"
                type="password"
                value={formData.confirmPassword}
                onChange={update('confirmPassword')}
                className={inputClass}
                placeholder="••••••••"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={'w-full py-3 text-white rounded-lg font-semibold transition disabled:opacity-50 ' + t.button}
          >
            {loading ? 'Please wait...' : isSignup ? 'Sign Up' : 'Login'}
          </button>

          <p className="text-xs text-gray-400 text-center mt-4">
            Demo only — accounts are stored in your browser.
          </p>
        </form>

        <div className="mt-8 text-center">
          <p className={t.heading}>
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <Link href={home + (isSignup ? '/login' : '/signup')} className={'font-semibold ' + t.link}>
              {isSignup ? 'Login' : 'Sign up'}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
