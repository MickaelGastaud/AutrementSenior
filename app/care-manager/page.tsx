'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

export default function CareManager() {
  // Schema.org pour le SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://autrementsenior.fr/care-manager",
        "headline": "Qu'est-ce qu'un Care Manager ? Guide complet du métier dans l'Hérault",
        "description": "Découvrez le métier de Care Manager, coordinateur médico-social pour seniors. Caroline Gastaud explique la différence avec les auxiliaires de vie à Montpellier.",
        "author": {
          "@type": "Person",
          "name": "Caroline Gastaud",
          "jobTitle": "Care Manager certifiée",
          "worksFor": {
            "@id": "https://autrementsenior.fr/#business"
          }
        },
        "publisher": {
          "@id": "https://autrementsenior.fr/#business"
        },
        "datePublished": "2024-01-01",
        "dateModified": "2024-12-01"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quelle est la différence entre un Care Manager et une auxiliaire de vie ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le Care Manager coordonne l'ensemble des soins et services (médical, social, administratif) tandis que l'auxiliaire de vie fournit une aide ponctuelle au quotidien. Le Care Manager est un chef d'orchestre qui supervise tous les intervenants."
            }
          },
          {
            "@type": "Question",
            "name": "Combien coûte un Care Manager dans l'Hérault ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Chez Autrement Senior, le service de Care Management coûte 300€/mois pour une personne seule, avec crédit d'impôt de 50% disponible. Service disponible à Montpellier et dans tout l'Hérault."
            }
          }
        ]
      }
    ]
  };

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
      careManager: "Accompagnement global et coordination de l'ensemble des soins par un Care Manager dédié"
    },
    {
      auxiliaire: "Intervention limitée aux tâches ménagères et aide à la personne",
      careManager: "Vision à 360° du Care Management incluant santé, social, administratif et financier"
    },
    {
      auxiliaire: "Pas de suivi médical ou administratif",
      careManager: "Gestion complète des dossiers APA/PCH, coordination avec médecins de l'Hérault"
    },
    {
      auxiliaire: "Contact direct avec le bénéficiaire uniquement",
      careManager: "Le Care Manager est l'interface entre famille, professionnels de santé et services sociaux de Montpellier"
    }
  ];

  const missions = [
    {
      icon: CompassIcon,
      title: "Évaluation globale par le Care Manager",
      description: "Analyse complète de la situation par notre infirmière : santé, autonomie, environnement, ressources financières dans l'Hérault"
    },
    {
      icon: LinkIcon,
      title: "Coordination des intervenants à Montpellier",
      description: "Organisation et suivi par votre Care Manager des différents professionnels : médecins, infirmiers, auxiliaires de vie, kinés"
    },
    {
      icon: ShieldCheckIcon,
      title: "Gestion administrative Care Management",
      description: "Aide aux démarches dans l'Hérault : APA, mutuelles, aides financières, dossiers médicaux, mise sous protection"
    },
    {
      icon: HeartHandIcon,
      title: "Soutien aux aidants familiaux",
      description: "Le Care Manager accompagne les familles : solutions de répit, médiation familiale, formation aux gestes du quotidien"
    },
    {
      icon: ChartIcon,
      title: "Prévention et anticipation",
      description: "Votre Care Manager identifie les risques, adapte le domicile, prévient les hospitalisations évitables dans l'Hérault"
    },
    {
      icon: UsersIcon,
      title: "Suivi personnalisé Care Management",
      description: "Autrement Senior assure un accompagnement dans la durée, ajuste les aides selon l'évolution à Montpellier"
    }
  ];

  const situations = [
    {
      titre: "Retour d'hospitalisation du CHU Montpellier",
      description: "Le Care Manager organise les soins à domicile, adapte le logement, coordonne tous les intervenants de l'Hérault"
    },
    {
      titre: "Maintien à domicile fragile",
      description: "Votre Care Manager met en place des aides adaptées, prévient les chutes, surveille l'état de santé"
    },
    {
      titre: "Épuisement de l'aidant familial",
      description: "Solutions de répit organisées par le Care Manager, soutien psychologique, réorganisation de l'aide dans l'Hérault"
    },
    {
      titre: "Situation administrative complexe",
      description: "Le Care Manager débloque vos droits APA/PCH, gère les conflits familiaux, organise la protection juridique"
    }
  ];

  return (
    <>
      <Head>
        <title>Qu'est-ce qu'un Care Manager ? Guide complet Hérault | Caroline Gastaud</title>
        <meta name="description" content="Découvrez le métier de Care Manager avec Caroline Gastaud. Coordination médico-sociale pour seniors dans l'Hérault. Différence avec auxiliaire de vie, missions, tarifs à Montpellier." />
        <meta name="keywords" content="care manager, care manager définition, care manager hérault, care manager montpellier, Caroline Gastaud, coordination médico-sociale, care management c'est quoi, différence care manager auxiliaire vie, care manager senior, accompagnement personnes âgées" />
        <meta name="author" content="Caroline Gastaud" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Le Care Manager : votre coordinateur de soins dans l'Hérault" />
        <meta property="og:description" content="Caroline Gastaud vous explique le rôle du Care Manager, bien plus qu'un simple auxiliaire de vie. Découvrez le Care Management à Montpellier." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://autrementsenior.fr/care-manager" />
        <meta property="og:image" content="https://autrementsenior.fr/images/care-manager-herault.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://autrementsenior.fr/care-manager" />
      </Head>

      <Script
        id="schema-care-manager-definition"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

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
              Bien plus qu'un simple prestataire d'auxiliaires de vie, le Care Manager est votre coordinateur de soins et d'accompagnement global dans l'Herault
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-center text-gray-500 mt-4"
            >
              Par Caroline Gastaud, Care Manager fondatrice d'Autrement Senior
            </motion.p>
          </div>
        </section>

        {/* Introduction Care Management */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Le Care Management : un métier d'avenir dans l'Hérault</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Le <strong className="text-gray-900">Care Management</strong> est une approche globale de l'accompagnement des personnes âgées qui va bien au-delà de la simple aide à domicile. Alors que beaucoup nous confondent avec un prestataire classique d'auxiliaires de vie, notre rôle de <strong className="text-gray-900">Care Manager</strong> est en réalité celui d'un chef d'orchestre qui coordonne l'ensemble des soins et services nécessaires au bien-être de la personne âgée dans l'Hérault.
                </p>
                <p>
                  Face au vieillissement de la population et à la complexité croissante des parcours de soins à Montpellier, le Care Manager devient un <strong className="text-gray-900">relais indispensable</strong> pour éviter les ruptures de prise en charge, les hospitalisations évitables et l'épuisement des aidants. Caroline Gastaud, pionnière du Care Management dans l'Hérault, accompagne déjà de nombreuses familles.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Différences Care Manager vs Auxiliaire de vie */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Care Manager vs Auxiliaire de vie : Comprendre les différences
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

        {/* Missions du Care Manager dans l'Hérault */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Les missions du Care Manager à Montpellier et dans l'Hérault
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
              Quand faire appel à un Care Manager dans l'Hérault ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              Autrement Senior intervient dans toutes les situations complexes où la coordination devient nécessaire à Montpellier et environs
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

        {/* Chiffres clés pour les familles */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              L'impact du Care Management pour votre famille
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">70%</div>
                <p className="text-gray-600">Des aidants familiaux se sentent moins stressés avec un Care Manager</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-secondary mb-2">-30%</div>
                <p className="text-gray-600">De réhospitalisations grâce au suivi coordonné du Care Manager</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-accent mb-2">15h</div>
                <p className="text-gray-600">Gagnées par mois en moyenne pour les aidants grâce au Care Management</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-lg text-gray-700 font-medium">
                Le Care Manager vous permet de retrouver du temps pour vous tout en garantissant la meilleure prise en charge pour votre proche
              </p>
            </motion.div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre approche Care Management : La méthode PEPS</h2>
              <p className="text-lg text-gray-600 mb-8">
                Caroline Gastaud a développé une méthodologie unique de Care Management pour garantir un accompagnement optimal dans l'Hérault
              </p>
              <div className="text-left max-w-3xl mx-auto mb-8 space-y-4">
                <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      P
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Problème</h4>
                      <p className="text-gray-600">Identifier ensemble les besoins réels de votre proche pour une prise en charge adaptée</p>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary/5 rounded-xl p-6 border-l-4 border-secondary">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      E
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Écoute</h4>
                      <p className="text-gray-600">Comprendre votre quotidien et vos attentes pour créer une relation de confiance</p>
                    </div>
                  </div>
                </div>
                <div className="bg-accent/5 rounded-xl p-6 border-l-4 border-accent-dark">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-dark rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      P
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Planification</h4>
                      <p className="text-gray-600">Élaborer une stratégie personnalisée qui répond précisément à vos besoins</p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary-dark">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      S
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Suivi</h4>
                      <p className="text-gray-600">Assurer la continuité et ajuster dans le temps pour une efficacité optimale</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link 
                href="/solution"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Découvrir la méthode PEPS du Care Management
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section Caroline Gastaud */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Besoin d'un Care Manager dans l'Hérault ?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Caroline Gastaud et son équipe sont là pour coordonner les soins de votre proche à Montpellier et dans tout l'Hérault
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contacter un Care Manager
                </Link>
                <a
                  href="tel:0649604199"
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  06.49.60.41.99
                </a>
              </div>
              <p className="mt-6 text-white/80 text-sm">
                Service de Care Management disponible dans tout l'Hérault : Montpellier, Béziers, Sète, Agde, Lunel, Lodève...
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}