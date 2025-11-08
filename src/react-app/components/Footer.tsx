import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();

  return (
    <footer className="relative py-12 px-6 border-t border-highlight-light/10 dark:border-highlight-dark/10 bg-primary-light dark:bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <img 
                src={theme === 'dark' ? "/assets/image/escuro/05-logo-fundo-escuro-400.webp" : "/assets/image/claro/06-logo-fundo-claro-400.webp"}
                srcSet={theme === 'dark' ? `
                  /assets/image/escuro/05-logo-fundo-escuro-400.webp 400w,
                  /assets/image/escuro/05-logo-fundo-escuro-800.webp 800w,
                  /assets/image/escuro/05-logo-fundo-escuro-1000.webp 1000w
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
              <span className="text-2xl font-bold text-highlight-light dark:text-highlight-dark">Momentus</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400">Organize suas metas, conquiste seu dia.</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-500 dark:text-gray-400">
            <a href="#features" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-300">
              Funcionalidades
            </a>
            <a href="#download" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-300">
              Download
            </a>
            <Link to="/privacy-policy" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-300">
              Política de Privacidade
            </Link>
            <Link to="/terms" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-300">
              Termos e Condições
            </Link>
            <Link to="/license" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-300">
              Licença
            </Link>
            <a href="mailto:contato@momentus.app" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-300">
              Contato
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-highlight-light/10 dark:border-highlight-dark/10 text-center text-gray-500 dark:text-gray-400">
          <p>© {currentYear} Momentus. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
