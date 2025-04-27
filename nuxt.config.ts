const NAME = 'Horu'
const DESCRIPTION = 'Horu\'s personal website'

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  typescript: {
    strict: true,
  },

  css: ['@fontsource-variable/inter'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: NAME,
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'apple-mobile-web-app-title', content: NAME },
        { name: 'application-name', content: NAME },
        { name: 'description', content: DESCRIPTION },
        { name: 'twitter:title', content: NAME },
        { name: 'twitter:description', content: DESCRIPTION },
        { name: 'twitter:card', content: 'summary' },
        { property: 'og:title', content: NAME },
        { property: 'og:description', content: DESCRIPTION },
        { property: 'og:type', content: 'website' },
      ],
      link: [{ rel: 'manifest', href: '/manifest.webmanifest' }],
    },
  },

  ssr: false,

  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@unocss/nuxt',
    '@nuxt/eslint',
    '@vite-pwa/nuxt',
  ],

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

  pwa: {
    devOptions: { enabled: true },
    registerType: 'autoUpdate',
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,woff2}'],
    },
    manifest: {
      background_color: '#FFF',
      theme_color: '#000',
      display: 'minimal-ui',
      lang: 'en',
      orientation: 'portrait-primary',
      shortcuts: [{ name: 'Blogs', url: '/blogs' }],
    },
  },

  compatibilityDate: '2025-05-17',
})
