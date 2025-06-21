'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function NosValeurs() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const valeurs = [
    {
      id: 1,
      titre: "Efficacité",
      icon: "⚡",
      color: "primary",
      description: "Nous sommes engagés et reconnus pour notre capacité à apporter des solutions adaptées à chaque situation.",
      exemple: "Une famille nous signale une difficulté avec un intervenant.",
      mauvais: "Ignorer la demande ou remettre la résolution du problème à plus tard.",
      bon: "Écouter la demande, analyser la situation et proposer une solution rapidement en informant régulièrement toutes les parties prenantes."
    },
    {
      id: 2,
      titre: "Bienveillance",
      icon: "❤️",
      color: "secondary",
      description: "Nous construisons ensemble un projet de vie personnalisé et sécurisé pour chaque senior.",
      exemple: "Une famille s'inquiète de l'évolution de la situation de leur parent.",
      mauvais: "Répondre vaguement sans donner d'informations précises.",
      bon: "Expliquer clairement la situation, rassurer la famille et proposer des ajustements réguliers."
    },
    {
      id: 3,
      titre: "Équipe",
      icon: "🤝",
      color: "accent",
      description: "Nous nous unissons pour soulager les aidants en créant du lien avec les acteurs du maintien à domicile.",
      exemple: "Une famille nous informe d'une sortie d'hospitalisation imminente.",
      mauvais: "Attendre cette information pour organiser le retour à domicile.",
      bon: "Anticiper, identifier et programmer la sortie du patient avec l'équipe hospitalière pour assurer une continuité des soins avec les intervenants à domicile."
    },
    {
      id: 4,
      titre: "Modernité",
      icon: "🚀",
      color: "primary",
      description: "Nous refusons de réduire la personne âgée à ses besoins primaires. Elle doit continuer à se réaliser, communiquer et avoir des projets selon ses souhaits.",
      exemple: "Un senior souhaite participer à une activité mais son état nécessite un aménagement.",
      mauvais: "Lui dire que ce n'est pas possible sans chercher de solution.",
      bon: "Adapter l'activité ou proposer une alternative en respectant ses besoins et capacités."
    },
    {
      id: 5,
      titre: "Exemplarité",
      icon: "⭐",
      color: "secondary",
      description: "Une posture professionnelle est essentielle : bonne présentation, respect du cadre, transparence et transmission des informations aux familles et intervenants.",
      exemple: "Une auxiliaire de vie improvise des décisions sans en informer Autrement Senior.",
      mauvais: "Agir seule, en prenant des initiatives qui pourraient nuire à la cohérence du suivi.",
      bon: "Toujours informer l'équipe avant d'agir pour garantir un accompagnement cohérent et structuré."
    },
    {
      id: 6,
      titre: "Une prise en charge globale et structurée",
      icon: "🌟",
      color: "accent",
      description: "Notre force réside dans notre approche complète : nous prenons en compte le médical, l'aide quotidienne et la gestion des tracas du vieillissement.",
      exemple: "Une famille nous sollicite pour un simple besoin d'aide à domicile.",
      mauvais: "Se limiter à organiser une aide sans analyser la situation dans sa globalité.",
      bon: "Évaluer l'ensemble des besoins (médicaux, administratifs, sociaux) et proposer une prise en charge complète."
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          border: 'border-primary',
          text: 'text-primary',
          hover: 'hover:bg-primary/20'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary/10',
          border: 'border-secondary',
          text: 'text-secondary',
          hover: 'hover:bg-secondary/20'
        };
      case 'accent':
        return {
          bg: 'bg-accent/10',
          border: 'border-accent-dark',
          text: 'text-accent-dark',
          hover: 'hover:bg-accent/20'
        };
      default:
        return {
          bg: 'bg-gray-100',
          border: 'border-gray-300',
          text: 'text-gray-700',
          hover: 'hover:bg-gray-200'
        };
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-8">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <Image
                  src="/images/logo.png"
                  alt="Logo Autrement Senior"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Nos Valeurs
            </h1>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Chez Autrement Senior, nos valeurs guident chaque action pour offrir
              un accompagnement humain, professionnel et innovant
            </p>
          </motion.div>
        </div>
      </section>

      {/* Valeurs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {valeurs.map((valeur, index) => {
              const colors = getColorClasses(valeur.color);

              return (
                <motion.div
                  key={valeur.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredValue(valeur.id)}
                  onMouseLeave={() => setHoveredValue(null)}
                  className={`
                    bg-white rounded-2xl p-8 border-2 transition-all duration-300 cursor-pointer
                    ${hoveredValue === valeur.id ? 'shadow-2xl scale-105' : 'shadow-lg'}
                    ${hoveredValue === valeur.id ? colors.border : 'border-gray-200'}
                  `}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`
                      w-16 h-16 rounded-xl flex items-center justify-center text-3xl
                      ${colors.bg} ${colors.hover} transition-colors
                    `}>
                      {valeur.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-2 ${colors.text}`}>
                        {valeur.titre}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {valeur.description}
                  </p>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-gray-800 mb-2">
                        💡 Exemple :
                      </p>
                      <p className="text-sm text-gray-600 italic">
                        {valeur.exemple}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-red-600 mb-1">À éviter :</p>
                          <p className="text-sm text-gray-600">{valeur.mauvais}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-green-600 mb-1">Notre approche :</p>
                          <p className="text-sm text-gray-600">{valeur.bon}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nos valeurs en action, chaque jour
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Découvrez comment nous mettons en pratique ces valeurs pour accompagner
              vos proches avec excellence et humanité
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all text-lg shadow-xl"
              >
                Nous contacter
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link
                href="/solution"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-lg"
              >
                Methode PEPS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
