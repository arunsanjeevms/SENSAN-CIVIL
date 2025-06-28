/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        // Keep existing Tailwind colors for compatibility
        gray: {
          800: '#1E1E1E',
          900: '#0F0F0F',
        },
        yellow: {
          400: '#F4C430',
          500: '#D4AF37',
        },
        // Add theme-aware colors
        primary: 'var(--bg-color)',
        secondary: 'var(--bg-secondary)',
        'text-primary': 'var(--text-color)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'accent-color': 'var(--accent-color)',
        'accent-hover': 'var(--accent-hover)',
        'card-color': 'var(--card-color)',
        'card-hover': 'var(--card-hover)',
        'border-primary': 'var(--border-color)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};