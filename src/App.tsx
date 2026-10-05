import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FamilyStory } from './components/FamilyStory';
import { Philosophy } from './components/Philosophy';
import { Credentials } from './components/Credentials';
import { Timeline } from './components/Timeline';
import { Institutions } from './components/Institutions';
import { SportsManagement } from './components/SportsManagement';
import { MediaHighlight } from './components/MediaHighlight';
import { Competitions } from './components/Competitions';
import { Gallery } from './components/Gallery';
import { ResearchArticle } from './components/ResearchArticle';
import { SourcesSection } from './components/SourcesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DossierModal } from './components/DossierModal';

export default function App() {
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090c10] text-slate-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Fixed Navigation */}
      <Navbar onOpenDossier={() => setIsDossierOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenDossier={() => setIsDossierOpen(true)} />

        {/* História, Raízes e Família (O Pai Nelson) */}
        <FamilyStory />

        {/* Pilares Pedagógicos e Valores ("Dentro e Fora de Campo") */}
        <Philosophy />

        {/* Formação Acadêmica UFPB & Registro CREF10/PB */}
        <Credentials />

        {/* Linha do Tempo Cronológica Documentada */}
        <Timeline />

        {/* Instituições de Atuação (Flamengo PB, Colégio Elohim, Instituto Garotinho) */}
        <Institutions />

        {/* Gestão esportiva e uso de tecnologia na rotina */}
        <SportsManagement />

        {/* Destaque na Mídia (Globo Esporte / ge 2015: Inclusão e Treinamento) */}
        <MediaHighlight />

        {/* Competições e Homologações Oficiais (CBF7, PE Cup, Copa Fla) */}
        <Competitions />

        {/* Releitura temática do TCC de 2016 */}
        <ResearchArticle />

        {/* Fontes públicas, matérias e registros verificáveis */}
        <SourcesSection />

        {/* Galeria de Fotos & Memórias */}
        <Gallery />

        {/* Seção de Contato e Conexão Direta */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Imprimível / Visualizador de Dossiê Curricular em PDF */}
      <DossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />
    </div>
  );
}
