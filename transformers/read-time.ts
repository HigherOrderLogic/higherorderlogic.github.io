// @ts-expect-error
import { defineTransformer } from "@nuxt/content/transformers/utils";
import readingTime from "reading-time";

import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

interface ContentExcerpt {
  type: "text" | "element" | "root";
  value?: string;
  children?: ContentExcerpt[];
}

function parseContentExcerpt(child: ContentExcerpt) {
  if (child.type != "text") return "";
  let content = "";
  if (child.value) {
    content += child.value;
  }
  if (child.children && child.children.length > 0) {
    content += parseContentExcerpt(child);
  }
  return content;
}

export default defineTransformer({
  name: "read-time",
  extensions: [".md"],
  transform(content: ParsedContent) {
    content.readTime = "1 min read";
    if (content.excerpt) {
      const { minutes: readTime } = readingTime(
        parseContentExcerpt(content.excerpt),
      );
      if (readTime > 1) {
        content.readTime = `${readTime} mins read`;
      }
    }
    return content;
  },
});

declare module "@nuxt/content/dist/runtime/types" {
  interface ParsedContentInternalMeta {
    readTime: string;
  }
}
