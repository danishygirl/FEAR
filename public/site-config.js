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


  attributesPage: {
    background: "#050505",
    text: "#f2f2f2",
    mutedText: "#b1b1b1",
    line: "rgba(255,255,255,.14)",
    iconColor: "#f2f2f2",
    attributes: [
      {
        title: "Furtividade",
        icon: "assets/attr-furtividade.svg",
        defaultLevel: 1,
        summary: "Mover-se sem ser notado e agir com discrição.",
        levels: [
          { level: 0, effect: "Sem treino. Você tem dificuldade em se manter oculto ou agir com precisão em silêncio.", roll: "Role 1d6 puro em testes de furtividade." },
          { level: 1, effect: "Treino básico. Consegue se esconder ou se aproximar em situações simples.", roll: "Role 1d6 + 1 em testes de furtividade." },
          { level: 2, effect: "Treinado. Move-se sem ser notado na maioria das cenas e sabe explorar cobertura.", roll: "Role 1d6 + 2 em testes de furtividade." },
          { level: 3, effect: "Especialista. Extremamente discreto, difícil de detectar e eficiente em infiltrações.", roll: "Role 1d6 + 3 em testes de furtividade." }
        ]
      },
      {
        title: "Proficiência",
        icon: "assets/attr-proficiencia.svg",
        defaultLevel: 0,
        summary: "Lidar com instrumentos, kits, armas improvisadas e tarefas técnicas.",
        levels: [
          { level: 0, effect: "Sem prática. Seu uso de ferramentas é intuitivo e pouco confiável.", roll: "Role 1d6 puro em testes de proficiência." },
          { level: 1, effect: "Noções básicas. Você opera itens comuns sem muita dificuldade.", roll: "Role 1d6 + 1 em testes de proficiência." },
          { level: 2, effect: "Prático. Resolve tarefas mecânicas, médicas ou técnicas com consistência.", roll: "Role 1d6 + 2 em testes de proficiência." },
          { level: 3, effect: "Especialista. Adapta ferramentas, improvisa recursos e domina procedimentos complexos.", roll: "Role 1d6 + 3 em testes de proficiência." }
        ]
      },
      {
        title: "Vigor",
        icon: "assets/attr-vigor.svg",
        defaultLevel: 2,
        summary: "Resistência física, fôlego, recuperação e tolerância ao desgaste.",
        levels: [
          { level: 0, effect: "Baixa resistência. Você cansa cedo e sofre mais com desgaste físico.", roll: "Role 1d6 puro em testes de vigor." },
          { level: 1, effect: "Condição comum. Aguenta perseguições e esforços moderados.", roll: "Role 1d6 + 1 em testes de vigor." },
          { level: 2, effect: "Resistente. Suporta dor, corridas longas e cenas prolongadas de tensão.", roll: "Role 1d6 + 2 em testes de vigor." },
          { level: 3, effect: "Excepcional. Você continua operando mesmo em condições exaustivas.", roll: "Role 1d6 + 3 em testes de vigor." }
        ]
      },
      {
        title: "Percepção",
        icon: "assets/attr-percepcao.svg",
        defaultLevel: 1,
        summary: "Notar detalhes, pistas, movimentações e perigos ao redor.",
        levels: [
          { level: 0, effect: "Distraído. Você perde sinais sutis e demora a reagir ao ambiente.", roll: "Role 1d6 puro em testes de percepção." },
          { level: 1, effect: "Atento. Identifica mudanças óbvias e perigos imediatos.", roll: "Role 1d6 + 1 em testes de percepção." },
          { level: 2, effect: "Observador. Nota padrões, inconsistências e presenças ocultas.", roll: "Role 1d6 + 2 em testes de percepção." },
          { level: 3, effect: "Muito aguçado. Quase sempre percebe algo antes dos outros.", roll: "Role 1d6 + 3 em testes de percepção." }
        ]
      },
      {
        title: "Intelecto",
        icon: "assets/attr-intelecto.svg",
        defaultLevel: 0,
        summary: "Lógica, memória, leitura de contextos e solução de problemas.",
        levels: [
          { level: 0, effect: "Conhecimento básico. Você depende do óbvio e de tentativas diretas.", roll: "Role 1d6 puro em testes de intelecto." },
          { level: 1, effect: "Raciocínio funcional. Interpreta informações simples e conexões diretas.", roll: "Role 1d6 + 1 em testes de intelecto." },
          { level: 2, effect: "Analítico. Monta padrões e resolve enigmas com segurança.", roll: "Role 1d6 + 2 em testes de intelecto." },
          { level: 3, effect: "Brilhante. Revela relações ocultas e enxerga o quadro maior rapidamente.", roll: "Role 1d6 + 3 em testes de intelecto." }
        ]
      },
      {
        title: "Presença",
        icon: "assets/attr-presenca.svg",
        defaultLevel: 0,
        summary: "Carisma, persuasão, intimidação e capacidade de conduzir outras pessoas.",
        levels: [
          { level: 0, effect: "Reservado. Sua influência social é limitada e insegura.", roll: "Role 1d6 puro em testes de presença." },
          { level: 1, effect: "Convincente. Você lida bem com interações sociais simples.", roll: "Role 1d6 + 1 em testes de presença." },
          { level: 2, effect: "Marcante. Sua postura pesa em negociações, ordens e confrontos verbais.", roll: "Role 1d6 + 2 em testes de presença." },
          { level: 3, effect: "Magnética. Pessoas tendem a ouvir, seguir ou hesitar diante de você.", roll: "Role 1d6 + 3 em testes de presença." }
        ]
      },
      {
        title: "Força",
        icon: "assets/attr-forca.svg",
        defaultLevel: 1,
        summary: "Impacto físico, empurrar, carregar, agarrar e abrir passagem.",
        levels: [
          { level: 0, effect: "Fraco. Você tem dificuldade em ações de impacto e carga.", roll: "Role 1d6 puro em testes de força." },
          { level: 1, effect: "Comum. Lida com desafios físicos moderados.", roll: "Role 1d6 + 1 em testes de força." },
          { level: 2, effect: "Forte. Consegue forçar portas, segurar peso e dominar confrontos físicos.", roll: "Role 1d6 + 2 em testes de força." },
          { level: 3, effect: "Muito forte. Você é decisivo em ações de impacto e contenção.", roll: "Role 1d6 + 3 em testes de força." }
        ]
      },
      {
        title: "Destreza",
        icon: "assets/attr-destreza.svg",
        defaultLevel: 0,
        summary: "Reflexos, coordenação, agilidade e precisão motora.",
        levels: [
          { level: 0, effect: "Lento. Você tem mais dificuldade em reação e coordenação fina.", roll: "Role 1d6 puro em testes de destreza." },
          { level: 1, effect: "Ágil. Reage bem em tarefas simples e deslocamentos rápidos.", roll: "Role 1d6 + 1 em testes de destreza." },
          { level: 2, effect: "Hábil. Você executa ações delicadas ou rápidas com confiança.", roll: "Role 1d6 + 2 em testes de destreza." },
          { level: 3, effect: "Preciso. Reflexos e coordenação acima da média até sob pressão.", roll: "Role 1d6 + 3 em testes de destreza." }
        ]
      }
    ],

    archetypes: [
      { title: "Final Girl/Boy", icon: "assets/arch-final.svg", startingLevel: 0, summary: "Sobrevive quando tudo dá errado.", style: "Resiliente, cauteloso e difícil de derrubar. Brilha em cenas de tensão extrema e persistência.", focus: "Fuga, resistência, última chance e cenas em que continuar vivo é a prioridade absoluta.", benefit: "Uma vez por sessão, recebe vantagem narrativa ao resistir ou escapar de uma situação crítica." },
      { title: "Atleta", icon: "assets/arch-atleta.svg", startingLevel: 0, summary: "Velocidade, impulso e preparo físico.", style: "Direto, energético e competitivo. Resolve pela ação e pelo corpo.", focus: "Perseguições, testes físicos, escaladas, corridas e confrontos de ritmo intenso.", benefit: "Em uma cena por sessão, pode repetir um teste físico que falhou por pouco." },
      { title: "Intelectual", icon: "assets/arch-intelectual.svg", startingLevel: 0, summary: "Conhecimento e interpretação.", style: "Calmo, analítico e voltado a entender antes de agir.", focus: "Pesquisas, códigos, pistas, explicações, documentos e padrões escondidos.", benefit: "Ganha uma pista adicional quando investiga arquivos, símbolos ou enigmas relevantes." },
      { title: "Investigador", icon: "assets/arch-investigador.svg", startingLevel: 0, summary: "Pistas, conexões e leitura de cenas.", style: "Observador, metódico e muito atento ao que os outros deixam passar.", focus: "Mapear versões, localizar evidências, perceber contradições e conectar acontecimentos.", benefit: "Uma vez por sessão, pode fazer uma pergunta direta sobre a cena e receber uma pista útil." },
      { title: "Popular", icon: "assets/arch-popular.svg", startingLevel: 0, summary: "Influência social e rede de contatos.", style: "Carismático, articulado e sempre ligado às dinâmicas do grupo.", focus: "Favores, segredos sociais, manipulação, liderança e circulação de rumores.", benefit: "Recebe vantagem em uma interação social importante por sessão." },
      { title: "Rebelde", icon: "assets/arch-rebelde.svg", startingLevel: 0, summary: "Improviso, risco e desafio às regras.", style: "Impulsivo, criativo e adaptável sob pressão.", focus: "Quebrar padrões, tentar soluções improváveis e agir quando ninguém quer agir.", benefit: "Pode transformar uma falha simples em sucesso parcial uma vez por sessão." },
      { title: "Cuidador", icon: "assets/arch-cuidador.svg", startingLevel: 0, summary: "Proteção, suporte e recuperação.", style: "Empático, atento ao grupo e eficiente em manter pessoas de pé.", focus: "Amparo, primeiros socorros, mediação e sustentação emocional do grupo.", benefit: "Pode reduzir o impacto de dano ou medo em um aliado uma vez por sessão." },
      { title: "Sobrevivencialista", icon: "assets/arch-sobrevivencialista.svg", startingLevel: 0, summary: "Preparação em ambientes hostis.", style: "Prático, prevenido e extremamente atento a recursos.", focus: "Escassez, deslocamento, improviso de abrigo, rastros e uso do ambiente.", benefit: "Recebe vantagem sempre que a cena envolver recursos, orientação ou adaptação ao ambiente." },
      { title: "Ocultista", icon: "assets/arch-ocultista.svg", startingLevel: 0, summary: "Lendas, presságios e o que não deveria existir.", style: "Curioso, inquieto e atraído pelo desconhecido.", focus: "Sinais sobrenaturais, rituais, mitos, entidades e conhecimento proibido.", benefit: "Pode reconhecer um símbolo, presságio ou ritual uma vez por sessão sem precisar testar." },
      { title: "Cético", icon: "assets/arch-cetico.svg", startingLevel: 0, summary: "Resistência a paranoia e manipulação.", style: "Frio, racional e desconfiado de interpretações precipitadas.", focus: "Questionar relatos, testar hipóteses e manter o grupo ancorado no concreto.", benefit: "Recebe bônus ao resistir a pânico, blefes ou manipulações emocionais." },
      { title: "Outsider", icon: "assets/arch-outsider.svg", startingLevel: 0, summary: "Olhar externo e leitura do grupo.", style: "Distante, perspicaz e pouco preso às expectativas alheias.", focus: "Perceber dinâmicas escondidas, notar exclusões e interpretar pessoas de fora.", benefit: "Uma vez por sessão, identifica a tensão central de um grupo ou cena social." },
      { title: "Alívio Cômico", icon: "assets/arch-alivio.svg", startingLevel: 0, summary: "Sorte, leveza e timing improvável.", style: "Espontâneo, errático e surpreendentemente funcional em situações absurdas.", focus: "Quebrar tensão, improvisar saídas inesperadas e sobreviver no caos.", benefit: "Uma vez por sessão, converte um resultado ruim em uma saída improvável porém válida." }
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
