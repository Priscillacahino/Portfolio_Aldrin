import React, { useState } from 'react';
import { Calendar, CheckCircle2, Award, BookOpen, Shield, Trophy, Users, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TIMELINE_EVENTS } from '../data/portfolioData';

export const Timeline: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'flamengo' | 'competicao' | 'academico' | 'escolar'>('all');

  const filteredEvents = TIMELINE_EVENTS.filter((evt) => {
    if (filter === 'all') return true;
    if (filter === 'flamengo') return evt.category === 'flamengo' || evt.category === 'gestao';
    if (filter === 'competicao') return evt.category === 'competicao';
    if (filter === 'academico') return evt.category === 'academico';
    if (filter === 'escolar') return evt.category === 'escolar' || evt.category === 'infancia';
    return true;
  });

  const filterButtons = [
    { key: 'all', label: 'Todos os Marcos' },
    { key: 'flamengo', label: 'Escola Flamengo PB' },
    { key: 'competicao', label: 'Competições (CBF7 / PE Cup)' },
    { key: 'academico', label: 'UFPB & CREF10/PB' },
    { key: 'escolar', label: 'Elohim & Instituto Garotinho' },
  ];

  return (
    <section id="trajetoria" className="py-20 sm:py-28 bg-[#0c1017] border-t border-slate-800/80 relative overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Fade & Slide */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-red-400 uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5 text-red-400" />
            Evolução Cronológica
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Uma Trajetória Construída em Campo
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Da vivência esportiva à atuação como professor, treinador, integrante de comissões técnicas e coordenador: uma linha do tempo que distingue registros públicos, acervo visual confirmado pela família e informações que ainda aguardam detalhamento documental.
          </p>
        </motion.div>

        {/* Filter Badges with motion buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-14"
        >
          {filterButtons.map((btn) => {
            const isActive = filter === btn.key;
            return (
              <button
                key={btn.key}
                onClick={() => setFilter(btn.key as any)}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTimelineFilter"
                    className="absolute inset-0 bg-red-600 rounded-lg shadow-md shadow-red-950/50"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{btn.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Timeline Line & Cards */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Line (hidden on small, shown on md+) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-red-600 via-slate-700 to-slate-800 -translate-x-1/2"></div>

          <div className="space-y-12">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((evt, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={evt.id}
                    layout
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                    transition={{ 
                      duration: 0.45, 
                      delay: idx * 0.05,
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                    className={`relative flex flex-col md:flex-row items-center ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline Node Point in Center with pulse scale */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-red-500 items-center justify-center text-red-400 shadow-md shadow-red-950/80 z-20"
                    >
                      <span className="w-2 h-2 rounded-full bg-white"></span>
                    </motion.div>

                    {/* Content Card (Half width on desktop) */}
                    <motion.div 
                      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                      className={`w-full md:w-1/2 ${isEven ? 'md:pl-10' : 'md:pr-10'}`}
                    >
                      <div className="p-6 rounded-2xl bg-slate-900/90 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-black/50 text-left">
                        
                        {/* Year badge & Category */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="px-3 py-1 rounded-md bg-red-950/60 border border-red-800/60 text-red-300 text-xs font-extrabold font-mono">
                            {evt.year}
                          </span>
                          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                            {evt.organization}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {evt.title}
                        </h3>

                        <div className="text-xs font-semibold text-red-400 mt-0.5">
                          {evt.role}
                        </div>

                        <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {evt.description}
                        </p>

                        {/* Highlight Pill */}
                        {evt.highlight && (
                          <div className="mt-4 p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300 flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="font-medium text-slate-200">{evt.highlight}</span>
                          </div>
                        )}

                        {/* Source verification footer */}
                        {evt.sourceDoc && (
                          <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                            <span>Fonte de validação:</span>
                            <span className="text-slate-400 font-mono text-[10px]">{evt.sourceDoc}</span>
                          </div>
                        )}

                      </div>
                    </motion.div>

                    {/* Empty side for layout symmetry */}
                    <div className="hidden md:block w-1/2"></div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};
