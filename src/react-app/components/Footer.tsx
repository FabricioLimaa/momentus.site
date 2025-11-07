export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <img 
                src="https://mocha-cdn.com/019a5f62-1bf7-7b03-b5ba-9712744a0167/app_logo.png" 
                alt="Momentus" 
                className="w-10 h-10 rounded-full"
              />
              <span className="text-2xl font-bold text-white">Momentus</span>
            </div>
            <p className="text-gray-400">Organize suas metas, conquiste seu dia.</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            <a href="#features" className="hover:text-emerald-400 transition-colors duration-300">
              Funcionalidades
            </a>
            <a href="#download" className="hover:text-emerald-400 transition-colors duration-300">
              Download
            </a>
            <a href="mailto:contato@momentus.app" className="hover:text-emerald-400 transition-colors duration-300">
              Contato
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
          <p>© {currentYear} Momentus. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
