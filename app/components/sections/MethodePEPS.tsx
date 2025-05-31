'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import MethodePEPS from '../components/sections/MethodePEPS';

export default function NotreSolution() {
  const [showVideo, setShowVideo] = useState(false);

  const services = [
    {
      icon: '🩺',
      title: 'Évaluation gériatrique',
      description: 'Par une Infirmière (Dépistage des Fragilités)',
      included: true
    },
    {
      icon: '🎯',
      title: 'Solution personnalisée',
      description: 'Mise en place d\'une solution adaptée à chaque situation',
      included: true
    },
    {
      icon: '🔍',
      title: 'Recherche des professionnels',
      description: 'Professionnels de santé et services (auxiliaires de vie)',
      included: true
    },
    {
      icon: '🤝',
      title: 'Coordination complète',
      description: 'Coordination des professionnels de santé et des services',
      included: true
    },
    {
      icon: '📋',
      title: 'Gestion administrative',
      description: 'APA, PCH, contrats de gré à gré - Efficacité garantie',
      included: true
    },
    {
      icon: '📊',
      title: 'Suivi hebdomadaire',
      description: 'Rapport de suivi pour les aidants familiaux',
      included: true
    },
    {
      icon: '📅',
      title: 'Planning partagé',
      description: 'Entre tous les interlocuteurs',
      included: true
    },
    {
      icon: '🎓',
      title: 'Formation',
      description: 'Des aidants et auxiliaires de vie',
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              La méthode <span className="text-primary">PEPS</span>
            </h1>
            <p className="text-2xl text-gray-700 mb-4">
              Libérez-vous et restez serein !
            </p>
            <p className="text-lg text-gray-600">
              Un accompagnement complet et personnalisé pour vos proches âgés
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tarification */}
      <section className="py-16 -mt-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* Tarif Individuel */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow relative">
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
            </div>

            {/* Tarif Couple */}
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border-2 border-secondary">
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
            </div>
          </motion.div>

          {/* Certification */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full border border-gray-200">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Organisme habilité pour l'avance immédiate</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Méthode PEPS */}
      <MethodePEPS />

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
            <p className="text-xl text-gray-700">
              Une prise en charge complète pour votre tranquillité d'esprit
            </p>
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
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
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

      {/* Vidéo Scénario */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comment fonctionne la méthode PEPS ?
            </h2>
            <p className="text-xl text-gray-700">
              Découvrez un exemple concret avec l'histoire de Mauricette
            </p>
          </motion.div>

          {/* Zone vidéo */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl aspect-video">
              {showVideo ? (
                <div className="absolute inset-0">
                  {/* Placeholder pour la vidéo - à remplacer par l'URL réelle */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-800">
                    <p className="text-white">Vidéo scénario à intégrer</p>
                  </div>
                  <button
                    onClick={() => setShowVideo(false)}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowVideo(true)}
                    className="bg-white/20 backdrop-blur-sm w-24 h-24 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                  >
                    <svg className="w-12 h-12 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </motion.button>
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Étude de cas : Mauricette</h3>
                    <p className="text-white/80">Voir comment nous l'avons accompagnée</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sans engagement */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">
              Sans limitation d'intervention
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Nous gérons tous les tracas quotidiens pour que vous puissiez vous concentrer sur l'essentiel : 
              passer du temps de qualité avec votre proche.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-all text-lg font-medium"
            >
              Commencer l'accompagnement
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}