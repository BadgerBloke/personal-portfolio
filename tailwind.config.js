/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`
        }
        return `rgb(var(${variableName}))`
    }
}

module.exports = {
    content: [
        "./src/app/**/*.tsx",
        "./src/components/**/*.tsx",
        "./src/data/**/*.tsx",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                first: withOpacity('--first-color'),
                title: withOpacity('--title-color'),
                text: withOpacity('--text-color'),
                'text-light': withOpacity('--text-color-light'),
                body: withOpacity('--body-color'),
                container: withOpacity('--container-color'),
                gradientColor: withOpacity('--gradient-color'),
                icon: {
                    DEFAULT: withOpacity('--icon-color'),
                    active: withOpacity('--icon-active-color'),
                },
            },
            fontFamily: {
                titleFont: ["Lora", "serif"],
                bodyFont: ["Roboto", "sans-serif"],
            },
            animation: {
                "ping-once": "ping 1s cubic-bezier(0, 0, 0.2, 1) 1",
            },
        },
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/typography"),
    ],
}
