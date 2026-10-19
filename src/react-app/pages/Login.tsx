import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, ArrowRight, ArrowLeft, Download } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=br.com.fabriciolima.momentus';
const WEB_APP_URL = 'https://app.momentusapp.com.br/login';

export default function Login() {
  const theme = useTheme();
  const isDark = theme === 'dark';

  const { appUrl, platformInfo } = useMemo(() => {
    if (typeof window === 'undefined') {
      return {
        appUrl: WEB_APP_URL,
        platformInfo: 'Web ou Mobile',
      };
    }

    const ua = navigator.userAgent || '';
    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);

    if (isAndroid) {
      // Intent nativo para abrir diretamente a MainActivity do app nativo já instalado (br.com.fabriciolima.momentus)
      // Utiliza ACTION_MAIN e CATEGORY_LAUNCHER com o componente da MainActivity nativa
      const intentUrl = `intent:#Intent;action=android.intent.action.MAIN;category=android.intent.category.LAUNCHER;package=br.com.fabriciolima.momentus;component=br.com.fabriciolima.momentus/.ui.screens.MainActivity;S.browser_fallback_url=${encodeURIComponent(PLAY_STORE_URL)};end`;
      return {
        appUrl: intentUrl,
        platformInfo: 'Abrir app nativo instalado',
      };
    }

    if (isIOS) {
      return {
        appUrl: 'momentus://login',
        platformInfo: 'No iPhone ou iPad',
      };
    }

    return {
      appUrl: WEB_APP_URL,
      platformInfo: 'Acessar no computador',
    };
  }, []);

  const handleOpenApp = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const ua = navigator.userAgent || '';
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const isAndroid = /Android/i.test(ua);

    // Se estiver no iOS, faz a tentativa do scheme com fallback inteligente caso o app não esteja instalado
    if (isIOS) {
      e.preventDefault();
      const start = Date.now();
      window.location.href = 'momentus://login';
      setTimeout(() => {
        if (document.hidden || Date.now() - start > 2200) return;
        window.location.href = WEB_APP_URL;
      }, 1500);
      return;
    }

    // Se não for mobile (Desktop / PC), direciona diretamente para o Web App
    if (!isAndroid && !isIOS) {
      e.preventDefault();
      window.location.href = WEB_APP_URL;
      return;
    }

    // No Android, deixa a navegação nativa do link disparar o intent:// diretamente sem bloqueio do navegador
  };

  return (
    <div className="min-h-screen pt-28 pb-16 px-6 flex items-center justify-center relative overflow-hidden bg-primary-light dark:bg-primary-dark transition-colors duration-300">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-light/10 dark:bg-secondary-dark/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-md w-full bg-white dark:bg-slate-900/90 rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-200 dark:border-white/10 backdrop-blur-xl">
        <Link
          to="/home"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-accent-light dark:hover:text-accent-dark transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Voltar para o Início
        </Link>

        {/* Logo */}
        <div className="flex justify-center mb-5">
          <div className="relative">
            <div className="absolute inset-0 bg-accent-light/20 dark:bg-accent-dark/20 blur-xl rounded-full"></div>
            <img
              src={
                isDark
                  ? '/assets/image/escuro/06-logo-fundo-escuro-400.webp'
                  : '/assets/image/claro/06-logo-fundo-claro-400.webp'
              }
              alt="Momentus Logo"
              className="relative w-16 h-16 rounded-full shadow-lg object-cover"
              width="64"
              height="64"
            />
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-black text-center text-highlight-light dark:text-highlight-dark mb-2">
          Entrar no Momentus
        </h1>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-8">
          Escolha como deseja acessar sua conta:
        </p>

        {/* Opções Diretas e Limpas */}
        <div className="space-y-4">
          {/* Opção 1: Web App */}
          <a
            href={WEB_APP_URL}
            className="group flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-accent-light dark:hover:border-accent-dark hover:shadow-lg hover:shadow-accent-light/10 transition-all duration-300"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-accent-light/15 dark:bg-accent-dark/15 text-accent-light dark:text-accent-dark flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Globe size={22} />
              </div>
              <div className="text-left">
                <h2 className="text-sm font-bold text-gray-900 dark:text-white">
                  Acessar no Navegador
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  app.momentusapp.com.br
                </p>
              </div>
            </div>
            <ArrowRight size={18} className="text-gray-400 group-hover:text-accent-light dark:group-hover:text-accent-dark group-hover:translate-x-1 transition-all" />
          </a>

          {/* Opção 2: App Mobile Instalado com fallback inteligente */}
          <a
            href={appUrl}
            onClick={handleOpenApp}
            className="group flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-secondary-light dark:hover:border-secondary-dark hover:shadow-lg hover:shadow-secondary-light/10 transition-all duration-300"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-secondary-light/15 dark:bg-secondary-dark/15 text-secondary-light dark:text-secondary-dark flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Smartphone size={22} />
              </div>
              <div className="text-left">
                <h2 className="text-sm font-bold text-gray-900 dark:text-white">
                  Abrir no Aplicativo
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {platformInfo}
                </p>
              </div>
            </div>
            <ArrowRight size={18} className="text-gray-400 group-hover:text-secondary-light dark:group-hover:text-secondary-dark group-hover:translate-x-1 transition-all" />
          </a>
        </div>

        {/* Botão de Download Google Play */}
        <div className="mt-8">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark text-white font-bold text-center flex items-center justify-center gap-2 text-sm shadow-md hover:scale-[1.02] transition-transform duration-200"
          >
            <Download size={16} />
            Baixar no Google Play
          </a>
        </div>

        {/* Rodapé Simples */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10 text-center">
          <p className="text-xs text-gray-400">
            Dúvidas?{' '}
            <a
              href="mailto:contato@momentusapp.com.br"
              className="text-accent-light dark:text-accent-dark font-medium underline"
            >
              contato@momentusapp.com.br
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
