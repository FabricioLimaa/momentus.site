import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-400/20 blur-2xl rounded-full"></div>
            <img 
              src="https://mocha-cdn.com/019a5f62-1bf7-7b03-b5ba-9712744a0167/app_logo.webp" 
              alt="Momentus Logo" 
              className="relative w-32 h-32 rounded-full shadow-2xl"
              loading="eager"
              fetchpriority="high"
              width="128"
              height="128"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
          Momentus
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl text-emerald-400 font-semibold mb-8">
          Organize suas metas, conquiste seu dia.
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Seu organizador pessoal inteligente para criar rotinas, acompanhar hábitos 
          e alcançar seus objetivos com gamificação e conquistas.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#download" 
            aria-label="Baixar o aplicativo Momentus no Google Play"
            className="group relative px-12 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">Baixar no Google Play</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a 
            href="#features" 
            aria-label="Ver as funcionalidades do aplicativo Momentus"
            className="px-12 py-5 bg-white/10 backdrop-blur-sm text-white text-lg font-semibold rounded-full border-2 border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            Ver Funcionalidades
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-emerald-400 mx-auto" />
        </div>
      </div>
    </section>
  );
}
