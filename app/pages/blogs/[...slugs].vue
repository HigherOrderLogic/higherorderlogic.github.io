<script setup lang="ts">
import type { MarkdownNode, ParsedContent } from '@nuxt/content'

function parseNode(node: MarkdownNode): number {
  let wordCount = 0

  if (node.type === 'text' && node.value) {
    wordCount += node.value.split(' ').length
  }

  for (const child of node.children ?? []) {
    wordCount += parseNode(child)
  }

  return wordCount
}

function getWordCount(parsedContent: ParsedContent): number {
  let wordCount = 0

  if (parsedContent.body) {
    for (const child of parsedContent.body.children) {
      wordCount += parseNode(child)
    }
  }

  return wordCount
}

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
      <div class="pb-4">
        <h1>{{ doc.title }}</h1>
        <p class="op-70 divide-x *:px-2 first:*:pl-0">
          <span>{{ useDateFormat(doc.date, 'ddd, DD MMMM YYYY') }}</span>
          <span>{{ getWordCount(doc) }} words</span>
        </p>
      </div>
      <content-renderer :value="doc" />
    </template>
    <template #not-found>
      <content-not-found />
    </template>
  </content-doc>
</template>
