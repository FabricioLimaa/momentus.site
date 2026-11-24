import { Globe, ShieldCheck, Cloud, Sparkles, ArrowRight } from 'lucide-react';

const WEB_APP_URL = 'https://app.momentus.app.br/';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=br.com.fabriciolima.momentus';

export default function CallToAction() {
  return (
    <section
      id="download"
      className="relative py-24 md:py-32 px-6 bg-primary-light dark:bg-primary-dark transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 dark:from-surface-dark dark:via-slate-900 dark:to-emerald-950/90 rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-emerald-500/25 overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-dark/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary-dark/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-accent-dark/15 text-accent-dark border border-accent-dark/30 mb-6">
              Comece gratuitamente hoje
            </span>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">
              Pronto para Transformar Sua Rotina?
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Use direto no navegador em qualquer computador ou instale no seu celular Android com sincronização automática em nuvem.
            </p>

            {/* Honest Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-200 text-sm font-semibold">
                <Cloud className="w-5 h-5 text-accent-dark shrink-0" />
                <span>Web & Mobile em Nuvem</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-200 text-sm font-semibold">
                <ShieldCheck className="w-5 h-5 text-secondary-dark shrink-0" />
                <span>Criptografia AES-256</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-200 text-sm font-semibold">
                <Sparkles className="w-5 h-5 text-accent-dark shrink-0" />
                <span>Sem Anúncios • Modo Zen</span>
              </div>
            </div>

            {/* Dual Multiplatform CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WEB_APP_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-gradient-to-r from-accent-dark to-secondary-dark text-slate-950 text-base sm:text-lg font-extrabold rounded-full shadow-xl hover:scale-[1.03] transition-all duration-300"
              >
                <Globe className="w-5 h-5" />
                <span>Abrir App Web Agora</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-white text-slate-900 text-base sm:text-lg font-extrabold rounded-full shadow-xl hover:scale-[1.03] transition-all duration-300"
              >
                <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span>Baixar no Google Play</span>
              </a>
            </div>

            <p className="text-slate-400 text-sm mt-6 font-medium">
              Disponível na Web (app.momentus.app.br) e Android • Versão iOS em desenvolvimento
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
