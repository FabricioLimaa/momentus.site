import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();

  return (
    <footer className="relative py-12 px-6 border-t border-slate-200 dark:border-slate-800 bg-primary-light dark:bg-primary-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <img
                src={theme === 'dark' ? "/assets/image/escuro/06-logo-fundo-escuro-400.webp" : "/assets/image/claro/06-logo-fundo-claro-400.webp"}
                srcSet={theme === 'dark' ? `
                  /assets/image/escuro/06-logo-fundo-escuro-400.webp 400w,
                  /assets/image/escuro/06-logo-fundo-escuro-800.webp 800w,
                  /assets/image/escuro/06-logo-fundo-escuro-1000.webp 1000w
                ` : `
                  /assets/image/claro/06-logo-fundo-claro-400.webp 400w,
                  /assets/image/claro/06-logo-fundo-claro-800.webp 800w,
                  /assets/image/claro/06-logo-fundo-claro-1000.webp 1000w
                `}
                sizes="2.5rem"
                alt="Momentus"
                className="w-10 h-10 rounded-full"
                loading="lazy"
                width="40"
                height="40"
              />
              <span className="text-2xl font-black text-highlight-light dark:text-highlight-dark">Momentus</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Viva o presente. Domine sua rotina.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="https://app.momentus.app.br/" className="text-accent-light dark:text-accent-dark font-bold hover:underline">
              Acessar App Web
            </a>
            <a href="#features" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200">
              Funcionalidades
            </a>
            <a href="#screenshots" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200">
              Telas
            </a>
            <a href="#download" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200">
              Download
            </a>
            <Link to="/privacy-policy" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200">
              Política de Privacidade
            </Link>
            <Link to="/terms" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200">
              Termos e Condições
            </Link>
            <Link to="/license" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200">
              Licença
            </Link>
            <a href="mailto:contato@momentus.app.br" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200">
              contato@momentus.app.br
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Momentus • Desenvolvido por Fabricio Lima. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
