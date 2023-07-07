/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#4D96A9',
        secondary: '#855FB1',
        tertiary: '#8FE3F9', 
        text: '#28283D',
        mono: '#87879D',
        white: '#FAFAFA',
        border: 'rgba(135, 135, 157, 0.25)'
      },
      fontFamily: {
        redHat: ['Red Hat Display', 'sans-serif'],
      },
      gridAutoRows: {
        'imageGallery': 'minmax(151px, 1fr)'
      }
    }
  },
  plugins: [],
}