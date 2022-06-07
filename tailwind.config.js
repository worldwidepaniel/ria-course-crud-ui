module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "jonquil": "#ebc30e",
        "yellow": "#FEF200",
        "pink": "#FF0078",
        "blue": "#0201FF",
        "ivory": "#DFDFDF",
      },
      dropShadow: {
        "xl": "4px 4px rgba(0,0,0,1)"
      }
    },
  },
  plugins: [],
}
