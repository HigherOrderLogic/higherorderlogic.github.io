import type { ParsedContentInternalMeta } from "@nuxt/content/dist/runtime/types";

export interface IBlog extends ParsedContentInternalMeta {
  title: string;
  description: string;
  date: string;
  path: string;
}
