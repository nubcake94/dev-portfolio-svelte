/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    purge: ['./index.html', './src/**/*.{svelte,js,ts}'],
    theme: {
        extend: {},
        colors: {
            white: '#FFFFFF',
            background: '#101010',
            'crimson-alizarin': '#E32636',
        },
    },
    plugins: [],
};
