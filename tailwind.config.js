/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    
  ],
  theme: {
    extend: {
      screens:{
        'xs':'320px',
        'c-max-w-xs':{'raw':'(max-width: 320px)'},
        'c-base':'500px',
        'c-max-h':{'raw':'(max-height: 1299)'},
        'c-min-h':{'raw':'(min-height: 1300px)'},
        
        'c-min-h-max-w':{'raw':'(min-height: 1300px) and (max-width: 100vw)'},
      },
      backgroundImage:{
        'radial':'radial-gradient(circle at center, rgba(142,394,939,0.5) 50%,white 20%,blue 30%)',
      }
    },
  },
  plugins: [],
}

