import React from 'react';
import { Building2, ExternalLink, CheckCircle2, CircleDashed } from 'lucide-react';
import { motion } from 'motion/react';
import { INSTITUTIONS } from '../data/portfolioData';

export const Institutions: React.FC = () => {
  return (
    <section id="atuacao" className="py-20 sm:py-28 bg-[#090c10] border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-red-400 uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5" /> Campos de atuação
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Instituições e projetos</h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            O portfólio diferencia o que já possui registro público do que foi informado pela família e ainda está em fase de organização documental.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSTITUTIONS.map((inst, index) => {
            const documented = inst.sourceStatus.startsWith('Documentado');
            return (
              <motion.div
                key={inst.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-red-400">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{inst.period}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{inst.name}</h3>
                  <div className="text-xs font-semibold text-red-400 mt-1">{inst.role}</div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {inst.badges.map((badge) => (
                      <span key={badge} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-semibold">{badge}</span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">{inst.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 space-y-3">
                  <div className={`flex items-center gap-2 text-[11px] ${documented ? 'text-emerald-400' : 'text-amber-300'}`}>
                    {documented ? <CheckCircle2 className="w-4 h-4" /> : <CircleDashed className="w-4 h-4" />}
                    <span>{inst.sourceStatus}</span>
                  </div>
                  {inst.link && (
                    <a href={inst.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300">
                      Ver perfil institucional <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
