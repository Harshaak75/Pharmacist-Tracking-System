/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg-xl': { min: '1024px', max: '1280px' }, // Between lg and xl
      },
    },
  },
  plugins: [],
}

