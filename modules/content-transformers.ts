import { defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
  meta: { name: "content-transformers" },
  setup(_, nuxt) {
    nuxt.options.nitro.externals = nuxt.options.nitro.externals || {};
    nuxt.options.nitro.externals.inline =
      nuxt.options.nitro.externals.inline || [];
    nuxt.options.nitro.externals.inline.push("~/transformers/read-time");

    nuxt.hook("content:context", (contentContext) => {
      contentContext.transformers.push("~/transformers/read-time");
    });
  },
});
