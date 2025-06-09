'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Notre Solution', href: '/solution' },
    { label: 'Actualités', href: '/actualites' },
    { label: 'Presse', href: '/presse' },
    { label: 'Ouvrez votre agence', href: '/franchise' },
  ];

  return (
    <>
      {/* Barre supérieure avec téléphone */}
      <div className="bg-primary text-white py-2 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <a href="tel:0649604199" className="hover:text-accent transition-colors inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            06.49.60.41.99
          </a>
        </div>
      </div>

      {/* Header principal */}
      <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo + Texte */}
            <Link href="/" className="group">
              <div className="flex items-center gap-2 transition-all duration-300">
                {/* Logo image */}
                <div className={`w-10 h-auto transition-transform duration-300 transform hover:scale-105`}>
                  <img
                    src="/images/logo.png"
                    alt="Logo Autrement Senior"
                    className="w-full h-auto object-contain"
                  />
                </div>
                {/* Texte à côté du logo */}
                <span className="text-lg sm:text-xl font-bold text-primary group-hover:text-primary-dark transition-colors">Autrement</span>
                <span className="text-lg sm:text-xl font-bold text-secondary group-hover:text-secondary-dark transition-colors">Senior</span>
              </div>
            </Link>

            {/* Menu desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-secondary text-white px-6 py-2.5 rounded-lg hover:bg-secondary-dark transition-all hover:scale-105 font-medium"
              >
                Nous Contacter
              </Link>
            </div>

            {/* Bouton menu mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Menu mobile"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Menu mobile */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="container mx-auto px-4 py-4 border-t border-gray-100">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full text-center bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary-dark transition-all font-medium mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
