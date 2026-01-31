/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    navy: '#1a202c',
                    red: '#e53e3e',
                    light: '#f7fafc',
                }
            },
            fontFamily: {
                sans: ['Inter', 'Roboto', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'float': 'float 3s ease-in-out infinite',
                'bounce-slow': 'bounce 3s infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
