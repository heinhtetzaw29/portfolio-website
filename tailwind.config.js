/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FCF9F8",
        surface: "#F6F3F2",
        "surface-high": "#EBE7E7",
        card: "#FFFFFF",
        ink: "#1C1B1B",
        muted: "#44474E",
        subtle: "#605E59",
        line: "#E5E2E1",
        accent: "#1B365D",
        "accent-deep": "#002046",
      },
      fontFamily: {
        sans: ['"Hanken Grotesk"', "ui-sans-serif", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        display: ["4.5rem", { lineHeight: "1", letterSpacing: "-0.04em", fontWeight: "600" }],
        "display-mobile": ["2.75rem", { lineHeight: "1.09", letterSpacing: "-0.03em", fontWeight: "600" }],
        "headline-lg": ["3rem", { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "500" }],
        "headline-lg-mobile": ["2rem", { lineHeight: "1.125", letterSpacing: "-0.02em", fontWeight: "500" }],
        "headline-md": ["2rem", { lineHeight: "1.125", letterSpacing: "-0.02em", fontWeight: "500" }],
        "headline-sm": ["1.375rem", { lineHeight: "1.18", letterSpacing: "-0.01em", fontWeight: "500" }],
        "body-lg": ["1.125rem", { lineHeight: "1.55", letterSpacing: "-0.01em", fontWeight: "400" }],
        "body-md": ["0.9375rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["0.8125rem", { lineHeight: "1.55", letterSpacing: "0.005em", fontWeight: "400" }],
        label: ["0.6875rem", { lineHeight: "1.27", letterSpacing: "0.06em", fontWeight: "500" }],
        "table-data": ["0.75rem", { lineHeight: "1.5", fontWeight: "400" }],
      },
      borderRadius: {
        none: "0px",
        DEFAULT: "0px",
      },
      maxWidth: {
        editorial: "88rem",
      },
    },
  },
  plugins: [],
};
