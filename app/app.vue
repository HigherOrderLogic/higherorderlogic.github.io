<template>
  <div class="prose font-normal font-inter-variable">
    <header class="block p-4 flex w-full">
      <img src="https://github.com/HigherOrderLogic.png" alt="Logo" class="border-rd-full w-12 h-12">
      <nav class="">
        <nuxt-link to="/blogs">
          Blogs
        </nuxt-link>
      </nav>
    </header>
    <nuxt-page />
  </div>
</template>

<style>
.font-inter-variable {
  font-family: "Inter Variable";
}
</style>
