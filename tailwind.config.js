module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        smythe: ['Smythe', 'sans-serif'], // если тебе Smythe нужен
        roboto: ['Roboto', 'sans-serif'], // отдельно Roboto
        passionone: ['"Passion One"', 'sans-serif'],
        third: ['Charm', 'sans-serif'],
        montaga: ['Montaga', 'serif'],
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};

