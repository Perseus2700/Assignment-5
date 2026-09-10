/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'brand-gradient': 'var(--brand-gradient)',
      },
      colors: {
        brand: {
          orange: '#f97316',
          pink: '#ec4899',
          violet: '#8b5cf6',
          dark: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
