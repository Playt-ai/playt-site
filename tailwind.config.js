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
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideInFromTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' }
        },
        fadeInStagger: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in-left': 'slideInFromLeft 0.5s ease-out',
        'slide-in-right': 'slideInFromRight 0.5s ease-out',
        'slide-in-top': 'slideInFromTop 0.5s ease-out',
        'float': 'bounce 3s ease-in-out infinite',
        'fade-in-stagger': 'fadeInStagger 0.5s ease-out forwards'
      }
    },
  },
  plugins: [],
}; 