import { Calendar, Target, Trophy, Bell, Layout, Sparkles, type LucideIcon } from 'lucide-react';
import type { FeatureType } from '../../shared/types';

const features: (FeatureType & { icon: LucideIcon })[] = [
  {
    icon: Layout,
    title: 'Templates de Rotinas',
    description: 'Crie templates personalizados para suas rotinas diárias, semanais ou mensais e reutilize-os facilmente.',
  },
  {
    icon: Calendar,
    title: 'Calendário Inteligente',
    description: 'Visualize todos os seus eventos e compromissos em um calendário intuitivo e fácil de usar.',
  },
  {
    icon: Trophy,
    title: 'Conquistas e Estatísticas',
    description: 'Acompanhe seu progresso com estatísticas detalhadas e desbloqueie conquistas conforme completa seus hábitos.',
  },
  {
    icon: Bell,
    title: 'Notificações Inteligentes',
    description: 'Receba lembretes personalizados para nunca perder um compromisso ou esquecer um hábito importante.',
  },
  {
    icon: Target,
    title: 'Formação de Hábitos',
    description: 'Desenvolva hábitos positivos com ferramentas de rastreamento e motivação baseadas em ciência comportamental.',
  },
  {
    icon: Sparkles,
    title: 'Widget Android',
    description: 'Acesse suas tarefas diretamente da tela inicial com um widget moderno e personalizável.',
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6 bg-primary-light dark:bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-highlight-light dark:text-highlight-dark mb-6">
            Funcionalidades Poderosas
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-300 max-w-3xl mx-auto">
            Tudo que você precisa para organizar sua vida e alcançar seus objetivos
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="group relative bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 dark:border-white/10 hover:bg-white/70 dark:hover:bg-white/10 hover:border-accent-light/50 dark:hover:border-accent-dark/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent-light/20 dark:hover:shadow-accent-dark/20"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-highlight-light dark:text-highlight-dark mb-4 group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative element */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
