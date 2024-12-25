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
      'h1': '1.5rem',
      'h2': '1.25rem',
      'h3': '1rem',
      'normal-font': '.938rem',
      'small-font': '.875rem',
      'smaller-font': '.813rem'
    },
    fontWeight: {
      'medium': 500,
      'semi-bold': 600
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

