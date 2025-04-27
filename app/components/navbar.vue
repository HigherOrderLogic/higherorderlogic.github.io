<template>
  <header class="block flex px-4 py-2">
    <nuxt-link to="/">
      <img
        src="https://github.com/HigherOrderLogic.png"
        alt="Logo"
        class="h-a w-12 border-rd-full dark:(outline-white outline-solid)"
      >
    </nuxt-link>
    <div class="w-full" />
    <nav class="flex gap-4 flex-items-center text-[--un-prose-links]">
      <nuxt-link to="/blogs">
        Blogs
      </nuxt-link>
      <nuxt-link to="https://github.com/HigherOrderLogic">
        <div class="i-mdi-github font-size-[24px]" />
      </nuxt-link>
      <theme-toggle />
    </nav>
  </header>
</template>
