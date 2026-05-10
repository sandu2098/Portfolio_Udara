/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}','./src/components/**/*.{js,ts,jsx,tsx,mdx}','./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: { display: ['var(--font-display)','serif'], body: ['var(--font-body)','sans-serif'], mono: ['var(--font-mono)','monospace'] },
      animation: { 'float': 'float 6s ease-in-out infinite' },
      keyframes: { float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } } },
    },
  },
  plugins: [],
};
