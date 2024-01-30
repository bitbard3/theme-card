/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#F8F4EC',
        dark: '#191825',
        primary: '#865DFF',
        secondary: '#E384FF'
      }
    },
  },
  plugins: [],
}

