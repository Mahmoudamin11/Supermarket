/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.js"],
  theme: {
    extend: {
      bottom: {
        '100%': '100%'
      },
      padding: {
        '50': '200px'
      },
      width: {
        '3full': '300%',
        '2full': '200%',
        '1/3screen': 'calc(100vw / 3)',
        '1/2screen': 'calc(100vw / 2)',
        '10/12screen': 'calc(100vw * (10 / 12))',
        '5/12screen': 'calc(100vw * 0.4166667)'
      },
      height: {
        '3full': "300%"
      },
      boxShadow: {
        'cardShadow': '0px 0px 8px #DDD',
      },
      inset: {
        '1/10': "10%",
        'away': '1000%'
      },
      margin: {
        '5%': '5%'
      },
      borderWidth: {
        '1': '1px'
      },
      padding: {
        '34': '136px'
      },
      borderColor: {
        "acc6": "var(--acc6)"
      },
      colors: {
        "main": "var(--main)",
        "acc1": "var(--acc1)",
        "acc2": "var(--acc2)",
        "acc3": "var(--acc3)",
        "titlesColor": 'var(--titles)',
        "psColor": "var(--psColor)",
        "background": "var(--background)",
        "errorColor": "var(--error)",
      },
      dropShadow: {
        "icons-shadow": "var(--icons-shadow)",
      },
      fontFamily: {
        kanit: 'Kanit, sans-serif'
      },
      translate: {
        '2full': '200%'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

