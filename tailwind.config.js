/** @type {import('tailwindcss').Config}
 * 
 */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: '#F8F4EC',
        dark: '#16232c',
        primary: '#FFD1E3',
        accent: '#A367B1',
      }
    },
  },
  plugins: [],
}

