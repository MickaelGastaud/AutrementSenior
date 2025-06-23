'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';


export default function AvanceImmediate() {
  const [activeTab, setActiveTab] = useState('classique');

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const avantages = [
    {
      icon: "💰",
      titre: "50% de réduction immédiate",
      description: "Bénéficiez instantanément de votre crédit d'impôt sur chaque facture"
    },
    {
      icon: "🎯",
      titre: "Simple et automatique",
      description: "Nous gérons toutes les démarches administratives avec l'Urssaf"
    },
    {
      icon: "📊",
      titre: "Transparence totale",
      description: "Suivez votre consommation de crédit d'impôt en temps réel"
    },
    {
      icon: "✅",
      titre: "Service gratuit",
      description: "Aucun frais supplémentaire pour activer ce service"
    }
  ];

  const etapes = [
    {
      numero: "1",
      titre: "Contactez-nous",
      description: "Informez votre conseiller Autrement Senior de votre souhait"
    },
    {
      numero: "2",
      titre: "Activation simple",
      description: "Nous effectuons les démarches auprès de l'Urssaf pour vous"
    },
    {
      numero: "3",
      titre: "Bénéficiez immédiatement",
      description: "Dès le mois suivant, profitez de la réduction sur vos factures"
    }
  ];


  <Head>
  <title>Avance Immédiate Crédit d'Impôt - Aide à Domicile | Autrement Senior</title>
  <meta name="description" content="Activez dès aujourd'hui l'avance immédiate de crédit d'impôt avec Autrement Senior et payez 50% de vos factures d'aide à domicile. Service simple, rapide, gratuit." />
  <meta name="keywords" content="avance immédiate, crédit d'impôt, aide à domicile, Autrement Senior, service à la personne, réduction impôt urssaf" />
  <meta property="og:title" content="Avance Immédiate Crédit d'Impôt | Autrement Senior" />
  <meta property="og:description" content="Ne payez que 50% de vos factures d'aide à domicile grâce à l'avance immédiate mise en place par l'Urssaf. Service simple et gratuit." />
  <meta property="og:url" content="https://autrementsenior.fr/avance-immediate" />
  <meta property="og:site_name" content="Autrement Senior" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://autrementsenior.fr/images/avance-immediate-og.jpg" />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Avance Immédiate Crédit d'Impôt",
        "provider": {
          "@type": "Organization",
          "name": "Autrement Senior",
          "url": "https://autrementsenior.fr"
        },
        "areaServed": {
          "@type": "Place",
          "name": "France"
        },
        "description": "Activez dès aujourd'hui l'avance immédiate de crédit d'impôt avec Autrement Senior et payez 50% de vos factures d'aide à domicile ou de Coordination"
      })
    }}
  />
</Head>

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto">
            <span className="inline-block bg-secondary/20 text-secondary-dark px-4 py-2 rounded-full text-sm font-semibold mb-6">
              💳 Nouveau service Urssaf
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              L'avance immédiate de <span className="text-primary">crédit d'impôt</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Ne payez que 50% de vos factures d'aide à domicile dès maintenant, 
              sans attendre le remboursement l'année suivante
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all text-lg shadow-xl hover:shadow-2xl"
              >
                Activer l'avance immédiate
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="#fonctionnement"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-all text-lg shadow-xl"
              >
                En savoir plus
              </a>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Comparaison Crédit d'impôt */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comparez les deux options
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choisissez la formule qui vous convient le mieux pour bénéficier de votre crédit d'impôt
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-1 rounded-lg inline-flex">
                <button
                  onClick={() => setActiveTab('classique')}
                  className={`px-6 py-3 rounded-md font-medium transition-all ${
                    activeTab === 'classique'
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Crédit d'impôt classique
                </button>
                <button
                  onClick={() => setActiveTab('immediat')}
                  className={`px-6 py-3 rounded-md font-medium transition-all ${
                    activeTab === 'immediat'
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Avance immédiate
                </button>
              </div>
            </div>

            {/* Contenu des tabs */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              {activeTab === 'classique' ? (
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Étape 1 */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">💳</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Acheter un service</h3>
                    <p className="text-gray-600">
                      Vous réglez l'intégralité de vos factures d'aide à domicile
                    </p>
                  </div>

                  {/* Étape 2 */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">📄</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Déclarer sa dépense</h3>
                    <p className="text-gray-600">
                      Vous déclarez vos dépenses lors de votre déclaration de revenus
                    </p>
                  </div>

                  {/* Étape 3 */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">💶</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Économiser 50%</h3>
                    <p className="text-gray-600">
                      Vous récupérez 50% l'année suivante (60% en janvier, 40% en été)
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Étape 1 */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🤝</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Acheter un service</h3>
                    <p className="text-gray-600">
                      Vous optez pour Autrement Senior et activez l'avance immédiate
                    </p>
                  </div>

                  {/* Étape 2 */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">📋</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Le lien déclare votre achat</h3>
                    <p className="text-gray-600">
                      Nous transmettons vos données à l'administration fiscale automatiquement
                    </p>
                  </div>

                  {/* Étape 3 */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🎯</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Économiser 50%</h3>
                    <p className="text-gray-600">
                      Vous ne payez que 50% dès la réception de votre facture
                    </p>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Message clé */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <p className={`text-lg font-medium ${
                activeTab === 'immediat' ? 'text-primary' : 'text-gray-700'
              }`}>
                {activeTab === 'immediat' 
                  ? "✨ Plus besoin d'avancer la trésorerie !"
                  : "⏳ Remboursement différé à l'année suivante"
                }
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section id="fonctionnement" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment fonctionne l'avance immédiate ?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Un dispositif mis en place par l'Urssaf depuis janvier 2022 pour simplifier votre quotidien
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Un exemple concret
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-red-600">❌</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Sans avance immédiate</p>
                        <p className="text-gray-600">Facture de 200€ → Vous payez 200€</p>
                        <p className="text-sm text-gray-500">Remboursement de 100€ l'année suivante</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-green-600">✓</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Avec avance immédiate</p>
                        <p className="text-gray-600">Facture de 200€ → Vous payez 100€</p>
                        <p className="text-sm text-green-600">Réduction appliquée instantanément !</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Plafonds annuels</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700">
                        <strong>12 000€</strong> de dépenses éligibles par an
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700">
                        Soit <strong>6 000€</strong> de crédit d'impôt maximum
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700">
                        Des plafonds majorés dans certains cas particuliers
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Les avantages de l'avance immédiate
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {avantages.map((avantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{avantage.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{avantage.titre}</h3>
                <p className="text-gray-600">{avantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Éligibilité */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Qui peut bénéficier de ce dispositif ?
            </h2>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Toute personne ayant recours à une aide à domicile</h3>
                    <p className="text-gray-600">Personne âgée, en perte d'autonomie ou en situation de handicap</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Imposable ou non imposable</h3>
                    <p className="text-gray-600">Le crédit d'impôt est accessible à tous, même si vous ne payez pas d'impôt</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Services éligibles</h3>
                    <p className="text-gray-600">Aide à la toilette, aide ménagère, préparation des repas, compagnie, présence de nuit...</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-amber-800 mb-1">Attention</p>
                      <p className="text-amber-700 text-sm">
                        Ce dispositif n'est pas cumulable avec l'APA (Allocation Personnalisée d'Autonomie) 
                        ou la PCH (Prestation de Compensation du Handicap). Dans ce cas, vous bénéficierez 
                        du crédit d'impôt lors de votre déclaration annuelle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Étapes d'activation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment activer l'avance immédiate ?
            </h2>
            <p className="text-xl text-gray-700">
              En 3 étapes simples, bénéficiez de votre crédit d'impôt instantanément
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Ligne verticale */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>

              {etapes.map((etape, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-start mb-12 last:mb-0"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    {etape.numero}
                  </div>
                  <div className="ml-8 flex-1 bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{etape.titre}</h3>
                    <p className="text-gray-600">{etape.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à économiser 50% dès maintenant ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Activez l'avance immédiate et simplifiez votre quotidien. 
            Nos conseillers vous accompagnent dans toutes les démarches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all text-lg shadow-xl"
            >
              Activer maintenant
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="tel:0649604199"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              06.49.60.41.99
            </a>
          </div>
          <p className="mt-8 text-white/60 text-sm">
            Service gratuit et sans engagement • Activation sous 48h
          </p>
        </motion.div>
      </div>
    </section>
  </main>
);
}