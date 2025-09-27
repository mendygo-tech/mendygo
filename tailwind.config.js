// tailwind.config.js
module.exports = {
    darkMode: 'class',
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
        // ...existing code...
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
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