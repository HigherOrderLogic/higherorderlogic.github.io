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
      :class="[$colorMode.preference === 'system' ? 'i-ri-macbook-line' : 'i-ri-sun-line dark:i-ri-moon-line']"
      @click="changePreference"
    />
    <template #placeholder>
      <div class="i-ri-sun-line font-size-[24px]" />
    </template>
  </color-scheme>
</template>
