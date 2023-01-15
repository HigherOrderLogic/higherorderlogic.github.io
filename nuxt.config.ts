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

  modules: ["~/modules/content-transformers", "@nuxt/content", "@unocss/nuxt"],

  content: { documentDriven: true },

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

  typescript: { strict: true },
});
