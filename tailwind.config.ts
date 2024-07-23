// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//       colors: {
//         "custom-blue": "#4831d4",
//         "custom-purple": "#3d155f",
//         "custom-orange": "#ed143d",
//         "custom-green": "#d1f986",
//         "main-white": "#ffffff",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-blue": "#4831d4",
        "custom-purple": "#3d155f",
        "custom-orange": "#ed143d",
        "custom-green": "#d1f986",
        "main-white": "#ffffff",
      },
      keyframes: {
        clockHand: {
          "0%": { transform: "rotateZ(0deg)" },
          "100%": { transform: "rotateZ(360deg)" },
        },
        tree: {
          "0%": { transform: "rotateZ(10deg)" },
          "100%": { transform: "rotateZ(-20deg)" },
        },
        manBody: {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(10deg)" },
        },
        changeLight: {
          "0%": { stroke: "#cd61f8" },
          "25%": { stroke: "#6ace66" },
          "75%": { stroke: "#2995c0" },
          "100%": { stroke: "#e92949" },
        },
      },
      animation: {
        clockHand: "clockHand 5s infinite linear",
        tree: "tree 2s ease-in-out infinite alternate",
        manBody: "manBody 1s ease-in-out infinite alternate",
        changeLight: "changeLight 4s linear infinite alternate",
      },
    },
  },
  plugins: [],
});
