/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    purge: ['./index.html', './src/**/*.{svelte,js,ts}'],
    theme: {
        extend: {
            flex: {
                2: '2 2 0%',
                3: '3 3 0%',
                4: '4 4 0%',
                5: '5 5 0%',
            },
        },
        colors: {
            white: '#FFFFFF',
            background: '#101010',
            'crimson-alizarin': '#E32636',
        },
    },
    plugins: [],
};
