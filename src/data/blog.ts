import { getCollection, type CollectionEntry } from 'astro:content';

export { categories } from './categories';

export type Post = CollectionEntry<'blog'>;

export const categorySlug = (category: string) =>
  category.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, '-');

// Artigos publicados (sem rascunhos), do mais recente para o mais antigo.
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const postUrl = (post: Post) => `/blog/${post.id}/`;

export async function getPostsByTopic(slug: string) {
  return (await getPosts()).filter((p) => p.data.topics.includes(slug));
}

export function readingTime(post: Post) {
  const words = (post.body ?? '').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min de leitura`;
}

export const formatDate = (date: Date) =>
  date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
