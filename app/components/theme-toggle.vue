<template>
  <color-scheme placeholder="...">
    <button
      class="i-mdi-weather-sunny dark:i-mdi-weather-night font-size-[24px]"
      @click="$colorMode.preference = $colorMode.preference === 'dark' ? 'light' : 'dark'"
    />
  </color-scheme>
</template>
