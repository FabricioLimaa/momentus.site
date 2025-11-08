import { ArrowDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDarkMode(true);
    }
    // Listen for changes to the theme
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-light/10 dark:bg-secondary-dark/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-accent-light/20 dark:bg-accent-dark/20 blur-2xl rounded-full"></div>
            <img 
              src={isDarkMode ? "/assets/image/05-logo-fundo-escuro-400.webp" : "/assets/image/06-logo-fundo-claro-400.webp"}
              srcSet={isDarkMode ? `
                /assets/image/05-logo-fundo-escuro-400.webp 400w,
                /assets/image/05-logo-fundo-escuro-800.webp 800w,
                /assets/image/05-logo-fundo-escuro-1000.webp 1000w
              ` : `
                /assets/image/06-logo-fundo-claro-400.webp 400w,
                /assets/image/06-logo-fundo-claro-800.webp 800w,
                /assets/image/06-logo-fundo-claro-1000.webp 1000w
              `}
              sizes="(max-width: 128px) 100vw, 128px"
              alt="Momentus Logo" 
              className="relative w-32 h-32 rounded-full shadow-2xl"
              loading="eager"
              fetchPriority="high"
              width="128"
              height="128"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-highlight-light dark:text-highlight-dark mb-6 tracking-tight">
          Momentus
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl text-accent-light dark:text-accent-dark font-semibold mb-8">
          Organize suas metas, conquiste seu dia.
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Seu organizador pessoal inteligente para criar rotinas, acompanhar hábitos 
          e alcançar seus objetivos com gamificação e conquistas.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#download" 
            aria-label="Baixar o aplicativo Momentus no Google Play"
            className="group relative px-12 py-5 bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-accent-light/50 dark:hover:shadow-accent-dark/50 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">Baixar no Google Play</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-light/80 to-secondary-light/80 dark:from-accent-dark/80 dark:to-secondary-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a 
            href="#features" 
            aria-label="Ver as funcionalidades do aplicativo Momentus"
            className="px-12 py-5 bg-highlight-light/10 dark:bg-highlight-dark/10 backdrop-blur-sm text-highlight-light dark:text-highlight-dark text-lg font-semibold rounded-full border-2 border-highlight-light/20 dark:border-highlight-dark/20 hover:bg-highlight-light/20 dark:hover:bg-highlight-dark/20 transition-all duration-300 hover:scale-105"
          >
            Ver Funcionalidades
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-accent-light dark:text-accent-dark mx-auto" />
        </div>
      </div>
    </section>
  );
}
