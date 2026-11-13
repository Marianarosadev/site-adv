import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domínio definitivo (registrar no Registro.br antes de publicar).
export default defineConfig({
  site: 'https://giovannacabral.adv.br',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  // CSS embutido no HTML: uma requisição a menos antes de mostrar a página.
  build: { inlineStylesheets: 'always' },
});
