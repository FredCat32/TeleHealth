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
        // Accent — muted sage green (borders, icons, decorative, large UI labels)
        brand: '#5B7A5F',
        'brand-dark': '#4A6950',
        'brand-light': '#EEF4EE',
        'brand-mid': '#D4E4D5',

        // Text links — darker sage, clears AA (4.5:1) on warm page background
        'link': '#4A6950',       // 5.58:1 on #F7F4EF — passes AA
        'link-hover': '#3A5440', // ~7:1 on #F7F4EF — passes AAA

        // Button fill — deeper forest green (buttons only)
        'btn-forest': '#2D5A35',
        'btn-forest-dark': '#234830',

        // Text
        'text-primary': '#1C1C1E',
        'text-secondary': '#4A4A4C',
        'text-muted': '#8A8A8C',

        // Surfaces
        'bg-page': '#F7F4EF',      // warm linen — page background
        'bg-surface': '#FFFFFF',   // cards, panels
        'bg-warm': '#F0EDE6',      // warm sand — subtle section backgrounds
        'bg-quiz': '#F4F0E9',      // slightly warmer — quiz background

        // Borders
        'border-subtle': '#E8E7E3',
        'border-mid': '#D4D3CF',
      },
      fontFamily: {
        // UI, headings, navigation
        sans: [
          'Plus Jakarta Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        // Article body text, editorial content
        serif: [
          'Lora',
          'Georgia',
          'ui-serif',
          'serif',
        ],
      },
      borderRadius: {
        // Standard UI elements
        'btn': '8px',
        // Quiz cards — rounder, warmer
        'quiz': '16px',
        // Large cards
        'card': '12px',
      },
      lineHeight: {
        relaxed: '1.6',
        editorial: '1.75',
      },
      fontSize: {
        base: ['16px', { lineHeight: '1.6' }],
      },
      maxWidth: {
        prose: '65ch',
        article: '72ch',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
        'quiz-selected': '0 0 0 2px #5B7A5F, 0 4px 12px rgba(91,122,95,0.15)',
      },
    },
  },
  plugins: [],
}

export default config
