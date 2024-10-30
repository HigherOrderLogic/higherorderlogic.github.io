<script setup lang="ts">
const { statusCode = 404, statusMessage = 'Page not found' } = useError().value ?? {}
</script>

<template>
  <nuxt-layout>
    <h1>
      {{ statusCode }}
    </h1>
    <p>
      {{ statusMessage }}
    </p>
  </nuxt-layout>
</template>
