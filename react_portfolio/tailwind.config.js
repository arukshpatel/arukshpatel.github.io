module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        github: '#333',
        linkedIn: '#2867B2',
        facebook: '#1778F2',
        instagram: '#C13584',
        snapchat: '#FFFC00',
        spotify: '#1DB954',
        twitter: '#1DA1F2',
        mail: '#FF0000',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '15%': { transform: 'rotate(14.0deg)' },
          '30%': { transform: 'rotate(-8.0deg)' },
          '40%': { transform: 'rotate(14.0deg)' },
          '50%': { transform: 'rotate(-4.0deg)' },
          '60%': { transform: 'rotate( 10.0deg)' },
          '70%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        wave: 'wave 1.5s infinite',
      },
    },
  },
  plugins: [],
}
