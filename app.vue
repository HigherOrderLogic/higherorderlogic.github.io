<template>
  <div class="outer-app-container">
    <navbar />
    <div class="page-container">
      <nuxt-page />
    </div>
  </div>
</template>

<style>
h1 {
  --at-apply: "dark:c-gray";
}

a {
  --at-apply: "transition-200";
}

.outer-app-conatainer {
  --at-apply: "font-sans";
}

.page-container {
  --at-apply: "min-h-screen max-w-[80ch] m-a py-[4rem] px-[2rem]";
}
</style>
