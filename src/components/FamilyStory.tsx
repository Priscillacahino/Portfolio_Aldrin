import React from 'react';
import { Heart, Compass, Shield, Users, Target, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const FamilyStory: React.FC = () => {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-[#090c10] border-t border-slate-800/80 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-red-400 uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500/20" />
            Raízes & Filosofia de Vida
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            O Esporte como Legado: Da Família para a Vocação
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            A relação com o esporte começou em casa e se transformou em uma trajetória profissional voltada ao futebol de base, à Educação Física e à formação de crianças e adolescentes.
          </p>
        </motion.div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Story Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            
            <div className="prose prose-invert max-w-none text-slate-300 space-y-5 text-sm sm:text-base leading-relaxed">
              <p>
                O esporte sempre fez parte da história de <strong className="text-white">Aldrin Eldrin Santos Cahino</strong>. Ainda na infância, o incentivo fundamental veio de dentro de casa.
              </p>
              
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="p-5 rounded-xl bg-gradient-to-r from-red-950/30 to-slate-900/60 border border-red-900/40 text-slate-200 transition-shadow hover:shadow-lg hover:shadow-red-950/20"
              >
                <p className="italic text-base sm:text-lg font-serif leading-relaxed text-red-200">
                  “Seu pai, <strong>Nelson</strong>, sempre incentivou que ambos — Aldrin e sua irmã — praticassem esporte, compreendendo que a atividade física era indispensável tanto para o desenvolvimento físico quanto para o fortalecimento mental, emocional e moral.”
                </p>
              </motion.div>

              <p>
                Nas primeiras escolinhas em que jogou, Aldrin aprendeu muito mais do que fundamentos técnicos de passe, drible e finalização. O ambiente esportivo ensinou na prática o que significa ter <strong>disciplina</strong>, cultivar o <strong>respeito ao coletivo</strong> e nutrir uma autêntica <strong>vontade de superar limites</strong>.
              </p>

              <p>
                Com o passar dos anos, aquilo que era vivência de infância transformou-se em decisão de vida. Na graduação em Educação Física pela <strong>Universidade Federal da Paraíba (UFPB)</strong>, Aldrin aproximou a formação acadêmica de uma realidade que já fazia parte de sua trajetória: o futebol de base.
              </p>

              <p className="text-white font-medium">
                A trajetória profissional começou praticamente ao mesmo tempo em dois ambientes que seguem presentes em sua história: a <strong>escola</strong> e o <strong>futebol de base</strong>. Aldrin iniciou como estagiário e logo se firmou como professor, construindo experiências no Colégio Elohim, na Escola Flamengo Paraíba e, mais tarde, em projetos esportivos e sociais. Em todos esses espaços, técnica, disciplina e convivência caminham juntas.
              </p>
            </div>

            {/* Quick Core Pillars Highlight */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: Shield, title: "Disciplina Pessoal", text: "Compromisso com o processo, regras, horários e dedicação diária." },
                { icon: Users, title: "Convivência Coletiva", text: "Entender o valor do companheiro e a força do espírito de equipe." },
                { icon: Target, title: "Vontade de Vencer", text: "Competitividade saudável aliada ao respeito inegociável às regras." },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -3 }}
                  className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 transition-colors hover:border-slate-700"
                >
                  <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase">
                    <item.icon className="w-4 h-4" />
                    {item.title}
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Right Side Visual Highlight Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-xl overflow-hidden group hover:border-slate-700 transition-colors">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-105 transition-transform">
                  <Compass className="w-6 h-6" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  “Antes de formar jogadores, existe a responsabilidade de ajudar a formar pessoas.”
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Para Aldrin, cada treino é uma aula de cidadania. Quando uma criança erra um passe, aprende a receber apoio e a persistir; quando o time sofre um gol, aprende a não apontar culpados; e quando alcança uma vitória, compreende que o triunfo é fruto do esforço de todos.
                </p>

                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Fórmula de Formação:</span>
                    <span className="text-slate-200 font-semibold">Técnica + Caráter</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Ambiente de Atuação:</span>
                    <span className="text-slate-200 font-semibold">Campo, Quadra e Sala de Aula</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Direção Pedagógica:</span>
                    <span className="text-emerald-400 font-semibold">Formação com respeito e inclusão</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#valores"
                    className="inline-flex items-center gap-2 text-xs font-bold text-red-400 hover:text-red-300 transition-colors"
                  >
                    Ver os pilares de formação pelo esporte
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
