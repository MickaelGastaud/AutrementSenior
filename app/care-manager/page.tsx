'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CareManager() {
  // Icônes SVG personnalisées
  const CompassIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );

  const LinkIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );

  const ShieldCheckIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );

  const HeartHandIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );

  const ChartIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );

  const UsersIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );

  const differences = [
    {
      auxiliaire: "Prestation ponctuelle d'aide à domicile",
      careManager: "Accompagnement global et coordination de l'ensemble des soins"
    },
    {
      auxiliaire: "Intervention limitée aux tâches ménagères et aide à la personne",
      careManager: "Vision à 360° incluant santé, social, administratif et financier"
    },
    {
      auxiliaire: "Pas de suivi médical ou administratif",
      careManager: "Gestion des dossiers, coordination avec médecins et organismes"
    },
    {
      auxiliaire: "Contact direct avec le bénéficiaire uniquement",
      careManager: "Interface entre famille, professionnels de santé et services sociaux"
    }
  ];

  const missions = [
    {
      icon: CompassIcon,
      title: "Évaluation globale",
      description: "Analyse complète de la situation : santé, autonomie, environnement, ressources financières, soutien familial"
    },
    {
      icon: LinkIcon,
      title: "Coordination des intervenants",
      description: "Organisation et suivi des différents professionnels : médecins, infirmiers, auxiliaires de vie, kinés, services sociaux"
    },
    {
      icon: ShieldCheckIcon,
      title: "Gestion administrative",
      description: "Aide aux démarches : APA, mutuelles, aides financières, dossiers médicaux, mise sous protection"
    },
    {
      icon: HeartHandIcon,
      title: "Soutien aux aidants",
      description: "Accompagnement des familles, solutions de répit, médiation familiale, formation aux gestes du quotidien"
    },
    {
      icon: ChartIcon,
      title: "Prévention et anticipation",
      description: "Identification des risques, adaptation du domicile, prévention des hospitalisations évitables"
    },
    {
      icon: UsersIcon,
      title: "Suivi personnalisé",
      description: "Accompagnement dans la durée, ajustement des aides selon l'évolution, disponibilité et réactivité"
    }
  ];

  const situations = [
    {
      titre: "Retour d'hospitalisation complexe",
      description: "Organisation des soins, adaptation du logement, coordination des intervenants"
    },
    {
      titre: "Maintien à domicile fragile",
      description: "Mise en place d'aides adaptées, prévention des chutes, surveillance de l'état de santé"
    },
    {
      titre: "Épuisement de l'aidant",
      description: "Solutions de répit, soutien psychologique, réorganisation de l'aide"
    },
    {
      titre: "Situation administrative bloquée",
      description: "Déblocage de droits, gestion de conflits familiaux, protection juridique"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6"
          >
            Qu'est-ce qu'un Care Manager ?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-3xl mx-auto"
          >
            Bien plus qu'un simple prestataire d'auxiliaires de vie, le Care Manager est votre coordinateur de soins et d'accompagnement global
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Un métier encore méconnu mais essentiel</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Le <strong className="text-gray-900">Care Management</strong> est une approche globale de l'accompagnement des personnes âgées qui va bien au-delà de la simple aide à domicile. Alors que beaucoup nous confondent avec un prestataire classique d'auxiliaires de vie, notre rôle est en réalité celui d'un <strong className="text-gray-900">chef d'orchestre</strong> qui coordonne l'ensemble des soins et services nécessaires au bien-être de la personne âgée.
              </p>
              <p>
                Face au vieillissement de la population et à la complexité croissante des parcours de soins, le Care Manager devient un <strong className="text-gray-900">relais indispensable</strong> pour éviter les ruptures de prise en charge, les hospitalisations évitables et l'épuisement des aidants.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Différences avec auxiliaire de vie */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Care Manager vs Auxiliaire de vie : Quelles différences ?
          </motion.h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-center text-gray-700 mb-4">Auxiliaire de vie</h3>
              </div>
              <div className="bg-primary/10 rounded-lg p-4">
                <h3 className="text-lg font-bold text-center text-primary mb-4">Care Manager</h3>
              </div>
            </div>
            
            {differences.map((diff, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
              >
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-gray-300">
                  <p className="text-gray-600">{diff.auxiliaire}</p>
                </div>
                <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                  <p className="text-gray-900 font-medium">{diff.careManager}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Missions du Care Manager */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Les missions du Care Manager
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missions.map((mission, index) => {
              const Icon = mission.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{mission.title}</h3>
                  <p className="text-gray-600">{mission.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Situations où le Care Manager intervient */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-4"
          >
            Quand faire appel à un Care Manager ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Le Care Manager intervient dans toutes les situations complexes où la coordination devient nécessaire
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {situations.map((situation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-secondary"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{situation.titre}</h3>
                <p className="text-gray-600">{situation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            L'impact du Care Management en chiffres
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">-46%</div>
              <p className="text-gray-600">Réduction du risque de mortalité en évitant les hospitalisations prolongées</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-secondary mb-2">918M€</div>
              <p className="text-gray-600">Économies potentielles en évitant les hospitalisations non justifiées</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-accent mb-2">23%</div>
              <p className="text-gray-600">Des réadmissions évitables grâce à un suivi coordonné</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* La méthode PEPS */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre approche : La méthode PEPS</h2>
            <p className="text-lg text-gray-600 mb-8">
              Chez Autrement Senior, nous avons développé une méthodologie unique pour garantir un accompagnement optimal
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-primary/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">P</div>
                <div className="text-sm text-gray-700 mt-1">Personnalisation</div>
              </div>
              <div className="bg-secondary/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-secondary">E</div>
                <div className="text-sm text-gray-700 mt-1">Évaluation</div>
              </div>
              <div className="bg-accent/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-accent-dark">P</div>
                <div className="text-sm text-gray-700 mt-1">Parcours</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">S</div>
                <div className="text-sm text-gray-700 mt-1">Suivi</div>
              </div>
            </div>
            <Link 
              href="/solution"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Découvrir la méthode PEPS
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Vous avez besoin d'un Care Manager ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Notre équipe d'experts est là pour vous accompagner et coordonner les soins de votre proche
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Demander une évaluation gratuite
              </Link>
              <a
                href="tel:0649604199"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                06.49.60.41.99
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}