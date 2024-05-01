const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(autocomplete|avatar|badge|button|card|dropdown|input|select|user|ripple|spinner|listbox|divider|popover|scroll-shadow|menu).js"
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      'poppins': ['"Poppins", sans-serif'],
    }
  },
  plugins: [
    nextui(),
    require('autoprefixer')
  ],
};
