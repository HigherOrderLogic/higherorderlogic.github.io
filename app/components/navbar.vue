<template>
  <header class="block p-4 flex">
    <nuxt-link to="/">
      <img
        src="https://github.com/HigherOrderLogic.png"
        alt="Logo"
        class="border-rd-full w-12 h-a dark:(outline-white outline-solid)"
      >
    </nuxt-link>
    <div class="w-full" />
    <nav class="flex flex-items-center gap-4 text-[--un-prose-links]">
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
