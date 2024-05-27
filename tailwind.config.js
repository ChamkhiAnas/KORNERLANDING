/** @type {import('tailwindcss').Config} */
export default {

  content: [
  
  "./components/**/*.{js,vue,ts}",
  
  "./layouts/**/*.vue",
  
  "./pages/**/*.vue",
  
  "./plugins/**/*.{js,ts}",
  
  "./app.vue",
  
  "./error.vue",
  
  ],
  theme: {
    extend: {
      colors: {
        kornerBackground: '#012714',
        textHoverColor:'#A9D9C1',
        primaryColor:'#012714',
        cardColor1:'#FFD1B8',
        cardColor2:'#F9D96F',
        cardColor3:'#FFA88C'


        // Add more custom colors as needed
      },
    },
  },
  
  
  }