module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["ProximaNova", "sans-serif"],
      serif: ["ProximaNova", "sans-serif"],
      mono: ["ProximaNova", "sans-serif"],
      display: ["ProximaNova", "sans-serif"],
      body: ["ProximaNova", "sans-serif"],
    },
    extend: {
      spacing: {
        18: "5rem",
        20: "7rem",
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      gridTemplateColumns: {
        16: "0.2fr 1.8fr;",
        17: "0.5fr 1.5fr;",
      },
      colors: {
        primary: {
          light: "#7538FF",
          DEFAULT: "#FFFFF",
          dark: "#00ECD5",
        },
        white: "#FFFFFF",
        gray: {
          100: "#F4F4F4",
          300: "#828482",
          500: "#292C29",
          DEFAULT: "rgb(230, 236, 238)",
          dark: "#99999",
        },
        red: {
          light: "#F00000",
          dark: "#DC281E",
        },
        secondary: {
          one: "#7D93F8",
          two: "#5EB6A8",
          three: "#E8EBF2",
        },
        sky: {
          light: "#E0EAFC",
          dark: "#CFDEF3",
        },
        purple: {
          light: "#d04ed6",
          DEFAULT: "rgb(251 126 219)",
          dark: "#834d9b",
        },
        star: "#F6B800",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
