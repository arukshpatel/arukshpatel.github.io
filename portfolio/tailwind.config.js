/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
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
                    '0%': {transform: 'rotate(0.0deg), translateX(0)'},
                    '15%': {transform: 'rotate(10.0deg) translateX(13%)'},
                    '30%': {transform: 'rotate(-4.0deg) translateX(-13%)'},
                    '40%': {transform: 'rotate(10.0deg) translateX(13%)'},
                    '50%': {transform: 'rotate(-4.0deg) translateX(-7%)'},
                    '60%': {transform: 'rotate( 10.0deg) translateX(10%)'},
                    '80%': {transform: 'rotate(-4.0deg) translateX(-7%)'},
                    '100%': {transform: 'rotate(0.0deg) translateX(0)'},
                },
                bounceRight: {
                    '0%': {transform: 'translateX(25%)'},
                    '50%': {transform: 'translateX(0)'},
                    '100%': {transform: 'translateX(25%)'},
                },
                fadeOut: {
                    from: {
                        opacity: 1,
                    },
                    to: {
                        opacity: 0,
                    },
                },
            },
            animation: {
                wave: 'wave 2.0s infinite',
                bounceRight: 'bounceRight 1.5s infinite',
            },
        },
    },
    plugins: [],
}
