import type { ScreenshotType } from '../../shared/types';
import { useTheme } from '../hooks/useTheme';

const screenshots: ScreenshotType[] = [
  {
    light: {
      url: '/assets/image/claro/01-login-claro-400.webp',
      srcset: [
        '/assets/image/claro/01-login-claro-400.webp 400w',
        '/assets/image/claro/01-login-claro-800.webp 800w',
        '/assets/image/claro/01-login-claro-1200.webp 1200w',
      ],
    },
    dark: {
      url: '/assets/image/escuro/01-login-escuro-400.webp',
      srcset: [
        '/assets/image/escuro/01-login-escuro-400.webp 400w',
        '/assets/image/escuro/01-login-escuro-800.webp 800w',
        '/assets/image/escuro/01-login-escuro-1200.webp 1200w',
      ],
    },
    title: 'Login Simplificado',
    description: 'Entre facilmente com Google ou e-mail'
  },
  {
    light: {
      url: '/assets/image/claro/02-calendar-claro-400.webp',
      srcset: [
        '/assets/image/claro/02-calendar-claro-400.webp 400w',
        '/assets/image/claro/02-calendar-claro-800.webp 800w',
        '/assets/image/claro/02-calendar-claro-1200.webp 1200w',
      ],
    },
    dark: {
      url: '/assets/image/escuro/02-calendar-escuro-400.webp',
      srcset: [
        '/assets/image/escuro/02-calendar-escuro-400.webp 400w',
        '/assets/image/escuro/02-calendar-escuro-800.webp 800w',
        '/assets/image/escuro/02-calendar-escuro-1200.webp 1200w',
      ],
    },
    title: 'Calendário Completo',
    description: 'Visualize todos seus eventos em um só lugar'
  },
  {
    light: {
      url: '/assets/image/claro/03-new-event-claro-400.webp',
      srcset: [
        '/assets/image/claro/03-new-event-claro-400.webp 400w',
        '/assets/image/claro/03-new-event-claro-1200.webp 1200w',
      ],
    },
    dark: {
      url: '/assets/image/escuro/03-new-event-escuro-400.webp',
      srcset: [
        '/assets/image/escuro/03-new-event-escuro-400.webp 400w',
        '/assets/image/escuro/03-new-event-escuro-1200.webp 1200w',
      ],
    },
    title: 'Criar Eventos',
    description: 'Adicione eventos com categorias personalizadas'
  },
  {
    light: {
      url: '/assets/image/claro/04-achievements-claro-400.webp',
      srcset: [
        '/assets/image/claro/04-achievements-claro-400.webp 400w',
        '/assets/image/claro/04-achievements-claro-800.webp 800w',
        '/assets/image/claro/04-achievements-claro-1200.webp 1200w',
      ],
    },
    dark: {
      url: '/assets/image/escuro/04-achievements-escuro-400.webp',
      srcset: [
        '/assets/image/escuro/04-achievements-escuro-400.webp 400w',
        '/assets/image/escuro/04-achievements-escuro-800.webp 800w',
        '/assets/image/escuro/04-achievements-escuro-1200.webp 1200w',
      ],
    },
    title: 'Conquistas',
    description: 'Acompanhe seu progresso e desbloqueie prêmios'
  }
];

export default function Screenshots() {
  const theme = useTheme();

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-primary-light dark:bg-primary-dark">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-accent-light/5 to-transparent dark:from-accent-dark/5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-highlight-light dark:text-highlight-dark mb-6">
            Veja o Momentus em Ação
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-300 max-w-3xl mx-auto">
            Interface intuitiva e moderna projetada para máxima produtividade
          </p>
        </div>

        {/* Screenshots carousel */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {screenshots.map((screenshot) => {
            const image = theme === 'dark' ? screenshot.dark : screenshot.light;
            return (
              <div 
                key={image.url}
                className="group relative"
              >
                {/* Phone frame */}
                <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-[3rem] p-3 shadow-2xl hover:shadow-accent-light/20 dark:hover:shadow-accent-dark/20 transition-all duration-500 hover:scale-105">
                  {/* Screen */}
                  <div className="relative rounded-[2.5rem] overflow-hidden bg-black">
                    <img 
                      src={image.url} 
                      srcSet={image.srcset?.join(', ')}
                      sizes="(max-width: 348px) 100vw, 348px"
                      alt={screenshot.title}
                      className="w-full h-auto"
                      loading="lazy"
                      width="348"
                      height="754"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-2">{screenshot.title}</h3>
                        <p className="text-sm text-gray-300">{screenshot.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent-light/20 to-secondary-light/20 dark:from-accent-dark/20 dark:to-secondary-dark/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
