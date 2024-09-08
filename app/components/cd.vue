<template>
  <template v-if="$route.path !== '/'">
    <nuxt-link :to="$route.path.split('/').slice(0, -1).join('/') || '/'">
      cd ..
    </nuxt-link>
  </template>
</template>
