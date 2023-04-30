 /** @type {import('tailwindcss').Config} */
 const plugin = require('tailwindcss/plugin');
 
export default {
   content: [
    './homepage/*.js',
    './aboutpage/*.js',
    './contact/*.js',
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
      'mobile': {'min':'200px','max':'427px'},
      'tablet': {'min':'427px','max':'768px'},
      'laptop': {'min':'770px'}
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
      'onahau':'#C4FFFE'
    },
    extend: {
    },
  },

  plugins: [
    plugin(function({addVariant,addComponents,addBase}){
      addVariant("children", "&>*")


      //The addComponent method doesn't
      // include the style from the 
      //index.html/aboutpage.html or the parent pages
      addComponents({
        '.teamscontainer':{
          display:'flex',
          flexDirection:'column',
          width:'20.4375rem',
          height:'15.8125rem',
          paddingLeft:'auto',
          paddingRight:'auto'
        },

        '.avatar':{
            width:'6rem',
            height:'6rem',
            marginLeft:'auto',
            marginRight:'auto',
            marginTop:'2rem',
            border:'2px solid #C4FFFE',
            borderRadius:'100%'
        },

        '.avatarText':{
          fontWeight:'bold',
          fontSize:'1.125rem',
          lineHeight:'1.75rem',
          // textColor:'#79c8c7'
        },

        '.avatarplus':{
          width:'3.5rem',
          height:'3.5rem',
          backgroundColor:'#F67E7E',
          borderRadius:'100%',
          marginLeft:'auto',
          marginRight:'auto',
          marginTop:'-1.75rem',
          display:'flex',
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center'
        },

        '.nav-mobile':{
            marginTop: '1rem',
            justifyContent: 'space-between'
        },

        '.logosize-mobile':{
          width:'8rem',
          height:'2rem',
          cursor: 'pointer'
        },

        '.contact-mobile':{
          width:'21.9375rem',
          display:'flex',
          flexDirection:'column',
          rowGap:'0',
          marginTop:'4rem'
        },

        // Not used yet
        '.contactinner-mobile':{
          width:'12.89rem',
          display:'flex',
          flexDirection:'column',
          rowGap:'1rem',
          marginLeft:'5rem',
          marginTop:'1rem'
        },

        '.footer-mobile':{
          paddingLeft: '1.7rem',
          paddingRight: '1.7rem',
          width:'20.4375rem',
          // height:'18.875rem',
          display: 'flex',
          flexDirection:'column',
          rowGap: '1.2rem'
        },

        '.footerSection1-mobile':{
            display:'flex',
            flexDirection:'column',
            rowGap: '1.5rem'
        },

        '.footerSection2-mobile':{
          height:'6.25rem',
          textAlign:'center',
          rowGap: '0.5rem'
        },

        '.footerSection3-mobile':{
          width:'17.9375rem',
          display:'flex',
          flexDirection: 'column',
          rowGap:'1rem',
          marginTop:'1rem'
        },

        '.footerSvgElement-mobile':{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-evenly'
        }

      },['mobile'])

    })
  ]
}
// flex flex-row mobile:mt-[1rem] tablet:items-center mobile:justify-between