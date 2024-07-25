/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.jsx", "node_modules/preline/dist/*.js"],
  darkMode: false, // This disables dark mode
  theme: {
    extend: {
      colors: {
        primary: "F9F9F9",
        secondary: "#F1F5F9",
        pt: "#333333",
        st: "#6B7280",
        bb: "#F59E0B",
        bh: "#FBBF24",
        br: "#E5E7EB",
      },
    },
  },
  plugins: [require("preline/plugin"), require("daisyui")],
  daisyui: {
    themes: ["light"], // Disables DaisyUI's built-in themes if you prefer custom themes
  },
};
