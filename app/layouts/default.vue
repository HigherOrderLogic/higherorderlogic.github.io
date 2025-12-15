<template>
  <div class="font-normal font-[Inter_Variable]">
    <div>
      <navbar />
      <div
        class="mx-a prose prose-neutral lt-md:px-4 dark:prose-invert"
        :class="[$style.linkUnderline, $style.noHeaderUnderline]"
      >
        <slot />
        <div class="h-8" />
        <cd />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.linkUnderline {
  a {
    --at-apply: 'underline hover:underline-dashed underline-offset-2';
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
