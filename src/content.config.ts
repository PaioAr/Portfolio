import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image(),
      tags: z.array(z.string()),
      repo: z.string().url().optional(),
      demo: z.string().url().optional(),
      featured: z.boolean().default(false),
      date: z.coerce.date(),
    }),
});

export const collections = { projects };