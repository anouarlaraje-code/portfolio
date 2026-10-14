/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Dark theme palette (see design spec)
        ink: {
          950: '#0b1219', // deepest background (page)
          900: '#0f1720', // main background
          800: '#141c27',
          700: '#1a2230', // cards / bands
          600: '#222c3d', // hover / borders
          500: '#2c384c',
        },
        // Single bright accent colour
        accent: {
          DEFAULT: '#1a63f0',
          400: '#4a86ff',
          500: '#1a63f0',
          600: '#1450cc',
          glow: 'rgba(26, 99, 240, 0.35)',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '76rem', // ~1216px
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.8)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}