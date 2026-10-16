import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const location = useLocation();

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const isHome = location.pathname === '/' || location.pathname === '/home';

  const navLinks = [
    { name: 'Início', href: isHome ? '#top' : '/home' },
    { name: 'Funcionalidades', href: isHome ? '#features' : '/home#features' },
    { name: 'Telas', href: isHome ? '#screenshots' : '/home#screenshots' },
    { name: 'Download', href: isHome ? '#download' : '/home#download' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-primary-dark/85 border-b border-gray-200/50 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Brand */}
        <Link to="/home" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-accent-light/30 dark:bg-accent-dark/30 blur-md rounded-full group-hover:scale-110 transition-transform duration-300"></div>
            <img
              src={
                isDark
                  ? '/assets/image/escuro/06-logo-fundo-escuro-400.webp'
                  : '/assets/image/claro/06-logo-fundo-claro-400.webp'
              }
              alt="Momentus Logo"
              className="relative w-10 h-10 rounded-full shadow-md object-cover"
              width="40"
              height="40"
            />
          </div>
          <span className="text-2xl font-black tracking-tight text-highlight-light dark:text-highlight-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors duration-300">
            Momentus
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions: Theme & Login */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema claro/escuro"
            className="p-2.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-200"
          >
            {isDark ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-gray-700" />}
          </button>

          <Link
            to="/login"
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark text-white font-bold text-sm shadow-md hover:shadow-accent-light/40 dark:hover:shadow-accent-dark/40 hover:scale-105 transition-all duration-300"
          >
            <LogIn size={16} />
            <span>Entrar / Login</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200"
          >
            {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-primary-dark/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-accent-light dark:hover:text-accent-dark py-1"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-gray-200 dark:border-white/10 flex flex-col gap-3">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark text-white font-bold text-base shadow-md"
              >
                <LogIn size={18} />
                <span>Entrar no Momentus</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
