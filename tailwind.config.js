/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bento-dark': '#161d2b',
        'bento-cyan': '#22d3ee',
        'bento-purple': '#a855f7',
        'bento-orange': '#f97316',
        'bento-blue': '#6366f1',
        'bento-green': '#10b981',
      },
    },
  },
  plugins: [],
}
