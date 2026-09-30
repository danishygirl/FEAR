# OC 101 — Site atual

Projeto estático preparado para GitHub + Cloudflare Workers/Assets.

## Estrutura principal

- `public/index.html` — Home
- `public/temporadas.html` — índice de Seasons
- `public/site-config.js` — configurações globais do OC 101
- `public/temporadas/temporada-01/index.html` — Main da Temporada 01
- `public/temporadas/temporada-01/temporada-01-data.js` — **conteúdo, cores, fundos, menus e tamanhos da Temporada 01**
- `public/temporadas/temporada-01/temporada-01.css` — estilo da Temporada 01
- `public/temporadas/temporada-01/temporada-01.js` — montagem dinâmica da temporada

## Temporada 01

A Main já possui:

- menu superior transparente;
- botão de retorno para Seasons;
- botões editáveis para Main, Episódios, Personagens, Pistas, Mapa, Sistema e Arquivos;
- pôster editável;
- número, título e sinopse editáveis;
- background em cor ou imagem editável;
- cores, transparências e tamanhos de fonte editáveis;
- páginas placeholder conectadas aos botões, evitando links quebrados enquanto cada área é construída.

### Para trocar o pôster

Substitua `public/temporadas/temporada-01/assets/poster-placeholder.svg` ou mude a propriedade `poster` em `temporada-01-data.js`.

### Para trocar o fundo da Main

Em `temporada-01-data.js`, edite:

```js
background: "#171719",
backgroundImage: "",
backgroundOverlay: "rgba(5, 5, 7, 0.28)"
```

Exemplo com imagem:

```js
backgroundImage: "url('assets/background.webp')"
```

## Deploy

```bash
npm install
npm run deploy
```

## Temporada 01 — tema de dossiê/acampamento
A Main da Temporada 01 usa elementos editáveis em HTML/CSS (papéis, polaroids, ficha, carimbos e fotos). Edite textos, cores e caminhos de imagens em `public/temporadas/temporada-01/temporada-01-data.js`. As subpáginas atuais são Sistema, Fichário, Capítulos e Arquivos.
