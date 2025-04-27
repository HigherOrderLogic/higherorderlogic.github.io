<script lang="ts">
import { useDateFormat } from '@vueuse/core'

import type { MinimalNode } from '@nuxt/content'

const ContentNotFound = defineComponent({
  setup() {
    showError({
      statusCode: 404,
      statusMessage: 'Blog not found',
    })
  },
})
</script>

<script setup lang="ts">
function getWordCount(nodesList: MinimalNode[]): number {
  let wordCount = 0

  for (const node of nodesList) {
    if (Array.isArray(node)) {
      const [content, _data, ...childNode] = node
      wordCount += content.trim().split(/\s+/).length + getWordCount(childNode)
    } else {
      wordCount += node.trim().split(/\s+/).length
    }
  }

  return wordCount
}

const route = useRoute()

const { data: blog } = await useAsyncData(`blog-${route.path}`, () => queryCollection('blogs').path(route.path).first())
</script>

<template>
  <div>
    <template v-if="blog">
      <div class="pb-4">
        <h1>{{ blog.title }}</h1>
        <p class="op-70 divide-x *:pr-2 not-first:*:pl-2">
          <span>{{ useDateFormat(blog.date, 'ddd, DD MMMM YYYY') }}</span>
          <span>{{ getWordCount(blog.body.value) }} words</span>
        </p>
      </div>
      <content-renderer :value="blog" />
    </template>
    <template v-else>
      <content-not-found />
    </template>
  </div>
</template>
