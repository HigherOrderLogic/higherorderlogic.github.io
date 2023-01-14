<template>
  <div class="navbar">
    <nuxt-link to="/"><p>Home</p></nuxt-link>
    <nuxt-link to="/blog"><p>Blog</p></nuxt-link>
    <nuxt-link
      href="https://github.com/HigherOrderLogic"
      target="_blank"
      rel="noopener">
      <div class="i-mdi-github" />
    </nuxt-link>
    <button
      @click="
        $colorMode.preference =
          $colorMode.preference === 'dark' ? 'light' : 'dark'
      ">
      <div
        v-if="$colorMode.preference === 'light'"
        class="i-mdi-weather-sunny" />
      <div v-else class="i-mdi-weather-night" />
    </button>
  </div>
</template>

<style lang="scss">
.navbar {
  --at-apply: "fixed flex top-[10px] right-[10px] content-center justify-center z-1000 backdrop-blur-[20px]";

  a,
  button {
    --at-apply: "flex items-center cursor-pointer c-gray-600 dark:c-gray-400 p-x-[0.5rem] p-y-[0.5rem]";

    &:hover {
      --at-apply: "c-gray-900 dark:c-gray-100";
    }
  }

  div {
    --at-apply: "text-5";
  }

  p {
    --at-apply: "text-4 font-bold";
  }
}
</style>
