#!/bin/bash

# Install dependencies
npm uninstall tailwindcss @tailwindcss/postcss
npm install -D tailwindcss@3 postcss autoprefixer
npm install

# Create Tailwind config
echo "/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3a86ff',
        secondary: '#8338ec',
        dark: '#0f172a',
        light: '#f8fafc',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-sora)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}" > tailwind.config.js

# Create PostCSS config
echo "module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}" > postcss.config.js

# Start the development server
npm run dev 