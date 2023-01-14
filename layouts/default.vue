<script lang="ts" setup>
import type { IBlog } from "~/types";

const route = useRoute();

const { data: blogData } = useAsyncData("is-blog-page", async () => {
  const matches = route.path.match(/^\/blog\/[a-z\-#]+\/?$/) || [];
  let blog = null;
  if ((matches.length || 0) > 0) {
    blog = await queryContent<IBlog>(route.path).findOne();
  }
  return blog;
});
</script>

<template>
  <div>
    <template v-if="blogData && (blogData.title.length || 0) > 0"
      ><prose-h1 id="title" class="blog-title">{{ blogData.title }}</prose-h1>
      <div class="blog-date">{{ useDate(blogData.date) }}</div>
    </template>
    <slot />
    <prose-a
      v-if="route.path !== '/'"
      :to="route.path.split('/').slice(0, -1).join('/') || '/'"
      >cd ..</prose-a
    >
  </div>
</template>

<style lang="scss">
.blog-title {
  --at-apply: "!mb-0";

  + .blog-date {
    --at-apply: "font-semibold opacity-50";
  }
}
</style>
