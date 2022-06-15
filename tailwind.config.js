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
        "xl": "8px 8px rgba(0,0,0,1)"
      }
    },
  },
  screens: {
    xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
    sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
    md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
    lg: { min: '1200px' }, // Desktop smallest.
    xl: { min: '1159px' }, // Desktop wide.
    xxl: { min: '1359px' } // Desktop widescreen.
  },
  plugins: [],
}
