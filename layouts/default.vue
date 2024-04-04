<script lang="ts" setup>
import type { IBlog } from '~/types'

const route = useRoute()

const { data: blog } = useAsyncData('is-blog-page', async () => {
  const matches = route.path.match(/^\/blog\/[a-z\-#]+\/?$/) || []
  let blog = null
  if ((matches.length || 0) > 0) {
    blog = await queryContent<IBlog>(route.path).findOne()
  }

  return blog
})
</script>

<template>
  <div>
    <template v-if="blog && (blog.title.length || 0) > 0">
      <prose-h1 id="title" class="blog-title">
        {{ blog.title }}
      </prose-h1>
      <div class="blog-data">
        {{ `${useFormattedDate(blog.date)} · ${blog.readTime}` }}
      </div>
    </template>
    <slot />
    <prose-a
      v-if="route.path !== '/'"
      class="cd-btn"
      :to="route.path.split('/').slice(0, -1).join('/') || '/'"
    >
      cd ..
    </prose-a>
  </div>
</template>

<style lang="scss">
.cd-btn {
  --at-apply: "dark:c-gray transition-200";
}

.blog-title {
  --at-apply: "!mb-0 dark:c-gray";

  + .blog-data {
    --at-apply: "font-semibold opacity-50 dark:c-white";
    + * {
      --at-apply: "dark:c-gray";
      + * {
        --at-apply: "dark:c-gray";
      }
    }
  }
}
</style>
