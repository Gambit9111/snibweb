import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rock: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
      animation: {
        rock: 'rock 1s ease-in-out infinite',
      },
      overflowWrap: {
        anywhere: 'anywhere',
      },
    },
  },
  plugins: [    function ({ addUtilities }) {
    addUtilities({
      '.overflow-wrap-anywhere': {
        'overflow-wrap': 'anywhere',
      },
    });
  },],
};
export default config;
