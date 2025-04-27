<script setup lang="ts">
useSeoMeta({ title: 'Blogs' })

const { data: blogsList } = await useAsyncData('blogsList', () =>
  queryCollection('blogs').select('id', 'path', 'title', 'date').order('date', 'DESC').all())
</script>

<template>
  <div>
    <h1 class="pb-4">
      Blogs
    </h1>
    <div class="divide-y divide-gray divide-op-20 divide-dashed dark:(divide-zinc divide-op-25)">
      <template v-if="blogsList?.length">
        <template
          v-for="blog in blogsList"
          :key="blog.id"
        >
          <div class="flex flex-col items-start py-2 md:flex-row">
            <h3 class="my-2 flex-auto md:m-a">
              <nuxt-link :to="blog.path">
                {{ blog.title }}
              </nuxt-link>
            </h3>
            <p class="my-0 op-70 md:(my-a ml-12 min-w-fit)">
              {{ useDateFormat(blog.date, 'DD MMMM YYYY') }}
            </p>
          </div>
        </template>
      </template>
      <template v-else>
        <div class="w-full text-center text-size-lg">
          There is nothing here...
        </div>
      </template>
    </div>
  </div>
</template>
