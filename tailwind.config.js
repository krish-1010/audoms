/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "background-pattern": "url('/imgs/backgroundImage.png')",
        "radial-orange-transparent":
          "radial-gradient(circle, #ff8811, transparent 50%)",
      },
      backgroundColor: {
        dark: "#131217",
      },
    },
  },
  plugins: [],
};
