/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'xs': '475px',
            },
            fontFamily: {
                heading: ['Space Grotesk', 'sans-serif'],
                body: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
