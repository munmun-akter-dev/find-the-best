


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        "Urbanist": ["Urbanist", "sans-serif"],
        "Fraunces": ["Fraunces", "serif"],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    container: {
      center: true, // Centers the container by default
      padding: '15rem', // Adds padding to the container
      screens: {
        sm: '100%', // Full width on small screens
        md: '768px', // Custom width on medium screens
        lg: '1024px', // Custom width on large screens
        xl: '1920px',  // Custom width on extra-large screens
        // Custom width on 2x-large screens
      },


    },

    backgroundImage: {
      "hero-img": "url(/images/hero_bg_img.png)"
    }


  },
  plugins: [
    require('daisyui'),
  ],
};
