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
  try {
    const year = new Date(a).getFullYear();
    return Number.isNaN(year) ? 1990 : year;
  } catch {
    return 1990;
  }
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
        :id="getYear(blog.date).toString()">
        {{ getYear(blog.date) }}
      </prose-h2>
      <prose-li
        ><prose-a :href="blog._path">{{ blog.title }}</prose-a></prose-li
      >
    </template>
  </prose-ul>
</template>
