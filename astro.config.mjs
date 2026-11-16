import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domínio definitivo (registrar no Registro.br antes de publicar).
export default defineConfig({
  site: 'https://giovannacabral.adv.br',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  // Só para o servidor local: aceita o endereço público do túnel localhost.run (*.lhr.life),
  // usado para mostrar o site rodando nesta máquina a alguém em outra rede. Não afeta o site publicado.
  server: { allowedHosts: ['.lhr.life'] },
  // CSS embutido no HTML: uma requisição a menos antes de mostrar a página.
  build: { inlineStylesheets: 'always' },
});
