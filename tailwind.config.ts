import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs principales d'Autrement Senior
        primary: {
          DEFAULT: '#d85940',  // Rouge orangé
          light: '#e57560',
          dark: '#c04330',
          50: '#fef5f3',
          100: '#fde8e4',
          200: '#fcd5cd',
          300: '#f9b5a9',
          400: '#f28b7d',
          500: '#d85940',
          600: '#c94a34',
          700: '#a93c2a',
          800: '#8b3326',
          900: '#742e25',
        },
        secondary: {
          DEFAULT: '#74ccc3',  // Turquoise
          light: '#8fd9d1',
          dark: '#5cb8ae',
          50: '#f0fdfb',
          100: '#ccfbf1',
          200: '#9af5e5',
          300: '#5fe9d5',
          400: '#2dd3be',
          500: '#74ccc3',
          600: '#0d9d8b',
          700: '#0f8071',
          800: '#12655b',
          900: '#13544c',
        },
        accent: {
          DEFAULT: '#a5fce8',  // Vert menthe clair
          light: '#b8fded',
          dark: '#92fbe3',
          50: '#ecfef9',
          100: '#d1fef0',
          200: '#a5fce8',
          300: '#6cf9d9',
          400: '#32edc4',
          500: '#0dd9aa',
          600: '#05b18d',
          700: '#078c72',
          800: '#0a6f5b',
          900: '#0c5a4b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-up': 'scaleUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

export default config