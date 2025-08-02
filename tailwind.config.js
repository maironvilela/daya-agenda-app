/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],

  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('tailwind-scrollbar')],
};
