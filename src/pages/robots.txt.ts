import type { APIRoute } from 'astro';

// robots.txt gerado no build: no site oficial libera tudo e aponta o sitemap;
// na homologação (SITE_ENV=homologacao) bloqueia todos os buscadores.
const homologacao = process.env.SITE_ENV === 'homologacao';

export const GET: APIRoute = ({ site }) => {
  const body = homologacao
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
