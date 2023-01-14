<template>
  <div class="outer-container">
    <navbar />
    <div class="page-container">
      <nuxt-page />
    </div>
  </div>
</template>

<style>
.outer-conatainer {
  --at-apply: "font-sans";
}

.page-container {
  --at-apply: "min-h-screen max-w-[80ch] m-a py-[4rem] px-[2rem]";
}
</style>
