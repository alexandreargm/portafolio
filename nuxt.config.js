export default {
  env: {
    baseUrl: process.env.BASE_URL || 'https://alexandreargibay.me',
  },
  server: {
    port: 80, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  render: {
    static: {
      setHeaders (res) {
        res.setHeader('Cache-control', 'max-age=31536000')
      }
    }
  },
  head: {
    htmlAttrs: {
      lang: 'es',
    },
    title: 'Alexandre Argibay / Desarrollador Web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Alexandre Argibay es un desarrollador web con estancia en Torrevieja, Alicante especializado en la creación de aplicaciones web intuitivas con personalidad e integrados en back-ends modernos y eficientes.' },
      { name: 'msapplication-TileColor', content: '#00186e' },
      { name: 'msapplication-config', content: 'https://alexandreargibay.me/favicon/browserconfig.xml' },
      { name: 'theme-color', content: '#00186e' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#00186e' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff0' },
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
    // Doc: https://github.com/phegman/v-scroll-lock
    '~/plugins/v-scroll-lock'
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
    extend (config, ctx) {
    },
    postcss: {
      syntax: 'postcss-scss',
      plugins: {
        'postcss-css-variables': { preserve: 'computed' },
        'cssnano': { preset: 'default' } // disabled in dev mode
      }
    }
  }
}