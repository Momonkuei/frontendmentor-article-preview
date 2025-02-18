/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'design-grey-900': '#48556a',
        'design-grey-500': '#6E8098',
        'design-grey-400': '#9DAEC2',
        'design-grey-200': '#EcF2F8',
      },

      fontFamily: {
        manrope: ['Manrope', 'serif'],
      },
    },
  },
  plugins: [],
}
