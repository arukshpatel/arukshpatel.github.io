module.exports = {
  mode: 'jit',
  purge: [
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx}',
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {},
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}