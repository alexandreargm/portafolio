export default {
  server: {
    port: 80, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    // Set html lang atribute
    htmlAttrs: {
      lang: 'es',
    },
    title: 'Alexandre Argibay | Desarrollador Web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Alexandre Argibay es un desarrollador web con estancia en Torrevieja, Alicante especializado en la creación de aplicaciones web intuitivas con personalidad e integrados en back-ends modernos y eficientes.' },
      { name: 'theme-color', content: '#00186E' },
      { property: 'og:title', content: 'Página personal de Alexandre Argibay' },
      { property: 'og:description', content: 'Soy un desarrollador web con estancia en Torrevieja, Alicante especializado en la creación de aplicaciones web intuitivas con personalidad e integrados en back-ends modernos y eficientes.' },
      { property: 'og:image', content: '/page_preview.png' },
      { property: 'og:url', content: '/' },
      { property: 'og:site_name', content: 'Alexandre Argibay | Desarrollador Web' },
      { name="twitter:image:alt", content: 'Page preview' },
      { name="twitter:site", content: '@AlexARGM' },
      { name="twitter:card", content: 'summary_large_image' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#0ff' },
  /*
  ** Global CSS
  */
 css: [
  '@/assets/css/reboot.css',
  '@/assets/css/typo.css',
  '@/assets/css/theme.scss',
],
  /*
    Global SCSS
  */
  styleResources: {
    scss: [
    '@/assets/css/variables.scss',
    '@/assets/css/mixins.scss',
    ],
   },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
