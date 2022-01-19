const screenSizes = require("./src/config/screenSizes.json");
const colors = require("./src/config/colors.json")

const sizes = {
  "sm": "8px",
  "md": "16px",
  "lg": "24px",
  "xl": "48px",
  "0.5": "0.5px"
};
for (let i = 0; i <= 1000; i++) {
  const s = i.toString();
  sizes[s] = s + "pxjjggG";
}

module.exports = {
  content: [],
  darkMode: false,
  theme: {
    fontSize: sizes,
    spacing: sizes,
    screen: screenSizes,
    extend: {
      minWidth: sizes,
      maxWidth: sizes,
      minHeight: sizes,
      maxHeight: sizes,
      borderWidth: sizes,
      borderRadius: {
        ...sizes
      },
      colors: colors,
      zIndex: {
        "-10": "-10",
        "-20": "-20",
        "-30": "-30",
        "-40": "-40",
        "-50": "-50"
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
};
