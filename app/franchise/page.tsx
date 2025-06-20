'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';

export default function OuvrezVotreAgence() {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  // Schema.org pour le SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FranchiseOpportunity",
    "name": "Licence de marque Autrement Senior - Care Management",
    "description": "Devenez Care Manager avec Autrement Senior. Licence de marque pour professionnels médico-sociaux. Lancement 2026.",
    "url": "https://autrementsenior.fr/ouvrez-votre-agence",
    "franchiser": {
      "@type": "Organization",
      "name": "Autrement Senior",
      "founder": {
        "@type": "Person",
        "name": "Caroline Gastaud"
      }
    },
    "availableLocation": {
      "@type": "Country",
      "name": "France"
    },
    "businessType": "Care Management pour seniors"
  };

  const profils = [
    {
      icon: "👩‍⚕️",
      titre: "Infirmière libérale",
      description: "Vous avez l'expertise du soin mais vous aspirez à un impact plus global sur la vie des seniors"
    },
    {
      icon: "👥",
      titre: "Assistante sociale",
      description: "Vous maîtrisez les rouages administratifs et souhaitez une approche plus entrepreneuriale"
    },
    {
      icon: "🏥",
      titre: "Professionnel médico-social",
      description: "Vous connaissez le secteur et voulez révolutionner l'accompagnement des personnes âgées"
    },
  ];

  const benefices = [
    {
      chiffre: "12M",
      titre: "de seniors en France",
      description: "Un marché en croissance exponentielle avec le vieillissement de la population"
    },
    {
      chiffre: "70%",
      titre: "veulent rester à domicile",
      description: "Le Care Management répond à ce besoin fondamental de bien vieillir chez soi"
    },
    {
      chiffre: "100%",
      titre: "de sens au quotidien",
      description: "Un métier qui change vraiment la vie des familles"
    }
  ];

  const avantages = [
    {
      icon: "🎯",
      titre: "Une méthode éprouvée",
      description: "La méthode PEPS, développée par Caroline Gastaud, a fait ses preuves dans l'Hérault"
    },
    {
      icon: "📚",
      titre: "Formation complète",
      description: "Formation au Care Management et à l'entrepreneuriat social"
    },
    {
      icon: "🤝",
      titre: "Accompagnement continu",
      description: "Support technique, commercial et opérationnel tout au long de votre aventure"
    },
    {
      icon: "💼",
      titre: "Outils clés en main",
      description: "CRM, supports marketing, processus... Tout est prêt pour votre succès"
    },
    {
      icon: "🌟",
      titre: "Marque reconnue",
      description: "Bénéficiez de la notoriété croissante d'Autrement Senior"
    },
    {
      icon: "🚀",
      titre: "Territoire exclusif",
      description: "Développez votre activité en exclusivité sur votre département"
    }
  ];

  const etapes = [
    { numero: "1", titre: "Premier contact", description: "Échangez avec Mickael Gastaud sur votre projet" },
    { numero: "2", titre: "Validation mutuelle", description: "Assurons-nous que nous partageons les mêmes valeurs" },
    { numero: "3", titre: "Formation intensive", description: "Formation pour devenir un Care Manager expert" },
    { numero: "4", titre: "Lancement 2026", description: "Ouvrez votre agence avec notre support complet" }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Head>
        <title>Ouvrez votre agence Autrement Senior | Devenez Care Manager - Licence 2026</title>
        <meta name="description" content="Devenez Care Manager avec Autrement Senior. Licence de marque pour infirmières libérales et professionnels médico-sociaux. Formation complète, lancement 2026." />
        <meta name="keywords" content="franchise care management, licence autrement senior, devenir care manager, ouvrir agence senior, franchise médico-social, mickael gastaud, caroline gastaud, opportunité 2026" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Devenez pionnier du Care Management en France" />
        <meta property="og:description" content="Autrement Senior recrute ses futurs licenciés. Une opportunité unique pour les professionnels médico-sociaux." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://autrementsenior.fr/ouvrez-votre-agence" />
        
        <link rel="canonical" href="https://autrementsenior.fr/ouvrez-votre-agence" />
      </Head>

      <Script
        id="schema-franchise"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="container mx-auto px-4 py-20 relative z-10">
            <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🚀 Lancement national 2026
              </span>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Devenez pionnier du <span className="text-primary">Care Management</span> en France
              </h1>
              
              <p className="text-2xl text-gray-700 mb-8">
                Transformez votre expertise médico-sociale en entreprise à impact avec la licence Autrement Senior
              </p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="#contact-mickael"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all text-lg shadow-xl hover:shadow-2xl"
                >
                  Je veux en savoir plus
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <a
                  href="#votre-profil"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-all text-lg shadow-xl hover:shadow-2xl"
                >
                  Découvrir l'opportunité
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              {benefices.map((benefice, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{benefice.chiffre}</div>
                  <div className="text-sm text-gray-600">{benefice.titre}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Votre profil */}
        <section id="votre-profil" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Cette opportunité est faite pour vous si...
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Vous êtes un professionnel du médico-social qui aspire à plus d'impact et d'autonomie
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {profils.map((profil, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-4">{profil.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{profil.titre}</h3>
                  <p className="text-gray-600">{profil.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-lg text-gray-700 italic">
                "Le Care Management, c'est utiliser toute votre expertise pour orchestrer le bien-être global des seniors"
              </p>
              <p className="text-gray-600 mt-2">- Caroline Gastaud, Fondatrice</p>
            </motion.div>
          </div>
        </section>

        {/* Une vision partagée */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Ensemble, révolutionnons l'accompagnement des seniors
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre vision</h3>
                  <p className="text-gray-600 mb-4">
                    Créer le premier réseau national de Care Managers, pour que chaque senior en France puisse bénéficier d'un accompagnement global et personnalisé.
                  </p>
                  <p className="text-gray-600">
                    Nous croyons en un modèle où expertise médicale, coordination sociale et approche entrepreneuriale se conjuguent pour transformer des vies.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Votre mission</h3>
                  <p className="text-gray-600 mb-4">
                    Devenir le référent Care Management de votre territoire, en apportant la méthode PEPS et l'excellence Autrement Senior à des centaines de familles.
                  </p>
                  <p className="text-gray-600">
                    Plus qu'un métier, c'est une aventure entrepreneuriale avec un impact social profond et mesurable.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Mickael au milieu */}
        <section id="contact-mickael" className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-block bg-white/10 backdrop-blur rounded-full p-4 mb-6">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>

              <h2 className="text-4xl font-bold mb-4">
                Prêt à changer de vie ?
              </h2>
              <p className="text-2xl mb-8 text-white/90">
                Échangeons sur votre projet de devenir Care Manager
              </p>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
                <p className="text-lg mb-6">
                  <strong>Mickael Gastaud</strong>, co-fondateur d'Autrement Senior, vous accompagne personnellement dans votre réflexion
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:mickael@autrementsenior.fr?subject=Candidature licence Autrement Senior 2026"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all text-lg shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    mickael@autrementsenior.fr
                  </a>
                  
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
              </div>

              <p className="text-white/80 text-sm">
                Nombre de licences limité • Sélection rigoureuse • Accompagnement premium
              </p>
            </motion.div>
          </div>
        </section>

        {/* Ce que nous vous apportons */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Tout pour réussir votre reconversion
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Autrement Senior vous donne toutes les clés pour devenir un Care Manager d'excellence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {avantages.map((avantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                  className={`bg-white rounded-xl p-6 border-2 transition-all cursor-pointer ${
                    hoveredBenefit === index 
                      ? 'border-primary shadow-xl scale-105' 
                      : 'border-gray-200 shadow-lg'
                  }`}
                >
                  <div className="text-3xl mb-4">{avantage.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{avantage.titre}</h3>
                  <p className="text-gray-600">{avantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Votre parcours vers le Care Management
              </h2>
              <p className="text-xl text-gray-700">
                De la candidature à l'ouverture de votre agence
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Ligne verticale */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

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
                    <div className="ml-8 flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{etape.titre}</h3>
                      <p className="text-gray-600">{etape.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Le marché */}
        <section className="py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Un marché en explosion
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-secondary mb-2">+25%</div>
                  <p className="text-gray-600">de seniors d'ici 2030</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-primary mb-2">8,5 Mds€</div>
                  <p className="text-gray-600">marché de la Silver Economy</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-accent-dark mb-2">0</div>
                  <p className="text-gray-600">concurrent direct en France</p>
                </div>
              </div>

              <p className="text-lg text-gray-700">
                Le Care Management est LA réponse aux défis du vieillissement. <br/>
                <strong>Soyez parmi les premiers à vous positionner sur ce marché d'avenir.</strong>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Témoignage projection */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
                <svg className="w-12 h-12 text-primary/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                <p className="text-xl text-gray-700 italic mb-6">
                  Imaginez-vous dans 2 ans : vous dirigez votre agence Autrement Senior, 
                  vous avez transformé la vie de dizaines de familles, vous êtes reconnu 
                  comme LE spécialiste du Care Management de votre département...
                </p>
                
                <p className="text-lg text-gray-600">
                  Cette vision peut devenir votre réalité. Il suffit de faire le premier pas.
                </p>
                
                <div className="mt-8 text-center">
                  <Link
                    href="#contact-mickael"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium"
                  >
                    Je veux faire partie de l'aventure
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
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
              <h2 className="text-4xl font-bold mb-6">
                Les places sont limitées
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Nous sélectionnons uniquement des professionnels passionnés, 
                prêts à s'investir dans cette aventure humaine et entrepreneuriale
              </p>
              
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  Candidatez dès maintenant pour 2026
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Le processus de sélection et de formation commence en 2025
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:mickael@autrementsenior.fr?subject=Candidature licence Autrement Senior 2026"
                    className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-all text-lg font-medium shadow-xl"
                  >
                    Envoyer ma candidature
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all text-lg font-medium"
                  >
                    En savoir plus sur Autrement Senior
                  </Link>
                </div>
              </div>

              <p className="text-white/60 text-sm">
                Autrement Senior • Pionnier du Care Management en France • Fondé par Caroline Gastaud
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
