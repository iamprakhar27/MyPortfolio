/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-blue': '0 10px 20px -5px rgba(59, 130, 246, 0.5)',
        'custom-green': '0 10px 20px -5px rgba(34, 197, 94, 0.5)',
        'custom-red': '0 10px 20px -5px rgba(239, 68, 68, 0.5)',
        'custom-yellow': '0 10px 20px -5px rgba(234, 179, 8, 0.5)',
        'custom-purple': '0 10px 20px -5px rgba(168, 85, 247, 0.5)',
        'custom-pink': '0 10px 20px -5px rgba(236, 72, 153, 0.5)',
        'custom-indigo': '0 10px 20px -5px rgba(99, 102, 241, 0.5)',
        'custom-teal': '0 10px 20px -5px rgba(20, 184, 166, 0.5)',
        'custom-gray': '0 10px 20px -5px rgba(75, 85, 99, 0.5)',
        'custom-orange': '0 10px 20px -5px rgba(251, 146, 60, 0.5)',
        'custom-light-blue': '0 15px 30px -5px rgba(56, 189, 248, 0.7)',
        'custom-cyan': '0 15px 30px -5px rgba(6, 182, 212, 0.7)',
        'custom-lime': '0 15px 30px -5px rgba(132, 204, 22, 0.7)',
        'custom-emerald': '0 15px 30px -5px rgba(16, 185, 129, 0.7)',
        'custom-amber': '0 15px 30px -5px rgba(245, 158, 11, 0.7)',
        'custom-fuchsia': '0 15px 30px -5px rgba(217, 70, 239, 0.7)',
        'custom-rose': '0 15px 30px -5px rgba(244, 63, 94, 0.7)',
        'custom-sky': '0 15px 30px -5px rgba(14, 165, 233, 0.7)',
        'custom-slate': '0 15px 30px -5px rgba(100, 116, 139, 0.7)',
        'custom-warm-gray': '0 15px 30px -5px rgba(120, 113, 108, 0.7)',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    
    },
  },
  plugins: [],
}

