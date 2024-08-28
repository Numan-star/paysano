/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    extend: {

      colors: {
        green: '#8BC63E', 
        customGray: '#FAFAFA',
        textGray: '#949593',
        lightGray: '#F8F9FB',
        cardbg: '#FFFFFF',
        iconGray: '#FFFFFF',

        black: {
          seconday: '#17282F',
        },
        gray: {
          DEFAULT: '#A1A3A0',
        },
        
      },

      rotate: {
        '15': '15deg',
        '30': '30deg',
        '60': '60deg',
        '-15': '-15deg',
        '-30': '-30deg',
        '-60': '-60deg',
      },
      backgroundImage: {
        'home-bg': "url('/home/home-bg.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
        'vegetables-img': "url('/welcomeSection/Vegetables.svg')",
        'detail-bg':"url(/restaurantsDetail/background.png)",
      },

      screen:{
        'xs': '310px',
        'sm': '640px',
        'md': '768px',
        'lg': '960px',
        'xl': '1200px',

      },
    },
  },
  variants: {
    extend: {
      translate: ['hover'], 
    },
  },
  images: {
    domains: ['dashboard.paysano.it'],
  },
  plugins: [],
};
