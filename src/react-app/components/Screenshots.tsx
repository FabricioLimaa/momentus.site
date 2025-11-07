import type { ScreenshotType } from '../../shared/types';

const screenshots: ScreenshotType[] = [
  {
    url: 'https://mocha-cdn.com/019a5f62-1bf7-7b03-b5ba-9712744a0167/01-login.png',
    title: 'Login Simplificado',
    description: 'Entre facilmente com Google ou e-mail'
  },
  {
    url: 'https://mocha-cdn.com/019a5f62-1bf7-7b03-b5ba-9712744a0167/03-calendar.png',
    title: 'Calendário Completo',
    description: 'Visualize todos seus eventos em um só lugar'
  },
  {
    url: 'https://mocha-cdn.com/019a5f62-1bf7-7b03-b5ba-9712744a0167/04-new-event.png',
    title: 'Criar Eventos',
    description: 'Adicione eventos com categorias personalizadas'
  },
  {
    url: 'https://mocha-cdn.com/019a5f62-1bf7-7b03-b5ba-9712744a0167/10-.png',
    title: 'Conquistas',
    description: 'Acompanhe seu progresso e desbloqueie prêmios'
  }
];

export default function Screenshots() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-emerald-500/5 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Veja o Momentus em Ação
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interface intuitiva e moderna projetada para máxima produtividade
          </p>
        </div>

        {/* Screenshots carousel */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {screenshots.map((screenshot) => (
            <div 
              key={screenshot.url}
              className="group relative"
            >
              {/* Phone frame */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105">
                {/* Screen */}
                <div className="relative rounded-[2.5rem] overflow-hidden bg-black">
                  <img 
                    src={screenshot.url} 
                    alt={screenshot.title}
                    className="w-full h-auto"
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
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
