import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, ArrowRight, ArrowLeft } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function Login() {
  const theme = useTheme();
  const isDark = theme === 'dark';

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
            href="https://app.momentusapp.com.br/login"
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

          {/* Opção 2: App Mobile Instalado */}
          <a
            href="momentus://login"
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
                  Se já instalado no celular
                </p>
              </div>
            </div>
            <ArrowRight size={18} className="text-gray-400 group-hover:text-secondary-light dark:group-hover:text-secondary-dark group-hover:translate-x-1 transition-all" />
          </a>
        </div>

        {/* Botão de Download Google Play */}
        <div className="mt-8">
          <a
            href="https://play.google.com/store/apps/details?id=br.com.fabriciolima.momentus"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark text-white font-bold text-center block text-sm shadow-md hover:scale-[1.02] transition-transform duration-200"
          >
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
