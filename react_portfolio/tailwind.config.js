module.exports = {
  mode: 'jit',
  purge: [
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  plugins: [],
}
