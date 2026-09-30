import React from 'react';
import { Trophy, Award, Shield, Flag, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPETITIONS_DATA } from '../data/portfolioData';

export const Competitions: React.FC = () => {
  return (
    <section id="competicoes" className="py-20 sm:py-28 bg-[#090c10] border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-red-400 uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5 text-red-400" />
            Experiência Competitiva Oficial
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Competições e Comissões Técnicas
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Atuação técnica em torneios de âmbito nacional, regional e escolar, com súmulas, homologações oficiais e boletins cadastrais verificados.
          </p>
        </motion.div>

        {/* Competitions Grid with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPETITIONS_DATA.map((comp, index) => (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors duration-300 shadow-lg flex flex-col justify-between group hover:shadow-xl hover:shadow-red-950/20"
            >
              <div>
                {/* Scope & Year Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold font-mono">
                    {comp.year}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded text-[11px] font-bold uppercase ${
                      comp.scope === 'Nacional'
                        ? 'bg-amber-950/60 text-amber-300 border border-amber-800/50'
                        : comp.scope === 'Regional'
                        ? 'bg-red-950/60 text-red-300 border border-red-800/50'
                        : 'bg-blue-950/60 text-blue-300 border border-blue-800/50'
                    }`}
                  >
                    {comp.scope}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-white group-hover:text-red-300 transition-colors">
                  {comp.name}
                </h3>

                {/* Role & Team */}
                <div className="mt-2 space-y-1">
                  <div className="text-xs font-bold text-red-400">
                    {comp.role}
                  </div>
                  <div className="text-xs text-slate-400">
                    {comp.team} • <strong className="text-slate-300">{comp.category}</strong>
                  </div>
                </div>

                {/* Result Highlight */}
                <div className="mt-4 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                    Desempenho / Resultado:
                  </div>
                  <div className="text-sm font-extrabold text-white mt-0.5">
                    {comp.result}
                  </div>
                </div>

                {/* Highlights List */}
                <div className="mt-4 space-y-2">
                  {comp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Source */}
              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                <span>Homologação:</span>
                <span className="font-mono text-slate-400 text-[10px]">{comp.verifiedSource}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Competitions Bottom Callout with subtle entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Ficha Técnica Esportiva & Registros Públicos
              </div>
              <div className="text-xs text-slate-400">
                Participações e funções apresentadas conforme os registros esportivos públicos citados neste portfólio.
              </div>
            </div>
          </div>
          <span className="text-xs font-mono text-emerald-400 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40">
            Registros conferidos nas fontes citadas
          </span>
        </motion.div>

      </div>
    </section>
  );
};
