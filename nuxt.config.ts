export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  typescript: {
    strict: true,
  },

  css: ['@fontsource-variable/inter', '~/assets/css/index.scss'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Horu.me',
      htmlAttrs: { lang: 'en' },
    },
  },

  modules: ['@nuxt/content', '@nuxtjs/color-mode', '@unocss/nuxt', '@nuxt/image', '@nuxt/eslint', '@vueuse/nuxt'],

  devtools: {
    enabled: true,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  unocss: {
    preflight: true,
    components: false,
  },
})
