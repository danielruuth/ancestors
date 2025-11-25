/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.vue',
    './pages/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        night: '#0f172a',
        ink: '#0b1224',
        accent: {
          50: '#e6f4ff',
          100: '#cce8ff',
          500: '#1d4ed8',
          600: '#1e40af',
          700: '#1e3a8a'
        }
      }
    }
  },
  plugins: []
};
