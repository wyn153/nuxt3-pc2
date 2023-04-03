// https://nuxt.com/docs/api/configuration/nuxt-config
const lifecycle = process.env.npm_lifecycle_event;

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      title: "房屋医院",
      link: [
        //     // <link rel="stylesheet" href="https://myawesome-lib.css">
        //   { rel: 'stylesheet', href: 'https://awesome-lib.css' }
      ],
      script: [
        {
          type: "text/javascript",
          src: "https://map.qq.com/api/js?v=2.exp&key=GSVBZ-BPBKP-KI6DT-LHDIX-C6P75-ZPBZK",
        },
        // // <script src="https://myawesome-lib.js"></script>
        // { src: "https://awesome-lib.js" },
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        {
          children: "JavaScript is required",
        },
      ],
    },
  },
  typescript: {
    shim: false,
    strict: true,
    // typeCheck: true,
  },

  // You can define the CSS files/modules/libraries you want to set globally (included in every page).
  css: ["~/public/css/index.scss"],

  // An array of nuxt app plugins.
  plugins: ["~/plugins/array"],

  modules: ["@pinia/nuxt", "nuxt-windicss", "@element-plus/nuxt"],

  pinia: {
    autoImports: ["defineStore", "storeToRefs"],
  },
  build: {
    transpile: lifecycle === "build" ? ["element-plus"] : [],
  },
  buildModules: ["nuxt-windicss", "@pinia/nuxt"],
  runtimeConfig: {
    // The private keys which are only available within server-side
    // apiSecret: "123",
    // Keys within public, will be also exposed to the client-side
    public: {
      API_URL: process.env.API_URL,
    },
  },
  target: "static",
  generate: {
    routes: ["/"],
  },
});
