import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    // Breakpoints max-width (design desktop-first)
    screens: {
      lg: { max: '1100px' },
      md: { max: '900px' },
      sm: { max: '600px' },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4a7c59',
          dark:    '#2d5238',
          light:   '#6fa87a',
        },
        accent:   '#8fad6e',
        brand:    '#1e2d24',   // --color-dark
        warm:     '#f7f5f0',   // --color-bg-light
        border:   '#d8d0c4',
        topbar:   '#2d5238',
        footer:   '#1a2920',
      },
      fontFamily: {
        body:    ['Raleway', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        sm: '0 2px 8px rgba(0,0,0,0.08)',
        md: '0 4px 20px rgba(0,0,0,0.12)',
        lg: '0 8px 40px rgba(0,0,0,0.16)',
      },
      maxWidth: {
        site: '1200px',
      },
      transitionProperty: {
        'max-w': 'max-width',
      },
    },
  },
  plugins: [],
} satisfies Config
