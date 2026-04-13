import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'medical-blue': {
          DEFAULT: '#0056b3',
          50: '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b3ff',
          300: '#4d94ff',
          400: '#1a75ff',
          500: '#0056b3',
          600: '#004494',
          700: '#003375',
          800: '#002256',
          900: '#001137',
        },
        'health-green': {
          DEFAULT: '#00a86b',
          50: '#e6fff5',
          100: '#b3ffe0',
          200: '#80ffca',
          300: '#4dffb5',
          400: '#1aff9f',
          500: '#00a86b',
          600: '#008756',
          700: '#006641',
          800: '#00452c',
          900: '#002417',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: ['16px', '1.6'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0056b3 0%, #003d82 50%, #002759 100%)',
      },
    },
  },
  plugins: [],
}

export default config
