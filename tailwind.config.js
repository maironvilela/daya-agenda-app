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
  //plugins: [require("tailwindcss-animate")],
};
