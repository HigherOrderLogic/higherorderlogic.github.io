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
    <template #default="{ doc }">
      <h1>{{ doc.title }}</h1>
      <content-renderer :value="doc" />
    </template>
    <template #not-found>
      <!-- @vue-expect-error component for throwing errors only -->
      <content-not-found />
    </template>
  </content-doc>
</template>
