<script setup lang="ts">
const route = useRoute()
const toPath = computed(() => route.path.split('/').slice(0, -1).join('/') || '/')
</script>

<template>
  <nuxt-link v-if="$route.path !== '/'" :to="toPath">
    cd ..
  </nuxt-link>
</template>
