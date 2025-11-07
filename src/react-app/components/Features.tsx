import { Calendar, Target, Trophy, Bell, Layout, Sparkles, type LucideIcon } from 'lucide-react';
import type { FeatureType } from '../../shared/types';

const features: (FeatureType & { icon: LucideIcon })[] = [
  {
    icon: Layout,
    title: 'Templates de Rotinas',
    description: 'Crie templates personalizados para suas rotinas diárias, semanais ou mensais e reutilize-os facilmente.',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Calendar,
    title: 'Calendário Inteligente',
    description: 'Visualize todos os seus eventos e compromissos em um calendário intuitivo e fácil de usar.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Trophy,
    title: 'Conquistas e Estatísticas',
    description: 'Acompanhe seu progresso com estatísticas detalhadas e desbloqueie conquistas conforme completa seus hábitos.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Bell,
    title: 'Notificações Inteligentes',
    description: 'Receba lembretes personalizados para nunca perder um compromisso ou esquecer um hábito importante.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Target,
    title: 'Formação de Hábitos',
    description: 'Desenvolva hábitos positivos com ferramentas de rastreamento e motivação baseadas em ciência comportamental.',
    gradient: 'from-red-500 to-rose-500'
  },
  {
    icon: Sparkles,
    title: 'Widget Android',
    description: 'Acesse suas tarefas diretamente da tela inicial com um widget moderno e personalizável.',
    gradient: 'from-indigo-500 to-violet-500'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Funcionalidades Poderosas
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tudo que você precisa para organizar sua vida e alcançar seus objetivos
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative element */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
