'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NosMissions() {
  const missions = [
    {
      id: 1,
      title: "Le soutenir au quotidien",
      description: "Nous l'aidons à effectuer tous les gestes du quotidien qui sont essentiels pour son bien-être : toilette, prise des repas, présence de nuit...",
      icon: "🤝",
      color: "primary",
      animation: "deambulateur" // Pour Lottie future
    },
    {
      id: 2,
      title: "Lui tenir compagnie",
      description: "Nous assurons une compagnie pour que ses journées soient des plus agréables : sorties, promenades, jeux de stimulation...",
      icon: "💬",
      color: "secondary",
      animation: "conversation" // Pour Lottie future
    },
    {
      id: 3,
      title: "Lui donner un coup de main",
      description: "Même pour les petites tâches du quotidien, comme les courses ou le ménage, nous pouvons l'aider à raison de 4 heures par semaine minimum.",
      icon: "🏠",
      color: "accent",
      animation: "menage" // Pour Lottie future
    },
    {
      id: 4,
      title: "L'aider spécifiquement",
      description: "Parkinson, Alzheimer, handicap... Certaines pathologies demandent des compétences et un accompagnement particulier.",
      icon: "♿",
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
                      w-24 h-24 rounded-2xl flex items-center justify-center text-4xl
                      ${mission.color === 'primary' ? 'bg-primary/10' : ''}
                      ${mission.color === 'secondary' ? 'bg-secondary/10' : ''}
                      ${mission.color === 'accent' ? 'bg-accent/10' : ''}
                    `}
                  >
                    {/* Icône temporaire - sera remplacée par Lottie */}
                    <span className="animate-pulse-slow">{mission.icon}</span>
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