<template>
  <div class="font-normal font-[Inter_Variable] prose-neutral dark:prose-invert">
    <div>
      <navbar />
      <div class="mx-a lt-md:px-4 md:prose" :class="[$style.dashedLink, $style.noHeaderUnderline]">
        <slot />
        <div class="h-8" />
        <cd />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.dashedLink {
  a {
    --at-apply: 'underline-dashed underline-offset-3';
  }
}

.noHeaderUnderline {
  h1, h2, h3, h4, h5, h6 {
    a {
      --at-apply: 'no-underline'
    }
  }
}
</style>
