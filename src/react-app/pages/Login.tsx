import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Smartphone,
  ExternalLink,
  ArrowLeft,
  KeyRound,
  CheckCircle2,
  Lock,
  Layers
} from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-screen pt-28 pb-16 px-6 flex items-center justify-center relative overflow-hidden bg-primary-light dark:bg-primary-dark transition-colors duration-300">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-light/10 dark:bg-secondary-dark/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-xl w-full bg-white dark:bg-slate-900/90 rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-200 dark:border-white/10 backdrop-blur-xl">
        <Link
          to="/home"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-accent-light dark:hover:text-accent-dark transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Voltar para o Início
        </Link>

        {/* Icon Header */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark flex items-center justify-center shadow-lg text-white">
            <KeyRound size={32} />
          </div>
        </div>

        <h1 className="text-3xl font-black text-center text-highlight-light dark:text-highlight-dark mb-2">
          Login Multiplataforma
        </h1>
        <p className="text-sm text-center text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto leading-relaxed">
          O <strong>Momentus</strong> é multiplataforma. Você pode gerenciar suas rotinas e hábitos diretamente no navegador ou pelo aplicativo em qualquer dispositivo.
        </p>

        {/* Métodos de Acesso Multiplataforma */}
        <div className="space-y-4">
          {/* Opção 1: Web App no Navegador */}
          <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-accent-light/50 dark:hover:border-accent-dark/50 transition-colors">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-accent-light/15 dark:bg-accent-dark/15 text-accent-light dark:text-accent-dark shrink-0">
                <Globe size={22} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    Acessar via Web no Navegador
                  </h2>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-accent-light/20 text-accent-light dark:text-accent-dark">
                    Online
                  </span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                  Utilize o Momentus direto no Chrome, Safari, Edge ou Firefox em qualquer computador (Windows, Mac, Linux) ou celular.
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[12px] text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-accent-light dark:text-accent-dark" /> Google Login Popup
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-accent-light dark:text-accent-dark" /> E-mail e Senha
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-accent-light dark:text-accent-dark" /> Sincronização em Nuvem
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200/60 dark:border-white/10 flex items-center justify-between">
                  <a
                    href="/app/login"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-light dark:bg-accent-dark text-slate-900 font-bold text-xs shadow-md hover:scale-105 transition-all"
                  >
                    <span>Abrir Momentus Web</span>
                    <ExternalLink size={13} />
                  </a>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400">Sem instalação</span>
                </div>
              </div>
            </div>
          </div>

          {/* Opção 2: App Nativo Mobile (Android / iOS) */}
          <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-secondary-light/50 dark:hover:border-secondary-dark/50 transition-colors">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-secondary-light/15 dark:bg-secondary-dark/15 text-secondary-light dark:text-secondary-dark shrink-0">
                <Smartphone size={22} />
              </div>
              <div className="flex-1">
                <h2 className="text-base font-bold text-gray-900 dark:text-white">
                  Aplicativo Móvel Instalado
                </h2>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                  Notificações inteligentes no dispositivo, sincronização com a Google Agenda e modo offline com SQLite.
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="momentus://login"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary-light dark:text-secondary-dark hover:underline"
                  >
                    Abrir App (Deep Link) <ExternalLink size={12} />
                  </a>
                  <span className="text-gray-400">•</span>
                  <a
                    href="https://play.google.com/store/apps/details?id=br.com.fabriciolima.momentus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 dark:text-gray-300 hover:text-accent-light dark:hover:text-accent-dark hover:underline"
                  >
                    Google Play Store <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Como Funciona o Login Multiplataforma */}
          <div className="p-4 rounded-2xl bg-primary-light/40 dark:bg-slate-800/50 border border-gray-200 dark:border-white/10">
            <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers size={14} className="text-accent-light dark:text-accent-dark" /> Como funciona a sincronização?
            </h3>
            <ol className="text-xs text-gray-600 dark:text-gray-300 space-y-1.5 list-decimal list-inside leading-relaxed">
              <li>Faça login com seu <strong>E-mail</strong> ou <strong>Conta Google</strong> no Web App ou no App Android.</li>
              <li>Suas rotinas, categorias, tarefas e histórico de gamificação (XP e Streak) sincronizam automaticamente na nuvem (Cloud Firestore).</li>
              <li>Você pode alternar entre computador, celular ou tablet a qualquer momento sem perder seus dados.</li>
            </ol>
          </div>
        </div>

        {/* Security Badge */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <Lock size={14} className="text-accent-light dark:text-accent-dark" />
          <span>Autenticação protegida via Firebase Auth e Google Identity Toolkit</span>
        </div>

        {/* Actions */}
        <div className="mt-6 space-y-3">
          <a
            href="https://play.google.com/store/apps/details?id=br.com.fabriciolima.momentus"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark text-white font-bold text-center block shadow-lg hover:shadow-accent-light/40 dark:hover:shadow-accent-dark/40 hover:scale-[1.02] transition-all duration-300"
          >
            Instalar Aplicativo no Google Play
          </a>

          <Link
            to="/home"
            className="w-full py-3 px-6 rounded-full border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-200 font-semibold text-center block hover:bg-gray-100 dark:hover:bg-white/5 transition-all text-sm"
          >
            Voltar para a Página Principal
          </Link>
        </div>

        {/* Footer Contact */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Dúvidas, suporte ou integração corporativa? Entre em contato via{' '}
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
