export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  category: 'infancia' | 'academico' | 'flamengo' | 'escolar' | 'competicao' | 'gestao';
  role: string;
  organization: string;
  description: string;
  highlight?: string;
  verified: boolean;
  sourceDoc?: string;
}

export interface Competition {
  id: string;
  name: string;
  year: string;
  category: string;
  role: string;
  team: string;
  result: string;
  scope: 'Nacional' | 'Regional' | 'Estadual';
  highlights: string[];
  verifiedSource: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'flamengo' | 'competicoes' | 'treinos' | 'escola_social';
  year: string;
  description: string;
  imageUrl: string;
  badge?: string;
  verified: boolean;
}

export interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface PublicSource {
  id: string;
  type: 'Jornalismo' | 'Registro esportivo' | 'Registro profissional' | 'Registro acadêmico' | 'Perfil profissional' | 'Registro visual' | 'Acervo histórico';
  title: string;
  publisher: string;
  year: string;
  url: string;
  note: string;
  primary?: boolean;
}

export interface ArticleReference {
  title: string;
  publisher: string;
  year: string;
  url: string;
  note: string;
}
