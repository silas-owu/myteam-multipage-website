 /** @type {import('tailwindcss').Config} */
 const plugin = require('tailwindcss/plugin');
 
export default {
   content: [
    './homepage/*.js',
    '*.html'],
 /*  options:{
    paths:{
      fonts:[
        './public/Fonts/Livvic-Bold.ttf',
        './public/Fonts/Livvic-SemiBold.ttf'
      ]
    }
  } */

  theme: {
    fontFamily:{
      'livvic' :['Livvic', 'sans-serif']
    },
    screens: {
      'mobile': {'min':'320px','max':'427px'},
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
    extend: {
    },
  },

  plugins: [
    plugin(function({addVariant}){
      addVariant("children", "&>*")
    })
  ]
}