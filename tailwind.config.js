/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'handwritten': ['Caveat', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'heart-rise': 'heart-rise 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        'heart-rise': {
          '0%': { transform: 'translateY(0px) scale(1)', opacity: '1' },
          '100%': { transform: 'translateY(-100px) scale(0.5)', opacity: '0' },
        },
      },
      backgroundImage: {
        'pastel-gradient': 'linear-gradient(135deg, #fce4ec 0%, #e1bee7 25%, #ffe0b2 50%, #f8bbd0 75%, #e8f5e8 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,240,245,0.9) 100%)',
      },
      boxShadow: {
        'soft': '0 10px 40px rgba(0,0,0,0.1)',
        'glow': '0 0 30px rgba(255,182,193,0.5)',
        'romantic': '0 8px 32px rgba(255,182,193,0.3)',
      },
    },
  },
  plugins: [],
}
