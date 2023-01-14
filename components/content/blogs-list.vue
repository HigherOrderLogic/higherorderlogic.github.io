<script lang="ts" setup>
import { IBlog } from "~/types";

const { data: blogs } = await useAsyncData(
  "blogs-list",
  async () => {
    return (await queryContent<IBlog>("/blog/").find()).sort(
      (a, b) => +new Date(b.date) - +new Date(a.date),
    );
  },
  { default: () => [] },
);

function getYear(a: string) {
  const year = new Date(a).getFullYear();
  return Number.isNaN(year) ? 1990 : year;
}
</script>

<template>
  <prose-ul>
    <prose-p v-if="blogs === null || !blogs.length"
      >Nothing to find here.</prose-p
    >
    <template v-for="(blog, idx) in blogs" v-else :key="blog.path">
      <prose-h2
        v-if="idx === 0 || getYear(blog.date) != getYear(blogs[idx - 1].date)"
        :id="getYear(blog.date).toString()"
        class="year-index">
        {{ getYear(blog.date) }}
      </prose-h2>
      <prose-li class="blog-index"
        ><prose-a :href="blog._path" class="blog-title">{{
          blog.title
        }}</prose-a>
        <div class="blog-date">{{ useDate(blog.date) }}</div></prose-li
      >
    </template>
  </prose-ul>
</template>

<style lang="scss">
.year-index {
  --at-apply: "!mb-0 !font-bold";
}

.blog-index {
  * {
    --at-apply: "transition-200";
  }

  .blog-title {
    --at-apply: "text-5";

    + .blog-date {
      --at-apply: "font-semibold opacity-50";
    }
  }
}
</style>
