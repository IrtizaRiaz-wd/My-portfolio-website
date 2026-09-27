/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Restaurant colors
        ember: {
          50: '#faf7f5',
          100: '#f5f0eb',
          600: '#c94a2e',
          700: '#a83827',
          800: '#8b2c1f',
          900: '#6e2318',
        },
        cream: '#f9f5f1',
        // Clothing colors
        nova: {
          50: '#f9f9f9',
          900: '#1a1a1a',
          accent: '#8b3a3a',
        },
        // Barbershop colors
        vanta: {
          50: '#f5f5f5',
          500: '#4a4a4a',
          700: '#2a2a2a',
          900: '#0a0a0a',
          accent: '#c41e3a',
        },
        // Gym colors
        iron: {
          50: '#f8f8f8',
          700: '#1f1f1f',
          900: '#0d0d0d',
          accent: '#ef2b2d',
        },
        // Real Estate colors
        northline: {
          50: '#faf9f8',
          100: '#f5f3f0',
          cream: '#e8e1d3',
          navy: '#2c3e50',
          gold: '#b8860b',
        },
        // Car Rental colors
        velocity: {
          50: '#f9f9f9',
          800: '#1a1a1a',
          900: '#0a0a0a',
          accent: '#e8312d',
        },
        // Digital Agency colors
        northstar: {
          50: '#f0f4f8',
          900: '#0f172a',
          accent: '#6366f1',
          accent2: '#a855f7',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in-out',
        slideUp: 'slideUp 0.6s ease-out',
        slideDown: 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
