window.SEASON01 = {
  site: {
    backUrl: "../../temporadas.html",
    backLabel: "VOLTAR ÀS TEMPORADAS",
    mainLabel: "MAIN",
    seasonBadge: "TEMPORADA 01"
  },

  theme: {
    desk: "#26231f",

    // BACKGROUND DA TEMPORADA 01 — totalmente editável
    background: {
      color: "#302b27",
      image: "assets/background-main.webp",
      size: "cover",
      position: "center top",
      repeat: "no-repeat",
      attachment: "fixed",
      overlay: "rgba(0, 0, 0, 0.04)"
    },

    // Compatibilidade com versões anteriores. Pode deixar vazio.
    deskImage: "",
    paper: "#e8dfcf",
    paperLight: "#f5efe4",
    paperDark: "#cfc3ae",
    ink: "#1b1916",
    mutedInk: "#6b645a",
    accent: "#a62a24",
    navBackground: "rgba(235, 228, 216, 0.22)",
    navBorder: "rgba(255,255,255,.35)",
    navText: "#f7f3ec",
    cardShadow: "0 18px 40px rgba(0,0,0,.28)",
    bodyFont: "'Courier New', Courier, monospace",
    uiFont: "Arial, Helvetica, sans-serif",
    titleFont: "'Courier New', Courier, monospace"
  },

  main: {
    season: "SEASON 01",
    title: "NOME DA TEMPORADA",
    campName: "CAMP WILLOW CREEK",
    poster: "assets/camp-main.svg",
    smallPhoto: "assets/forest-photo.svg",
    mysteryPhoto: "assets/camper-silhouette.svg",
    synopsis: [
      "Um grupo de jovens é enviado para um acampamento isolado, mas o que deveria ser um verão comum se transforma em uma sequência de desaparecimentos, segredos e eventos que desafiam toda lógica. Em meio à floresta, nada é o que parece, e o passado do acampamento insiste em voltar.",
      "Entre amizades, rivalidades e verdades enterradas, os campistas precisarão descobrir o que está realmente acontecendo em Willow Creek — antes que seja tarde demais."
    ],
    handwrittenNote: "Quem você pode confiar?",
    quote: "ALGUNS LUGARES NÃO DEVERIAM SER ENCONTRADOS.",
    stamp: "CONFIDENCIAL",
    caseNumber: "FILE 01 / WC-1987"
  },

  modules: [
    {
      key: "sistema",
      title: "SISTEMA",
      description: "Regras, mecânicas e como jogar.",
      image: "assets/rules-card.svg",
      url: "sistema.html"
    },
    {
      key: "fichario",
      title: "FICHÁRIO",
      description: "Campistas, staff e outros envolvidos.",
      image: "assets/profile-card.svg",
      url: "fichario.html"
    },
    {
      key: "capitulos",
      title: "CAPÍTULOS",
      description: "Linha narrativa, eventos e narrações.",
      image: "assets/chapter-card.svg",
      url: "capitulos.html"
    },
    {
      key: "arquivos",
      title: "ARQUIVOS",
      description: "Documentos, pistas, registros e evidências.",
      image: "assets/archive-card.svg",
      url: "arquivos.html"
    }
  ],

  pages: {
    sistema: {
      kicker: "MANUAL DE CAMPO / 01",
      title: "SISTEMA",
      code: "FILE: SYS-01",
      intro: "Escolha um dos três arquivos para consultar as regras, capacidades e recompensas da temporada.",
      footerLeft: "OC 101 / CAMP RULEBOOK",
      footerRight: "REV. 02",
      cards: [
        {
          key: "sobreviva",
          title: "SOBREVIVA!",
          image: "assets/system-survive.svg",
          summary: "Regras, processos e como jogar.",
          intro: "Um guia rápido para entender as regras principais da temporada. O jogo é narrativo, direto e baseado em escolhas e consequências.",
          sections: [
            { title: "EFEITO BORBOLETA", text: "Pequenas decisões podem gerar grandes consequências. Cada ação, por menor que pareça, pode alterar o rumo da história." },
            { title: "ROLAGEM DE DADOS", text: "Quando o resultado é incerto, role os dados. O resultado determina sucesso, complicação ou uma nova reviravolta." },
            { title: "JOGABILIDADE GERAL", text: "A campanha prioriza exploração, decisões, consequências, narrativa e liberdade de escolha. Edite este texto para incluir todas as suas regras gerais." }
          ]
        },
        {
          key: "atributos",
          title: "ATRIBUTOS",
          image: "assets/system-attributes.svg",
          summary: "O que define as capacidades do personagem.",
          intro: "Atributos representam capacidades principais usadas em ações, testes e interações. Você pode adicionar ou remover quantos quiser.",
          attributes: [
            { name: "FURTIVIDADE", icon: "assets/icon-binoculars.svg", description: "Movimentar-se sem ser notado e evitar situações perigosas." },
            { name: "PROFICIÊNCIA", icon: "assets/icon-book.svg", description: "Conhecimento técnico e habilidade com equipamentos." },
            { name: "VIGOR", icon: "assets/icon-boots.svg", description: "Resistência física e capacidade de suportar condições extremas." },
            { name: "PERCEPÇÃO", icon: "assets/icon-eye.svg", description: "Notar detalhes, identificar riscos e perceber o que outros não veem." },
            { name: "RACIOCÍNIO", icon: "assets/icon-brain.svg", description: "Resolver problemas, conectar informações e encontrar soluções." }
          ]
        },
        {
          key: "vantagens",
          title: "VANTAGENS",
          image: "assets/system-advantages.svg",
          summary: "Habilidades, talentos e recompensas.",
          intro: "Vantagens são habilidades gerais sorteadas em narrações ou concedidas como recompensas de missões.",
          advantages: [
            { name: "SOBREVIVENTE", icon: "assets/icon-backpack.svg", description: "Mais recursos e maior resistência em ambientes hostis." },
            { name: "EXPLORADOR", icon: "assets/icon-compass.svg", description: "Encontre rotas ocultas, atalhos e locais especiais." },
            { name: "SOCORRISTA", icon: "assets/icon-firstaid.svg", description: "Preste primeiros socorros e ajude outros personagens." },
            { name: "OBSERVADOR", icon: "assets/icon-camera.svg", description: "Perceba pistas adicionais e detalhes importantes." },
            { name: "MULTIFERRAMENTA", icon: "assets/icon-tool.svg", description: "Use ferramentas com mais eficiência e crie soluções criativas." }
          ]
        }
      ]
    },
    fichario: {
      eyebrow: "REGISTRO DE PESSOAL / 01",
      title: "FICHÁRIO",
      intro: "Um arquivo visual para campistas, monitores, funcionários e qualquer pessoa ligada ao acampamento.",
      sections: [
        { title: "CAMPISTAS", text: "Cards de personagens poderão ser adicionados aqui com foto, nome, idade, função e informações narrativas." },
        { title: "STAFF", text: "Área para monitores, direção, funcionários e outras figuras do acampamento." },
        { title: "OUTROS ENVOLVIDOS", text: "NPCs, desaparecidos, familiares e personagens externos podem ficar nesta seção." }
      ]
    },
    capitulos: {
      eyebrow: "NARRATIVE LOG / 01",
      title: "CAPÍTULOS",
      intro: "Organize cada capítulo como um registro de ocorrência, com título, resumo, data e links para a narração completa.",
      sections: [
        { title: "CAPÍTULO 01", text: "Resumo editável do primeiro capítulo. Este bloco poderá virar um card clicável quando a narrativa estiver pronta." },
        { title: "CAPÍTULO 02", text: "Adicione novos capítulos simplesmente duplicando um item no arquivo de configuração." },
        { title: "CRONOLOGIA", text: "Espaço opcional para destacar eventos importantes, datas e consequências." }
      ]
    },
    arquivos: {
      eyebrow: "EVIDENCE ARCHIVE / 01",
      title: "ARQUIVOS",
      intro: "Documentos, pistas e registros podem ser tratados como evidências físicas dentro deste arquivo.",
      sections: [
        { title: "DOCUMENTOS", text: "Cartas, bilhetes, relatórios, recortes, e-mails e páginas de diário." },
        { title: "PISTAS", text: "Indícios liberados durante a temporada, com status e contexto." },
        { title: "EVIDÊNCIAS", text: "Fotografias, objetos, mapas, áudios e outros materiais encontrados em jogo." }
      ]
    }
  }
};
