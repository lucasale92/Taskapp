/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {    
      colors: {
      'color-1': '#E9D9C4', //color fondo
      'color-2': '#868660', //color texto
      'color-3': '#18223A', //color relleno
    }},
  },
  plugins: [],
}

