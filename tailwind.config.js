// tailwind.config.js
module.exports = {
    darkMode: 'class',
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
             colors: {
        'mendygo-green': '#A3E635', 
      },
        },
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'], 
        },
    },
    plugins: [],
}