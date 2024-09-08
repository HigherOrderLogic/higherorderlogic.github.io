<script setup lang="ts">
useHead({ title: 'Blogs' })
</script>

<template>
  <div>
    <h1>Blogs</h1>
    <content-list v-slot="{ list }" path="/blogs">
      <div v-for="blog in list.sort((a, b) => +new Date(a.date) - +new Date(b.date))" :key="blog._path">
        <h2>
          <nuxt-link :to="blog._path">
            {{ blog.title }}
          </nuxt-link>
        </h2>
        <p class="pl-4">
          {{ useDateFormat(blog.date, 'DD MMM YYYY') }}
        </p>
      </div>
    </content-list>
  </div>
</template>
