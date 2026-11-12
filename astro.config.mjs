import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domínio provisório: trocar quando o domínio definitivo for registrado.
export default defineConfig({
  site: 'https://giovannacabral.adv.br',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});
