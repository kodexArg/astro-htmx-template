/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
   theme: {
      extend: {},
      fontFamily: {
         lato: ["Lato", "sans-serif"],
         roboto: ["Roboto", "sans-serif"],
         oswald: ["Oswald", "sans-serif"],
      },
      colors: {
         mate: {
            50: "#f0f2f0",
            100: "#e2e6e1",
            200: "#c5cdc4",
            300: "#a7b3a6",
            400: "#8a9a89",
            500: "#6d816b",
            600: "#576756",
            700: "#414d40",
            800: "#2c342b",
            900: "#161a15",
         },
         pullover: {
            50: "#f0eeed",
            100: "#e1dedb",
            200: "#c3bcb8",
            300: "#a59b94",
            400: "#877971",
            500: "#69584d",
            600: "#54463e",
            700: "#3f352e",
            800: "#2a231f",
            900: "#15120f",
         },
      },
   },
   plugins: [],
};
