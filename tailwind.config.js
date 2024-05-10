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
        // Add more custom colors as needed
      },
    },
  },
  
  
  }