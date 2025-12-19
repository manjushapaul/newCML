/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-radial-at-center': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: '#0f172a',
          dark: '#020617',
          light: '#334155',
        },
        accent: {
          DEFAULT: '#64748b',
          dark: '#475569',
          light: '#94a3b8',
        },
      },
      fontFamily: {
        geist: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'bubble-spin': 'bubbleSpin 20s linear infinite',
        'bubble-float-1': 'bubbleFloat1 14s ease-in-out infinite',
        'bubble-float-2': 'bubbleFloat2 18s ease-in-out infinite alternate',
        'bubble-float-3': 'bubbleFloat3 16s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bubbleSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bubbleFloat1: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-15px) scale(1.02)' },
        },
        bubbleFloat2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(-10px, -12px) scale(1.03)' },
          '75%': { transform: 'translate(10px, 8px) scale(0.97)' },
        },
        bubbleFloat3: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '33%': { transform: 'translate(8px, -12px) rotate(5deg) scale(1.04)' },
          '66%': { transform: 'translate(-8px, 10px) rotate(-5deg) scale(0.96)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
