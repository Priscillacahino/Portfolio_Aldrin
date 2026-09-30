import React from 'react';
import { ArrowUp, Award, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#06080b] border-t border-slate-800/80 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
          <div className="md:col-span-5 space-y-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-red-950">AC</div>
              <div><span className="font-extrabold text-white text-base">Aldrin Eldrin Santos Cahino</span><span className="text-[10px] text-red-400 block font-mono">CREF 004686-G/PB</span></div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">“{PERSONAL_INFO.motto}” — Portfólio profissional de Educação Física, futebol de base e formação através do esporte.</p>
            <div className="flex items-center gap-3 pt-1">
              <a href={PERSONAL_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"><Instagram className="w-4 h-4" /></a>
              <a href={PERSONAL_INFO.social.flamengoInstagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"><Award className="w-4 h-4 text-red-400" /></a>
            </div>
          </div>

          <div className="md:col-span-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Seções do portfólio</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#sobre" className="hover:text-red-400">Sobre & família</a>
              <a href="#valores" className="hover:text-red-400">Valores</a>
              <a href="#formacao" className="hover:text-red-400">UFPB & CREF10</a>
              <a href="#trajetoria" className="hover:text-red-400">Linha do tempo</a>
              <a href="#atuacao" className="hover:text-red-400">Instituições</a>
              <a href="#competicoes" className="hover:text-red-400">Competições</a>
              <a href="#artigo" className="hover:text-red-400">Releitura do TCC</a>
              <a href="#fontes" className="hover:text-red-400">Fontes</a>
            </div>
          </div>

          <div className="md:col-span-3 text-left space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Fontes principais</h4>
            <div className="text-[11px] text-slate-400 space-y-1.5">
              <p>• <strong>UFPB:</strong> registro de TCC de 2016</p>
              <p>• <strong>CONFEF/CREFs:</strong> registro 004686-G/PB</p>
              <p>• <strong>CBF7:</strong> Sub-11 e Sub-13 em 2024</p>
              <p>• <strong>PE Cup Brasil:</strong> técnico do Fla Altiplano-PB</p>
              <p>• <strong>ge:</strong> Copa Fla Nordeste 2015</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>© {new Date().getFullYear()} Aldrin Eldrin Santos Cahino.</div>
          <div className="flex items-center gap-4"><span>João Pessoa — Paraíba, Brasil</span><button onClick={scrollToTop} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"><span>Topo</span><ArrowUp className="w-3 h-3" /></button></div>
        </div>
      </div>
    </footer>
  );
};
