import React from 'react';
import { Microscope, ExternalLink, Wind, Activity, HeartPulse, BookOpenCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { ARTICLE_REFERENCES, PERSONAL_INFO } from '../data/portfolioData';

export const ResearchArticle: React.FC = () => {
  const points = [
    {
      icon: Activity,
      title: 'Futebol e aptidão cardiorrespiratória',
      text: 'Revisões recentes indicam que programas de futebol para crianças e adolescentes podem melhorar a aptidão cardiorrespiratória quando são adequadamente estruturados e supervisionados.'
    },
    {
      icon: Wind,
      title: 'Função pulmonar não é sinônimo de desempenho',
      text: 'Medidas respiratórias ajudam a caracterizar o atleta, mas não devem ser tratadas isoladamente como previsão de talento ou rendimento. Crescimento, maturação, carga de treino e contexto também importam.'
    },
    {
      icon: HeartPulse,
      title: 'Treinamento respiratório: potencial com cautela',
      text: 'Estudos com futebolistas sugerem possíveis ganhos em força muscular respiratória e algumas medidas de desempenho, mas revisões também apontam qualidade de evidência baixa ou muito baixa em parte dos resultados.'
    },
    {
      icon: BookOpenCheck,
      title: 'O valor da avaliação no futebol de base',
      text: 'A ideia central que permanece atual é acompanhar o jovem atleta de forma mais completa: observar saúde, desenvolvimento, resposta ao treinamento e condições individuais, em vez de olhar apenas para o resultado do jogo.'
    }
  ];

  return (
    <section id="artigo" className="py-20 sm:py-28 bg-[#0c1017] border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-red-400 uppercase tracking-widest">
            <Microscope className="w-3.5 h-3.5" /> Releitura acadêmica
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Do TCC ao campo: por que olhar para a capacidade respiratória no futebol de base?</h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Uma releitura temática inspirada no trabalho apresentado por Aldrin na UFPB em 2016, conectando a pergunta acadêmica daquela época a evidências científicas publicadas depois.
          </p>
        </motion.div>

        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-9 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <article className="lg:col-span-8 text-slate-300 leading-relaxed text-sm sm:text-base space-y-5">
              <p>
                Em 2016, registros acadêmicos da Universidade Federal da Paraíba associam <strong className="text-white">{PERSONAL_INFO.fullName}</strong> ao TCC <em>“{PERSONAL_INFO.education.tccTitle}”</em>, sob orientação do {PERSONAL_INFO.education.advisor}. O tema aproxima ciência do esporte e uma realidade que já fazia parte da sua atuação: jovens atletas da Escolinha do Flamengo.
              </p>
              <p>
                A pergunta continua relevante porque, aos 12 e 13 anos, o jovem atleta já pode apresentar boa resposta cardiorrespiratória ao treinamento, mas ainda atravessa uma fase importante de crescimento pulmonar, torácico e maturação. Estudos posteriores mostram benefícios do futebol para a aptidão cardiorrespiratória e reforçam que o estágio de desenvolvimento precisa ser considerado ao interpretar qualquer medida de desempenho.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                {points.map((p) => (
                  <div key={p.title} className="rounded-xl bg-slate-950/70 border border-slate-800 p-4">
                    <p.icon className="w-5 h-5 text-red-400 mb-2" />
                    <h3 className="font-bold text-white text-sm">{p.title}</h3>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">{p.text}</p>
                  </div>
                ))}
              </div>

              <p>
                Essa releitura também conversa com a prática do treinador: avaliar não serve apenas para selecionar. Serve para compreender melhor o atleta, orientar o treino, identificar necessidades e acompanhar evolução com mais responsabilidade. Em categorias de base, isso significa considerar desempenho, saúde e formação como partes do mesmo processo.
              </p>


            </article>

            <aside className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl bg-slate-950/70 border border-slate-800 p-5">
                <h3 className="text-sm font-black uppercase tracking-wider text-white">Referências da releitura</h3>
                <p className="mt-2 text-xs text-slate-500">Fontes científicas posteriores usadas para contextualizar o tema — não substituem a monografia original.</p>
                <div className="mt-4 space-y-3">
                  {ARTICLE_REFERENCES.map((ref) => (
                    <a key={ref.url} href={ref.url} target="_blank" rel="noopener noreferrer" className="block rounded-lg border border-slate-800 bg-slate-900/70 p-3 hover:border-slate-700 group">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-red-400">{ref.publisher} • {ref.year}</div>
                      <div className="mt-1 text-xs font-bold text-slate-200 group-hover:text-white">{ref.title}</div>
                      <div className="mt-1 text-[11px] text-slate-500 leading-relaxed">{ref.note}</div>
                      <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-red-400">Consultar <ExternalLink className="w-3 h-3" /></div>
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};
