import React, { useMemo, useState } from 'react';
import { BookOpen, ExternalLink, Newspaper, ShieldCheck, Trophy, GraduationCap, UserRoundSearch, Archive, Camera } from 'lucide-react';
import { motion } from 'motion/react';
import { PUBLIC_SOURCES } from '../data/portfolioData';
import { PublicSource } from '../types/portfolio';

const iconFor = (type: PublicSource['type']) => {
  if (type === 'Jornalismo') return Newspaper;
  if (type === 'Registro esportivo') return Trophy;
  if (type === 'Registro profissional') return ShieldCheck;
  if (type === 'Registro acadêmico') return GraduationCap;
  if (type === 'Perfil profissional') return UserRoundSearch;
  if (type === 'Registro visual') return Camera;
  return Archive;
};

export const SourcesSection: React.FC = () => {
  const [filter, setFilter] = useState<'Todas' | PublicSource['type']>('Todas');
  const types = ['Todas', ...Array.from(new Set(PUBLIC_SOURCES.map((s) => s.type)))] as const;
  const visible = useMemo(() => filter === 'Todas' ? PUBLIC_SOURCES : PUBLIC_SOURCES.filter((s) => s.type === filter), [filter]);

  return (
    <section id="fontes" className="py-20 sm:py-28 bg-[#090c10] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-red-400 uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" /> Fontes públicas e registros
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Pesquise e confira as informações</h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Reunimos matérias, registros esportivos, referências acadêmicas, fontes profissionais e publicações visuais confirmadas pela família. Republicações da mesma matéria aparecem identificadas como fontes alternativas, sem serem tratadas como notícias independentes.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${filter === type ? 'bg-red-600 border-red-500 text-white' : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-600'}`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visible.map((source, index) => {
            const Icon = iconFor(source.type);
            return (
              <motion.a
                key={source.id}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.03, 0.25) }}
                className="group rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 p-5 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-red-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-slate-500">
                      <span>{source.type}</span><span>•</span><span>{source.publisher}</span><span>•</span><span>{source.year}</span>
                      {source.primary && <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-400">Fonte principal</span>}
                    </div>
                    <h3 className="mt-1.5 text-base font-bold text-white group-hover:text-red-300 transition-colors">{source.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">{source.note}</p>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-red-400">Abrir fonte <ExternalLink className="w-3.5 h-3.5" /></div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <div className="mt-8 rounded-xl border border-amber-900/40 bg-amber-950/20 p-4 text-xs text-amber-100/80 leading-relaxed">
          Registros judiciais ou dados pessoais encontrados por mecanismos de busca não fazem parte deste portfólio, porque não contribuem para a trajetória esportiva e profissional. O objetivo desta seção é permitir a verificação das informações relevantes para formação, atuação e competições.
        </div>
      </div>
    </section>
  );
};
