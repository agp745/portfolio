const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['var(--font-general-sans)']
      // },
      backgroundImage: {
        'sks-painting': "url('/sks-painting.jpeg')"
      },
    },
  },
  plugins: [],
}
