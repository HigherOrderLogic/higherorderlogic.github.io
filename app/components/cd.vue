<template>
  <nuxt-link v-if="$route.path !== '/'" :to="$route.path.split('/').slice(0, -1).join('/') || '/'">
    cd ..
  </nuxt-link>
</template>
