import { TimelineEvent, Competition, GalleryItem, Pillar, PublicSource, ArticleReference } from '../types/portfolio';

export const PERSONAL_INFO = {
  fullName: "Aldrin Eldrin Santos Cahino",
  shortName: "Aldrin Cahino",
  title: "Professor de Educação Física • Futebol de Base • Treinamento e Formação Esportiva",
  roles: [
    "Treinador com registro jornalístico na Copa Fla Nordeste de 2015",
    "Preparador Físico e Auxiliar Técnico em registros CBF7 de 2024",
    "Professor de Educação Física no Colégio Elohim",
    "Participações no Instituto Garotinho com registros visuais confirmados"
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
    tccSummary: "Registro acadêmico confirma um TCC de 2016 dedicado à capacidade respiratória de atletas Sub-13 da Escolinha do Flamengo. O texto integral não foi localizado nas fontes públicas consultadas; por isso, o portfólio não atribui resultados ou conclusões que não puderam ser verificados."
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
    title: "O esporte como referência familiar",
    category: "infancia",
    role: "Vivência esportiva",
    organization: "História familiar",
    description: "Segundo relato familiar, o pai Nelson incentivou Aldrin e a irmã a praticarem esportes desde cedo, valorizando benefícios físicos, mentais, disciplina e convivência.",
    highlight: "Raízes pessoais que ajudam a explicar sua escolha profissional",
    verified: false,
    sourceDoc: "Relato familiar"
  },
  {
    id: "copa-fla-2015",
    year: "2015",
    title: "Copa Fla Nordeste — Sub-15",
    category: "flamengo",
    role: "Treinador",
    organization: "Equipe Sub-15 de João Pessoa",
    description: "O ge identificou Aldrin Eldrin como treinador da equipe Sub-15 de João Pessoa. A mesma reportagem registra a campanha de vice-campeonato e a participação da atleta Jeyce Karla, de 14 anos, que recebia o mesmo treino dos meninos, segundo o treinador.",
    highlight: "Registro jornalístico independente",
    verified: true,
    sourceDoc: "ge / Globo Esporte — 2015"
  },
  {
    id: "graduacao-ufpb-2016",
    year: "2016",
    title: "TCC em Educação Física — UFPB",
    category: "academico",
    role: "Autor de Trabalho de Conclusão de Curso",
    organization: "Universidade Federal da Paraíba",
    description: "Registros acadêmicos vinculados ao orientador e à banca confirmam o TCC 'Caracterização da capacidade respiratória dos atletas da categoria sub 13 da Escolinha do Flamengo', apresentado em 2016.",
    highlight: "Tema acadêmico diretamente relacionado ao futebol de base",
    verified: true,
    sourceDoc: "Registros acadêmicos de orientador e banca"
  },
  {
    id: "cref-registro",
    year: "2024",
    title: "Registro profissional em lista oficial",
    category: "academico",
    role: "Profissional de Educação Física",
    organization: "Sistema CONFEF/CREFs",
    description: "A nominata oficial do Sistema CONFEF/CREFs gerada em 2024 lista Aldrin Eldrin Santos Cahino sob o registro CREF 004686-G/PB.",
    highlight: "CREF 004686-G/PB",
    verified: true,
    sourceDoc: "Sistema CONFEF/CREFs — nominata 2024"
  },
  {
    id: "cbf7-2024",
    year: "2024",
    title: "Campeonato Brasileiro de Futebol 7 de Base",
    category: "competicao",
    role: "Preparador Físico (Sub-11) e Auxiliar Técnico (Sub-13)",
    organization: "Escola Flamengo João Pessoa / CBF7",
    description: "A CBF7 registra Aldrin como Preparador Físico da Escola Flamengo João Pessoa Sub-11, inscrito em 12/07/2024, e como Auxiliar Técnico da Escola Flamengo Sub-13, inscrito em 15/07/2024.",
    highlight: "Duas funções oficiais em categorias de base",
    verified: true,
    sourceDoc: "BID e páginas oficiais da CBF7"
  },
  {
    id: "pe-cup-2024",
    year: "2024",
    title: "PE Cup Brasil",
    category: "competicao",
    role: "Técnico",
    organization: "Fla Altiplano-PB",
    description: "A base oficial da PE Cup Brasil identifica Aldrin Eldrin Santos Cahino como técnico do Fla Altiplano-PB e apresenta seu perfil de registro na competição.",
    highlight: "Registro nominal da comissão técnica",
    verified: true,
    sourceDoc: "PE Cup Brasil"
  },
  {
    id: "escola-elohim",
    year: "Período a confirmar",
    title: "Atuação no Colégio Elohim",
    category: "escolar",
    role: "Professor de Educação Física",
    organization: "Colégio Elohim — João Pessoa",
    description: "Atuação profissional informada pela família, incluindo participação com equipes escolares em competições. Datas, modalidades e resultados serão detalhados à medida que documentos e publicações forem organizados.",
    highlight: "Ensino escolar e esporte",
    verified: false,
    sourceDoc: "Relato familiar / documentação em organização"
  },
  {
    id: "instituto-garotinho",
    year: "Registros visuais",
    title: "Participações no Instituto Garotinho",
    category: "escolar",
    role: "Participação em atividades esportivas",
    organization: "Instituto Garotinho",
    description: "A participação de Aldrin foi confirmada pela família em fotografias e publicações do Instagram do Instituto Garotinho fornecidas para este portfólio. As datas e a função exata em cada ação permanecem descritas apenas quando houver contexto suficiente no registro.",
    highlight: "Esporte, convivência e formação social",
    verified: true,
    sourceDoc: "Acervo confirmado pela família + publicações do Instagram"
  },
  {
    id: "cref-ativo-2026",
    year: "2026",
    title: "Situação profissional confirmada no CREF10/PB",
    category: "academico",
    role: "Profissional de Educação Física",
    organization: "CREF10/PB",
    description: "Em consulta cadastral fornecida para este portfólio em 30/09/2026, o registro PB-004686 aparece na categoria LICENCIADO e situação ATIVO.",
    highlight: "Registro profissional ativo em 30/09/2026",
    verified: true,
    sourceDoc: "Consulta cadastral CREF10/PB"
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
    year: "Acervo confirmado",
    description: "Aldrin em atividade de futebol de base. Fotografia fornecida e confirmada pela família para uso no portfólio.",
    imageUrl: "/assets/aldrin-campo-bola.jpg",
    badge: "Foto real confirmada",
    verified: true
  },
  {
    id: "gal-orientacao",
    title: "Orientação individual ao atleta",
    category: "flamengo",
    year: "Acervo confirmado",
    description: "Registro de Aldrin orientando um jovem atleta à margem do campo, representando o acompanhamento próximo durante a formação esportiva.",
    imageUrl: "/assets/aldrin-orientando-atleta.jpg",
    badge: "Foto real confirmada",
    verified: true
  },
  {
    id: "gal-equipe",
    title: "Futebol de base e trabalho coletivo",
    category: "competicoes",
    year: "Acervo confirmado",
    description: "Aldrin com atletas e integrantes da equipe em registro coletivo ligado ao futebol de base. Imagem confirmada pela família.",
    imageUrl: "/assets/aldrin-equipe-base.jpg",
    badge: "Foto real confirmada",
    verified: true
  },
  {
    id: "gal-garotinho",
    title: "Registro institucional — Instituto Garotinho",
    category: "escola_social",
    year: "Acervo confirmado",
    description: "Captura de publicação do Instituto Garotinho fornecida pela família como registro de participação de Aldrin em ações da instituição.",
    imageUrl: "/assets/instituto-garotinho-instagram.jpg",
    badge: "Registro visual confirmado",
    verified: true
  }
];

export const INSTITUTIONS = [
  {
    id: "flamengo-pb",
    name: "Escola Flamengo Paraíba",
    role: "Treinador, preparação física e comissão técnica",
    period: "Registros públicos em 2015, 2024 e 2026",
    badges: ["Futebol de Base", "CBF7", "Comissão Técnica"],
    description: "Há registros públicos de Aldrin como treinador em 2015 e integrante de comissões técnicas em 2024, além de fotografias reais de sua atuação em campo fornecidas pela família.",
    link: "https://www.instagram.com/escolaflamengopb/",
    sourceStatus: "Documentado em fontes públicas e acervo confirmado"
  },
  {
    id: "colegio-elohim",
    name: "Colégio Elohim",
    role: "Professor de Educação Física",
    period: "Período a documentar",
    badges: ["Educação Escolar", "Formação", "Competições Escolares"],
    description: "Atuação profissional informada pela família, incluindo participação com equipes escolares em competições. O portfólio evita atribuir datas, modalidades ou resultados específicos enquanto essas informações não forem acompanhadas por publicação ou documento de apoio.",
    link: null,
    sourceStatus: "Informação familiar — detalhes em documentação"
  },
  {
    id: "instituto-garotinho",
    name: "Instituto Garotinho",
    role: "Participações em atividades esportivas",
    period: "Registros visuais confirmados",
    badges: ["Esporte", "Formação Social", "Crianças e Adolescentes"],
    description: "A participação de Aldrin foi confirmada pela família em fotografias e publicações do Instagram fornecidas para esta versão. Os links dos registros foram preservados na seção Fontes para consulta.",
    link: "https://www.instagram.com/institutogarotinho/",
    sourceStatus: "Acervo e publicações confirmados pela família"
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
    note: "Matéria original que cita Aldrin como treinador da equipe Sub-15 de João Pessoa, registra o vice-campeonato e a participação de Jeyce Karla.",
    primary: true
  },
  {
    id: "implante-republicacao",
    type: "Jornalismo",
    title: "Portal O Globo destaca história de superação de Fernando no futebol",
    publisher: "Grupo de Implante Coclear HC/FMUSP",
    year: "2015",
    url: "https://www.implantecoclear.org.br/portal-oglobo-com-destaca-historia-de-superacao-de-fernando-no-futebol/",
    note: "Republicação do conteúdo jornalístico que também preserva a menção a Aldrin e Jeyce Karla."
  },
  {
    id: "torcida-republicacao",
    type: "Jornalismo",
    title: "Da surdez ao título: a Copa Fla e a superação do menino Fernando",
    publisher: "Torcida Flamengo",
    year: "2015",
    url: "https://www.torcidaflamengo.com.br/noticia/42533/da-surdez-ao-titulo-a-copa-fla-e-a-superacao-do-menino-fernando",
    note: "Republicação da matéria, útil como referência alternativa para pesquisa."
  },
  {
    id: "coluna-republicacao",
    type: "Jornalismo",
    title: "A superação do menino Fernando: da surdez ao título da Copa Fla",
    publisher: "Coluna do Fla",
    year: "2015",
    url: "https://colunadofla.com/2015/10/a-superacao-do-menino-fernando-da-surdez-ao-titulo-da-copa-fla/",
    note: "Republicação que mantém o trecho com Aldrin e a atleta Jeyce Karla."
  },
  {
    id: "cbf7-sub11-bid",
    type: "Registro esportivo",
    title: "BID — Campeonato Brasileiro de Futebol 7 de Base 2024 Sub-11",
    publisher: "CBF7",
    year: "2024",
    url: "https://cbf7.com.br/campeonatos/2024-7-campeonato-brasileiro-de-futebol-7-de-base---2024-sub-11/bid",
    note: "Lista Aldrin como Preparador Físico da Escola Flamengo João Pessoa Sub-11, inscrição em 12/07/2024.",
    primary: true
  },
  {
    id: "cbf7-sub11-team",
    type: "Registro esportivo",
    title: "Escola Flamengo João Pessoa Sub-11 — comissão técnica",
    publisher: "FPBF7 / CBF7",
    year: "2024",
    url: "https://cbf7.com.br/federacao/FPBF7/equipes/escola-flamengo-bessa-sub-11",
    note: "Página da equipe que identifica Aldrin como Preparador Físico."
  },
  {
    id: "cbf7-sub13-bid",
    type: "Registro esportivo",
    title: "BID — Campeonato Brasileiro de Futebol 7 de Base 2024 Sub-13",
    publisher: "CBF7",
    year: "2024",
    url: "https://cbf7.com.br/campeonatos/2024-7-campeonato-brasileiro-de-futebol-7-de-base---2024-sub-13/bid",
    note: "Lista Aldrin como Auxiliar Técnico da Escola Flamengo Sub-13, inscrição em 15/07/2024.",
    primary: true
  },
  {
    id: "cbf7-sub13-team",
    type: "Registro esportivo",
    title: "Escola Flamengo Sub-13 — comissão técnica",
    publisher: "FPBF7 / CBF7",
    year: "2024",
    url: "https://cbf7.com.br/federacao/FPBF7/equipes/escola-flamengo-sub-13",
    note: "Página da equipe com Aldrin entre os três membros da comissão técnica."
  },
  {
    id: "pecup-profile",
    type: "Registro esportivo",
    title: "Perfil de Aldrin Eldrin Santos Cahino",
    publisher: "PE Cup Brasil",
    year: "2024",
    url: "https://www.pecupbrasil.com.br/estatistica_atleta.php?cod_atleta=104465",
    note: "Perfil nominal que apresenta Aldrin com posição/função de Técnico.",
    primary: true
  },
  {
    id: "pecup-team",
    type: "Registro esportivo",
    title: "Fla Altiplano-PB — comissão técnica",
    publisher: "PE Cup Brasil",
    year: "2024",
    url: "https://www.pecupbrasil.com.br/estatistica_equipe.php?cod_equipe=1115",
    note: "Página da equipe que identifica Aldrin como Técnico do Fla Altiplano-PB."
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
    note: "Consulta cadastral oficial. Em captura fornecida para este portfólio em 30/09/2026, PB-004686 aparece como LICENCIADO e ATIVO; a imagem completa não é publicada porque continha CPF.",
    primary: true
  },
  {
    id: "tcc-orientador",
    type: "Registro acadêmico",
    title: "Registro de orientação do TCC de Aldrin",
    publisher: "Currículo público de Cláudio Luiz de Souza Meireles / Escavador",
    year: "2016",
    url: "https://www.escavador.com/sobre/4066302/claudio-luiz-de-souza-meireles",
    note: "Confirma autor, título do TCC, ano, curso, UFPB e orientador.",
    primary: true
  },
  {
    id: "tcc-banca-padilha",
    type: "Registro acadêmico",
    title: "Registro da banca do TCC — Orranette Pereira Padilhas",
    publisher: "Escavador",
    year: "2016",
    url: "https://www.escavador.com/sobre/4066312/orranette-pereira-padilhas",
    note: "Confirma Aldrin como aluno e o mesmo título de TCC na UFPB."
  },
  {
    id: "tcc-banca-aniceto",
    type: "Registro acadêmico",
    title: "Registro da banca do TCC — Rodrigo Ramalho Aniceto",
    publisher: "Escavador",
    year: "2016",
    url: "https://www.escavador.com/sobre/6721992/rodrigo-ramalho-aniceto",
    note: "Segunda confirmação independente do registro acadêmico do TCC."
  },
  {
    id: "instagram-profissional",
    type: "Perfil profissional",
    title: "Perfil profissional de Aldrin Eldrin",
    publisher: "Instagram",
    year: "2026",
    url: "https://www.instagram.com/aldrin_eldrin/",
    note: "Perfil profissional público de Aldrin, preservado como canal de consulta. Informações de bio podem ser atualizadas pelo próprio titular ao longo do tempo."
  },
  {
    id: "instagram-escola-flamengo",
    type: "Perfil profissional",
    title: "Escola Flamengo PB",
    publisher: "Instagram",
    year: "Atual",
    url: "https://www.instagram.com/escolaflamengopb/",
    note: "Perfil institucional indicado pela família e preservado como fonte para consulta de atividades, equipes e registros visuais."
  },
  {
    id: "instagram-instituto-garotinho",
    type: "Perfil profissional",
    title: "Instituto Garotinho",
    publisher: "Instagram",
    year: "Atual",
    url: "https://www.instagram.com/institutogarotinho/",
    note: "Perfil institucional fornecido pela família. Publicações associadas a participações de Aldrin foram preservadas como registros visuais."
  },
  {
    id: "instagram-visual-DbMKQpYOfuc",
    type: "Registro visual",
    title: "Publicação em vídeo — registro visual com Aldrin",
    publisher: "Instagram",
    year: "Acervo confirmado",
    url: "https://www.instagram.com/reel/DbMKQpYOfuc/",
    note: "Link fornecido pela família. Aldrin aparece nas imagens e o registro foi autorizado para compor a documentação do portfólio.",
    primary: true
  },
  {
    id: "instagram-visual-DdPtX2dhpsr",
    type: "Registro visual",
    title: "Publicação no Instagram — registro visual com Aldrin",
    publisher: "Instagram",
    year: "Acervo confirmado",
    url: "https://www.instagram.com/p/DdPtX2dhpsr/",
    note: "Link fornecido pela família como publicação em que Aldrin aparece."
  },
  {
    id: "instagram-visual-DBmtqr0J3bI",
    type: "Registro visual",
    title: "Publicação no Instagram — registro visual com Aldrin",
    publisher: "Instagram",
    year: "Acervo confirmado",
    url: "https://www.instagram.com/p/DBmtqr0J3bI/",
    note: "Link fornecido pela família como publicação em que Aldrin aparece."
  },
  {
    id: "instagram-visual-DXB3dKvjKVK",
    type: "Registro visual",
    title: "Publicação no Instagram — registro visual com Aldrin",
    publisher: "Instagram",
    year: "Acervo confirmado",
    url: "https://www.instagram.com/p/DXB3dKvjKVK/",
    note: "Link fornecido pela família como publicação em que Aldrin aparece."
  },
  {
    id: "instagram-visual-DR7uWkwj5OF",
    type: "Registro visual",
    title: "Publicação no Instagram — registro visual com Aldrin",
    publisher: "Instagram",
    year: "Acervo confirmado",
    url: "https://www.instagram.com/p/DR7uWkwj5OF/",
    note: "Link fornecido pela família como publicação em que Aldrin aparece."
  },
  {
    id: "instagram-visual-DJsERxvxjZb",
    type: "Registro visual",
    title: "Publicação no Instagram — registro visual com Aldrin",
    publisher: "Instagram",
    year: "Acervo confirmado",
    url: "https://www.instagram.com/p/DJsERxvxjZb/",
    note: "Link fornecido pela família como publicação em que Aldrin aparece."
  },
  {
    id: "instagram-visual-DcvvxDJsS3g",
    type: "Registro visual",
    title: "Publicação no Instagram — registro visual com Aldrin",
    publisher: "Instagram",
    year: "Acervo confirmado",
    url: "https://www.instagram.com/p/DcvvxDJsS3g/",
    note: "Link fornecido pela família como publicação em que Aldrin aparece."
  },
  {
    id: "flickr-2015",
    type: "Acervo histórico",
    title: "Escolinha Fla João Pessoa em Cuité-PB",
    publisher: "Flickr — perfil Aldrin Eldrin",
    year: "2015",
    url: "https://www.flickr.com/photos/131277832@N08/16722176378/",
    note: "Acervo de 2015 associado ao perfil de Aldrin. As imagens não serão usadas como retratos dele sem confirmação individual."
  }
];

export const ARTICLE_REFERENCES: ArticleReference[] = [
  {
    title: "Recreational Soccer Training Effects on Pediatric Populations Physical Fitness and Health: A Systematic Review",
    publisher: "Children / PMC",
    year: "2022",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9689246/",
    note: "Revisão sistemática sobre efeitos do futebol recreativo na aptidão física e saúde de crianças e adolescentes."
  },
  {
    title: "Does Regular Exercise Impact the Lung Function of Healthy Children and Adolescents? A Systematic Review and Meta-Analysis",
    publisher: "Pediatric Exercise Science / PubMed",
    year: "2022",
    url: "https://pubmed.ncbi.nlm.nih.gov/36538934/",
    note: "Revisão e metanálise sobre exercício regular e parâmetros de função pulmonar em jovens."
  },
  {
    title: "Regular soccer training improves pulmonary diffusion capacity in 6 to 10 year old boys",
    publisher: "BMC Sports Science, Medicine and Rehabilitation / PubMed",
    year: "2023",
    url: "https://pubmed.ncbi.nlm.nih.gov/37919774/",
    note: "Estudo sobre treinamento regular de futebol e adaptações pulmonares em meninos de 6 a 10 anos."
  },
  {
    title: "Effects of respiratory muscle training in soccer players: a systematic review with a meta-analysis",
    publisher: "PubMed",
    year: "2021",
    url: "https://pubmed.ncbi.nlm.nih.gov/34261153/",
    note: "Revisão específica sobre treinamento muscular respiratório em jogadores de futebol; os autores classificaram a qualidade geral da evidência como baixa ou muito baixa."
  },
  {
    title: "The Effect of Respiratory Muscle Training on the Pulmonary Function, Lung Ventilation, and Endurance Performance of Young Soccer Players",
    publisher: "International Journal of Environmental Research and Public Health / PubMed",
    year: "2020",
    url: "https://pubmed.ncbi.nlm.nih.gov/31905644/",
    note: "Ensaio com jogadores jovens sobre treinamento muscular inspiratório, função pulmonar e desempenho de resistência."
  }
];
