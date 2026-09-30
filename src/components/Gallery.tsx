import React, { useState } from 'react';
import { Camera, CheckCircle, Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { INITIAL_GALLERY } from '../data/portfolioData';
import { GalleryItem } from '../types/portfolio';

export const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-[#0c1017] border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-red-400 uppercase tracking-widest"><Camera className="w-3.5 h-3.5" /> Acervo fotográfico validado</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Fotos reais, sem imagens ilustrativas</h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">As imagens fictícias da versão inicial foram retiradas. Esta galeria reúne somente fotografias e registros confirmados pela família, preservando o contexto profissional sempre que ele pôde ser identificado.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INITIAL_GALLERY.map((item) => (
            <motion.button key={item.id} onClick={() => setSelectedItem(item)} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-left rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-slate-700 transition-colors group">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-contain bg-slate-950 group-hover:scale-[1.01] transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white"><Maximize2 className="w-4 h-4" /></div>
                <div className="absolute bottom-3 left-3 right-3"><span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-emerald-950/80 border border-emerald-800/50 text-[10px] font-bold text-emerald-300"><CheckCircle className="w-3 h-3" /> {item.badge}</span></div>
              </div>
              <div className="p-5"><div className="text-[10px] uppercase tracking-wider font-bold text-red-400">{item.year}</div><h3 className="mt-1 text-lg font-bold text-white">{item.title}</h3><p className="mt-2 text-xs text-slate-400 leading-relaxed">{item.description}</p></div>
            </motion.button>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-400 text-center">O acervo pode ser ampliado posteriormente com novos registros de campeonatos, Escola Flamengo, Colégio Elohim e Instituto Garotinho, mantendo o mesmo critério de validação.</div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-sm p-4 flex items-center justify-center" onClick={() => setSelectedItem(null)}>
            <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedItem(null)} className="absolute -top-12 right-0 text-white p-2"><X className="w-6 h-6" /></button>
              <img src={selectedItem.imageUrl} alt={selectedItem.title} className="w-full max-h-[78vh] object-contain rounded-xl" />
              <div className="mt-3 text-center"><div className="font-bold text-white">{selectedItem.title}</div><div className="text-xs text-slate-400 mt-1">{selectedItem.description}</div></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
