 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["*.{html,js}",
            "index.html"],
  theme: {
    screens: {
      'mobile': {'min':'320px'  ,'max':'427px'},
      'tablet': {'min':'427px','max':'770px'},
      // 'laptop': {'min':'771px','max':'1024px'}

    },
    colors:{
      //primary colors
      'midnight-green': '#014E56',
      'sacramento': '#012f34',
      'deep-jungle-green': '#004047',
      'light-coral':'#F67E7E',
      'dark-green': '#002529',
      'rapture-blue':'#79c8c7',
      'police-blue':'#2c6269',
    },
    fontFamily:{'livvic':['Livvic', 'sans-serif']},
    extend: {
    },
  },
  plugins: []
}