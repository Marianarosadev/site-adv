# Site: Dra. Giovanna Cabral

Site estático em [Astro](https://astro.build). Planejamento em `estrutura.md`, `conteudo.md` e `identidade-visual.md`.

## Comandos

```bash
npm install      # instalar dependências
npm run dev      # desenvolvimento em http://localhost:4321
npm run build    # gerar o site final em dist/
npm run preview  # testar o build localmente
```

## Onde editar

| O quê | Arquivo |
|---|---|
| Telefone, e-mail, horário, temas, FAQ, etapas | `src/data/site.ts` |
| Textos e ordem das seções da Home | `src/pages/index.astro` |
| Cabeçalho, rodapé, metatags | `src/layouts/Layout.astro` |
| Cores, fontes e layout | `src/styles/global.css` (cores no topo, em `:root`) |
| Fotos | `src/assets/` (otimizadas automaticamente no build). A foto do topo também gera uma prévia desfocada e um pré-carregamento, em `src/pages/index.astro` |
| Domínio | `astro.config.mjs` e `public/robots.txt` |

## Publicação

A pasta `dist/` gerada por `npm run build` pode ser hospedada em qualquer serviço de site estático (Netlify, Vercel, Cloudflare Pages).

## Pendências antes de publicar

- Confirmar o domínio (hoje provisório: `giovannacabral.adv.br`).
- Confirmar o horário de atendimento e a abrangência do atendimento online.
- Ao instalar Google Ads ou Analytics: adicionar o aviso de cookies e registrar o clique no WhatsApp como conversão.
