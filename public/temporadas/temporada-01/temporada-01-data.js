window.SEASON_01_CONFIG = {
  // ===== IDENTIDADE =====
  seasonNumber: "TEMPORADA 01",
  title: "NOME DA TEMPORADA",
  eyebrow: "TEMPORADA 01",
  poster: "assets/poster-placeholder.svg",

  // ===== SINOPSE =====
  synopsis: [
    "Uma cidade marcada por segredos. Pessoas comuns presas em uma teia de acontecimentos que ninguém consegue explicar. No centro de tudo, um mistério que conecta vidas, lugares e verdades há muito enterradas.",
    "Nesta temporada, acompanhamos um grupo de indivíduos cujos caminhos se cruzam quando o passado volta a assombrar o presente, revelando que nada é realmente o que parece."
  ],

  // ===== LINKS / MENU SUPERIOR =====
  backUrl: "../../temporadas.html",
  backLabel: "OC 101",
  menu: [
    { name: "MAIN", url: "index.html" },
    { name: "EPISÓDIOS", url: "episodios.html" },
    { name: "PERSONAGENS", url: "personagens.html" },
    { name: "PISTAS", url: "pistas.html" },
    { name: "MAPA", url: "mapa.html" },
    { name: "SISTEMA", url: "sistema.html" },
    { name: "ARQUIVOS", url: "arquivos.html" }
  ],

  // ===== CORES / FUNDO =====
  // Você pode alterar tudo aqui sem mexer no CSS.
  theme: {
    background: "#171719",
    backgroundImage: "", // Ex.: "url('assets/background.webp')"
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundOverlay: "rgba(5, 5, 7, 0.28)",

    text: "#f1f1f3",
    mutedText: "#a2a2a8",
    accent: "#ff5964",

    navBackground: "rgba(18, 18, 20, 0.56)",
    navBorder: "rgba(255,255,255,0.13)",
    navActiveBackground: "rgba(255,255,255,0.07)",

    seasonButtonBackground: "#f2f2f2",
    seasonButtonText: "#111113",
    posterBorder: "rgba(255,255,255,0.18)"
  },

  // ===== TAMANHOS =====
  sizes: {
    navText: "11px",
    eyebrow: "11px",
    title: "43px",
    body: "17px",
    seasonButton: "11px",
    posterWidth: "37vw",
    contentMaxWidth: "560px"
  }
};
