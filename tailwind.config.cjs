/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/mdsvexlayout.svelte',
    './src/routes/+page.svelte',
    './src/**/*.svelte',
    './src/**/*.svx',
    // may also want to include HTML files
    './src/**/*.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
