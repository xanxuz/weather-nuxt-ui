// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint'
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
        }
      ]
    },
  },

  css: [ 'vuetify/styles', '@mdi/font/css/materialdesignicons.min.css' ],

  modules: [
    async (options, nuxt) => {
      // @ts-ignore
      // currently this will lead to a type error, but hopefully will be fixed soon #justBetaThings
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
        vuetify()
      ))
    },
  ],

  imports: {
    dirs: [
      // Automatic import of pinia stores
      'stores',

      // Allow auto import of nested composables
      'composables/**'
    ],
  },

  build: {
    transpile: [ 'vuetify' ],
  },

  vite: {
    plugins: [
      eslintPlugin(),
    ],
    define: {
      'process.env.DEBUG': false,
    },
    ssr: {
      noExternal: [ 'vuetify' ], // add the vuetify vite plugin
    },
  },
})
