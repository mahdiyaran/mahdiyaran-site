/** @type {import('tailwindcss').Config}*/
import generateColors, {customColorSafelistPattern} from './generateColors.js'


const config = {
  content: [
      "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  plugins: [
    require('flowbite/plugin'),
    require('flowbite-typography')
  ]
};
module.exports = config;
