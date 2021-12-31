module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cstm: {
          primary: {
            pink: 'hsl(322, 100%, 66%)',
            'light-pink': 'hsl(321, 100%, 78%)',
            'light-red': 'hsl(0, 100%, 63%)',
          },
          neutral: {
            'dark-cyan': 'hsl(192, 100%, 9%)',
            'pale-blue': 'hsl(207, 100%, 98%)',
          },
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
    },
  },
  plugins: [],
}
