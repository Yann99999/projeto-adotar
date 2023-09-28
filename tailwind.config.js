/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'cyan-main': '#045F76',
        'green-main': '#2BA90E',
        'color-font-btn': '#20790B'
      },
      spacing:{
        'mobile': '320px',
        '30%': '30%',
      },
      backgroundImage: {
        'dog': "url('https://blog.cobasi.com.br/wp-content/webpc-passthru.php?src=https://blog.cobasi.com.br/wp-content/uploads/2021/07/Cachorro-rindo-aprenda-a-descobrir-isso-1.jpg.jpg&nocache=1')"
      },
      fontSize:{
        'font-md': '60px',
        'font-mobile': '30px',
        'font-list': '18px'
      },
      height:{
        '460px':'460px',
        '420px': '420px',
        '600px': '600px'
      },
      width:{
        '450px': '450px',
        '35vw': '35vw',
        '95vw': '95vw',
        '275px': '275px'
      },
      transitionDuration:{
        '5s':'.5s'
      }
    },
  },
  plugins: [],
}