export default {
  env: {
    baseUrl: process.env.BASE_URL || 'https://alexandreargibay.me'
  },
  server: {
    port: 80, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  render: {
    static: {
      setHeaders (res) {
        res.setHeader('Cache-control', 'no-cache')
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
      { name: 'theme-color', content: '#00186e' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#00186e' }
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
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Doc: https://github.com/arash16/nuxt-ssr-cache
    'nuxt-ssr-cache',
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
  },
  cache: {
    // if you're serving multiple host names (with differing
    // results) from the same server, set this option to true.
    // (cache keys will be prefixed by your host name)
    // if your server is behind a reverse-proxy, please use
    // express or whatever else that uses 'X-Forwarded-Host'
    // header field to provide req.hostname (actual host name)
    useHostPrefix: false,
    pages: [
      // these are prefixes of pages that need to be cached
      // if you want to cache all pages, just include '/'
      '/',
    ],
    
    key(route, context) {
      // custom function to return cache key, when used previous
      // properties (useHostPrefix, pages) are ignored. return 
      // falsy value to bypass the cache
    },

    store: {
      type: 'memory',

      // maximum number of pages to store in memory
      // if limit is reached, least recently used page
      // is removed.
      max: 100,

      // number of seconds to store this page in cache
      ttl: 60,
    }
  }
}