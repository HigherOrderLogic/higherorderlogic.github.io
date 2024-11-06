<template>
  <div class="w-full font-normal font-[Inter_Variable] prose-neutral dark:prose-invert">
    <div>
      <navbar />
      <div class="mx-a lt-md:px-4 md:prose" :class="[$style.dashed_link, $style.no_header_underline]">
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

.no_header_underline {
  h1, h2, h3, h4, h5, h6 {
    a {
      --at-apply: 'no-underline'
    }
  }
}
</style>
