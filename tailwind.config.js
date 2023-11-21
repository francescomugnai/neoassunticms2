const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
      './resources/**/*.antlers.html',
      './resources/**/*.blade.php',
      './resources/**/*.vue',
      './content/**/*.md',
      './resources/**/*.js',
      './resources/**/alpine/*.js',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        }
      },
    },
    variants: {},
    plugins: [],
  }
