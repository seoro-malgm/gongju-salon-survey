require('dotenv').config()
// import head from "./utils/head.json";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  target: 'static',
  head: {
    title: '공주살롱 조사',
    htmlAttrs: {
      lang: 'ko-KR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'title',
        name: 'title',
        property: 'title',
        content: '공주살롱 조사',
      },
      {
        hid: 'description',
        name: 'description',
        property: 'description',
        content: '',
      },
      {
        name: 'keyword',
        content: '',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: '/og-image.png',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: '공주살롱 조사',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content: '',
      },
      {
        name: 'og:url',
        property: 'og:url',
        content: '',
      },
      {
        name: 'og:type',
        property: 'og:type',
        content: '',
      },
      {
        name: 'og:site_name',
        property: 'og:site_name',
        content: '공주살롱 조사',
      },
      {
        name: 'msapplication-TileImage',
        property: 'msapplication-TileImage',
        content: '/ms-icon-144x144.png',
      },
      {
        name: 'msapplication-TileColor',
        property: 'msapplication-TileColor',
        content: '#2f318e',
      },
      {
        name: 'theme-color',
        property: 'theme-color',
        content: '#2f318e',
      },
      {
        name: 'twitter:card',
        hid: 'twitter:card',
        content: '/og-image.png',
      },
      {
        property: 'twitter:domain',
        content: 'seoro-malgm.studio',
      },
      // {
      //   property: "twitter:url",
      //   hid: "twitter:url",
      //   content: "https://seoro-malgm.studio",
      // },
      {
        name: 'twitter:title',
        hid: 'twitter:title',
        content: '공주살롱 조사',
      },
      // {
      //   name: "twitter:description",
      //   hid: "twitter:description",
      //   content: "UI/UX, Branding, Calligraphy, Graphic",
      // },
      {
        name: 'twitter:image',
        hid: 'twitter:image',
        content: '/og-image.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    ],
  },
  css: [
    {
      src: '~/assets/styles/index.scss',
      lang: 'scss',
    },
  ],

  plugins: [
    { src: '~/plugins/firebase.js' },
    { src: '~/plugins/carousel.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  },
  // buildDir: 'client',
  generate: {
    dir: 'dist',
    fallback: true,
  },
  styleResources: {
    scss: ['~/assets/styles/variables.scss'],
  },
  dev: process.env.NODE_ENV === 'development',

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue2-editor/nuxt',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // BoardItemaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  // 로딩바
  loading: {
    color: '#2f318e',
  },
  // 환경변수
  env: {
    API_KEY: process.env.API_KEY,
    PROJECT_ID: process.env.PROJECT_ID,
    APP_ID: process.env.APP_ID,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    DATABASE_URL: process.env.DATABASE_URL,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
  },
}
