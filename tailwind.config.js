/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#AE7D54",
          secondary: "#AA84531A",
          overlay: "#666666",
          ash: "#F2F2F2",
          black: "#000000",
          white: "#FFFFFF",
          "text-primary": "#121212",
          "text-tertiary": "#707070",
        },
        fontFamily: {
            sans: ["var(--font-open-sans)", "sans-serif"], // Open Sans
            display: ["var(--font-playfair)", "serif"],    // Playfair Display
          },
      },
    },
    plugins: [],
};  