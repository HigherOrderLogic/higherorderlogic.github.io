<template>
  <header class="block flex px-4 py-2 prose-neutral dark:prose-invert">
    <nuxt-link to="/">
      <img
        src="https://github.com/HigherOrderLogic.png"
        alt="Logo"
        class="h-a w-12 border-rd-full dark:(outline-width-2 outline-white outline-solid)"
      >
    </nuxt-link>
    <div class="w-full" />
    <nav class="flex gap-4 flex-items-center text-[--un-prose-links]">
      <nuxt-link class="font-medium" to="/blogs">
        Blogs
      </nuxt-link>
      <nuxt-link to="https://github.com/HigherOrderLogic">
        <div class="i-ri-github-line font-size-[24px]" />
      </nuxt-link>
      <theme-toggle />
    </nav>
  </header>
</template>
