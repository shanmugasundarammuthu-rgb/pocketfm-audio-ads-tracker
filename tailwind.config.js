/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#6B46C1',
        secondary: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        info: '#3B82F6',
        'cpi-testing': '#3B82F6',
        'scaling-testing': '#8B5CF6',
        'succeeded': '#10B981',
        'failed': '#EF4444',
        'pending': '#6B7280'
      }
    }
  },
  plugins: []
}
