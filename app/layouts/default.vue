<template>
  <div class="font-normal font-[Inter_Variable] w-full prose-neutral dark:prose-invert">
    <div>
      <navbar />
      <div class="m-a lg:prose lt-md:px-4">
        <slot />
        <div class="h-8" />
        <cd />
      </div>
    </div>
  </div>
</template>
