<template>
  <div class="font-normal font-inter-variable w-full">
    <header class="block p-4 flex">
      <nuxt-link to="/">
        <img src="https://github.com/HigherOrderLogic.png" alt="Logo" class="border-rd-full w-12 h-12">
      </nuxt-link>
      <div class="w-full" />
      <nav class="flex flex-items-center gap-4">
        <nuxt-link to="/blogs">
          Blogs
        </nuxt-link>
        <theme-toggle />
      </nav>
    </header>
    <div class="prose m-a">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.font-inter-variable {
  font-family: "Inter Variable";
}
</style>
