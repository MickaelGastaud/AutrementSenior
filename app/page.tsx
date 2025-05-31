export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
          Le <span className="text-primary">Care Management</span> pour
          <br />
          <span className="text-secondary">vos proches âgés</span>
        </h1>
        
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
          Un accompagnement personnalisé et bienveillant pour maintenir l'autonomie 
          et le bien-être de vos aînés à domicile.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-up" style={{animationDelay: '0.2s'}}>
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-all hover:scale-105 text-lg font-medium">
            Découvrir notre solution
          </button>
          <button className="bg-accent text-gray-800 px-8 py-3 rounded-lg hover:bg-accent-dark transition-all hover:scale-105 text-lg font-medium">
            Nous contacter
          </button>
        </div>
      </section>

      {/* Section test des couleurs et animations */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Notre palette de couleurs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Carte Primaire */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="w-full h-32 bg-primary rounded-lg mb-4 animate-float"></div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Bienveillance</h3>
            <p className="text-gray-600">Notre couleur principale représente la chaleur humaine et l'engagement.</p>
            <div className="mt-4 flex gap-2">
              <div className="w-8 h-8 bg-primary-light rounded"></div>
              <div className="w-8 h-8 bg-primary rounded"></div>
              <div className="w-8 h-8 bg-primary-dark rounded"></div>
            </div>
          </div>

          {/* Carte Secondaire */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="w-full h-32 bg-secondary rounded-lg mb-4 animate-float" style={{animationDelay: '2s'}}></div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Sérénité</h3>
            <p className="text-gray-600">Le turquoise évoque le calme et la confiance dans notre accompagnement.</p>
            <div className="mt-4 flex gap-2">
              <div className="w-8 h-8 bg-secondary-light rounded"></div>
              <div className="w-8 h-8 bg-secondary rounded"></div>
              <div className="w-8 h-8 bg-secondary-dark rounded"></div>
            </div>
          </div>

          {/* Carte Accent */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="w-full h-32 bg-accent rounded-lg mb-4 animate-float" style={{animationDelay: '4s'}}></div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Vitalité</h3>
            <p className="text-gray-600">Le vert menthe symbolise le renouveau et l'énergie positive.</p>
            <div className="mt-4 flex gap-2">
              <div className="w-8 h-8 bg-accent-light rounded"></div>
              <div className="w-8 h-8 bg-accent rounded"></div>
              <div className="w-8 h-8 bg-accent-dark rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section État du projet */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-3xl shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🚧 Site en construction
          </h2>
          <p className="text-gray-600 mb-6">
            La structure de base est en place ! Prochaines étapes :
          </p>
          <ul className="text-left text-gray-700 space-y-2 max-w-md mx-auto">
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span> Configuration Next.js & Tailwind
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span> Palette de couleurs intégrée
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span> Animations de base
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span> Header responsive avec navigation
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">○</span> Footer avec informations légales
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">○</span> Section "Nos Missions"
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">○</span> Pages du site
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">○</span> Intégration CMS
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}