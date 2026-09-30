import React from 'react';
import { Newspaper, ExternalLink, Quote, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

const GE_URL = 'https://ge.globo.com/futebol/times/flamengo/noticia/2015/10/da-surdez-ao-titulo-copa-fla-e-superacao-do-menino-fernando.html';

export const MediaHighlight: React.FC = () => {
  return (
    <section id="midia" className="py-20 sm:py-28 bg-[#0c1017] border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-red-400 uppercase tracking-widest">
            <Newspaper className="w-3.5 h-3.5" /> Na mídia
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Copa Fla Nordeste 2015</h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">Matéria do ge que fala de Aldrin como treinador da equipe Sub-15 de João Pessoa.</p>
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
                    A reportagem registra Jeyce Karla, de 14 anos, no time Sub-15 de João Pessoa e destaca o apoio de Aldrin, que aplicava a ela o mesmo treinamento dos meninos, sem distinção.
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                O registro também abre espaço para um ponto importante da forma como Aldrin enxerga o esporte: meninas que desejam treinar precisam encontrar oportunidade, incentivo e respeito. Em um ambiente em que o preconceito ainda pode aparecer, o trabalho do professor também passa por criar condições para que todos participem e evoluam.
              </p>

              <a href={GE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold">
                Ler matéria original <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-slate-950/80 border border-slate-800 p-6">
              <div className="w-11 h-11 rounded-xl bg-red-950/40 border border-red-800/40 flex items-center justify-center text-red-400">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="mt-4 font-bold text-white">Esporte com espaço para todos</h4>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                A experiência registrada pelo ge conecta competição e formação humana: ensinar futebol também significa enfrentar barreiras, apoiar quem quer aprender e tratar cada atleta com o mesmo compromisso.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
