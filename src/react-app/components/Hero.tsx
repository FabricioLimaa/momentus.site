import { ArrowRight, Globe, Smartphone, ShieldCheck, Sparkles, CalendarCheck } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const WEB_APP_URL = 'https://app.momentus.app.br/';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=br.com.fabriciolima.momentus';

export default function Hero() {
  const theme = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="top"
      className="relative flex flex-col items-center justify-center px-6 pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-primary-light dark:bg-primary-dark transition-colors duration-300"
    >
      {/* Ambient Zen background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-12 left-1/4 w-[28rem] h-[28rem] bg-accent-light/15 dark:bg-accent-dark/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-12 right-1/4 w-[26rem] h-[26rem] bg-secondary-light/15 dark:bg-secondary-dark/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Platform Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 dark:bg-surface-dark/80 border border-slate-200 dark:border-slate-700/80 shadow-sm mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-accent-light dark:bg-accent-dark animate-pulse"></span>
          <span className="text-xs md:text-sm font-bold tracking-wide text-slate-700 dark:text-slate-200">
            Web App + Android • iOS em breve
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-highlight-light dark:text-highlight-dark mb-6 tracking-tight leading-[1.08]">
          Viva o presente.{' '}
          <span className="bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark bg-clip-text text-transparent">
            Domine sua rotina.
          </span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Organize hábitos com foco no agora, Timer Pomodoro com paisagens sonoras,
          Agenda sincronizada ao Google Calendar, Insights inteligentes e gamificação Zen —
          em sincronia no computador e no celular.
        </p>

        {/* Primary & Secondary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a
            href={WEB_APP_URL}
            aria-label="Acessar o Momentus Web App agora"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark text-white dark:text-slate-950 text-base md:text-lg font-extrabold rounded-full shadow-xl shadow-accent-light/25 dark:shadow-accent-dark/20 hover:scale-[1.03] transition-all duration-300"
          >
            <Globe className="w-5 h-5" />
            <span>Acessar App Web</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Baixar o aplicativo Momentus no Google Play"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-sm text-highlight-light dark:text-highlight-dark text-base md:text-lg font-bold rounded-full border border-slate-200 dark:border-slate-700 hover:border-accent-light dark:hover:border-accent-dark hover:scale-[1.03] transition-all duration-300 shadow-sm"
          >
            <Smartphone className="w-5 h-5 text-accent-light dark:text-accent-dark" />
            <span>Baixar no Google Play</span>
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mb-14">
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-accent-light dark:text-accent-dark" />
            Design Zen sem anúncios
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarCheck className="w-4 h-4 text-secondary-light dark:text-secondary-dark" />
            Integração Google Calendar
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-accent-light dark:text-accent-dark" />
            Criptografia local AES-256
          </span>
        </div>

        {/* Multiplatform Hero Showcase (Real Desktop + Mobile App Render) */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-2 bg-gradient-to-r from-accent-light/25 via-secondary-light/20 to-accent-light/25 dark:from-accent-dark/25 dark:via-secondary-dark/20 dark:to-accent-dark/25 rounded-[2rem] blur-2xl opacity-75 pointer-events-none"></div>
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 shadow-2xl bg-surface-light dark:bg-surface-dark">
            <img
              src={isDark ? '/assets/image/v2/hero-dark.webp' : '/assets/image/v2/hero-light.webp'}
              alt="Momentus no computador e no celular — Timeline com Foco no Agora e Modo Foco Pomodoro"
              className="w-full h-auto block"
              loading="eager"
              fetchPriority="high"
              width="1920"
              height="1080"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
