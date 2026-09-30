import React from 'react';
import { GraduationCap, ShieldCheck, BookOpen, CheckCircle, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Credentials: React.FC = () => {
  return (
    <section id="formacao" className="py-20 sm:py-28 bg-[#090c10] border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-red-400 uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" /> Formação e credenciamento
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Formação acadêmica e registro profissional</h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">Somente informações sustentadas por registros públicos localizados durante a pesquisa.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-950/40 border border-blue-800/40 flex items-center justify-center text-blue-400"><GraduationCap className="w-6 h-6" /></div>
                <div><span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Universidade Federal da Paraíba</span><h3 className="text-xl font-bold text-white">Educação Física — UFPB</h3></div>
              </div>
              <span className="px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-300 text-xs font-bold">TCC 2016</span>
            </div>

            <div className="mt-6 p-5 rounded-xl bg-slate-950/80 border border-slate-800/90">
              <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider"><BookOpen className="w-4 h-4" /> Trabalho de Conclusão de Curso</div>
              <p className="mt-2 text-base font-semibold text-slate-100 italic leading-snug">“{PERSONAL_INFO.education.tccTitle}”</p>
              <div className="mt-3 pt-3 border-t border-slate-800/80 text-xs text-slate-400">Orientação: <strong className="text-slate-200">{PERSONAL_INFO.education.advisor}</strong></div>
            </div>

            <p className="mt-5 text-xs sm:text-sm text-slate-400 leading-relaxed">{PERSONAL_INFO.education.tccSummary}</p>
            <div className="mt-5 flex items-start gap-2 text-xs text-slate-400"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" /><span>O tema conecta avaliação cardiorrespiratória, crescimento e prática esportiva no futebol de base.</span></div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-red-950/40 border border-red-800/40 flex items-center justify-center text-red-400"><ShieldCheck className="w-6 h-6" /></div>
                <div><span className="text-xs font-bold text-red-400 uppercase tracking-wider">Sistema CONFEF/CREFs</span><h3 className="text-xl font-bold text-white">CREF10/PB</h3></div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800"><div className="text-[11px] text-slate-400 uppercase">Registro</div><div className="text-xl font-black text-white font-mono mt-1">{PERSONAL_INFO.cref.number}</div><div className="text-[11px] text-slate-500 mt-1">Referência regional: {PERSONAL_INFO.cref.regionalCode}</div></div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800"><div className="text-[11px] text-slate-400 uppercase">Situação cadastral</div><div className="text-xl font-black text-emerald-400 mt-1">{PERSONAL_INFO.cref.status}</div><div className="text-[11px] text-slate-400 mt-1">{PERSONAL_INFO.cref.category} • consulta {PERSONAL_INFO.cref.consultedAt}</div></div>
            </div>

            <p className="mt-5 text-xs sm:text-sm text-slate-400 leading-relaxed">{PERSONAL_INFO.cref.verification}</p>

            <div className="mt-5 space-y-3">
              <a href="https://www.confef.org.br/confef/eleicoes/relatorio3.php?id=PB" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 rounded-xl bg-slate-950/70 border border-slate-800 p-3 text-xs font-bold text-slate-200 hover:border-slate-700">Nominata oficial CONFEF <ExternalLink className="w-4 h-4 text-red-400" /></a>
              <a href="https://www.cref10.org.br/site/registrado.php?pagina=1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 rounded-xl bg-slate-950/70 border border-slate-800 p-3 text-xs font-bold text-slate-200 hover:border-slate-700">Consulta cadastral CREF10/PB <ExternalLink className="w-4 h-4 text-red-400" /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
