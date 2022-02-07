export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tfile',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href:"https://fonts.googleapis.com"
      },
      {
        rel: 'stylesheet',
        href:"https://fonts.gstatic.com"
      },
      {
        rel: 'stylesheet',
        href:"https://fonts.googleapis.com/css2?family=Overlock&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      }
    ],
    script: [
      {
        src: "https://use.fontawesome.com/173d746ef5.js"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-typer.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    icons: [
      'windowRestore'
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  axios: {
    baseURL: 'http://tfilestorage.herokuapp.com/api'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-typer']
  },
  
  loading: 
  {
    color: 'blue',
    height: '5px'
  },

  auth:{
    strategies: {
      local:{
        endpoints: {
          login: { url : '/login', method: 'post', propertyName: 'access_token'},
          logout: { url : '/logout', method: 'post', propertyName: 'access_token'},
          user: { url : '/user', method: 'get', propertyName: 'access_token'},
        },
        tokenType: 'Bearer'
      }
    }
  }
}
