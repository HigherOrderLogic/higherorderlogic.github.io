import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blogs: defineCollection({
      type: 'page',
      source: 'blogs/**',
      schema: z.object({
        date: z.string(),
      }),
    }),
  },
})
