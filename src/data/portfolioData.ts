import { TimelineEvent, Competition, GalleryItem, Pillar, PublicSource, ArticleReference } from '../types/portfolio';

export const PERSONAL_INFO = {
  fullName: "Aldrin Eldrin Santos Cahino",
  shortName: "Aldrin Cahino",
  title: "Professor de Educação Física • Futebol de Base • Treinamento e Formação Esportiva",
  roles: [
    "Treinador com registro jornalístico na Copa Fla Nordeste de 2015",
    "Preparador Físico e Auxiliar Técnico em registros CBF7 de 2024",
    "Professor de Educação Física no Colégio Elohim e atuação em esporte escolar",
    "Participação voluntária no Instituto Garotinho em apoio a professores e atletas"
  ],
  motto: "Mais do que ensinar futebol, ajudar a formar pessoas.",
  secondaryMotto: "Disciplina, respeito, convivência e desenvolvimento dentro e fora de campo.",
  cref: {
    number: "004686-G/PB",
    regionalCode: "PB-004686",
    status: "ATIVO",
    category: "LICENCIADO",
    consultedAt: "30/09/2026",
    council: "CREF10/PB — Conselho Regional de Educação Física da 10ª Região",
    system: "Sistema CONFEF/CREFs",
    verification: "A nominata oficial do Sistema CONFEF/CREFs confirma o registro 004686-G/PB. Em consulta cadastral do CREF10/PB fornecida para este portfólio em 30/09/2026, o registro PB-004686 aparece na categoria LICENCIADO e situação ATIVO."
  },
  education: {
    institution: "Universidade Federal da Paraíba (UFPB)",
    degree: "Educação Física",
    tccYear: "2016",
    tccTitle: "Caracterização da capacidade respiratória dos atletas da categoria sub 13 da Escolinha do Flamengo",
    advisor: "Prof. Cláudio Luiz de Souza Meireles",
    tccSummary: "O trabalho aborda a capacidade respiratória de atletas Sub-13 em uma fase em que o treinamento já pode produzir respostas cardiorrespiratórias elevadas, mas pulmões, tórax e maturação ainda estão em desenvolvimento. A leitura atual do tema reforça que desempenho e crescimento precisam ser analisados em conjunto."
  },
  social: {
    instagram: "https://www.instagram.com/aldrin_eldrin/",
    instagramUsername: "@aldrin_eldrin",
    flamengoInstagram: "https://www.instagram.com/escolaflamengopb/",
    flamengoUsername: "@escolaflamengopb",
    garotinhoInstagram: "https://www.instagram.com/institutogarotinho/",
    garotinhoUsername: "@institutogarotinho",
    location: "João Pessoa, Paraíba — Brasil"
  }
};

export const PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Disciplina",
    subtitle: "Compromisso com o processo",
    description: "A vivência esportiva é tratada como espaço de construção de responsabilidade, constância e respeito aos combinados.",
    iconName: "ShieldCheck"
  },
  {
    number: "02",
    title: "Respeito",
    subtitle: "Companheiros, adversários e regras",
    description: "Competir também significa aprender a conviver, reconhecer limites, respeitar o outro e compreender o papel das regras no coletivo.",
    iconName: "HeartHandshake"
  },
  {
    number: "03",
    title: "Trabalho em equipe",
    subtitle: "O coletivo como parte da formação",
    description: "O futebol permite aprender a ouvir, apoiar, compartilhar responsabilidades e compreender que o resultado é construído em grupo.",
    iconName: "Users"
  },
  {
    number: "04",
    title: "Aprendizado técnico",
    subtitle: "Fundamentos e tomada de decisão",
    description: "O desenvolvimento esportivo envolve fundamentos, percepção de jogo, leitura de situações e tomada de decisão adequada à faixa etária.",
    iconName: "BrainCircuit"
  },
  {
    number: "05",
    title: "Resiliência",
    subtitle: "Aprender com erros e resultados",
    description: "Treinos e competições oferecem situações reais para lidar com frustrações, corrigir falhas e continuar evoluindo.",
    iconName: "Flame"
  },
  {
    number: "06",
    title: "Inclusão",
    subtitle: "O esporte como espaço de participação",
    description: "Em 2015, reportagem do ge registrou que uma atleta de 14 anos treinava com a equipe Sub-15 de João Pessoa e recebia o mesmo treinamento dos meninos, sem distinção, segundo Aldrin.",
    iconName: "Sparkles"
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "infancia",
    year: "Infância",
    title: "O esporte como parte da formação",
    category: "infancia",
    role: "Vivência esportiva",
    organization: "Raízes",
    description: "O incentivo do pai, Nelson, aproximou Aldrin e a irmã do esporte desde cedo. Escolinhas, treinos e competições ajudaram a construir disciplina, convivência coletiva e gosto pelo desafio.",
    highlight: "Uma relação com o esporte que começou antes da escolha profissional",
    verified: false
  },
  {
    id: "inicio-profissional",
    year: "Início da carreira",
    title: "Do estágio à sala de aula e ao campo",
    category: "escolar",
    role: "Estágio e primeiros trabalhos como professor",
    organization: "Educação Física e futebol de base",
    description: "A entrada profissional aconteceu praticamente no mesmo período no ambiente escolar e na Escolinha do Flamengo. Aldrin começou como estagiário e, em pouco tempo, firmou-se como professor, conciliando educação, treinamento e formação esportiva.",
    highlight: "Escola e futebol de base avançando lado a lado",
    verified: false
  },
  {
    id: "copa-fla-2015",
    year: "2015",
    title: "Copa Fla Nordeste",
    category: "flamengo",
    role: "Treinador da equipe Sub-15 de João Pessoa",
    organization: "Escola Flamengo",
    description: "A matéria do ge registra Aldrin como treinador da equipe Sub-15 de João Pessoa e mostra uma postura de apoio à participação feminina: Jeyce Karla treinava com os meninos e recebia o mesmo treinamento, sem distinção.",
    highlight: "Futebol de base, competição e inclusão",
    verified: true,
    sourceDoc: "ge / Globo Esporte — 2015"
  },
  {
    id: "graduacao-ufpb-2016",
    year: "2016",
    title: "Formação acadêmica aplicada ao futebol",
    category: "academico",
    role: "Trabalho de Conclusão de Curso",
    organization: "Universidade Federal da Paraíba",
    description: "O TCC sobre capacidade respiratória de atletas Sub-13 aproximou a formação em Educação Física de uma realidade já presente no cotidiano profissional de Aldrin: o desenvolvimento de jovens jogadores.",
    highlight: "Ciência do esporte conectada à prática",
    verified: true
  },
  {
    id: "trajetoria-escolas-projetos",
    year: "Trajetória contínua",
    title: "Escolas, escolinhas e projetos",
    category: "escolar",
    role: "Professor, treinador e colaborador",
    organization: "Elohim • Escola Flamengo • projetos esportivos",
    description: "Ao longo da carreira, Aldrin reuniu experiências no ensino escolar, no futebol de base e em projetos sociais. No Colégio Elohim, registros públicos o identificam em atividades esportivas; no Instituto Garotinho, sua colaboração ocorreu de forma voluntária, auxiliando professores e atletas em momentos de maior demanda.",
    highlight: "Formação esportiva em diferentes contextos",
    verified: true
  },
  {
    id: "competicoes-2024",
    year: "2024",
    title: "Competições de base em diferentes funções",
    category: "competicao",
    role: "Preparador físico, auxiliar técnico e técnico",
    organization: "CBF7 • PE Cup Brasil",
    description: "Registros oficiais mostram Aldrin na comissão técnica da Escola Flamengo no Campeonato Brasileiro de Futebol 7 de Base e como técnico do Fla Altiplano-PB na PE Cup Brasil.",
    highlight: "Experiência técnica em categorias Sub-11, Sub-12 e Sub-13",
    verified: true,
    sourceDoc: "CBF7 e PE Cup Brasil"
  },
  {
    id: "atuacao-atual",
    year: "Atual",
    title: "Formação pelo esporte",
    category: "gestao",
    role: "Educação Física e futebol de base",
    organization: "João Pessoa / PB",
    description: "A atuação atual reúne experiência de campo, educação e organização esportiva com um princípio constante: desenvolver o atleta sem perder de vista a formação humana, o respeito e a convivência coletiva.",
    highlight: "Mais do que ensinar futebol, ajudar a formar pessoas",
    verified: true
  }
];

export const COMPETITIONS_DATA: Competition[] = [
  {
    id: "copa-fla-nordeste-2015",
    name: "Copa Fla Nordeste Sub-15",
    year: "2015",
    category: "Sub-15",
    role: "Treinador",
    team: "João Pessoa",
    result: "Vice-campeonato registrado pelo ge",
    scope: "Regional",
    highlights: [
      "Aldrin foi identificado nominalmente como treinador",
      "A equipe Sub-15 de João Pessoa terminou como vice-campeã",
      "A matéria registrou a participação da atleta Jeyce Karla na equipe"
    ],
    verifiedSource: "ge / Globo Esporte"
  },
  {
    id: "cbf7-sub11-2024",
    name: "Campeonato Brasileiro de Futebol 7 de Base — Sub-11",
    year: "2024",
    category: "Sub-11",
    role: "Preparador Físico",
    team: "Escola Flamengo João Pessoa",
    result: "Participação registrada",
    scope: "Nacional",
    highlights: [
      "Inscrição oficial em 12/07/2024",
      "Nome listado na comissão técnica",
      "Registro disponível no BID e na página da equipe"
    ],
    verifiedSource: "CBF7"
  },
  {
    id: "cbf7-sub13-2024",
    name: "Campeonato Brasileiro de Futebol 7 de Base — Sub-13",
    year: "2024",
    category: "Sub-13",
    role: "Auxiliar Técnico",
    team: "Escola Flamengo",
    result: "Participação registrada",
    scope: "Nacional",
    highlights: [
      "Inscrição oficial em 15/07/2024",
      "Nome listado na comissão técnica da equipe",
      "Registro público na CBF7"
    ],
    verifiedSource: "CBF7"
  },
  {
    id: "pe-cup-2024",
    name: "PE Cup Brasil",
    year: "2024",
    category: "Base",
    role: "Técnico",
    team: "Fla Altiplano-PB",
    result: "Participação registrada",
    scope: "Regional",
    highlights: [
      "Perfil nominal de Aldrin na base oficial da competição",
      "A página do Fla Altiplano-PB o identifica como técnico",
      "Fonte disponível para consulta pública"
    ],
    verifiedSource: "PE Cup Brasil"
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: "gal-campo-bola",
    title: "Acompanhamento em campo",
    category: "treinos",
    year: "Escola Flamengo",
    description: "Aldrin à margem do campo durante atividade de futebol de base, acompanhando os atletas de perto.",
    imageUrl: "/assets/aldrin-campo-bola.jpg",
    badge: "Treino e formação",
    verified: true
  },
  {
    id: "gal-orientacao",
    title: "Orientação ao atleta",
    category: "flamengo",
    year: "Escola Flamengo",
    description: "Registro de orientação individual durante atividade de campo, destacando o acompanhamento próximo no processo de formação.",
    imageUrl: "/assets/aldrin-orientando-atleta.jpg",
    badge: "Futebol de base",
    verified: true
  },
  {
    id: "gal-equipe",
    title: "Equipe de futebol de base",
    category: "competicoes",
    year: "Escola Flamengo",
    description: "Registro coletivo de equipe de base com Aldrin e integrantes da comissão técnica em contexto esportivo.",
    imageUrl: "/assets/aldrin-equipe-base.jpg",
    badge: "Equipe e competição",
    verified: true
  },
  {
    id: "gal-garotinho",
    title: "Instituto Garotinho — participação voluntária",
    category: "escola_social",
    year: "Projeto social",
    description: "Publicação do Instituto Garotinho em contexto de participação esportiva e deslocamento para atividades do projeto, ligada à colaboração voluntária de Aldrin com professores e crianças.",
    imageUrl: "/assets/instituto-garotinho-instagram.jpg",
    badge: "Instituto Garotinho",
    verified: true
  }
];

export const INSTITUTIONS = [
  {
    id: "flamengo-pb",
    name: "Escola Flamengo Paraíba",
    role: "Professor, treinador e integrante de comissões técnicas",
    period: "Trajetória no futebol de base",
    badges: ["Futebol de Base", "Treinamento", "Comissão Técnica"],
    description: "Aldrin iniciou sua trajetória profissional na escolinha ainda como estagiário e, em pouco tempo, consolidou sua atuação como professor. Registros públicos posteriores mostram sua presença como treinador, preparador físico e auxiliar técnico em diferentes categorias e competições.",
    link: "https://www.instagram.com/escolaflamengopb/",
    sourceStatus: "Registros públicos em imprensa e competições oficiais"
  },
  {
    id: "colegio-elohim",
    name: "Colégio Elohim",
    role: "Professor de Educação Física e atuação no esporte escolar",
    period: "Trajetória profissional",
    badges: ["Educação Escolar", "Futsal", "Competições Escolares"],
    description: "A atuação de Aldrin no Elohim faz parte de sua trajetória profissional desde o início da carreira. Uma página pública de torneio do colégio identifica “Profº Aldrin Eldrin” como coordenador do evento, e registros esportivos da escola mostram sua participação em atividades e competições.",
    link: "https://www.instagram.com/p/DYxftkLFSui/",
    sourceStatus: "Atuação e participação esportiva com registros públicos"
  },
  {
    id: "instituto-garotinho",
    name: "Instituto Garotinho",
    role: "Apoio voluntário a professores e atletas",
    period: "Participações voluntárias",
    badges: ["Projeto Social", "Esporte", "Crianças e Adolescentes"],
    description: "Aldrin colaborou voluntariamente com o Instituto Garotinho para reforçar o trabalho dos professores em momentos de grande número de crianças, inclusive em atividades ligadas a torneios. O Instituto se apresenta como organização sem fins lucrativos que utiliza esporte, educação e valores humanos como ferramentas de formação e inclusão.",
    link: "https://www.instagram.com/institutogarotinho/",
    sourceStatus: "Projeto social voluntário e registros de participação"
  }
];

export const PUBLIC_SOURCES: PublicSource[] = [
  {
    id: "ge-2015",
    type: "Jornalismo",
    title: "Da surdez ao título: a Copa Fla e a superação do menino Fernando",
    publisher: "ge / Globo Esporte",
    year: "2015",
    url: "https://ge.globo.com/futebol/times/flamengo/noticia/2015/10/da-surdez-ao-titulo-copa-fla-e-superacao-do-menino-fernando.html",
    note: "Matéria original que cita Aldrin como treinador do Sub-15 de João Pessoa e registra o apoio à atleta Jeyce Karla, que treinava com os meninos sem distinção.",
    primary: true
  },
  {
    id: "cbf7-sub11-bid",
    type: "Registro esportivo",
    title: "Campeonato Brasileiro de Futebol 7 de Base — Sub-11",
    publisher: "CBF7",
    year: "2024",
    url: "https://cbf7.com.br/campeonatos/2024-7-campeonato-brasileiro-de-futebol-7-de-base---2024-sub-11/bid",
    note: "Lista Aldrin como Preparador Físico da Escola Flamengo João Pessoa Sub-11, com inscrição em 12/07/2024.",
    primary: true
  },
  {
    id: "cbf7-sub13-bid",
    type: "Registro esportivo",
    title: "Campeonato Brasileiro de Futebol 7 de Base — Sub-13",
    publisher: "CBF7",
    year: "2024",
    url: "https://cbf7.com.br/campeonatos/2024-7-campeonato-brasileiro-de-futebol-7-de-base---2024-sub-13/bid",
    note: "Lista Aldrin como Auxiliar Técnico da Escola Flamengo Sub-13, com inscrição em 15/07/2024.",
    primary: true
  },
  {
    id: "pecup-team",
    type: "Registro esportivo",
    title: "Fla Altiplano-PB — comissão técnica na PE Cup Brasil",
    publisher: "PE Cup Brasil",
    year: "2024",
    url: "https://www.pecupbrasil.com.br/estatistica_equipe.php?cod_equipe=1115",
    note: "Página da equipe que identifica Aldrin como Técnico do Fla Altiplano-PB na categoria Sub-12.",
    primary: true
  },
  {
    id: "confef-2024",
    type: "Registro profissional",
    title: "Nominata do Sistema CONFEF/CREFs — Paraíba",
    publisher: "CONFEF",
    year: "2024",
    url: "https://www.confef.org.br/confef/eleicoes/relatorio3.php?id=PB",
    note: "Lista oficial com o registro CREF 004686-G/PB em nome de Aldrin Eldrin Santos Cahino.",
    primary: true
  },
  {
    id: "cref-consulta",
    type: "Registro profissional",
    title: "Consulta cadastral de profissionais",
    publisher: "CREF10/PB",
    year: "2026",
    url: "https://www.cref10.org.br/site/registrado.php?pagina=1",
    note: "Consulta oficial do conselho. Em 30/09/2026, o registro PB-004686 foi consultado como LICENCIADO e ATIVO.",
    primary: true
  },
  {
    id: "elohim-torneio",
    type: "Registro escolar",
    title: "Torneio de futsal — profissionais envolvidos",
    publisher: "Elohim Colégio e Curso",
    year: "Registro público",
    url: "https://edfisica2015.wixsite.com/torneiodefutsal/aulas-e-treinos",
    note: "Página pública do torneio do Elohim que identifica “Profº Aldrin Eldrin” como coordenador do evento.",
    primary: true
  },
  {
    id: "elohim-esportes-instagram",
    type: "Registro escolar",
    title: "Esportes Elohim — publicação com Aldrin",
    publisher: "Instagram",
    year: "Atual",
    url: "https://www.instagram.com/p/DYxftkLFSui/",
    note: "Publicação do perfil dedicado aos esportes do Elohim, indicada como registro da participação de Aldrin nas atividades esportivas da escola."
  },
  {
    id: "instagram-profissional",
    type: "Perfil profissional",
    title: "Perfil profissional de Aldrin Eldrin",
    publisher: "Instagram",
    year: "Atual",
    url: "https://www.instagram.com/aldrin_eldrin/",
    note: "Perfil público de Aldrin ligado à sua atuação em Educação Física, futebol de base e gestão esportiva."
  },
  {
    id: "instagram-escola-flamengo",
    type: "Perfil profissional",
    title: "Escola Flamengo PB",
    publisher: "Instagram",
    year: "Atual",
    url: "https://www.instagram.com/escolaflamengopb/",
    note: "Perfil institucional da Escola Flamengo PB, com registros de equipes, treinos e competições."
  },
  {
    id: "instagram-instituto-garotinho",
    type: "Projeto social",
    title: "Instituto Garotinho",
    publisher: "Instagram",
    year: "Atual",
    url: "https://www.instagram.com/institutogarotinho/",
    note: "Perfil do projeto social esportivo em que Aldrin realizou participações voluntárias de apoio a professores e atletas."
  },
  {
    id: "instituto-garotinho-projeto",
    type: "Projeto social",
    title: "Instituto Garotinho — esporte como transformação social",
    publisher: "Sympla / Instituto Garotinho",
    year: "2026",
    url: "https://www.sympla.com.br/evento/seletiva-copa-do-brasil/3514080",
    note: "Apresentação pública do Instituto como organização sem fins lucrativos voltada à formação de crianças e adolescentes por meio do esporte, educação e valores humanos."
  },
  {
    id: "instagram-visual-DbMKQpYOfuc",
    type: "Registro visual",
    title: "Vídeo — atividade esportiva com Aldrin",
    publisher: "Instagram",
    year: "Registro visual",
    url: "https://www.instagram.com/reel/DbMKQpYOfuc/",
    note: "Vídeo indicado como parte do acervo público da trajetória esportiva de Aldrin; o contexto completo pode ser consultado diretamente na publicação."
  },
  {
    id: "instagram-visual-DdPtX2dhpsr",
    type: "Registro visual",
    title: "Publicação — atividade esportiva com Aldrin",
    publisher: "Instagram",
    year: "Registro visual",
    url: "https://www.instagram.com/p/DdPtX2dhpsr/",
    note: "Registro visual de atividade esportiva com participação de Aldrin."
  },
  {
    id: "instagram-visual-DBmtqr0J3bI",
    type: "Registro visual",
    title: "Publicação — futebol de base",
    publisher: "Instagram",
    year: "Registro visual",
    url: "https://www.instagram.com/p/DBmtqr0J3bI/",
    note: "Registro visual relacionado à trajetória de Aldrin no futebol de base."
  },
  {
    id: "instagram-visual-DXB3dKvjKVK",
    type: "Registro visual",
    title: "Publicação — participação esportiva",
    publisher: "Instagram",
    year: "Registro visual",
    url: "https://www.instagram.com/p/DXB3dKvjKVK/",
    note: "Publicação indicada como registro de participação esportiva de Aldrin."
  },
  {
    id: "instagram-visual-DR7uWkwj5OF",
    type: "Registro visual",
    title: "Publicação — atividade com equipe",
    publisher: "Instagram",
    year: "Registro visual",
    url: "https://www.instagram.com/p/DR7uWkwj5OF/",
    note: "Registro visual com Aldrin em contexto de atividade esportiva e equipe."
  },
  {
    id: "instagram-visual-DJsERxvxjZb",
    type: "Registro visual",
    title: "Publicação — trajetória esportiva",
    publisher: "Instagram",
    year: "Registro visual",
    url: "https://www.instagram.com/p/DJsERxvxjZb/",
    note: "Publicação preservada como registro visual da trajetória esportiva de Aldrin."
  },
  {
    id: "instagram-visual-DcvvxDJsS3g",
    type: "Registro visual",
    title: "Publicação — atividade esportiva",
    publisher: "Instagram",
    year: "Registro visual",
    url: "https://www.instagram.com/p/DcvvxDJsS3g/",
    note: "Registro visual de atividade esportiva com participação de Aldrin."
  }
];

export const ARTICLE_REFERENCES: ArticleReference[] = [
  {
    title: "Lung and thorax development during adolescence: relationship with pubertal status",
    publisher: "European Respiratory Journal / PubMed",
    year: "2002",
    url: "https://pubmed.ncbi.nlm.nih.gov/12449187/",
    note: "Mostra que volumes pulmonares e desenvolvimento torácico continuam mudando ao longo da puberdade, especialmente em meninos."
  },
  {
    title: "The effects of soccer training in aerobic capacity between trained and untrained adolescent boys of the same biological age",
    publisher: "PubMed",
    year: "2020",
    url: "https://pubmed.ncbi.nlm.nih.gov/32674539/",
    note: "Comparou jovens de 12, 14 e 16 anos e encontrou melhor capacidade aeróbia nos praticantes regulares de futebol."
  },
  {
    title: "Recreational Soccer Training Effects on Pediatric Populations Physical Fitness and Health: A Systematic Review",
    publisher: "Children / PMC",
    year: "2022",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9689246/",
    note: "Revisão sistemática sobre efeitos do futebol na aptidão física e saúde de crianças e adolescentes."
  },
  {
    title: "Regular soccer training improves pulmonary diffusion capacity in 6 to 10 year old boys",
    publisher: "BMC Sports Science, Medicine and Rehabilitation / PMC",
    year: "2023",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10621163/",
    note: "Estudo sobre adaptações pulmonares associadas ao treinamento regular de futebol em crianças."
  }
];
