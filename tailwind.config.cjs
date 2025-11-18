module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,html}',
    './pages/**/*.{js,ts,jsx,tsx,html}',
    './components/**/*.{js,ts,jsx,tsx,html}',
    './src/**/*.{js,ts,jsx,tsx,html}'
  ],
  theme: {
extend: {
colors: {
brand: {
50: '#f5f7ff',
100: '#ebefff',
200: '#cbd6ff',
500: '#3b82f6'
}
},
keyframes: {
shimmer: {
'0%': { backgroundPosition: '-200% 0' },
'100%': { backgroundPosition: '200% 0' }
}
},
animation: {
shimmer: 'shimmer 1.6s linear infinite'
}
}
},
plugins: [],
};
