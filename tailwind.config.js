/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
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
            },
            minWidth: {
                mobile: '260px',
            },
        },
    },
    plugins: [],
}
