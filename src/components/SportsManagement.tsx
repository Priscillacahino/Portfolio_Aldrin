import React from 'react';
import { ClipboardList, Clock3, UsersRound, ExternalLink, Code2, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

export const SportsManagement: React.FC = () => {
  const benefits = [
    {
      icon: ClipboardList,
      title: 'Organização da rotina',
      text: 'Centraliza atletas, categorias, equipes, jogos, horários, campos e informações do torneio em um único fluxo.'
    },
    {
      icon: Clock3,
      title: 'Mais tempo para os alunos',
      text: 'Reduz controles manuais e tarefas repetitivas, liberando tempo fora do campo para planejamento, acompanhamento e desenvolvimento dos atletas.'
    },
    {
      icon: UsersRound,
      title: 'Informação mais acessível',
      text: 'Facilita o acompanhamento das competições por pais e atletas, com informações organizadas e menos dependência de atualizações individuais.'
    }
  ];

  return (
    <section id="gestao" className="py-20 sm:py-28 bg-[#0c1017] border-t border-slate-800/80 relative overflow-hidden">
      <div className="absolute -top-32 right-0 w-80 h-80 bg-red-950/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-red-400 uppercase tracking-widest">
            <Lightbulb className="w-3.5 h-3.5" /> Gestão & inovação
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tecnologia aplicada à rotina do futebol de base
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            A rotina de um professor não termina quando o treino acaba. Organizar atletas, categorias, equipes, jogos, horários e informações para as famílias também faz parte do trabalho.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden"
        >
          <div className="p-6 sm:p-9">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-7">
              <div className="max-w-3xl">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-red-400">Aldrin Torneios</div>
                <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
                  Organização e tecnologia a serviço do futebol de base
                </h3>
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  O <strong className="text-white">Aldrin Torneios</strong> nasceu a partir de necessidades reais da rotina esportiva, como uma solução para tornar a organização das competições mais simples, reduzir o tempo gasto com controles manuais e facilitar o acompanhamento das informações.
                </p>
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  A participação de Aldrin está no <strong className="text-white">contexto de uso, nas necessidades da rotina esportiva e na utilização da ferramenta</strong>. O objetivo é usar melhor o tempo fora do campo para dedicar mais atenção ao que realmente importa: os alunos e seu desenvolvimento.
                </p>
              </div>

              <div className="lg:w-72 shrink-0 rounded-2xl bg-slate-950/70 border border-slate-800 p-5">
                <div className="flex items-center gap-2 text-red-400">
                  <Code2 className="w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-wider">Crédito do projeto</span>
                </div>
                <dl className="mt-4 space-y-4">
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Contexto de uso</dt>
                    <dd className="mt-1 text-sm font-semibold text-slate-200">Aldrin Eldrin Santos Cahino</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Produto e desenvolvimento</dt>
                    <dd className="mt-1 text-sm font-semibold text-slate-200">Priscilla Cahino</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {benefits.map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-950/60 border border-slate-800 p-5">
                  <item.icon className="w-5 h-5 text-red-400" />
                  <h4 className="mt-3 text-sm font-bold text-white">{item.title}</h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <p className="text-xs text-slate-500">
                A ferramenta apoia a gestão esportiva; sua autoria tecnológica permanece claramente atribuída à desenvolvedora.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Priscillacahino/Aldrin_soccer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors shadow-md shadow-red-950/40"
                >
                  Conhecer o projeto <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://portfoliopriscilla.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-bold transition-colors"
                >
                  Portfólio da desenvolvedora <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
