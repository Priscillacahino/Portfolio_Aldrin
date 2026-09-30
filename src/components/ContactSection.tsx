import React from 'react';
import { Instagram, MapPin, Shield, Award, ExternalLink, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-20 sm:py-28 bg-[#090c10] border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-red-400 uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" /> Contato profissional
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Canais públicos confirmados</h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Nesta versão, o portfólio exibe somente canais públicos confirmados. Telefone, WhatsApp e e-mail só devem ser adicionados após validação direta com Aldrin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href={PERSONAL_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-slate-700 transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-pink-950/50 border border-pink-800/40 flex items-center justify-center text-pink-400"><Instagram className="w-5 h-5" /></div>
            <div className="mt-4 text-xs uppercase tracking-wider font-bold text-slate-500">Perfil profissional</div>
            <div className="mt-1 text-xl font-bold text-white group-hover:text-red-300">{PERSONAL_INFO.social.instagramUsername}</div>
            <p className="mt-2 text-sm text-slate-400">Perfil público de Aldrin para acompanhamento de sua atuação profissional e esportiva.</p>
            <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-red-400">Abrir Instagram <ExternalLink className="w-3.5 h-3.5" /></div>
          </a>

          <a href={PERSONAL_INFO.social.flamengoInstagram} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-slate-700 transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-red-950/50 border border-red-800/40 flex items-center justify-center text-red-400"><Award className="w-5 h-5" /></div>
            <div className="mt-4 text-xs uppercase tracking-wider font-bold text-slate-500">Escola Flamengo Paraíba</div>
            <div className="mt-1 text-xl font-bold text-white group-hover:text-red-300">{PERSONAL_INFO.social.flamengoUsername}</div>
            <p className="mt-2 text-sm text-slate-400">Canal institucional indicado no perfil profissional de Aldrin.</p>
            <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-red-400">Abrir Instagram <ExternalLink className="w-3.5 h-3.5" /></div>
          </a>
        </div>

        <div className="mt-6 rounded-2xl bg-slate-900 border border-slate-800 p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
          <div className="flex items-start gap-3"><MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /><div><strong className="text-white">Local de atuação:</strong><br />{PERSONAL_INFO.social.location}</div></div>
          <div className="flex items-start gap-3"><Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><div><strong className="text-white">Registro:</strong><br />CREF {PERSONAL_INFO.cref.number}</div></div>
        </div>
      </div>
    </section>
  );
};
