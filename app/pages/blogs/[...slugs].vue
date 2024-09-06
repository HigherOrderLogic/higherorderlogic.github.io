<script setup lang="ts">
const ContentNotFound = defineComponent({
  setup() {
    throw createError({
      statusCode: 404,
      statusMessage: 'No blog found',
    })
  },
})
</script>

<template>
  <content-doc>
    <template #not-found>
      <!-- @vue-expect-error component for throwing errors only -->
      <content-not-found />
    </template>
  </content-doc>
</template>
