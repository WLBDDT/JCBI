/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dashboard: {
          bg: '#1a1c24',
          card: '#252833',
          border: '#3a3f4b',
          text: '#ffffff',
          muted: '#a0a0a0',
          accent: '#e3b341',
        }
      }
    },
  },
  plugins: [],
}
