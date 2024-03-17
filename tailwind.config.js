/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        '../storage/framework/views/*.php',
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                'white': {
                    100: '#F8F9FA',
                },
                'dark': {
                    300: '#343A40',
                    500: '#212529',
                },
            }
        },
    },
    plugins: [],
}
