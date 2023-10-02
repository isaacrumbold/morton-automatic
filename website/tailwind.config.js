/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            animation: {
                fadeIn: 'fadeIn 1s ease-in-out',
            },
            fontFamily: {
                sans: [
                    'Roboto',
                    'Helvetica',
                    'sans-serif',
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            colors: {
                primary: '#043a66',
                primaryDark: '#002F54',
            },
            minWidth: {
                mobile: '260px',
            },
        },
    },
    plugins: [],
}
