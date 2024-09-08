<script setup lang="ts">
const ContentNotFound = defineComponent({
  setup() {
    showError({
      statusCode: 404,
      statusMessage: 'Blog not found',
    })
  },
})
</script>

<template>
  <content-doc>
    <template #default="{ doc }">
      <h1>{{ doc.title }}</h1>
      <p>{{ useDateFormat(doc.date, 'ddd, DD MMM YYYY') }}</p>
      <content-renderer :value="doc" />
    </template>
    <template #not-found>
      <content-not-found />
    </template>
  </content-doc>
</template>
