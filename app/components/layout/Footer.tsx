import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Section principale du footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Colonne 1 : À propos */}
          <div>
            {/* Logo */}
            <Link href="/" className="inline-block mb-4 group">
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10">
                  <svg viewBox="0 0 48 48" className="w-full h-full">
                    <text x="8" y="32" className="text-3xl font-bold fill-primary group-hover:fill-primary-light transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>A</text>
                    <text x="24" y="32" className="text-3xl font-bold fill-secondary group-hover:fill-secondary-light transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>S</text>
                    <circle cx="40" cy="8" r="1.5" className="fill-white opacity-60" />
                    <circle cx="44" cy="12" r="1" className="fill-white opacity-40" />
                    <circle cx="42" cy="16" r="1" className="fill-white opacity-40" />
                  </svg>
                </div>
                <div>
                  <span className="text-lg font-bold text-primary group-hover:text-primary-light transition-colors">Autrement</span>
                  <span className="text-lg font-bold text-secondary group-hover:text-secondary-light transition-colors"> Senior</span>
                </div>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-4 text-sm">
              Care Management et accompagnement personnalisé pour vos proches âgés. 
              Un service bienveillant et professionnel.
            </p>
            
            {/* Informations légales */}
            <div className="space-y-1 text-sm text-gray-400">
              <p><strong className="text-gray-300">N° SAP :</strong> SAP911830974</p>
              <p><strong className="text-gray-300">Marque déposée :</strong> N°5013954</p>
            </div>
          </div>

          {/* Colonne 2 : Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/care-manager" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Le Care Manager, c'est quoi ?
                </Link>
              </li>
              <li>
                <Link href="/cesu" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Auxiliaire de vie CESU
                </Link>
              </li>
              <li>
                <Link href="/solution#coordination" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Coordination des soins
                </Link>
              </li>
              <li>
                <Link href="/solution#formation" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Formation des aidants
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Informations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Informations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/actualites" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Actualités
                </Link>
              </li>
              <li>
                <Link href="/presse" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Presse
                </Link>
              </li>
              <li>
                <Link href="/franchise" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Ouvrez votre agence
                </Link>
              </li>
              <li>
                <button className="text-gray-400 hover:text-accent transition-colors text-sm text-left">
                  Newsletter
                </button>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:0649604199" className="flex items-start gap-2 text-gray-400 hover:text-accent transition-colors group">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>06.49.60.41.99</span>
              </a>
              
              <a href="mailto:contact@autrement-senior.fr" className="flex items-start gap-2 text-gray-400 hover:text-accent transition-colors group">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>expertise@autrementsenior.fr</span>
              </a>
              
              <div className="flex items-start gap-2 text-gray-400">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Montpellier et Région Occitanie</span>
              </div>
            </div>
            
            {/* Réseaux sociaux */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Suivez-nous</h4>
              <div className="flex gap-3">
                <a href="https://instagram.com/autrementsenior" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barre du bas avec liens légaux */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Autrement Senior. Tous droits réservés.
            </p>
            
            <nav className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/legal/engagements" className="text-gray-400 hover:text-accent transition-colors">
                Nos engagements
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/legal/cgv" className="text-gray-400 hover:text-accent transition-colors">
                CGV
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/legal/confidentialite" className="text-gray-400 hover:text-accent transition-colors">
                Politique de confidentialité
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/legal/mentions-legales" className="text-gray-400 hover:text-accent transition-colors">
                Mentions légales
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}