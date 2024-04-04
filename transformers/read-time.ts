import { defineTransformer } from '@nuxt/content/transformers/utils'
import readingTime from 'reading-time'

import type {
  MarkdownNode,
  MarkdownRoot,
  ParsedContent,
} from '@nuxt/content/dist/runtime/types'

function parseMarkdownNode(node: MarkdownNode) {
  let content = ''
  if (node.type === 'text') {
    content += node.value || ''
  }

  for (const child of node.children || []) {
    content += parseMarkdownNode(child)
  }

  return content
}

function parseContentExcerpt(excerpt: MarkdownRoot) {
  let content = ''
  for (const node of excerpt.children) {
    content += parseMarkdownNode(node)
  }

  return content
}

export default defineTransformer({
  name: 'read-time',
  extensions: ['.md'],
  transform(content: ParsedContent) {
    content.readTime = '1 min read'
    if (content.excerpt) {
      const { minutes: readTime } = readingTime(
        parseContentExcerpt(content.excerpt),
      )
      content.readTime = `${Math.max(Math.ceil(readTime), 1)} mins read`
    }
    return content
  },
})

declare module '@nuxt/content/dist/runtime/types' {
  interface ParsedContentInternalMeta {
    readTime: string
  }
}
