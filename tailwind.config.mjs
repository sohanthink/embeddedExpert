/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#4E68F8",
          300: "#7D91FF",
        },
        secondary: "#3860CB",
        tertiary: "#E9F7FA",
        black: {
          DEFAULT: "#262626",
          300: "#414141",
        },
        gray: "#BABABA",
      },
    },
  },
  plugins: [],
};
