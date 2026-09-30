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
      intro: "As regras centrais da Temporada 01 ficam organizadas em três arquivos. Todo o conteúdo abaixo é editável diretamente neste arquivo de configuração.",
      footerLeft: "OC 101 / CAMP RULEBOOK",
      footerRight: "REV. 01",
      cards: [
        {
          key: "sobreviva",
          title: "SOBREVIVA!",
          image: "assets/rules-card.svg",
          summary: "Efeito Borboleta, rolagens e configurações gerais da jogabilidade.",
          sections: [
            { title: "EFEITO BORBOLETA", text: "Explique aqui como decisões pequenas podem alterar eventos futuros, desbloquear consequências e modificar relações, pistas ou capítulos." },
            { title: "ROLAGEM DE DADOS", text: "Defina aqui quais dados são usados, como funcionam testes, sucessos, falhas, bônus, penalidades e resultados críticos." },
            { title: "COMO JOGAR", text: "Use este espaço para turnos, cenas, ações, limites narrativos, progressão, missões e outras regras gerais." }
          ]
        },
        {
          key: "atributos",
          title: "ATRIBUTOS",
          image: "assets/profile-card.svg",
          summary: "Furtividade, Proficiência, Vigor e outros atributos totalmente editáveis.",
          attributes: [
            { name: "FURTIVIDADE", description: "Movimentar-se sem ser percebido, esconder-se e evitar atenção." },
            { name: "PROFICIÊNCIA", description: "Conhecimento técnico, domínio de ferramentas e execução precisa." },
            { name: "VIGOR", description: "Resistência física, esforço prolongado e tolerância a condições adversas." },
            { name: "PERCEPÇÃO", description: "Notar detalhes, encontrar pistas e perceber mudanças no ambiente." },
            { name: "PERSUASÃO", description: "Influenciar pessoas, negociar e conduzir interações sociais." }
          ]
        },
        {
          key: "vantagens",
          title: "VANTAGENS",
          image: "assets/chapter-card.svg",
          summary: "Habilidades gerais sorteadas em narrações e concedidas como recompensa de missões.",
          sections: [
            { title: "COMO RECEBER", text: "As Vantagens podem surgir por sorteios narrativos, eventos especiais, objetivos concluídos ou recompensas de missão." },
            { title: "USO", text: "Defina aqui se cada Vantagem é permanente, temporária, consumível, limitada por capítulo ou condicionada a uma situação." },
            { title: "EXEMPLOS", text: "Adicione aqui as Vantagens disponíveis, seus efeitos, duração, condições e qualquer regra necessária." }
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
