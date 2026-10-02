export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Archivo', 'Inter', 'system-ui', 'sans-serif'],
      },

      colors: {
        navy: {
          950: '#04101F',
          900: '#071729',
          800: '#0B2039',
          700: '#122E4E',
          600: '#1B3E64',
          500: '#2A5480',
        },

        brand: {
          50: '#EEF5FD',
          100: '#D8E8FA',
          200: '#AFCFF4',
          300: '#7FB0EB',
          400: '#4E90E0',
          500: '#1E6FD9',
          600: '#1558B0',
          700: '#104488',
        },

        solar: {
          50: '#EEF7F1',
          400: '#48A473',
          500: '#2E8B57',
          600: '#236B44',
        },
      },

      maxWidth: {
        content: '1280px',
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },

  plugins: [],
};