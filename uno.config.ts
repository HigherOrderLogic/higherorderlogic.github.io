import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetIcons(),
    presetTypography(),
    presetWind3({
      dark: {
        dark: '.dark-mode',
        light: '.light-mode',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  shortcuts: [
    ['transition-base', 'transition-all duration-200 ease-in-out'],
  ],
})
