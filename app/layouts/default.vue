<template>
  <div class="w-full font-normal font-[Inter_Variable] prose-neutral dark:prose-invert">
    <div>
      <navbar />
      <div class="m-a lt-md:px-4 lg:prose" :class="[$style.dashed_link]">
        <slot />
        <div class="h-8" />
        <cd />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.dashed_link {
  a {
  --at-apply: "underline-dashed hover:underline-solid"
}
}
</style>
