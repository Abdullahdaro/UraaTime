/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/cities/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF725E',   // Orange
        secondary: '#FFDA32', // Yellow 
        black: '#222222',     // black
        alternative: '#7BBCB0', // Alternative
      },
      boxShadow: {
        'custom-button': '0px 8px 20px rgba(255, 218, 50, 0.5)',
      },
      borderRadius: {
        'custom-button': '40px',
      },
      spacing: {
        'custom-width': '198.89px',
        'custom-height': '50px',
      },
      fontFamily: {
        volkhov: ['Volkhov', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
