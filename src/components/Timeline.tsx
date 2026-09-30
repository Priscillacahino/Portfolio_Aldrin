import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { TIMELINE_EVENTS } from '../data/portfolioData';

export const Timeline: React.FC = () => {
  return (
    <section id="trajetoria" className="py-20 sm:py-28 bg-[#0c1017] border-t border-slate-800/80 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-red-400 uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5" /> Trajetória
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Uma história construída entre escola e campo</h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            A sequência abaixo destaca fases da trajetória, sem transformar cada registro em um marco isolado. Escola, futebol de base, formação acadêmica e projetos sociais foram se conectando ao longo do caminho.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute left-8 top-3 bottom-3 w-px bg-gradient-to-b from-red-600 via-slate-700 to-slate-800"></div>

          <div className="space-y-5">
            {TIMELINE_EVENTS.map((evt, idx) => (
              <motion.div
                key={evt.id}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: Math.min(idx * 0.05, 0.25) }}
                className="relative md:pl-20"
              >
                <div className="hidden md:flex absolute left-4 top-7 w-8 h-8 rounded-full bg-slate-900 border-2 border-red-500 items-center justify-center shadow-md shadow-red-950/70">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                </div>

                <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 sm:p-6 shadow-lg hover:border-slate-700 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="px-3 py-1 rounded-md bg-red-950/60 border border-red-800/60 text-red-300 text-xs font-extrabold font-mono">{evt.year}</span>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">{evt.organization}</span>
                  </div>

                  <h3 className="mt-3 text-lg sm:text-xl font-bold text-white">{evt.title}</h3>
                  <div className="text-xs font-semibold text-red-400 mt-1">{evt.role}</div>
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">{evt.description}</p>

                  {evt.highlight && (
                    <div className="mt-4 flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{evt.highlight}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
