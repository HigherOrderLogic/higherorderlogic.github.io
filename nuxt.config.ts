import {
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from "unocss";

export default defineNuxtConfig({
  extends: "@nuxt-themes/typography",

  appConfig: { githubUsername: "HigherOrderLogic", altName: "Horu" },

  css: ["~/assets/css/index.scss"],

  modules: ["@nuxt/content", "@nuxtjs/color-mode", "@unocss/nuxt"],

  content: { documentDriven: true },

  colorMode: { classSuffix: "" },

  unocss: {
    components: false,
    presets: [
      presetIcons(),
      presetUno(),
      presetWebFonts({
        fonts: {
          sans: "Open Sans",
        },
      }),
    ],
    transformers: [transformerDirectives()],
  },

  experimental: { typedPages: true },

  typescript: { strict: true },
});
