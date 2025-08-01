/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        blob:{
            '0%':{transform:'scale(1)'},
            '33%':{transform:'scale(1.2)'},
            '66%':{transform:'scale(0.8)'},
            '100%':{transform:'scale(1)'},
        },
      },
      animation:{
        blob:'blob 10s infinite',
      },
      backgroundImage:{
  aboutgradient: 'linear-gradient(38.73deg, rgba(0,70,209,0) 0%, rgba(0,70,209,0.05) 50%), linear-gradient(38.73deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.10) 100%)'
      },
    },
  },
  plugins: [],
}

