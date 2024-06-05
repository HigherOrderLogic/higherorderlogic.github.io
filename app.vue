<template>
  <div class="prose">
    <navbar />
    <div class="page-container">
      <nuxt-page />
    </div>
    <nuxt-link
      v-if="$route.path !== '/'"
      class="cd-btn"
      :to="$route.path.split('/').slice(0, -1).join('/') || '/'"
    >
      cd ..
    </nuxt-link>
  </div>
</template>

<style>
h1 {
  --at-apply: "dark:c-gray";
}

a {
  --at-apply: "transition-200";
}

.page-container {
  --at-apply: "min-h-screen max-w-[80ch] m-a py-[4rem] px-[2rem]";
}

.cd-btn {
  --at-apply: "dark:c-gray transition-200";
}
</style>
