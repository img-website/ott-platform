const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/components/(autocomplete|avatar|badge|button|card|dropdown|input|select|table|user|ripple|spinner|listbox|divider|popover|scroll-shadow|menu|checkbox|spacer).js"
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
