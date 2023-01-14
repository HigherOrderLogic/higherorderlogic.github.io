<script lang="ts" setup>
import type { IBlog } from "~/types";

const route = useRoute();

const { data: pageData } = useAsyncData("is-blog-page", async () => {
  const matches = route.path.match(/^\/blog\/[a-z\-#]+\/?$/) || [];
  const isBlogPage = (matches.length || 0) > 0;
  let blogTitle = "";
  if (isBlogPage) {
    blogTitle = (await queryContent<IBlog>(route.path).findOne()).title || "";
  }
  return {
    isBlogPage,
    blogTitle,
  };
});
</script>

<template>
  <div>
    <prose-h1
      v-if="pageData && pageData.isBlogPage && pageData.blogTitle.length > 0"
      id="title"
      >{{ pageData.blogTitle }}</prose-h1
    >
    <slot />
    <prose-a
      v-if="route.path !== '/'"
      :to="route.path.split('/').slice(0, -1).join('/') || '/'"
      >cd ..</prose-a
    >
  </div>
</template>
