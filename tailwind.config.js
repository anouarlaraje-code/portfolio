/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        /**
         * Semantic theme tokens.
         * Their values are CSS variables declared in src/index.css and they
         * switch between the dark and light theme (html[data-theme=...]),
         * so components never hard-code a colour that only works in dark mode.
         */
        bg: 'rgb(var(--c-bg) / <alpha-value>)', // page background
        surface: 'rgb(var(--c-surface) / <alpha-value>)', // cards / bands
        surface2: 'rgb(var(--c-surface-2) / <alpha-value>)', // inputs, chips, alt sections
        line: 'rgb(var(--c-line) / <alpha-value>)', // borders (used with /5, /10, /30)
        heading: 'rgb(var(--c-heading) / <alpha-value>)', // headings and strong text
        body: 'rgb(var(--c-body) / <alpha-value>)', // paragraphs
        muted: 'rgb(var(--c-muted) / <alpha-value>)', // labels, meta text
        danger: 'rgb(var(--c-danger) / <alpha-value>)', // form errors
        // Single bright accent (blue in both themes)
        accent: {
          DEFAULT: 'rgb(var(--c-accent) / <alpha-value>)',
          400: 'rgb(var(--c-accent-400) / <alpha-value>)',
          500: 'rgb(var(--c-accent) / <alpha-value>)',
          600: 'rgb(var(--c-accent-600) / <alpha-value>)',
          glow: 'rgba(26, 99, 240, 0.35)',
        },
        // Raw dark palette - prefer the semantic tokens above
        ink: {
          950: '#0b1219',
          900: '#0f1720',
          800: '#141c27',
          700: '#1a2230',
          600: '#222c3d',
          500: '#2c384c',
        },
      },
      fontFamily: {
        // Space Grotesk has no Arabic glyphs, so IBM Plex Sans Arabic covers
        // Arabic text automatically (browsers pick the first font with a glyph)
        sans: [
          '"Space Grotesk"',
          '"IBM Plex Sans Arabic"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
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