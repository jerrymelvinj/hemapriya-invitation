/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FBF8F2',
          200: '#F5EFE6',
          300: '#EFE8DC',
          400: '#DFD5C4',
        },
        terracotta: {
          DEFAULT: '#DF7A4D',
          light: '#E89066',
          dark: '#C86237',
        },
        antiqueGold: {
          DEFAULT: '#C29B62',
          light: '#D4B07D',
          dark: '#A68045',
        },
        charcoal: {
          DEFAULT: '#2A241E',
          soft: '#5C4F43',
          muted: '#8A7C6D',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['Jost', 'sans-serif'],
        script: ['"Pinyon Script"', 'cursive'],
      },
    },
  },
  plugins: [],
};
