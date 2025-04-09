/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Add your custom colors
      colors: {
        'playt-purple': '#6C63FF',
        'playt-yellow': '#FFDA63', // Using a slightly different yellow based on common palettes, adjust if needed
        // You can add shades if needed:
        // 'playt-purple-dark': '#5a50e0',
      },
      // Add Poppins to your font families
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], // Keep Inter as default sans
        poppins: ['var(--font-poppins)', 'sans-serif'], // Add Poppins
      },
      // Keep existing backgroundImage if needed, or remove if not used
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Keep existing keyframes/animations if you plan to reuse them,
      // otherwise, you can remove the old ones like float, fadeInUp etc.
      // from globals.css later.
      keyframes: {
         // ... potentially keep existing keyframes or add new ones ...
         fadeInUp: { // Example: Keep fadeInUp if reused
           'from': { opacity: 0, transform: 'translateY(20px)' },
           'to': { opacity: 1, transform: 'translateY(0)' },
         }
      },
      animation: {
         // ... potentially keep existing animations or add new ones ...
         'fade-in-up': 'fadeInUp 0.6s ease-out forwards', // Example
      }
    },
  },
  plugins: [],
}; 