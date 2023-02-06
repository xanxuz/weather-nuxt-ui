import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    theme: {
      // options: { customProperties: true },
      themes: {
        light: {
          colors: {
            primary: '#FB8C00',
            secondary: '#FFC269',
            tertiary: '#FFF3E0',
            accent: '#EF6C00',
          }
        },
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
