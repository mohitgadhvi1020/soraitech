/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Premium Color Palette
        navy: {
          50: '#f0f4f8',
          100: '#d9e7f2',
          200: '#b3cfe5',
          300: '#8db7d8',
          400: '#679fcb',
          500: '#4187be',
          600: '#2c5aa0',
          700: '#1a365d', // Deep Navy Blue - Primary
          800: '#152a47',
          900: '#0f1e31',
        },
        charcoal: {
          50: '#f7fafc',
          100: '#edf2f7',
          200: '#e2e8f0',
          300: '#cbd5e0',
          400: '#a0aec0',
          500: '#718096',
          600: '#4a5568',
          700: '#2d3748', // Rich Charcoal - Main text
          800: '#1a202c',
          900: '#171923',
        },
        professional: {
          50: '#ebf8ff',
          100: '#bee3f8',
          200: '#90cdf4',
          300: '#63b3ed',
          400: '#4299e1',
          500: '#3182ce', // Professional Blue - Links/Active
          600: '#2b77cb',
          700: '#2c5282',
          800: '#2a4365',
          900: '#1a365d',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#d69e2e', // Warm Gold - CTA highlights
          600: '#b7791f',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        },
        // Keep existing for backward compatibility
        primary: "#1a365d", // Deep Navy Blue
        secondary: "#3182ce", // Professional Blue
        dark: "#2d3748", // Rich Charcoal
      },
      fontFamily: {
        'sans': ['Inter', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
        'heading': ['Poppins', 'Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subsection': ['1.875rem', { lineHeight: '1.3' }],
        'card-title': ['1.5rem', { lineHeight: '1.4' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'premium': '0 10px 25px rgba(26, 54, 93, 0.15)',
        'premium-lg': '0 20px 40px rgba(26, 54, 93, 0.15)',
        'glow': '0 0 20px rgba(49, 130, 206, 0.4)',
        'card-hover': '0 8px 25px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
} 