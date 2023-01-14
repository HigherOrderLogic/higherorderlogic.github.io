import { presetIcons, presetUno, transformerDirectives } from "unocss";

export default defineNuxtConfig({
  extends: "@nuxt-themes/typography",

  css: ["~/assets/css/index.scss"],

  modules: ["@nuxt/content", "@unocss/nuxt"],

  content: { documentDriven: true },

  unocss: {
    components: false,
    presets: [presetIcons(), presetUno()],
    transformers: [transformerDirectives()],
  },

  typescript: { strict: true },
});
