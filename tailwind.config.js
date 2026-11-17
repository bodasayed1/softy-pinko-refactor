const spacing = Object.fromEntries(
  Array.from({ length: 601 }, (_, i) => [i, `${i}px`])
)

module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    spacing,
    container: {
      center: true,
      padding: '12px',
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1320px',
      },
    },
    extend: {
      colors: {
        main: '#8261ee',
        accent: '#ff589e',
        muted: '#777',
        line: '#ddd',
        ink: '#333',
        mist: '#f2f2fe',
        body: '#212529',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
        header: '40px',
      },
      boxShadow: {
        soft: '0 2px 48px 0 rgb(0 0 0 / 10%)',
      },
      backgroundImage: {
        brand: 'linear-gradient(127deg, #a759d1 0%, #8261ee 91%)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease',
      },
    },
  },
  plugins: [],
}
