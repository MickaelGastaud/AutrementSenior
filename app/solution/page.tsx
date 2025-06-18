'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function NotreSolution() {
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  // Schema.org pour le SEO local et service
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://autrementsenior.fr/#business",
        "name": "Autrement Senior - Care Management Hérault",
        "alternateName": "Autrement Senior Care Management",
        "description": "Premier service de Care Management dans l'Hérault. Coordination médico-sociale et accompagnement personnalisé pour seniors à Montpellier et alentours.",
        "url": "https://autrementsenior.fr",
        "telephone": "06-49-60-41-99",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Montpellier",
          "addressRegion": "Hérault",
          "postalCode": "34000",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 43.610769,
          "longitude": 3.876716
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:00"
        },
        "founder": {
          "@type": "Person",
          "name": "Caroline Gastaud",
          "jobTitle": "Fondatrice Autrement Senior"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Hérault"
          },
          {
            "@type": "City",
            "name": "Montpellier"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://autrementsenior.fr/solution#care-management",
        "serviceType": "Care Management pour Seniors",
        "provider": {
          "@id": "https://autrementsenior.fr/#business"
        },
        "name": "Méthode PEPS - Care Management personnalisé",
        "description": "Service de coordination médico-sociale pour seniors dans l'Hérault. Accompagnement global incluant évaluation gériatrique, coordination des auxiliaires de vie, gestion administrative APA/PCH.",
        "offers": [
          {
            "@type": "Offer",
            "name": "Accompagnement individuel",
            "price": "300",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Accompagnement couple",
            "price": "450",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        ]
      }
    ]
  };

  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'Évaluation gériatrique complète',
      description: 'Réalisé par une infirmière spécialisée : dépistage des fragilités et mise en place d\'une solution personnalisée.',
      included: true
    },
    {
      icon: (
        <svg className="w-12 h-12 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'Aide à la recherche d\'auxiliaires de vie qualifiées',
      description: 'Coordination de l\'ensemble des auxiliaires de vie, en CESU ou en prestation, afin de garantir un accompagnement personnalisé et de qualité.',
      included: true
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Coordination médicale',
      description: 'Mise en relation avec des professionnels de santé et pilotage de toutes les actions médicales autour du senior.',
      included: true
    },
    {
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      title: 'Prise de rendez vous médicaux',
      description: 'Prise de rendez-vous médicaux auprès des professionnels de santé, en lien avec le planning et les besoins du senior.',
      included: true
    },
    {
      icon: (
        <svg className="w-12 h-12 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Gestion administrative',
      description: 'Nous assurons la mise en place de l\'APA, de la PCH et des contrats de gré à gré, avec une prise en charge complète des démarches administratives et une optimisation des aides financières. Efficacité et tranquillité d\'esprit garanties.',
      included: true
    },
    {
      icon: (
        <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Rapports de suivi',
      description: 'Rapports hebdomadaires ou sur demande pour les aidants familiaux',
      included: true
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Planning partagé',
      description: 'Visibilité complète des rendez-vous entre tous les interlocuteurs',
      included: true
    },
    {
      icon: (
        <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Conciergerie senior',
      description: 'Prise en charge illimitée de tous les problèmes du quotidien, sans restriction',
      included: true
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section avec vidéo */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Comment fonctionne la méthode <span className="text-primary">PEPS</span> ?
            </h1>
            <p className="text-2xl text-gray-700">
              Découvrez un exemple concret avec l&apos;histoire de Mauricette
            </p>
          </motion.div>

          {/* Vidéo Mauricette YouTube */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl aspect-video">
              {showPlayButton ? (
                <div className="relative w-full h-full">
                  {/* Image de prévisualisation */}
                  <img 
                    src="https://img.youtube.com/vi/CPSxY2VDAEU/maxresdefault.jpg"
                    alt="Aperçu vidéo Mauricette"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowPlayButton(false)}
                      className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full flex items-center gap-3 text-lg font-medium shadow-2xl"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                      Découvrir l&apos;histoire de Mauricette
                    </motion.button>
                  </div>
                </div>
              ) : (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/CPSxY2VDAEU?autoplay=1&controls=1&rel=0&modestbranding=1"
                  title="La méthode PEPS - Histoire de Mauricette"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Inclus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Services inclus dans votre accompagnement
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Une prise en charge complète pour votre tranquillité d&apos;esprit
            </p>
            {/* Mise en avant de l'interlocuteur unique */}
            <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-3 rounded-full font-medium">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Un interlocuteur unique et dédié pour votre suivi
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all group"
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
                {service.included && (
                  <div className="mt-4 flex items-center gap-1 text-green-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-medium">Inclus</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* La méthode PEPS détaillée */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              La méthode PEPS en détail
            </h2>
            <p className="text-xl text-gray-700">
              Un accompagnement structuré en 4 étapes clés
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* P - Problème */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    P
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Problème</h3>
                    <p className="text-gray-700">
                      Identifier ensemble les besoins réels de votre proche pour une prise en charge adaptée
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* E - Écoute */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    E
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Écoute</h3>
                    <p className="text-gray-700">
                      Comprendre votre quotidien et vos attentes pour créer une relation de confiance
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* P - Planification */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent-dark text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    P
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Planification</h3>
                    <p className="text-gray-700">
                      Élaborer une stratégie personnalisée qui répond précisément à vos besoins
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* S - Suivi */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-dark text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    S
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Suivi</h3>
                    <p className="text-gray-700">
                      Assurer la continuité et ajuster dans le temps pour une efficacité optimale
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Conclusion PEPS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-8 text-center"
            >
              <p className="text-2xl font-bold flex items-center justify-center gap-2">
                <span className="text-3xl">➡️</span>
                Un cadre clair, humain, efficace.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tarification */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos formules d&apos;accompagnement
            </h2>
            <p className="text-xl text-gray-700">
              Des tarifs transparents adaptés à vos besoins
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Tarif Individuel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Plus populaire
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Individuel</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-primary">300€</span>
                  <span className="text-gray-600">/mois</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Reste à charge après aides</p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-primary text-white text-center py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium"
              >
                Choisir cette formule
              </Link>
            </motion.div>

            {/* Tarif Couple */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border-2 border-secondary"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Couple</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-secondary">450€</span>
                  <span className="text-gray-600">/mois</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Reste à charge après aides</p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-secondary text-white text-center py-3 rounded-lg hover:bg-secondary-dark transition-colors font-medium"
              >
                Choisir cette formule
              </Link>
            </motion.div>
          </div>

          {/* Certification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-6 py-3 rounded-full border border-green-200">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Organisme habilité pour l&apos;avance immédiate</span>
            </div>
            <p className="text-gray-600 mt-4">
              Bénéficiez immédiatement du crédit d&apos;impôt sans attendre l&apos;année suivante
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mises en situation */}
      <section className="py-20 bg-gradient-to-br from-white to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ils nous ont fait confiance
            </h2>
            <p className="text-xl text-gray-700">
              Découvrez comment nous avons transformé leur quotidien
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Exemple 1 - Dame de 93 ans */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Coordination réussie</h3>
                    <p className="text-sm text-gray-600">Dame de 93 ans</p>
                  </div>
                </div>
                
                <div className="bg-white/50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Situation :</span> Vivant seule avec troubles cognitifs modérés, 2 auxiliaires CESU sans coordination, fille éloignée gérant à distance.
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-primary">🎯</span> Objectif
                  </h4>
                  <p className="text-sm text-gray-700">
                    La fille souhaite structurer l’aide autour de sa mère, éviter les risques de chute, alléger sa charge mentale et améliorer la communication entre intervenants.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-secondary">✨</span> Nos actions
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Évaluation globale par notre infirmière
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Constitution et dépôt du dossier APA pour obtenir une prise en charge partielle des aides humaines.
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Clarification des missions de chaque auxiliaire de vie + mise en place d’un planning partagé. Réunion régulières avec elles pour assurer une coordination médico sociale.
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Coordination avec l’infirmière, récupération des documents médicaux et mise à jour des ordonnances.
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Transmission régulière des informations à l’ensemble des professionnels de santé et retour mensuel à la fille pour que tout le monde ait le même niveau d’information.
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Vérification qualité : passages mensuel de l’équipe de coordination, audit des nouvelles problématiques, alertes en cas d’évolution.
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-primary">
                    → Tranquillité d'esprit retrouvée
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Exemple 2 - Monsieur de 81 ans */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Retour à domicile</h3>
                    <p className="text-sm text-gray-600">Monsieur de 81 ans</p>
                  </div>
                </div>
                
                <div className="bg-white/50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Situation :</span> Monsieur de 81 ans, en sortie d’hospitalisation après une fracture du col du fémur. Il vit seul, refuse une entrée en EHPAD, son fils est peu disponible.
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-primary">🎯</span> Objectif
                  </h4>
                  <p className="text-sm text-gray-700">
                    Organiser rapidement un retour à domicile sécurisé et adapté.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-secondary">✨</span> Nos actions
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Mise en place d’une aide à domicile avec présence quotidienne (toilette, repas, accompagnement).
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Recherche et réservation de solutions de répit : accueil de jour deux fois par semaine et garde de nuit ponctuelle.
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Coordination médicale : récupération des comptes rendus hospitaliers, organisation des examens de contrôle et gestion des transports.
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Suivi régulier de la qualité des interventions + ajustements selon les retours terrain.
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Transmission de toutes les infos aux professionnels de santé + reporting au fils.
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-secondary">
                    → Autonomie préservée à domicile
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Exemple 3 - Madame de 86 ans */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="bg-gradient-to-br from-accent/20 to-accent/10 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-accent-dark rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Lien social retrouvé</h3>
                    <p className="text-sm text-gray-600">Madame de 86 ans</p>
                  </div>
                </div>
                
                <div className="bg-white/50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Situation :</span> Autonome physiquement mais isolée affectivement, légère dépression, reste enfermée.
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-primary">🎯</span> Objectif
                  </h4>
                  <p className="text-sm text-gray-700">
                    Sa nièce souhaite améliorer son quotidien, favoriser les sorties et l’aider à renouer du lien social.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-secondary">✨</span> Nos actions
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Recherche de clubs seniors à proximité, inscription à deux activités hebdomadaires (atelier mémoire et gymnastique douce).
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Organisation logistique : planning avec l’auxiliaire de vie pour l’accompagner en sortie, transports assurés.
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Coordination avec le médecin traitant pour suivi moral et adaptation du traitement.
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Mise en place d’un carnet de liaison pour fluidifier les échanges avec les professionnels.
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Appels réguliers à la nièce avec retour sur les progrès et suggestions pour renforcer le lien familial.
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-accent-dark">
                    → Joie de vivre retrouvée
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Message de conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-700 font-medium">
              Chaque situation est unique, notre accompagnement aussi.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium"
            >
              Parlons de votre situation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ - Ce qu'Autrement Senior n'est PAS vs ce qu'il EST */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Autrement Senior intervient-il en cas d'urgence médicale ?",
                example: "Exemple : Un senior chute.",
                wrong: "Autrement Senior n'intervient pas dans la gestion directe des urgences médicales. ",
                right: "Un protocole d'urgence est anticipé en amont avec la famille et les intervenants afin de garantir une réaction rapide et adaptée en cas de besoin."
              },
              {
                question: "Autrement Senior est-il un prestataire d'auxiliaires de vie ?",
                example: "Exemple : Un senior a besoin d'un accompagnement pour faire ses courses.",
                wrong: "Autrement senior ne se contente pas d'apporter une aide aux besoins primaires.",
                right: "Autrement Senior ne se limite pas à répondre à une demande ponctuelle. Nous évaluons l'ensemble des besoins du senior (médicaux, cognitifs, sociaux, pratiques) et construisons un plan d'action personnalisé, incluant la mise en relation avec les bons intervenants, dont des auxiliaires de vie si nécessaire."
              },
              {
                question: "Autrement Senior est-il un service public ou apparenté ?",
                example: "Exemple : Une famille aimerait savoir si notre solution est éligible à une aide financière.",
                wrong: "Autrement Senior n'est pas une solution finançable par des aides de l'État.",
                right: "Autrement Senior est un service privé, mais agréé. À ce titre, il permet aux familles de bénéficier du crédit d'impôt pour les services à la personne, ce qui en fait une solution partiellement finançable."
              },
              {
                question: "Comment Autrement Senior agit-il face aux refus du senior ?",
                example: "Exemple : Un senior refuse de se laver.",
                wrong: "Autrement Senior ne contraint pas l'aîné.",
                right: "Nous construisons un protocole individualisé et progressif, en collaboration avec l'entourage et les professionnels, pour répondre aux besoins tout en respectant les choix et le rythme du senior."
              },
              {
                question: "Que fait Autrement Senior face à une perte d'autonomie soudaine ?",
                example: "Exemple : Un senior perd son autonomie subitement suite à une grippe.",
                wrong: "Autrement senior ne maintient pas le plan d'action initial.",
                right: "Autrement Senior réagit rapidement en réévaluant la situation. Un audit est réalisé avec l'ensemble des partenaires de santé (médecin, infirmier, auxiliaires de vie…) afin d'adapter ou de reconstruire un nouveau plan d'action, au plus près des besoins actuels du senior."
              },
              {
                question: "Autrement Senior complique-t-il la prise en charge ?",
                example: "Exemple : Une famille se sent surchargée par la multiplicité et la complexité des démarches.",
                wrong: "Autrement senior n'est pas un interlocuteur de plus dans la prise en charge des seniors.",
                right: "Autrement Senior devient l'interlocuteur unique des familles. Nous centralisons les informations, coordonnons tous les intervenants et simplifions chaque démarche pour alléger la charge mentale et rendre la prise en charge plus fluide."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900">{item.question}</h3>
                  <svg
                    className={`w-6 h-6 text-primary transform transition-transform ${
                      activeQuestion === index ? 'rotate-45' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                
                {activeQuestion === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 mb-4 italic">{item.example}</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                        <span className="text-2xl">❌</span>
                        <p className="text-gray-700">{item.wrong}</p>
                      </div>
                      
                      <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                        <span className="text-2xl">✅</span>
                        <p className="text-gray-700 font-medium">{item.right}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">
              Prêt à simplifier votre quotidien ?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Libérez-vous et restez serein avec la méthode PEPS
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-all text-lg font-medium"
            >
              Commencer l&apos;accompagnement
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="mt-6 text-white/80">
                Service disponible dans tout l&apos;Hérault : Montpellier, Juvignac, Castelnau-le-lez, Saint-Jean-de-Vedas, Frontignan...
              </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}