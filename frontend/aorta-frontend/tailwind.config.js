/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './src/**/*.{ts,tsx,js,jsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef5ff',
          100: '#d9e7ff',
          200: '#b3ceff',
          300: '#8bb4ff',
          400: '#629bff',
          500: '#3a82ff',
          600: '#1f68e6',
          700: '#164fb4',
          800: '#113a85',
          900: '#0c295e',
          950: '#071a3d'
        },
        accent: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2'
        }
      }
    }
  },
  plugins: [],
}








