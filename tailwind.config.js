module.exports = {
  theme: {
    extend: {
      maxWidth: {
        "7xl": "77rem",
        "8xl": "87rem",
        "9xl": "100rem",
      },
      maxHeight: {
        "30": "490px",
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
      },
    },
    inset: {
      "-1": "-0.25rem",
      "-2": "-0.5rem",
      "-3": "-0.75rem",
      "-4": "-1rem",
      "-5": "-1.25rem",
      "-6": "-1.5rem",
      "-8": "-2rem",
      "-10": "-2.5rem",
      "-12": "-3rem",
      "-16": "-4rem",
      "-20": "-5rem",
      "-24": "-6rem",
      "-32": "-8rem",
      "-40": "-10rem",
      "-48": "-12rem",
      "-56": "-14rem",
      "-64": "-16rem",
    },
    fontFamily: {
      sans: "Open Sans",
      titles: ["Maven Pro", "sans-serif"],
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
      circle: "circle",
    },
  },
  variants: {
    borderWidth: ["first", "last"],
  },
  plugins: [require("@tailwindcss/custom-forms")],
}
