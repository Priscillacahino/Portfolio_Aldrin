import React from 'react';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Users, 
  BrainCircuit, 
  Flame, 
  Sparkles, 
  GraduationCap 
} from 'lucide-react';
import { motion } from 'motion/react';
import { PILLARS } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-red-400" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-red-400" />,
  Users: <Users className="w-6 h-6 text-red-400" />,
  BrainCircuit: <BrainCircuit className="w-6 h-6 text-red-400" />,
  Flame: <Flame className="w-6 h-6 text-red-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-red-400" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-red-400" />
};

export const Philosophy: React.FC = () => {
  return (
    <section id="valores" className="py-20 sm:py-28 bg-[#0c1017] relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-red-600/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Fade & Slide */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-xs font-semibold text-red-400 uppercase tracking-widest">
            Metodologia & Formação
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dentro e Fora de Campo
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Para Aldrin, ensinar futebol não se resume ao passe, ao drible ou ao resultado do campeonato. A convivência esportiva forja valores perenes para toda a vida.
          </p>
          <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium italic">
            “O resultado importa. A formação que permanece depois do jogo também.”
          </div>
        </motion.div>

        {/* Pilares de formação */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group p-6 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors duration-300 hover:shadow-xl hover:shadow-red-950/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 group-hover:bg-red-950/50 border border-slate-700 group-hover:border-red-800/50 flex items-center justify-center transition-colors">
                    {iconMap[pillar.iconName]}
                  </div>
                  <span className="text-2xl font-black text-slate-700 group-hover:text-red-500/40 transition-colors font-mono">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-red-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs font-semibold text-red-400 mt-0.5">
                  {pillar.subtitle}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                <span>Pilar de Formação Humana</span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 opacity-60"></span>
              </div>
            </motion.div>
          ))}

          {/* Síntese */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ 
              duration: 0.5, 
              delay: PILLARS.length * 0.08, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-6 rounded-2xl bg-gradient-to-br from-red-950/40 via-slate-900 to-slate-900 border border-red-900/40 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                O Legado Além do Troféu
              </h3>
              <p className="text-xs font-semibold text-red-300 mt-0.5">
                Impacto duradouro no caráter
              </p>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                No futebol de base, resultado esportivo e formação podem caminhar juntos. O trabalho apresentado neste portfólio valoriza técnica, disciplina, respeito e convivência como partes do mesmo processo.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-red-300 font-semibold">
              <span>Formação humana</span>
              <span>Registros públicos desde 2015</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
