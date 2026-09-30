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
    { name: "Temporadas", icon: "▤", url: "temporadas.html" }

    // Para adicionar outra página:
    // ,{ name: "Arquivo", icon: "□", url: "arquivo.html" }
  ],

  searchPages: [
    { name: "Home", url: "index.html" },
    { name: "Temporadas", url: "temporadas.html" },
    { name: "Temporada 01", url: "temporadas/temporada-01/index.html" },
    { name: "Sistema — Temporada 01", url: "temporadas/temporada-01/sistema.html" },
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
