// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@hypernym/nuxt-gsap'],
  gsap: {
    // Module options
    composables: true,
    provide:false,
    extraPlugins:{
      scrollTrigger:true,
      scrollTo: true
    }
  },
  css:["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styling.scss" as *;'
        }
      }
    }
  },
  

})
