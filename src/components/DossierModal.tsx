import React from 'react';
import { X, Printer, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO, COMPETITIONS_DATA, PUBLIC_SOURCES } from '../data/portfolioData';

interface DossierModalProps { isOpen: boolean; onClose: () => void; }

export const DossierModal: React.FC<DossierModalProps> = ({ isOpen, onClose }) => {
  const handlePrint = () => window.print();
  const principalSources = PUBLIC_SOURCES.filter((s) => s.primary).slice(0, 10);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
          <motion.div initial={{ opacity: 0, scale: 0.94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.94, y: 20 }} className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white text-slate-900 border border-slate-300 shadow-2xl p-6 sm:p-10 text-left my-auto">
            <div className="no-print flex items-center justify-between pb-6 mb-6 border-b border-slate-200">
              <div className="flex items-center gap-2 text-red-600 font-extrabold text-sm uppercase tracking-wider"><FileText className="w-5 h-5" /> Dossiê profissional</div>
              <div className="flex items-center gap-2"><button onClick={handlePrint} className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold"><Printer className="w-4 h-4 inline mr-1" />Imprimir / Salvar PDF</button><button onClick={onClose} className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"><X className="w-5 h-5" /></button></div>
            </div>

            <div className="space-y-6 text-slate-900">
              <div className="border-b-2 border-slate-900 pb-5">
                <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">{PERSONAL_INFO.fullName}</h1>
                <p className="text-sm font-bold text-red-700 mt-0.5">Professor de Educação Física • Futebol de Base • Treinamento e Formação Esportiva</p>
                <p className="text-xs text-slate-600 mt-1">João Pessoa, Paraíba • CREF {PERSONAL_INFO.cref.number}</p>
                <div className="mt-4 p-3 bg-red-50 rounded-lg border-l-4 border-red-600 text-xs italic text-red-950">“{PERSONAL_INFO.motto}”</div>
              </div>

              <section>
                <h2 className="text-sm font-black uppercase tracking-wider border-b border-slate-300 pb-1 mb-3">1. Formação e registro</h2>
                <div className="space-y-3 text-xs leading-relaxed">
                  <div><strong className="text-sm">Educação Física — UFPB</strong><div className="text-slate-700">Registro de TCC em 2016.</div></div>
                  <div className="bg-slate-50 p-3 rounded border border-slate-200"><strong>TCC:</strong> <em>“{PERSONAL_INFO.education.tccTitle}”</em><br /><strong>Orientador:</strong> {PERSONAL_INFO.education.advisor}.</div>
                  <div><strong>CREF10/PB:</strong> o nome e o número {PERSONAL_INFO.cref.number} constam em nominata oficial do Sistema CONFEF/CREFs. Em consulta cadastral fornecida para este portfólio em {PERSONAL_INFO.cref.consultedAt}, o registro aparece como {PERSONAL_INFO.cref.category} e {PERSONAL_INFO.cref.status}.</div>
                </div>
              </section>

              <section>
                <h2 className="text-sm font-black uppercase tracking-wider border-b border-slate-300 pb-1 mb-3">2. Trajetória documentada</h2>
                <div className="space-y-3 text-xs leading-relaxed">
                  <div><strong>2015 — Copa Fla Nordeste:</strong> o ge identifica Aldrin como treinador do Sub-15 de João Pessoa; a matéria registra o vice-campeonato e a participação de Jeyce Karla.</div>
                  <div><strong>2024 — CBF7:</strong> Preparador Físico da Escola Flamengo João Pessoa Sub-11 e Auxiliar Técnico da Escola Flamengo Sub-13, conforme registros oficiais.</div>
                  <div><strong>2024 — PE Cup Brasil:</strong> técnico do Fla Altiplano-PB em registro nominal da competição.</div>
                  <div><strong>2026 — CREF10/PB:</strong> consulta cadastral fornecida para o portfólio em 30/09/2026 apresenta o registro PB-004686 como LICENCIADO e ATIVO.</div>
                  <div><strong>Colégio Elohim:</strong> atuação como professor de Educação Física e participação no esporte escolar. Página pública de torneio do colégio identifica “Profº Aldrin Eldrin” como coordenador do evento.</div>
                  <div><strong>Instituto Garotinho:</strong> colaboração voluntária em apoio aos professores e às crianças em atividades esportivas e torneios, dentro de um projeto social sem fins lucrativos.</div>
                </div>
              </section>

              <section>
                <h2 className="text-sm font-black uppercase tracking-wider border-b border-slate-300 pb-1 mb-3">3. Competições com registro público</h2>
                <div className="space-y-2.5 text-xs">
                  {COMPETITIONS_DATA.map((c) => <div key={c.id} className="p-2.5 rounded bg-slate-50 border border-slate-200"><div className="font-bold">{c.name} ({c.year})</div><div className="text-slate-700 mt-0.5"><strong>Função:</strong> {c.role} • <strong>Equipe:</strong> {c.team}</div><div className="text-[11px] text-slate-500 mt-1">Fonte: {c.verifiedSource}</div></div>)}
                </div>
              </section>

              <section>
                <h2 className="text-sm font-black uppercase tracking-wider border-b border-slate-300 pb-1 mb-3">4. Fontes principais para consulta</h2>
                <div className="space-y-2 text-xs">
                  {principalSources.map((s) => <div key={s.id} className="p-2.5 rounded bg-slate-50 border border-slate-200"><strong>{s.publisher} — {s.title}</strong><div className="text-slate-600 mt-0.5 break-all">{s.url}</div></div>)}
                </div>
              </section>

              <div className="pt-4 border-t-2 border-slate-900 text-xs text-slate-600"><strong>Contato público:</strong> {PERSONAL_INFO.social.instagramUsername} • {PERSONAL_INFO.social.flamengoUsername}<br /><strong>Fontes:</strong> registros jornalísticos, esportivos, profissionais, escolares e institucionais reunidos no portfólio.</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
