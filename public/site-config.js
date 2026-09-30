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


  perksPage: {
    background: "#060606",
    text: "#f2f2f2",
    mutedText: "#b3b3b3",
    line: "rgba(255,255,255,.16)",
    panelBackground: "#090909",
    title: "Habilidades",
    groupLabel: "HABILIDADES PASSIVAS",
    detailLabels: { ability: "HABILIDADE", roll: "ROLAGEM", requirement: "REQUISITO" },
    perks: [
      {
        title: "Instinto de Sobrevivência",
        icon: "assets/perk-instinto.svg",
        subtitle: "Você reage primeiro quando a situação desmorona.",
        requirement: "Escolha inicial / habilidade passiva",
        description: "Seu corpo e mente entram em alerta sob ameaça direta. Essa habilidade representa reflexos de autopreservação, leitura rápida de perigo e respostas imediatas em cenas críticas.",
        levels: [
          { level: 0, label: "Nível 0", effect: "Seu instinto é comum. Você reconhece o perigo apenas quando ele já está muito próximo.", roll: "Sem bônus. Role 1d6 puro em reações ligadas à sobrevivência." },
          { level: 1, label: "Nível 1", effect: "Você sente quando uma cena vai piorar e reage com um pouco mais de velocidade.", roll: "Role 1d6 + 1 em fugas, esquivas ou reações imediatas ao perigo." },
          { level: 2, label: "Nível 2", effect: "Seu corpo entra em modo defensivo com eficiência. Você lê ameaças com antecedência moderada.", roll: "Role 1d6 + 2 em ações de sobrevivência, fuga ou resistência súbita." },
          { level: 3, label: "Nível 3", effect: "Você é extremamente difícil de surpreender. Mesmo em pânico, reage de forma instintiva e eficaz.", roll: "Role 1d6 + 3 em reações críticas de sobrevivência. Em cena extrema, o narrador pode conceder uma pequena vantagem narrativa." }
        ]
      },
      {
        title: "Sexto Sentido",
        icon: "assets/perk-sexto.svg",
        subtitle: "Você sente quando algo está errado antes que os outros percebam.",
        requirement: "Escolha inicial / habilidade passiva",
        description: "Mais do que percepção comum, esta habilidade sugere intuição aguçada para presenças, mudanças sutis de ambiente e sensações de ameaça invisível.",
        levels: [
          { level: 0, label: "Nível 0", effect: "Você até tem pressentimentos, mas quase nunca sabe interpretá-los a tempo.", roll: "Sem bônus. Role 1d6 puro em testes narrativos de intuição." },
          { level: 1, label: "Nível 1", effect: "Capta desconfortos, ruídos ou presenças estranhas em situações simples.", roll: "Role 1d6 + 1 ao tentar perceber algo incomum antes dos outros." },
          { level: 2, label: "Nível 2", effect: "Percebe padrões estranhos e mudanças sutis com frequência confiável.", roll: "Role 1d6 + 2 em leituras intuitivas, presença oculta ou antecipação de ameaça." },
          { level: 3, label: "Nível 3", effect: "Sua intuição beira o sobrenatural. Você quase sempre nota que há algo errado na cena.", roll: "Role 1d6 + 3 em intuição; o narrador pode oferecer um aviso extra quando houver um perigo iminente." }
        ]
      },
      {
        title: "Mãos Leves",
        icon: "assets/perk-maos.svg",
        subtitle: "Discrição manual, pequenos furtos e acesso silencioso a objetos.",
        requirement: "Escolha inicial / habilidade passiva",
        description: "Você lida bem com bolsos, trancas simples, itens pequenos e movimentos rápidos das mãos sem chamar atenção excessiva.",
        levels: [
          { level: 0, label: "Nível 0", effect: "Você até tenta, mas faz barulho, hesita ou chama atenção facilmente.", roll: "Sem bônus. Role 1d6 puro em ações discretas com as mãos." },
          { level: 1, label: "Nível 1", effect: "Consegue pegar, esconder ou trocar itens em cenas menos tensas.", roll: "Role 1d6 + 1 em furtos discretos ou manipulação rápida de objetos." },
          { level: 2, label: "Nível 2", effect: "Sua coordenação é segura e veloz, mesmo sob pressão moderada.", roll: "Role 1d6 + 2 em furtos, acesso a bolsos, kits, fechaduras simples ou ocultação de itens." },
          { level: 3, label: "Nível 3", effect: "Você age com precisão cirúrgica e quase não deixa vestígios.", roll: "Role 1d6 + 3 em manipulações discretas; em casos simples, o narrador pode dispensar rolagem." }
        ]
      },
      {
        title: "Primeiros Socorros",
        icon: "assets/perk-primeiros.svg",
        subtitle: "Estabilizar ferimentos, improvisar atendimento e ganhar tempo.",
        requirement: "Escolha inicial / habilidade passiva",
        description: "Você sabe lidar com ferimentos imediatos, controlar sangramento, organizar materiais básicos e impedir que uma situação física piore rápido demais.",
        levels: [
          { level: 0, label: "Nível 0", effect: "Seu conhecimento é superficial. Ajuda pouco além do básico mais óbvio.", roll: "Sem bônus. Role 1d6 puro em ações de primeiros socorros." },
          { level: 1, label: "Nível 1", effect: "Consegue limpar, conter e estabilizar ferimentos simples.", roll: "Role 1d6 + 1 em estabilização ou atendimento emergencial simples." },
          { level: 2, label: "Nível 2", effect: "Atende ferimentos com consistência e reduz o agravamento da condição física.", roll: "Role 1d6 + 2 em primeiros socorros e contenção de dano físico." },
          { level: 3, label: "Nível 3", effect: "Você trabalha com frieza, rapidez e improvisação muito eficiente sob estresse.", roll: "Role 1d6 + 3 em primeiros socorros; uma vez em cena grave, pode garantir estabilização parcial com forte vantagem narrativa." }
        ]
      },
      {
        title: "Sangue Frio",
        icon: "assets/perk-sangue.svg",
        subtitle: "Controle emocional em situações de choque, medo e violência.",
        requirement: "Escolha inicial / habilidade passiva",
        description: "Você consegue permanecer funcional quando a maioria congelaria. Útil contra pânico, pressão psicológica e decisões sob estresse extremo.",
        levels: [
          { level: 0, label: "Nível 0", effect: "Você sente o peso da cena como qualquer outra pessoa e pode travar facilmente.", roll: "Sem bônus. Role 1d6 puro em testes de autocontrole." },
          { level: 1, label: "Nível 1", effect: "Mantém alguma compostura em momentos difíceis, embora ainda vacile em choques maiores.", roll: "Role 1d6 + 1 ao resistir a pânico, pressão ou hesitação." },
          { level: 2, label: "Nível 2", effect: "Sua calma é sólida mesmo em situações fortes de violência ou ameaça.", roll: "Role 1d6 + 2 em resistência mental, autocontrole ou manutenção de foco." },
          { level: 3, label: "Nível 3", effect: "Você quase nunca perde a cabeça. Atua com clareza mesmo quando o resto do grupo desmorona.", roll: "Role 1d6 + 3 em resistência psicológica; em certas cenas, o narrador pode reduzir impacto de MEDO." }
        ]
      },
      {
        title: "Observador",
        icon: "assets/perk-observador.svg",
        subtitle: "Notar detalhes e padrões que escapam ao resto do grupo.",
        requirement: "Escolha inicial / habilidade passiva",
        description: "Sua atenção vai além do óbvio, encontrando indícios, contradições, rastros e pequenos sinais escondidos no ambiente ou no comportamento alheio.",
        levels: [
          { level: 0, label: "Nível 0", effect: "Você percebe o que está visível, mas costuma perder sinais finos.", roll: "Sem bônus. Role 1d6 puro em leituras detalhadas de cena." },
          { level: 1, label: "Nível 1", effect: "Nota detalhes relevantes em uma inspeção cuidadosa.", roll: "Role 1d6 + 1 ao procurar pistas, rastros ou inconsistências." },
          { level: 2, label: "Nível 2", effect: "Seu olhar encontra padrões e pequenas quebras de lógica com frequência.", roll: "Role 1d6 + 2 em varredura de ambiente, pistas e leitura de comportamento." },
          { level: 3, label: "Nível 3", effect: "Quase nada passa despercebido por você quando decide observar com atenção real.", roll: "Role 1d6 + 3; o narrador pode oferecer uma pista extra em cenas investigativas importantes." }
        ]
      },
      {
        title: "Influente",
        icon: "assets/perk-influente.svg",
        subtitle: "Convencer, acalmar, pressionar ou conduzir pessoas.",
        requirement: "Escolha inicial / habilidade passiva",
        description: "Você sabe pesar palavras, postura e timing social para obter reações melhores em conversas críticas ou situações coletivas tensas.",
        levels: [
          { level: 0, label: "Nível 0", effect: "Sua influência é pequena e irregular.", roll: "Sem bônus. Role 1d6 puro em tentativas de convencimento ou pressão social." },
          { level: 1, label: "Nível 1", effect: "Consegue persuadir ou acalmar em interações simples ou diretas.", roll: "Role 1d6 + 1 em persuasão, intimidação leve ou mediação." },
          { level: 2, label: "Nível 2", effect: "Sua presença tem peso real em discussões e decisões de grupo.", roll: "Role 1d6 + 2 em liderança, convencimento e condução emocional de cena." },
          { level: 3, label: "Nível 3", effect: "Você manipula o ritmo social da cena e influencia mesmo sob forte tensão.", roll: "Role 1d6 + 3 em ações sociais; em uma cena por sessão, pode receber forte vantagem narrativa em discurso decisivo." }
        ]
      },
      {
        title: "Improvisador",
        icon: "assets/perk-improvisador.svg",
        subtitle: "Soluções rápidas, gambiarras e saídas improváveis.",
        requirement: "Escolha inicial / habilidade passiva",
        description: "Você transforma sucata, pouco tempo e informação incompleta em soluções utilizáveis. Muito útil em cenas de crise ou falta de recursos.",
        levels: [
          { level: 0, label: "Nível 0", effect: "Você tenta improvisar, mas os resultados são instáveis ou pouco seguros.", roll: "Sem bônus. Role 1d6 puro em improvisos materiais ou estratégicos." },
          { level: 1, label: "Nível 1", effect: "Consegue soluções funcionais em problemas simples ou momentâneos.", roll: "Role 1d6 + 1 em improvisos de ferramenta, rota ou plano." },
          { level: 2, label: "Nível 2", effect: "Monta respostas rápidas com confiança mesmo em ambiente ruim.", roll: "Role 1d6 + 2 ao adaptar itens, criar saídas ou resolver com poucos recursos." },
          { level: 3, label: "Nível 3", effect: "Você acha utilidade onde ninguém mais acharia. Suas saídas absurdas frequentemente funcionam.", roll: "Role 1d6 + 3 em improviso; em situações plausíveis, o narrador pode permitir sucesso parcial sem rolagem." }
        ]
      },
      {
        title: "Conhecimento Proibido",
        icon: "assets/perk-conhecimento.svg",
        subtitle: "Rituais, lendas, símbolos e o que deveria permanecer oculto.",
        requirement: "Escolha inicial / habilidade passiva",
        description: "Você estudou ou entrou em contato com informações perturbadoras sobre o sobrenatural, crenças obscuras ou registros que a maioria jamais veria.",
        levels: [
          { level: 0, label: "Nível 0", effect: "Você conhece apenas rumores e fragmentos desconexos.", roll: "Sem bônus. Role 1d6 puro em testes de conhecimento oculto." },
          { level: 1, label: "Nível 1", effect: "Reconhece símbolos básicos, superstições recorrentes e sinais mais conhecidos.", roll: "Role 1d6 + 1 ao interpretar mitos, sinais estranhos ou relatos sobrenaturais." },
          { level: 2, label: "Nível 2", effect: "Seu repertório inclui rituais, vínculos e implicações menos óbvias.", roll: "Role 1d6 + 2 ao analisar entidades, rituais ou documentos proibidos." },
          { level: 3, label: "Nível 3", effect: "Seu domínio do obscuro é profundo e inquietante.", roll: "Role 1d6 + 3; em uma cena por sessão, pode reconhecer imediatamente a função de um símbolo ou procedimento oculto relevante." }
        ]
      },
      {
        title: "Protetor",
        icon: "assets/perk-protetor.svg",
        subtitle: "Interpor-se, cobrir aliados e absorver parte do caos.",
        requirement: "Escolha inicial / habilidade passiva",
        description: "Você possui impulso natural de defesa e cobertura. É a pessoa que segura a linha quando alguém precisa de tempo, espaço ou amparo.",
        levels: [
          { level: 0, label: "Nível 0", effect: "Sua intenção de proteger existe, mas nem sempre você age da melhor forma.", roll: "Sem bônus. Role 1d6 puro ao tentar defender ou cobrir alguém." },
          { level: 1, label: "Nível 1", effect: "Consegue oferecer proteção útil em cenas simples ou rápidas.", roll: "Role 1d6 + 1 em cobertura, bloqueio ou amparo imediato a aliados." },
          { level: 2, label: "Nível 2", effect: "Você protege com firmeza, reduzindo o impacto das situações mais tensas no grupo.", roll: "Role 1d6 + 2 ao interpor-se, retirar alguém do risco ou sustentar defesa." },
          { level: 3, label: "Nível 3", effect: "Seu instinto defensivo é decisivo e heroico.", roll: "Role 1d6 + 3; em uma cena crítica, o narrador pode permitir absorver parte de uma consequência destinada a outro personagem." }
        ]
      },
      {
        title: "Fugitivo",
        icon: "assets/perk-fugitivo.svg",
        subtitle: "Escapar, sumir de vista e ganhar distância sob ameaça.",
        requirement: "Escolha inicial / habilidade passiva",
        description: "Você sabe recuar, romper perseguições e explorar brechas de rota quando a melhor solução é simplesmente não estar mais ali.",
        levels: [
          { level: 0, label: "Nível 0", effect: "Você corre, mas sem técnica real para despistar ou reposicionar.", roll: "Sem bônus. Role 1d6 puro em fugas e perseguições." },
          { level: 1, label: "Nível 1", effect: "Consegue escapar bem em rotas simples e cenários com alguma cobertura.", roll: "Role 1d6 + 1 em perseguições, retirada rápida e fuga curta." },
          { level: 2, label: "Nível 2", effect: "Você lê caminhos e brechas com segurança durante a fuga.", roll: "Role 1d6 + 2 em despiste, perseguição e reposicionamento urgente." },
          { level: 3, label: "Nível 3", effect: "É extremamente difícil manter você encurralado por muito tempo.", roll: "Role 1d6 + 3 em fugas; em situação plausível, o narrador pode conceder vantagem narrativa para desaparecer de vista temporariamente." }
        ]
      },
      {
        title: "Desconfiado",
        icon: "assets/perk-desconfiado.svg",
        subtitle: "Resistir a manipulação, blefes e promessas suspeitas.",
        requirement: "Escolha inicial / habilidade passiva",
        description: "Você raramente aceita versões prontas sem questionar. Essa habilidade protege contra falsas certezas, truques emocionais e decisões apressadas impostas por terceiros.",
        levels: [
          { level: 0, label: "Nível 0", effect: "Você ainda pode cair com facilidade em discursos convincentes ou pressões emocionais.", roll: "Sem bônus. Role 1d6 puro para perceber mentira, blefe ou manipulação." },
          { level: 1, label: "Nível 1", effect: "Questiona melhor intenções e versões suspeitas em situações simples.", roll: "Role 1d6 + 1 ao desconfiar de informação, promessa ou postura alheia." },
          { level: 2, label: "Nível 2", effect: "Sua leitura crítica reduz bastante a chance de ser enganado sem resistência.", roll: "Role 1d6 + 2 ao resistir a blefes, manipulação ou falsas narrativas." },
          { level: 3, label: "Nível 3", effect: "Você desarma incoerências com rapidez e quase sempre percebe quando algo está fora do lugar.", roll: "Role 1d6 + 3 em resistência a engano; em cena importante, pode solicitar ao narrador um indício de inconsistência." }
        ]
      }
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
