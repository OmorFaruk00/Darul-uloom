require('dotenv').config() 

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Darul uloom',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'},      
      {rel: 'stylesheet', id: 'bootstrap-style', href: '/css/bootstrap.min.css'},      
      {rel: 'stylesheet', id: 'font-awesome-style', href: '/css/font-awesome.min.css'},
      {rel: 'stylesheet',  href: '/css/style.css'},


      
    ],

    script: [
      
      {src: '/js/jquery.min.js', defer: true},  
      {src: '/js/main.js', defer: true},
      {src: '/js/bootstrap.min.js', defer: true},
      {src: '/js/bootstrap.bundle.min.js', defer: true},
      

      
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [   
   '@/assets/css/main.css',
  
  
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/owl.js', ssr: false},
    {src: '~/plugins/vue-toaster.js', ssr: false},
    {src: '~/plugins/fontawesome.js', ssr: false},
    // { src: '~/plugins/google-translate.js', mode: 'client' }
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      }
    }
   
  },
  axios: {   
    baseURL: 'https://api.darululoom-islamia.org/api',
    credentials: true
  },


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
  
}
