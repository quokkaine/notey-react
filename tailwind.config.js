/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '1rem'
        },
        colors: {
            current: 'currentColor',
            transparent: 'transparent',
            white: '#FFFFFF',
            eggshell: '#F7F7F6',
            black: 'black',
            dark: '#050505',
            primary: '#141413',
            yellow: '#FFC700',
            'body-color': '#f7f7f6',
            green: '#00E45D',
            success: '#00E45D',
            warning: '#FFC700',
            pending: '#FFB800',
            info: '#1657FF',
            muted: '#8E8E93',
            tertiary: '#1C1C1E',
            blue: '#1657FF',
            danger: '#FF3B30',
            red: '#FF3B30'
        },
        screens: {
            xs: '450px',
            // => @media (min-width: 450px) { ... }

            sm: '575px',
            // => @media (min-width: 576px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '992px',
            // => @media (min-width: 992px) { ... }

            xl: '1200px',
            // => @media (min-width: 1200px) { ... }

            '2xl': '1400px'
            // => @media (min-width: 1400px) { ... }
        },
        extend: {
            boxShadow: {
                signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
                one: '0px 2px 3px rgba(7, 7, 77, 0.05)',
                sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)'
            }
        }
    },
    plugins: []
}
