# OC 101

Projeto base do site OC 101 para GitHub + Cloudflare Workers.

## Estrutura atual

- `public/index.html` — Home minimalista
- `public/temporadas.html` — índice de temporadas
- `public/site-config.js` — identidade, cores, tamanhos, links e temporadas
- `public/style.css` — layout global
- `public/app.js` — menu, busca, configurações e temporadas
- `public/temporadas/temporada-01/index.html` — placeholder do primeiro microsite

## Editar rapidamente

Abra `public/site-config.js` para alterar:

- nome do site
- frase abaixo do nome
- logo
- cores
- tamanhos de fonte
- links do menu
- Discord / Fórum
- ícones do topo da página Seasons
- pôsteres, títulos e sinopses das temporadas

## Cloudflare

1. Suba todos os arquivos para o GitHub.
2. Conecte o repositório ao Cloudflare.
3. O diretório de assets estáticos é `./public`.

Para desenvolvimento local:

```bash
npm install
npm run dev
```
