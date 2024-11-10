/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "soft-blue": "#A3D5FF",
        "light-gray": "#F3F4F6",
        "therapist-lavander": "#E6E6FA",
        box: "#FFF9E6",
        "sage-50": "#f7f9f8",
        "ivory-50": "#faf9f5",
        "muted-clay": "#D9CAB1",
        "light-olive": "#D3C7A1",
        "moss-green": "#8A9A5B",
        services: "#9ccccb",

        "Sage-green": "#B7D8C3",
        "deep-sageGreen": "#4A7C59",
        "muted-sageGreen": "#B2AC88",
        "warm-yellow": "#FFF5C1",
        "Soft-peach": "#FFDAC1",
        "forest-green": "#182D09",
        "warmth-biege": "#F0E68C",
        "light-biege": " #F5F5DC",
        "soft-coral": "#F0A897",
        "text-main": "#FFFFF4",
        "text-body": "#2F4F4F",
        "ebony-headings": "#1C2833",
        "btn-color": "#D2691E",
        "btn-hover": "#008080",
        "sage-green": "#4A6650",
        "burnt-sienna": "#E07A5F",
        "light-beige": "#F2E9E4",
        "dark-slate": "#333333",
        "soft-sage-green": "#A3B18A",
        "forest-green": "#2F4F4F",
      },

      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #F0E68C, #90EE90)", // Replace with khaki and lightgreen hex values
      },

      margin: {
        "80vh": "80vh",
        "60vh": "60vh",
        "95vh": "95vh",
      },

      fontFamily: {
        italic: ["Italic"],
        heading: ["Merriweather", "serif"],
        body: ["Open Sans", "sans-serif"],
        button: ["Montserrat", "sans-serif"],
        navbar: ["Raleway", "sans-serif"],
      },

      borderWidth: {
        "1px": "1px",
      },
      height: {
        108: "24rem",
        18: 18,
      },
      width: {
        180: "60rem",
        220: "70rem",
      },
      scale: {
        102: "1.02",
        85: "0.85",
      },
    },
  },
  plugins: [],
};
