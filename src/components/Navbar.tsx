import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Instagram } from 'lucide-react';

interface NavbarProps {
  onOpenDossier: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDossier }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Valores', href: '#valores' },
    { name: 'Formação & CREF', href: '#formacao' },
    { name: 'Trajetória', href: '#trajetoria' },
    { name: 'Atuação', href: '#atuacao' },
    { name: 'Competições', href: '#competicoes' },
    { name: 'Na Mídia', href: '#midia' },
    { name: 'Artigo', href: '#artigo' },
    { name: 'Fontes', href: '#fontes' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090c10]/95 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-red-950/60 ring-1 ring-red-500/40 group-hover:scale-105 transition-transform">
              AC
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-white text-base sm:text-lg tracking-tight group-hover:text-red-400 transition-colors">
                Aldrin Eldrin
              </span>
              <span className="text-[11px] font-medium text-slate-400 tracking-wider uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                CREF 004686-G/PB
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDossier}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg border border-slate-700 transition-all cursor-pointer shadow-sm"
              title="Abrir Dossiê Profissional Imprimível / PDF"
            >
              <FileText className="w-3.5 h-3.5 text-red-400" />
              <span>Dossiê PDF</span>
            </button>

            <a
              href="#contato"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md shadow-red-900/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Contato</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenDossier}
              className="p-2 text-slate-300 bg-slate-800/80 rounded-md border border-slate-700 sm:hidden"
              aria-label="Dossiê"
            >
              <FileText className="w-4 h-4 text-red-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c1017]/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-2 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-md transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDossier();
              }}
              className="w-full py-2.5 px-4 text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-red-400" />
              Visualizar Dossiê & Currículo
            </button>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center gap-2 shadow-md shadow-red-950"
            >
              <Instagram className="w-4 h-4" />
              Entrar em Contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
