import React from 'react';
import { Award, ChevronRight, FileText, CheckCircle2, Shield, GraduationCap, MapPin, Sparkles, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenDossier: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDossier }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#06080b] via-[#090d14] to-[#0c1017]">
      {/* Stadium Floodlight Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-slate-700/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Subtle athletic field lines in background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Positioning */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            
            {/* Pill Header */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-800/40 text-red-300 text-xs font-bold tracking-wide uppercase shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Educação Física • Futebol de Base • Formação pelo Esporte
            </motion.div>

            {/* Main Name */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.08]">
                ALDRIN ELDRIN <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-red-400">
                  SANTOS CAHINO
                </span>
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-slate-300">
                Professor de Educação Física • Futebol de Base • Formação Esportiva
              </p>
            </motion.div>

            {/* Core Concept Quote */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="p-4 sm:p-5 rounded-xl bg-slate-900/80 border-l-4 border-red-600 border-y border-r border-slate-800 shadow-lg text-left"
            >
              <p className="text-xl sm:text-2xl font-bold text-white italic tracking-tight font-serif">
                “{PERSONAL_INFO.motto}”
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                Uma trajetória que conecta formação acadêmica, futebol de base, experiência em comissões técnicas e educação através do esporte. Os registros públicos reunidos neste portfólio podem ser consultados na seção <strong className="text-slate-200">Fontes</strong>.
              </p>
            </motion.div>

            {/* Quick Fact Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2"
            >
              {[
                { icon: Shield, title: "CREF10/PB", val: "PB-004686", sub: "Ativo • Licenciado", subColor: "text-emerald-400" },
                { icon: GraduationCap, title: "UFPB", val: "Ed. Física", sub: "TCC registrado em 2016", subColor: "text-slate-400" },
                { icon: Award, title: "Escola Fla PB", val: "Futebol de Base", sub: "Registros em 2015 e 2024", subColor: "text-slate-400" },
                { icon: Sparkles, title: "Registros", val: "2015–2026", sub: "Fontes públicas", subColor: "text-slate-400" },
              ].map((badge, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-left transition-colors hover:border-slate-700"
                >
                  <div className="flex items-center gap-1.5 text-red-400 text-xs font-bold">
                    <badge.icon className="w-3.5 h-3.5" />
                    {badge.title}
                  </div>
                  <div className="text-sm font-extrabold text-white mt-1">{badge.val}</div>
                  <div className={`text-[10px] ${badge.subColor} font-medium`}>{badge.sub}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-lg shadow-red-950/50 transition-all hover:scale-[1.02]"
              >
                Conhecer a História
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#midia"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 transition-all hover:scale-[1.02]"
              >
                <ExternalLink className="w-4 h-4 text-red-400" />
                Matéria Globo Esporte (2015)
              </a>

              <button
                onClick={onOpenDossier}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-transparent hover:bg-slate-800 text-slate-300 font-semibold text-sm border border-slate-800 hover:border-slate-700 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                Dossiê Completo
              </button>
            </motion.div>

          </div>

          {/* Right Column: Athletic Portrait & Card */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative card glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-red-600 to-slate-700 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>

              {/* Main Card */}
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                
                {/* Photo Header */}
                <div className="relative h-96 w-full overflow-hidden bg-slate-950">
                  <img
                    src="/assets/aldrin-perfil-escola-flamengo.jpg"
                    alt="Aldrin Eldrin Santos Cahino — Escola Flamengo"
                    className="w-full h-full object-cover object-[50%_52%] filter brightness-95 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  {/* Overlaid Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-slate-700 text-white text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      CREF 004686-G/PB
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-950/80 backdrop-blur-md border border-emerald-800/50 text-emerald-300 text-xs font-semibold">
                      Ativo • Licenciado
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-left">
                      <div className="text-xs font-bold uppercase tracking-wider text-red-400">
                        Trajetória no futebol de base
                      </div>
                      <div className="text-base font-extrabold text-white mt-0.5">
                        Escola Flamengo PB
                      </div>
                      <div className="text-xs text-slate-300 mt-1 flex items-center justify-between">
                        <span>Treinador • Preparação física • Comissão técnica</span>
                        <span className="text-[11px] text-slate-400">João Pessoa / PB</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Sub-content */}
                <div className="p-5 bg-slate-950/90 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800/60">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Fontes públicas reunidas
                    </span>
                    <span className="font-mono text-slate-300">UFPB • CBF7 • ge</span>
                  </div>

                  <div className="pt-3 text-left">
                    <p className="text-xs italic text-slate-300 leading-relaxed">
                      “O resultado importa. A formação que permanece depois do apito final também.”
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
