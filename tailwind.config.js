/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      /* Poner colores: */
      colors: {
        rosita: "#FAFA",
        naranjote: "orange",
        azulino: "blue",
        texto: "gray",
      },

      /* Poner fuente */
      fontFamily: {
        /*Las fuentes van en formato array */
        sans: ["ui-sans-setif", "system-ui"],
        fuente2: ["arial", "tahoma"],
      }
    },
  },
  plugins: [],
}

