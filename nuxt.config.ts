import {
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from "unocss";

export default defineNuxtConfig({
  extends: "@nuxt-themes/typography",

  css: ["~/assets/css/index.scss"],

  modules: ["@nuxt/content", "@unocss/nuxt"],

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
