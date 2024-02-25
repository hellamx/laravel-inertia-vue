/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        '../storage/framework/views/*.php',
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}