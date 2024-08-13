/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "bgNav" : "#0B6477",
        "bgBody" : "#213A57",
        "bgSpace" : "#80ED99",
        "bgCard" : "#0AD1C8",
        "bgTaske" : "#14919B",
        "bgTaskes" : "#45DFB1",
      },
      colors: {
        "t" : "#14919B",
        "u" : "#0AD1C8",
        "bgText" : "#45DFB1",
      }
    },
  },
  plugins: [],
};
