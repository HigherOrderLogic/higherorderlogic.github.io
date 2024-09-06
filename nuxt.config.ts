export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  typescript: {
    strict: true,
  },

  css: ['@fontsource-variable/inter'],

  modules: ['@nuxt/content', '@nuxtjs/color-mode', '@unocss/nuxt', '@nuxt/image', '@nuxt/eslint'],

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

  colorMode: {
    classPrefix: '__',
  },
})
