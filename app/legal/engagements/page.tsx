'use client';

import { motion } from 'framer-motion';

export default function NosEngagements() {
  // Icônes SVG personnalisées
  const HeartIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );

  const ShieldIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const UsersIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );

  const AwardIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );

  const SparklesIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  const engagements = [
    {
      icon: HeartIcon,
      title: "Bienveillance et respect",
      description: "Nous plaçons l'humain au cœur de notre démarche. Chaque personne est unique et mérite attention, écoute et respect de sa dignité."
    },
    {
      icon: ShieldIcon,
      title: "Professionnalisme et fiabilité",
      description: "Nos équipes sont rigoureusement sélectionnées, formées et suivies. Nous garantissons des interventions de qualité constante."
    },
    {
      icon: ClockIcon,
      title: "Disponibilité et réactivité",
      description: "Service 7j/7, astreinte téléphonique, intervention rapide : nous sommes là quand vous avez besoin de nous."
    },
    {
      icon: UsersIcon,
      title: "Personnalisation des services",
      description: "Chaque accompagnement est adapté aux besoins spécifiques, aux habitudes et aux préférences de la personne."
    },
    {
      icon: AwardIcon,
      title: "Qualité certifiée",
      description: "Agrément SAP911830974, formation continue de nos équipes, respect strict des normes en vigueur."
    },
    {
      icon: SparklesIcon,
      title: "Innovation et amélioration",
      description: "Nous innovons constamment pour améliorer nos services et répondre aux nouveaux besoins de nos bénéficiaires."
    }
  ];

  const charteQualite = [
    {
      numero: "1",
      titre: "Évaluation personnalisée",
      points: [
        "Visite à domicile gratuite",
        "Analyse complète des besoins",
        "Plan d'accompagnement sur mesure",
        "Réévaluation régulière"
      ]
    },
    {
      numero: "2",
      titre: "Sélection rigoureuse",
      points: [
        "Recrutement exigeant des auxiliaires",
        "Vérification des références",
        "Tests de compétences",
        "Contrôle des diplômes et formations"
      ]
    },
    {
      numero: "3",
      titre: "Formation continue",
      points: [
        "Formation initiale obligatoire",
        "Modules spécialisés (Alzheimer, handicap...)",
        "Actualisation des compétences",
        "Supervision par nos coordinateurs"
      ]
    },
    {
      numero: "4",
      titre: "Suivi qualité",
      points: [
        "Visites de contrôle régulières",
        "Enquêtes de satisfaction",
        "Gestion proactive des remplacements",
        "Amélioration continue des processus"
      ]
    }
  ];

  const garanties = [
    {
      titre: "Garantie de continuité",
      description: "Remplacement assuré en cas d'absence de votre auxiliaire habituel"
    },
    {
      titre: "Garantie de transparence",
      description: "Devis clairs, facturation détaillée, aucun frais caché"
    },
    {
      titre: "Garantie de confidentialité",
      description: "Protection stricte de vos données personnelles et médicales"
    },
    {
      titre: "Garantie de satisfaction",
      description: "Changement d'auxiliaire possible si la relation ne convient pas"
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
            Nos Engagements
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-3xl mx-auto"
          >
            Une promesse de qualité, de bienveillance et d'excellence dans l'accompagnement de nos aînés
          </motion.p>
        </div>
      </section>

      {/* Engagements Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            6 Engagements Fondamentaux
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engagements.map((engagement, index) => {
              const Icon = engagement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <Icon />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">{engagement.title}</h3>
                  </div>
                  <p className="text-gray-600">{engagement.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Charte Qualité */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Notre Charte Qualité
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {charteQualite.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {item.numero}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">{item.titre}</h3>
                </div>
                <ul className="space-y-2">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <div className="text-secondary mr-2 flex-shrink-0 mt-0.5">
                        <CheckIcon />
                      </div>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Nos Garanties
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {garanties.map((garantie, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6 border border-primary/10"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{garantie.titre}</h3>
                <p className="text-gray-600">{garantie.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Nos Certifications et Agréments</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-8 mb-6">
                <div className="w-16 h-16 text-primary mx-auto mb-4">
                  <AwardIcon />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Agrément Services à la Personne</h3>
                <p className="text-lg text-gray-600 mb-2">N° SAP911830974</p>
                <p className="text-gray-600">
                  Délivré par la préfecture de l'Hérault, cet agrément garantit le respect des normes de qualité et vous permet de bénéficier d'avantages fiscaux.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="w-16 h-16 text-primary mx-auto mb-4">
                  <ShieldIcon />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Marque Déposée</h3>
                <p className="text-lg text-gray-600 mb-2">N° 5013954</p>
                <p className="text-gray-600">
                  Autrement Senior est une marque déposée, gage de notre engagement durable et de notre professionnalisme.
                </p>
              </div>
            </div>
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
              Faites confiance à notre expertise
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Plus qu'un prestataire, nous sommes votre partenaire de confiance pour un accompagnement de qualité
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Nous contacter
              </a>
              <a
                href="tel:0649604199"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                <PhoneIcon />
                <span className="ml-2">06.49.60.41.99</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}