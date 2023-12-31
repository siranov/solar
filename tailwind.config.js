/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'orange': "#ff5c00",
      'gray': "#d9d9d9",
      "white": "#ffffff",
      "black": "#000000",
    },
  },
  plugins: [],
};