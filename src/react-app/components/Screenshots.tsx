import { Sun, Moon } from 'lucide-react';
import type { ScreenshotType } from '../../shared/types';
import { useTheme } from '../hooks/useTheme';

const screenshots: ScreenshotType[] = [
  {
    light: {
      url: '/assets/image/v2/claro/01-home-foco-no-agora-720.webp',
      srcset: [
        '/assets/image/v2/claro/01-home-foco-no-agora-400.webp 400w',
        '/assets/image/v2/claro/01-home-foco-no-agora-720.webp 720w',
      ],
    },
    dark: {
      url: '/assets/image/v2/escuro/01-home-foco-no-agora-720.webp',
      srcset: [
        '/assets/image/v2/escuro/01-home-foco-no-agora-400.webp 400w',
        '/assets/image/v2/escuro/01-home-foco-no-agora-720.webp 720w',
      ],
    },
    badge: 'Hoje',
    title: 'Foco no Agora',
    description: 'Sequência diária, progresso circular e destaque automático na tarefa em andamento.',
  },
  {
    light: {
      url: '/assets/image/v2/claro/02-modo-foco-pomodoro-720.webp',
      srcset: [
        '/assets/image/v2/claro/02-modo-foco-pomodoro-400.webp 400w',
        '/assets/image/v2/claro/02-modo-foco-pomodoro-720.webp 720w',
      ],
    },
    dark: {
      url: '/assets/image/v2/escuro/02-modo-foco-pomodoro-720.webp',
      srcset: [
        '/assets/image/v2/escuro/02-modo-foco-pomodoro-400.webp 400w',
        '/assets/image/v2/escuro/02-modo-foco-pomodoro-720.webp 720w',
      ],
    },
    badge: 'Foco',
    title: 'Modo Foco Pomodoro',
    description: 'Timer circular neon com meta diária de foco e paisagens sonoras relaxantes.',
  },
  {
    light: {
      url: '/assets/image/v2/claro/03-agenda-google-calendar-720.webp',
      srcset: [
        '/assets/image/v2/claro/03-agenda-google-calendar-400.webp 400w',
        '/assets/image/v2/claro/03-agenda-google-calendar-720.webp 720w',
      ],
    },
    dark: {
      url: '/assets/image/v2/escuro/03-agenda-google-calendar-720.webp',
      srcset: [
        '/assets/image/v2/escuro/03-agenda-google-calendar-400.webp 400w',
        '/assets/image/v2/escuro/03-agenda-google-calendar-720.webp 720w',
      ],
    },
    badge: 'Agenda',
    title: 'Agenda & Google Calendar',
    description: 'Visão mensal completa integrada aos seus eventos do Google com badges por categoria.',
  },
  {
    light: {
      url: '/assets/image/v2/claro/04-estatisticas-insights-720.webp',
      srcset: [
        '/assets/image/v2/claro/04-estatisticas-insights-400.webp 400w',
        '/assets/image/v2/claro/04-estatisticas-insights-720.webp 720w',
      ],
    },
    dark: {
      url: '/assets/image/v2/escuro/04-estatisticas-insights-720.webp',
      srcset: [
        '/assets/image/v2/escuro/04-estatisticas-insights-400.webp 400w',
        '/assets/image/v2/escuro/04-estatisticas-insights-720.webp 720w',
      ],
    },
    badge: 'Estatísticas',
    title: 'Insights de Produtividade',
    description: 'Identificação automática do seu melhor dia, turno e faixa horária de rendimento.',
  },
  {
    light: {
      url: '/assets/image/v2/claro/05-conquistas-evolucao-xp-720.webp',
      srcset: [
        '/assets/image/v2/claro/05-conquistas-evolucao-xp-400.webp 400w',
        '/assets/image/v2/claro/05-conquistas-evolucao-xp-720.webp 720w',
      ],
    },
    dark: {
      url: '/assets/image/v2/escuro/05-conquistas-evolucao-xp-720.webp',
      srcset: [
        '/assets/image/v2/escuro/05-conquistas-evolucao-xp-400.webp 400w',
        '/assets/image/v2/escuro/05-conquistas-evolucao-xp-720.webp 720w',
      ],
    },
    badge: 'Gamificação',
    title: 'Conquistas & Evolução XP',
    description: 'Curva histórica neon de XP por mês ou trimestre, níveis e medalhas desbloqueáveis.',
  },
  {
    light: {
      url: '/assets/image/v2/claro/06-templates-widgets-720.webp',
      srcset: [
        '/assets/image/v2/claro/06-templates-widgets-400.webp 400w',
        '/assets/image/v2/claro/06-templates-widgets-720.webp 720w',
      ],
    },
    dark: {
      url: '/assets/image/v2/escuro/06-templates-widgets-720.webp',
      srcset: [
        '/assets/image/v2/escuro/06-templates-widgets-400.webp 400w',
        '/assets/image/v2/escuro/06-templates-widgets-720.webp 720w',
      ],
    },
    badge: 'Produtividade',
    title: 'Templates & Widget Nativo',
    description: 'Galeria da comunidade com rotinas consagradas e widget direto na tela inicial.',
  },
];

export default function Screenshots() {
  const theme = useTheme();
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <section
      id="screenshots"
      className="relative py-24 md:py-32 px-6 overflow-hidden bg-primary-light dark:bg-primary-dark transition-colors duration-300"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-accent-light/5 via-transparent to-transparent dark:from-accent-dark/5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-accent-light/10 dark:bg-accent-dark/15 text-accent-light dark:text-accent-dark border border-accent-light/25 dark:border-accent-dark/30 mb-4">
            Interface Real do App
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-highlight-light dark:text-highlight-dark mb-5 tracking-tight">
            Veja o Momentus em Ação
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Consistência visual em cada aba, com suporte nativo aos modos Escuro e Claro.
          </p>

          {/* Interactive Light/Dark Preview Switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 shadow-sm hover:border-accent-light dark:hover:border-accent-dark transition-all duration-200"
          >
            {isDark ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Pré-visualizar telas no Modo Claro</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-secondary-light" />
                <span>Pré-visualizar telas no Modo Escuro</span>
              </>
            )}
          </button>
        </div>

        {/* 6 Real Consistent App Screens Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {screenshots.map((screenshot) => {
            const image = isDark ? screenshot.dark : screenshot.light;
            return (
              <div key={screenshot.title} className="group flex flex-col items-center">
                {/* Phone frame */}
                <div className="relative w-full max-w-[300px]">
                  <div className="relative bg-gradient-to-b from-slate-800 to-slate-950 dark:from-slate-700 dark:to-slate-900 rounded-[2.75rem] p-2.5 shadow-2xl border border-slate-300/60 dark:border-slate-600/40 group-hover:border-accent-light/60 dark:group-hover:border-accent-dark/60 transition-all duration-500 group-hover:-translate-y-2">
                    <div className="relative rounded-[2.2rem] overflow-hidden bg-slate-950">
                      <img
                        src={image.url}
                        srcSet={image.srcset.join(', ')}
                        sizes="(max-width: 640px) 280px, 300px"
                        alt={`Tela ${screenshot.title} do aplicativo Momentus`}
                        className="w-full h-auto block"
                        loading="lazy"
                        width="720"
                        height="1560"
                      />
                    </div>
                  </div>
                  {/* Soft ambient hover glow */}
                  <div className="absolute -inset-2 -z-10 bg-gradient-to-br from-accent-light/20 to-secondary-light/20 dark:from-accent-dark/20 dark:to-secondary-dark/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem]"></div>
                </div>

                {/* Always-visible Caption */}
                <div className="mt-6 text-center max-w-[300px]">
                  {screenshot.badge && (
                    <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-accent-light dark:text-accent-dark mb-1.5">
                      {screenshot.badge}
                    </span>
                  )}
                  <h3 className="text-xl font-extrabold text-highlight-light dark:text-highlight-dark mb-2">
                    {screenshot.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {screenshot.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
