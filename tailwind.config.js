module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "title-red": "#b82e49",
      },
      fontFamily: {
        proximanova: ["proxima_nova_altblack"],
      },
      keyframes: {
        slide: {
          "0%": { transform: "translate(0%, 10%)" },
          "100%": { transform: "translate(0%, 0%)" },
        },
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        slide: "slide 0.5s",
        fadein: "fadein 1s",
        slidingfadein: "slide 0.5s, fadein 1s"
      }
    },
  },
  plugins: [],
};
