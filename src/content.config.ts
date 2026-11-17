import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categories } from './data/categories';

// Artigos do blog: um arquivo .md por artigo em src/content/blog/. O nome do arquivo vira o endereço.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    // Título da aba e do Google, quando o título do artigo passa de ~45 caracteres. Sem ele, usa o título.
    seoTitle: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum(categories),
    audience: z.enum(['trabalhador', 'empresa']).default('trabalhador'),
    // Casos de /trabalhista/<slug>/ em que o artigo aparece como leitura relacionada.
    topics: z.array(z.string()).default([]),
    // Foto ilustrativa (opcional). Sem ela, o artigo usa a capa tipográfica na cor do tema.
    cover: z
      .object({
        src: image(),
        alt: z.string(),
        credit: z.string(),
      })
      .optional(),
    // Rascunhos não aparecem no site.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
