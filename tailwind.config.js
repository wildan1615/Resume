/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'title-color': '#0B0A0A',
      'color-text': '#403A3A',
      'color-light': '#707070',
      'container-color': '#FAFAFA',
      'container-color-alt': '#F0EFEF',
      'body-color': '#FCFCFC'
    },
    fontSize: {
      'text-xs': '.75rem',
      'text-sm': '.875rem',
      'text-base': '1rem',
      'normal-font': '.938rem',
      'smaller-font': '.813rem'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    margin: {
      '0.5': '.5rem',
      '1': '1rem',
      '1.5': '1.5rem'
    },
    zIndex: {
      'tooltip': '10',
      'fixed': '100'
    },
    extend: {
      height: {
        'header-height': '3rem'
      }
    }
  },
  plugins: [],
}

