import {
  presetIcons,
  presetUno,
  transformerDirectives,
} from 'unocss'

export default defineNuxtConfig({
  extends: '@nuxt-themes/typography',

  appConfig: { githubUsername: 'HigherOrderLogic', altName: 'Horu' },

  css: ['~/assets/css/index.scss'],

  modules: ['@nuxt/content', '@nuxtjs/color-mode', '@unocss/nuxt'],

  colorMode: { classSuffix: '' },

  unocss: {
    components: false,
    presets: [
      presetUno(),
      presetIcons(),
    ],
    transformers: [transformerDirectives()],
  },

  ssr: false,

  experimental: { typedPages: true },

  typescript: { strict: true },
})
