/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        paper: "#fbf9f9",
        muted: "#5d5f5b",
        subtle: "#4c4546",
        line: "#cfc4c5",
      },
      fontFamily: {
        sans: ['"Hanken Grotesk"', "ui-sans-serif", "sans-serif"],
      },
      fontSize: {
        // Display / Brand Name — e.g. the hero name and hero-scale stats
        display: ["72px", { lineHeight: "1.05", letterSpacing: "-0.04em", fontWeight: "700" }],
        // Headlines (H1) — project titles
        h1: ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        // Section Headers — "Methodological Framework", "Empirical Results", etc.
        section: ["28px", { lineHeight: "1.3", fontWeight: "500" }],
        // Body copy — descriptions and snippets
        body: ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        // Technical labels — metadata, nav tabs, captions
        label: ["12px", { lineHeight: "1.4", fontWeight: "500", letterSpacing: "0.1em" }],
      },
      borderRadius: {
        none: "0px",
        DEFAULT: "0px",
      },
    },
  },
  plugins: [],
};
