/** @type {import('tailwindcss').Config} */
module.exports = {
  
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
      fontFamily: {
        nidus: ["nidus", "sans-serif"],
        blanka: ["blanka", "sans-serif"],
      },

      screens: {
      
        'mdy' : {'max': '1023px'},
        'mdx' : '1024px',
        'mdt': { 'raw': '(max-height: 760px)' },
        'mdxx':'1500px',
        'r':'1135px'
      }
    },
  },
  plugins: [],
};
