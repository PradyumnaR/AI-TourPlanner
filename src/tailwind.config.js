/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        travel:
          "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.5)), url('../public/assests/app-bg.png')",
        sidebar:
          "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0)), url('../public/assests/sidebar-bg.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["corporate", "business"],
  },
};
