window.OC101_CONFIG = {
  siteName: "OC 101",
  tagline: "UM UNIVERSO, MUITAS HISTÓRIAS.",
  logo: "assets/logo-placeholder.svg",

  colors: {
    background: "#050505",
    sidebar: "#101113",
    sidebarBorder: "#222326",
    card: "#17181b",
    cardHover: "#202126",
    text: "#f4f4f4",
    mutedText: "#8f9298",
    accent: "#ff003c",
    searchBackground: "#17181b",
    whiteButton: "#f5f5f5",
    whiteButtonText: "#111111"
  },

  fontSizes: {
    xs: "10px",
    sm: "12px",
    md: "14px",
    lg: "18px",
    xl: "28px",
    xxl: "50px",
    sidebar: "14px",
    homeTitle: "52px",
    homeText: "13px",
    seasonTitle: "18px",
    seasonSynopsis: "12px",
    button: "12px"
  },

  menu: [
    { name: "Home", icon: "⌂", url: "index.html" },
    { name: "Temporadas", icon: "▤", url: "temporadas.html" },
    { name: "Sistema", icon: "◫", url: "sistema.html" }

    // Para adicionar outra página:
    // ,{ name: "Arquivo", icon: "□", url: "arquivo.html" }
  ],

  searchPages: [
    { name: "Home", url: "index.html" },
    { name: "Temporadas", url: "temporadas.html" },
    { name: "Sistema", url: "sistema.html" },
    { name: "Manual", url: "manual.html" },
    { name: "Atributos", url: "atributos.html" },
    { name: "Perks", url: "perks.html" },
    { name: "Temporada 01", url: "temporadas/temporada-01/index.html" },
    { name: "Fichário — Temporada 01", url: "temporadas/temporada-01/fichario.html" },
    { name: "Capítulos — Temporada 01", url: "temporadas/temporada-01/capitulos.html" },
    { name: "Arquivos — Temporada 01", url: "temporadas/temporada-01/arquivos.html" }
  ],

  home: {
    eyebrow: "OC 101",
    title: "OC 101",
    paragraph1: "OC 101 é um RPG de universo original, construído por uma comunidade que valoriza boas histórias, personagens marcantes e escolhas que importam.",
    paragraph2: "Aqui, cada temporada é um novo capítulo. Um mundo vivo, em constante evolução, onde suas decisões ajudam a moldar o futuro.",
    facts: [
      { label: "GÊNERO", value: "RPG de universo original" },
      { label: "FOCO", value: "História, personagens, comunidade" },
      { label: "TEMPORADAS", value: "Mundos em constante evolução" }
    ],
    footerLinks: [
      { name: "Discord", url: "https://discord.com", icon: "◉" },
      { name: "Fórum", url: "https://example.com", icon: "□" }
    ]
  },


  manualPage: {
    label: "MANUAL DE CAMPO",
    markerColor: "#ffffff",
    background: "#050505",
    text: "#f0f0f0",
    mutedText: "#9a9a9a",
    line: "rgba(255,255,255,.14)",
    topics: [
      {
        title: "EFEITO BORBOLETA",
        subtitle: "Escolhas pequenas podem alterar acontecimentos futuros.",
        icon: "assets/manual-topic-01.svg",
        body: "Edite este texto para explicar como decisões, ações e consequências funcionam dentro do RPG. Este bloco pode ser tão curto ou detalhado quanto você quiser."
      },
      {
        title: "ROLAGEM DE DADOS",
        subtitle: "Como resolver situações incertas durante as cenas.",
        icon: "assets/manual-topic-02.svg",
        body: "Use este espaço para explicar dados, resultados, sucessos, falhas, dificuldades, modificadores e qualquer outra regra relacionada às rolagens."
      },
      {
        title: "JOGABILIDADE",
        subtitle: "Estrutura geral das interações e da narrativa.",
        icon: "assets/manual-topic-03.svg",
        body: "Aqui você pode descrever o fluxo das cenas, como os jogadores interagem com narrações, decisões, missões, consequências e progressão."
      },
      {
        title: "REGRAS GERAIS",
        subtitle: "Informações complementares do sistema central.",
        icon: "assets/manual-topic-04.svg",
        body: "Este quarto bloco é totalmente opcional e editável. Você pode remover, duplicar ou transformar os tópicos diretamente no site-config.js."
      }
    ]
  },

  systemPage: {
    background: "#050505",
    cardBackground: "#080808",
    cardBorder: "rgba(255,255,255,.18)",
    cardHoverBorder: "rgba(255,255,255,.55)",
    cards: [
      { key: "manual", image: "assets/system-manual.svg", url: "manual.html", ariaLabel: "Manual" },
      { key: "atributos", image: "assets/system-atributos.svg", url: "atributos.html", ariaLabel: "Atributos" },
      { key: "perks", image: "assets/system-perks.svg", url: "perks.html", ariaLabel: "Perks" }
    ]
  },

  seasonsPage: {
    label: "Seasons",
    topIcons: [
      { symbol: "♟", title: "Símbolo editável 1" },
      { symbol: "A", title: "Símbolo editável 2" }
    ]
  },

  seasons: [
    {
      id: "temporada-01",
      title: "Season I",
      synopsis: "The beginning of a journey through unknown worlds.",
      image: "assets/season-01.svg",
      url: "temporadas/temporada-01/index.html"
    },
    {
      id: "temporada-02",
      title: "Season II",
      synopsis: "New realities emerge from familiar shadows.",
      image: "assets/season-02.svg",
      url: "#"
    },
    {
      id: "temporada-03",
      title: "Season III",
      synopsis: "Deeper connections across infinite possibilities.",
      image: "assets/season-03.svg",
      url: "#"
    },
    {
      id: "temporada-04",
      title: "Season IV",
      synopsis: "Choices reshape everything we know.",
      image: "assets/season-04.svg",
      url: "#"
    }
  ]
};
