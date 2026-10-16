import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Smartphone, ExternalLink, ArrowLeft, KeyRound } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-screen pt-28 pb-16 px-6 flex items-center justify-center relative overflow-hidden bg-primary-light dark:bg-primary-dark transition-colors duration-300">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-light/10 dark:bg-secondary-dark/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-md w-full bg-white dark:bg-slate-900/90 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-white/10 backdrop-blur-xl">
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
          Acesso Seguro
        </h1>
        <p className="text-sm text-center text-gray-600 dark:text-gray-300 mb-8">
          Acesse sua conta Momentus com segurança através do aplicativo multiplataforma ou no navegador.
        </p>

        {/* Info Box: Deep Link App */}
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-start gap-3">
            <Smartphone className="w-6 h-6 text-accent-light dark:text-accent-dark shrink-0 mt-0.5" />
            <div>
              <h2 className="text-sm font-bold text-gray-900 dark:text-white">Abrir no Aplicativo</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                Se você já possui o Momentus instalado no celular ou tablet, pode abrir diretamente.
              </p>
              <a
                href="momentus://login"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-accent-light dark:text-accent-dark hover:underline"
              >
                Abrir no App Momentus <ExternalLink size={12} />
              </a>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-secondary-light dark:text-secondary-dark shrink-0 mt-0.5" />
            <div>
              <h2 className="text-sm font-bold text-gray-900 dark:text-white">Autenticação Criptografada</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                Seus dados e credenciais são protegidos com Google Identity Toolkit, Firebase Auth e criptografia de ponta a ponta.
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 space-y-3">
          <a
            href="https://play.google.com/store/apps/details?id=br.com.fabriciolima.momentus"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark text-white font-bold text-center block shadow-lg hover:shadow-accent-light/40 dark:hover:shadow-accent-dark/40 hover:scale-[1.02] transition-all duration-300"
          >
            Baixar ou Atualizar no Google Play
          </a>

          <Link
            to="/home"
            className="w-full py-3.5 px-6 rounded-full border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-200 font-semibold text-center block hover:bg-gray-100 dark:hover:bg-white/5 transition-all text-sm"
          >
            Explorar Funcionalidades
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Dúvidas ou suporte à sua conta? Entre em contato via{' '}
            <a href="mailto:fabriciodacostalima@gmail.com" className="text-accent-light dark:text-accent-dark font-medium underline">
              fabriciodacostalima@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
