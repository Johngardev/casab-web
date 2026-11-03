/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
      'xs': '475px',      // Móviles más grandes
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',    // Para pantallas de alta densidad
      },
      colors: {
        casabgreen: '#B7FFAB',
        casapurple: '#6101FF',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        sans: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}