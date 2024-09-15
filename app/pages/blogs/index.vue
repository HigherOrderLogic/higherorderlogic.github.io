<script setup lang="ts">
useHead({ title: 'Blogs' })
</script>

<template>
  <div>
    <h1>Blogs</h1>
    <content-list v-slot="{ list }" path="/blogs">
      <template v-for="blog in list.sort((a, b) => +new Date(a.date) - +new Date(b.date))" :key="blog._path">
        <h3>
          <nuxt-link :to="blog._path">
            {{ blog.title }}
          </nuxt-link>
        </h3>
        <p>
          {{ useDateFormat(blog.date, 'DD MMM YYYY') }}
        </p>
      </template>
    </content-list>
  </div>
</template>
