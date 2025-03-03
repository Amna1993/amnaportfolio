/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",  // Adjust the paths to your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animate'), // Make sure this plugin is added if you want to use animations
  ],
};
