<template>
  <color-scheme>
    <button
      class="i-mdi-weather-sunny dark:i-mdi-weather-night font-size-[24px]"
      @click="$colorMode.preference = $colorMode.preference === 'dark' ? 'light' : 'dark'"
    />
    <template #placeholder>
      <div class="i-mdi-weather-sunny font-size-[24px]" />
    </template>
  </color-scheme>
</template>
