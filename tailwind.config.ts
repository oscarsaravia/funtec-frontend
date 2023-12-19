import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#252B42',
        'secondary-blue': '#295C7A',
        'gray-text': '#737373',
      },
      backgroundImage: {
        'hero-pattern': "url('../assets/images/cover.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'montserrat': ['"Montserrat"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
