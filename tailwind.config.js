/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cape-green": "#00574f",
        "cape-light": "#02756990",
        "hidden-falls-green": "#274541",
        "hunter-green": "#1c3933",
        "bg-section": "#f9fbfc",
        "midnight-yellow": "#ffd900dd",
        "midnight-cian": "#6ec7d87a",
      },
      fontSize: {
        h1: ["clamp(36px, 6vw, 44px)", { lineHeight: "1.1" }],
        h2: ["clamp(30px, 5vw, 38px)", { lineHeight: "1.1" }],
        h3: ["clamp(24px, 4vw, 32px)", { lineHeight: "1.1" }],
        h4: ["clamp(20px, 3.5vw, 28px)", { lineHeight: "1.1" }],
        h5: ["clamp(18px, 3vw, 24px)", { lineHeight: "1.1" }],
        btn: ["clamp(14px, 2vw, 16px)", { lineHeight: "1.1" }],
        body: ["clamp(16px, 1.5vw, 18px)", { lineHeight: "1.1" }],
        a: ["clamp(16px, 2vw, 19px)", { lineHeight: "1.1" }],
        smallText: ["clamp(12px, 1.5vw, 14px)", { lineHeight: "1.1" }],
      },
      fontWeight: {
        400: 400,
        600: 600,
        700: 700,
      },
      backgroundImage: {
        "hero-pattern": 'url("./src/assets/images/jpg/hero_home_bg.jpg")',
      },
    },
  },
  plugins: [],
};