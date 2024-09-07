<template>
  <content-list v-slot="{ list }" path="/blogs">
    <div v-for="blog in list" :key="blog._path">
      <h2>{{ blog.title }}</h2>
      <p>{{ blog.date }}</p>
    </div>
  </content-list>
</template>
