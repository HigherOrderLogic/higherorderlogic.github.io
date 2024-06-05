<template>
  <main>
    <content-doc>
      <template #default="{ doc }">
        <template v-if="$route.params.slug">
        <prose-h1 id="title" class="blog-title">
        {{ doc.title }}
      </prose-h1>
      <div class="blog-data">
        {{ `${useFormattedDate(doc.date)} · ${doc.readTime}` }}
      </div>
    </template>
      <content-renderer :value="doc" />
      </template>
      <template #not-found>
        <content-not-found />
      </template>
    </content-doc>
  </main>
</template>

<style lang="scss">
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
