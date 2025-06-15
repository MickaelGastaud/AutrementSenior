'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NosMissions() {
  const missions = [
    {
      id: 1,
      title: "Simplifier votre action au maximum",
      description: "Vous nous mandatez, et nous prenons le relais : recherche de solutions, mise en place concrète, coordination. Vous gagnez du temps, de la clarté et de la sérénité.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "primary",
      animation: "deambulateur" // Pour Lottie future
    },
    {
      id: 2,
      title: "Permettre à votre proche de réaliser son souhait le plus profond : vieillir chez lui",
      description: "Nous mettons tout en œuvre pour rendre ce projet de vie possible, dans des conditions dignes, sûres et respectueuses.",
      icon: (
        <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      color: "secondary",
      animation: "conversation" // Pour Lottie future
    },
    {
      id: 3,
      title: "Constituer un réseau de professionnels de confiance autour de lui",
      description: "Nous sélectionnons les bons intervenants de proximité et construisons une alliance thérapeutique cohérente et sécurisante.",
      icon: (
        <svg className="w-12 h-12 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "accent",
      animation: "menage" // Pour Lottie future
    },
    {
      id: 4,
      title: "Créer du lien entre tous les acteurs pour fluidifier l'information",
      description: "Quand les intervenants sont nombreux, les informations se perdent. Nous assurons une communication claire, partagée et continue.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      color: "primary",
      animation: "fauteuil" // Pour Lottie future
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Titre de la section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Missions
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Un accompagnement adapté au rythme de votre proche
          </p>
        </motion.div>

        {/* Grille des missions */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {missions.map((mission) => (
            <motion.div
              key={mission.id}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full">
                <div className="flex items-start gap-6">
                  {/* Zone pour l'illustration animée */}
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`
                      w-24 h-24 rounded-2xl flex items-center justify-center
                      ${mission.color === 'primary' ? 'bg-primary/10' : ''}
                      ${mission.color === 'secondary' ? 'bg-secondary/10' : ''}
                      ${mission.color === 'accent' ? 'bg-accent/10' : ''}
                    `}
                  >
                    {/* Icône SVG */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {mission.icon}
                    </motion.div>
                  </motion.div>
                  
                  {/* Contenu de la mission */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {mission.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {mission.description}
                    </p>
                    <Link
                      href="/solution"
                      className={`
                        inline-flex items-center gap-2 font-medium transition-all
                        ${mission.color === 'primary' ? 'text-primary hover:text-primary-dark' : ''}
                        ${mission.color === 'secondary' ? 'text-secondary hover:text-secondary-dark' : ''}
                        ${mission.color === 'accent' ? 'text-accent-dark hover:text-accent' : ''}
                      `}
                    >
                      En savoir plus
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bouton CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="/solution"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all hover:scale-105 text-lg font-medium"
          >
            Découvrir la méthode PEPS
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}