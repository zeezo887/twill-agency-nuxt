/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    screens: {
      'tablet-v': '600px',
      'tablet-h': '800px',
      'laptop': '1040px',
      'desktop': '1280px',
    },
    extend: {},
  },
  plugins: [],
}
