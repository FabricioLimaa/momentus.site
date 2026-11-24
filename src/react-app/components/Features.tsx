import {
  Target,
  Timer,
  Calendar,
  Sparkles,
  Trophy,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import type { FeatureType } from '../../shared/types';

const features: (FeatureType & { icon: LucideIcon })[] = [
  {
    badge: 'Foco no Presente',
    icon: Target,
    title: 'Timeline com Foco no Agora',
    description:
      'O hábito em andamento ganha destaque neon automático enquanto tarefas concluídas ou pendentes ficam em segundo plano para reduzir a sobrecarga visual.',
  },
  {
    badge: 'Imersão Total',
    icon: Timer,
    title: 'Modo Foco Pomodoro & Sons',
    description:
      'Ciclos configuráveis com meta diária de minutos, ganho contínuo de XP e paisagens sonoras ambientes (Chuva Suave, Ondas ou Ruído Marrom).',
  },
  {
    badge: 'Sincronização Real',
    icon: Calendar,
    title: 'Agenda & Google Calendar',
    description:
      'Visualize o mês e a semana com clareza, organize rotinas por categorias coloridas e sincronize seus compromissos do Google Calendar em tempo real.',
  },
  {
    badge: 'Análise Local',
    icon: Sparkles,
    title: 'Insights de Produtividade',
    description:
      'Descubra automaticamente em qual dia da semana, turno e janela horária você produz melhor — tudo calculado localmente com privacidade.',
  },
  {
    badge: 'Gamificação Zen',
    icon: Trophy,
    title: 'Conquistas & Evolução de XP',
    description:
      'Acompanhe seu crescimento em um gráfico histórico neon de XP, mantenha sequências (streaks) e desbloqueie medalhas sem pressão tóxica.',
  },
  {
    badge: 'Privacidade & Praticidade',
    icon: ShieldCheck,
    title: 'Templates, Widgets & AES-256',
    description:
      'Adote rotinas populares da comunidade em 1 toque, acompanhe o dia pelo widget na tela inicial e proteja seus dados com criptografia local AES-256.',
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-24 md:py-32 px-6 bg-primary-light dark:bg-primary-dark transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-accent-light/10 dark:bg-accent-dark/15 text-accent-light dark:text-accent-dark border border-accent-light/25 dark:border-accent-dark/30 mb-4">
            Projetado para consistência real
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-highlight-light dark:text-highlight-dark mb-5 tracking-tight">
            Funcionalidades Poderosas
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Cada tela do Momentus segue a filosofia de Despoluição Zen: menos atrito, mais clareza e resultados sustentáveis.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white dark:bg-surface-dark/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/80 dark:border-slate-700/70 hover:border-accent-light/60 dark:hover:border-accent-dark/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-light/10 dark:hover:shadow-accent-dark/10"
            >
              {/* Header row: icon + badge */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="inline-flex p-3.5 rounded-2xl bg-gradient-to-br from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white dark:text-slate-950" />
                </div>
                {feature.badge && (
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {feature.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-extrabold text-highlight-light dark:text-highlight-dark mb-3 group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
