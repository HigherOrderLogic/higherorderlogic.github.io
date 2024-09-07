<template>
  <color-scheme placeholder="...">
    <button
      :class="[$colorMode.preference === 'light' ? 'i-mdi-weather-sunny' : 'i-mdi-weather-night']"
      @click="$colorMode.preference = $colorMode.preference === 'dark' ? 'light' : 'dark'"
    />
  </color-scheme>
</template>
