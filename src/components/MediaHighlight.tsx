import React, { useState } from 'react';
import { Newspaper, ExternalLink, Quote, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const GE_URL = 'https://ge.globo.com/futebol/times/flamengo/noticia/2015/10/da-surdez-ao-titulo-copa-fla-e-superacao-do-menino-fernando.html';

export const MediaHighlight: React.FC = () => {
  const [showFullDetails, setShowFullDetails] = useState(false);

  return (
    <section id="midia" className="py-20 sm:py-28 bg-[#0c1017] border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-red-400 uppercase tracking-widest">
            <Newspaper className="w-3.5 h-3.5" /> Registro jornalístico
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Copa Fla Nordeste 2015: um registro que identifica Aldrin em campo</h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            A matéria do ge é a fonte jornalística independente mais relevante localizada até agora, porque cita Aldrin nominalmente como treinador da equipe Sub-15 de João Pessoa.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-red-600 text-white text-xs font-black tracking-wider uppercase">ge / Globo Esporte</span>
                <span className="text-xs text-slate-400 font-mono">Outubro de 2015</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">Da surdez ao título: a Copa Fla e a superação do menino Fernando</h3>

              <div className="p-4 rounded-xl bg-slate-950/80 border-l-4 border-red-500 border-y border-r border-slate-800">
                <div className="flex items-start gap-3">
                  <Quote className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base leading-relaxed text-slate-200">
                    A reportagem registra que Jeyce Karla, de 14 anos, participou do time Sub-15 de João Pessoa e recebeu apoio do treinador Aldrin Eldrin, que afirmou aplicar a ela o mesmo treinamento dos meninos, sem distinção.
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                A matéria também informa que a equipe Sub-15 de João Pessoa terminou a competição como vice-campeã. Para o portfólio, esse registro é valioso porque documenta simultaneamente função profissional, contexto competitivo e uma situação concreta de inclusão no futebol de base.
              </p>

              <a href={GE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold">
                Ler matéria original <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-slate-950/80 border border-slate-800 p-6">
              <h4 className="font-bold text-white">O que essa fonte comprova</h4>
              <div className="mt-4 space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span>Aldrin Eldrin é identificado como treinador.</span></div>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span>A equipe Sub-15 de João Pessoa é descrita como vice-campeã.</span></div>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span>Jeyce Karla aparece como atleta da equipe e a matéria registra a declaração de Aldrin sobre tratamento sem distinção.</span></div>
              </div>

              <button onClick={() => setShowFullDetails(!showFullDetails)} className="mt-5 w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-bold text-slate-200 border border-slate-700 flex items-center justify-center gap-2">
                {showFullDetails ? 'Ocultar contexto' : 'Ver contexto da pesquisa'}
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showFullDetails ? 'rotate-90' : ''}`} />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {showFullDetails && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-8 pt-8 border-t border-slate-800 overflow-hidden">
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Durante a pesquisa também foram localizadas republicações dessa mesma matéria em outros sites. Elas foram mantidas na seção <strong className="text-slate-200">Fontes</strong> como caminhos alternativos de consulta, mas não são contabilizadas como reportagens independentes. Essa distinção evita inflar artificialmente a presença de Aldrin na mídia.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
