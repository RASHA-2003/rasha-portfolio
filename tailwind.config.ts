import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        palette: {
          bg: '#F7F5F8',          // Warm off-white primary background
          card: '#FFFFFF',        // Pure white for cards/surfaces
          cardHover: '#FAF8FC',   // Very soft lavender-white for card hover
          accent: '#8C79A8',      // Muted purple primary accent
          accentHover: '#7A6796', // Deeper purple for active/hover states
          lavender: '#C9B9D9',    // Soft lavender secondary accent
          lilac: '#EAE5EF',       // Soft lilac light accent background
          text: '#282433',        // Dark charcoal primary text
          muted: '#655E75',       // Muted purple-slate secondary text
          border: '#E2DCea',      // Subtle border
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'soft-card': '0 4px 20px -2px rgba(140, 121, 168, 0.08)',
        'soft-card-hover': '0 12px 32px -4px rgba(140, 121, 168, 0.16)',
        'purple-glow': '0 0 25px -4px rgba(140, 121, 168, 0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config;
