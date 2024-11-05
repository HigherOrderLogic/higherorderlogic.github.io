<script setup lang="ts">
const colorMode = useColorMode()

function changePreference() {
  if (colorMode.preference === 'light') {
    colorMode.preference = 'dark'
  } else if (colorMode.preference === 'dark') {
    colorMode.preference = 'system'
  } else {
    colorMode.preference = 'light'
  }
}
</script>

<template>
  <color-scheme>
    <button
      class="font-size-[24px]"
      :class="[$colorMode.preference === 'system' ? 'i-mdi-monitor' : 'i-mdi-weather-sunny dark:i-mdi-weather-night']"
      @click="changePreference"
    />
    <template #placeholder>
      <div class="i-mdi-weather-sunny font-size-[24px]" />
    </template>
  </color-scheme>
</template>
