/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#25ce2a",

          "secondary": "#7dc4e8",

          "accent": "#e3f9a9",

          "neutral": "#292D32",

          "base-100": "#FFFFFF",

          "info": "#4AA0DE",

          "success": "#27B060",

          "warning": "#F5A124",

          "error": "#F05C7E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

