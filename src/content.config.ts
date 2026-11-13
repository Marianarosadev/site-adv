import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categories } from './data/categories';

// Artigos do blog: um arquivo .md por artigo em src/content/blog/. O nome do arquivo vira o endereço.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum(categories),
    audience: z.enum(['trabalhador', 'empresa']).default('trabalhador'),
    // Rascunhos não aparecem no site.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
