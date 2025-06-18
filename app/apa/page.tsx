'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function GuideAPA() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  // Schema.org pour le SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://autrementsenior.fr/apa",
        "headline": "Guide APA Hérault 2025 : Allocation Personnalisée d'Autonomie",
        "description": "Guide complet sur l'APA dans l'Hérault. Caroline Gastaud vous explique les conditions, montants et démarches pour obtenir l'Allocation Personnalisée d'Autonomie à Montpellier.",
        "author": {
          "@type": "Person",
          "name": "Caroline Gastaud",
          "jobTitle": "Fondatrice Autrement Senior",
          "worksFor": {
            "@id": "https://autrementsenior.fr/#business"
          }
        },
        "publisher": {
          "@id": "https://autrementsenior.fr/#business"
        },
        "datePublished": "2025-01-01",
        "dateModified": "2025-12-01"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Qu'est-ce que l'APA ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "L'APA (Allocation Personnalisée d'Autonomie) est une aide financière universelle versée par le département de l'Hérault aux personnes de plus de 60 ans en perte d'autonomie. Le montant varie selon le niveau de dépendance (GIR) et les revenus."
            }
          },
          {
            "@type": "Question",
            "name": "Comment obtenir l'APA dans l'Hérault ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pour obtenir l'APA dans l'Hérault, il faut retirer un dossier auprès du Conseil Départemental de l'Hérault, le compléter et attendre l'évaluation à domicile. Autrement Senior vous accompagnent dans toutes ces démarches."
            }
          },
          {
            "@type": "Question",
            "name": "Quel est le montant de l'APA ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le montant de l'APA varie de 705,13€ (GIR 4) à 1 914,04€ (GIR 1) par mois en 2024. Le montant réel dépend aussi de vos revenus et du plan d'aide établi lors de l'évaluation."
            }
          }
        ]
      }
    ]
  };

  const girMontants = [
    { gir: "GIR 1", montant: "1 914,04€", description: "Dépendance totale, confinement au lit ou au fauteuil" },
    { gir: "GIR 2", montant: "1 547,93€", description: "Dépendance physique ou mentale lourde" },
    { gir: "GIR 3", montant: "1 118,61€", description: "Dépendance corporelle importante" },
    { gir: "GIR 4", montant: "705,13€", description: "Besoin d'aide pour la toilette et l'habillage" }
  ];

  const etapesAPA = [
    {
      numero: "1",
      titre: "Retrait du dossier",
      description: "Récupérez le dossier APA auprès du Conseil Départemental de l'Hérault ou laissez Autrement Senior s'en charger",
      delai: "Immédiat"
    },
    {
      numero: "2",
      titre: "Constitution du dossier",
      description: "Rassemblez les pièces justificatives avec l'aide de votre Care Manager",
      delai: "1 semaine"
    },
    {
      numero: "3",
      titre: "Évaluation à domicile",
      description: "Un évaluateur APA se déplace pour déterminer le niveau GIR, Autrement Senior est présent pendant cette visiste",
      delai: "Sous 30 jours"
    },
    {
      numero: "4",
      titre: "Plan d'aide personnalisé",
      description: "Réception et validation du plan d'aide adapté à vos besoins",
      delai: "10 jours"
    },
    {
      numero: "5",
      titre: "Notification et versement",
      description: "Début des versements de l'APA",
      delai: "3 mois maximum"
    }
  ];

  const conditions = [
    {
      icon: "🎂",
      titre: "Âge minimum",
      description: "Avoir 60 ans ou plus"
    },
    {
      icon: "🏠",
      titre: "Résidence",
      description: "Résider en France de façon stable et régulière"
    },
    {
      icon: "📊",
      titre: "Niveau de dépendance",
      description: "Être classé en GIR 1 à 4 selon la grille AGGIR"
    },
    {
      icon: "💰",
      titre: "Sans condition de revenus",
      description: "L'APA est universelle, mais le montant varie selon les ressources"
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Head>
        <title>APA Hérault 2025 : Guide Complet Allocation Personnalisée Autonomie | Autrement Senior</title>
        <meta name="description" content="Guide APA Hérault 2025 par Caroline Gastaud. Montants, conditions, démarches pour l'Allocation Personnalisée d'Autonomie à Montpellier. Accompagnement Care Management gratuit." />
        <meta name="keywords" content="APA, APA Hérault, APA Montpellier, allocation personnalisée autonomie, APA 2025, montant APA, dossier APA, conditions APA, GIR, Caroline Gastaud, aide personnes âgées, conseil départemental Hérault" />
        <meta name="author" content="Caroline Gastaud" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Guide APA Hérault 2025 - Tout savoir sur l'Allocation Personnalisée d'Autonomie" />
        <meta property="og:description" content="Caroline Gastaud vous guide pour obtenir l'APA dans l'Hérault. Montants 2025, conditions, démarches simplifiées." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://autrementsenior.fr/apa" />
        <meta property="og:image" content="https://autrementsenior.fr/images/guide-apa-herault.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://autrementsenior.fr/apa" />
      </Head>

      <Script
        id="schema-apa-guide"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <motion.div {...fadeIn} className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Guide APA Hérault 2025
              </h1>
              <p className="text-2xl text-gray-700 mb-4">
                Tout savoir sur l'Allocation Personnalisée d'Autonomie à Montpellier
              </p>
              <p className="text-lg text-gray-600">
                Par Caroline Gastaud, Care Manager et Fondatrice d'Autrement Senior
              </p>
            </motion.div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Besoin d'aide pour votre dossier APA ?
                </h2>
                <p className="text-gray-600 mb-6">
                  Caroline Gastaud et son équipe <strong>vous accompagnent</strong>dans toutes vos démarches APA dans l'Hérault
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Obtenir de l'aide pour l'APA
                  </Link>
                  <a
                    href="tel:0649604199"
                    className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-dark transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    06.49.60.41.99
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Qu'est-ce que l'APA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Qu'est-ce que l'APA dans l'Hérault ?
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 mb-8"
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  L'<strong>Allocation Personnalisée d'Autonomie (APA)</strong> est une aide financière <strong>universelle</strong> versée par le Conseil Départemental de l'Hérault aux personnes de <strong>plus de 60 ans</strong> en perte d'autonomie. 
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  À Montpellier et dans tout l'Hérault, l'APA permet de financer les services nécessaires au maintien à domicile : auxiliaires de vie, aménagement du logement, accueil de jour.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white border-2 border-primary/20 rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    ✅ Points clés de l'APA
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Universelle</strong> : Tous y ont droit, même avec des revenus élevés</li>
                    <li>• <strong>Adaptée</strong> : Montant selon le niveau de dépendance (GIR)</li>
                    <li>• <strong>Départementale</strong> : Gérée par le CD34 de l'Hérault</li>
                    <li>• <strong>Sans récupération</strong> : Pas de remboursement sur succession</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white border-2 border-secondary/20 rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    💡 Le saviez-vous ?
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Dans l'Hérault, plus de <strong>30 000 personnes</strong> bénéficient de l'APA. Autrement Senior accompagne déjà des centaines de familles dans leurs démarches.
                  </p>
                  <p className="text-sm text-gray-500">
                    Source : Conseil Départemental de l'Hérault 2024
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions d'éligibilité */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Conditions pour obtenir l'APA dans l'Hérault
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                4 conditions simples à respecter pour bénéficier de l'APA à Montpellier et dans tout le département
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {conditions.map((condition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-4">{condition.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{condition.titre}</h3>
                  <p className="text-gray-600">{condition.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-lg text-gray-700 font-medium mb-4">
                Vous n'êtes pas sûr d'être éligible à l'APA ?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium"
              >
                Autrement Senior évalue gratuitement votre situation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Montants APA 2024 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Montants APA 2024 dans l'Hérault
              </h2>
              <p className="text-xl text-gray-700">
                Les plafonds mensuels selon votre niveau de dépendance (GIR)
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-4">
                {girMontants.map((gir, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-r from-primary/5 to-transparent rounded-xl p-6 border-l-4 border-primary"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{gir.gir}</h3>
                        <p className="text-gray-600">{gir.description}</p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <p className="text-3xl font-bold text-primary">{gir.montant}</p>
                        <p className="text-sm text-gray-500">par mois</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6"
              >
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span> Important : Reste à charge selon vos revenus
                </h3>
                <p className="text-gray-700">
                  Ces montants sont les <strong>plafonds maximaux</strong>. Votre participation financière (reste à charge) dépendra de vos revenus :
                </p>
                <ul className="mt-3 space-y-1 text-gray-600">
                  <li>• <strong>Revenus &lt; 869,65€/mois</strong> : Aucun reste à charge</li>
                  <li>• <strong>Revenus entre 869,65€ et 3 153,45€</strong> : Participation progressive</li>
                  <li>• <strong>Revenus &gt; 3 153,45€</strong> : 90% du montant du plan d'aide</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Étapes pour obtenir l'APA */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Les 5 étapes pour obtenir l'APA dans l'Hérault
              </h2>
              <p className="text-xl text-gray-700">
                Un processus simplifié avec l'accompagnement d'Autrement Senior
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {etapesAPA.map((etape, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative mb-8 last:mb-0"
                >
                  {index < etapesAPA.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-full bg-gray-300" />
                  )}
                  
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {etape.numero}
                    </div>
                    <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{etape.titre}</h3>
                          <p className="text-gray-600">{etape.description}</p>
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-6">
                          <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                            {etape.delai}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full font-medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Délai total : 2 mois maximum pour obtenir l'APA dans l'Hérault
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comment Autrement Senior vous aide */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                Autrement Senior vous accompagne pour l'APA
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                En tant que Care Manager dans l'Hérault, nous simplifions toutes vos démarches APA
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3">Constitution du dossier</h3>
                <p className="text-white/80">
                  Nous récupérons et remplissons tous les formulaires APA du Conseil Départemental de l'Hérault
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/10 backdrop-blur rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold mb-3">Préparation évaluation</h3>
                <p className="text-white/80">
                  Autrement Senior optimise la visite de l'évaluateur APA (via notre Evaluation gériatrique)
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3">Suivi et optimisation</h3>
                <p className="text-white/80">
                  Nous vérifions vos droits et demandons les révisions APA si votre situation évolue
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-2xl font-bold mb-6">
                Notre Service d'accompagnement
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-all text-lg font-medium"
              >
                Je veux être accompagné pour l'APA
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FAQ APA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Questions fréquentes sur l'APA dans l'Hérault
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "L'APA est-elle récupérable sur la succession ?",
                  reponse: "Non, l'APA n'est jamais récupérable sur la succession. C'est une aide définitivement acquise, contrairement à l'aide sociale à l'hébergement (ASH)."
                },
                {
                  question: "L'APA peut-elle financer les Auxiliaire de vie d'Autrement Senior ?",
                  reponse: "Oui, l'APA peut financer en partie les Auxiliaire de vie en CESU dans le cadre du gré à gré."
                },
                {
                  question: "Comment est calculé le reste à charge APA ?",
                  reponse: "Le reste à charge dépend de vos revenus. Dans l'Hérault, si vos revenus sont inférieurs à 869,65€/mois, vous n'avez aucun reste à charge. Au-delà, une participation progressive est demandée."
                },
                {
                  question: "Où déposer le dossier APA à Montpellier ?",
                  reponse: "Le dossier APA doit être déposé au Conseil Départemental de l'Hérault (Hôtel du Département, 1000 rue d'Alco, Montpellier) ou dans les Maisons des Solidarités. Autrement Senior peut se charger du dépôt pour vous."
                },
                {
                  question: "Combien de temps pour obtenir l'APA dans l'Hérault ?",
                  reponse: "Le délai légal est de 2 mois maximum après le dépôt du dossier complet. En cas d'urgence, une APA d'urgence peut être accordée sous 15 jours."
                },
                {
                  question: "L'APA finance-t-elle le Care Management ?",
                  reponse: "Non, l'APA ne finance les services de coordination et d'accompagnement d'Autrement Senior. Néanmoins vous avez droit au crédit d'impot de 50%"
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
                    <h3 className="text-lg font-bold text-gray-900 pr-4">{item.question}</h3>
                    <svg
                      className={`w-6 h-6 text-primary transform transition-transform flex-shrink-0 ${
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
                      <p className="text-gray-700">{item.reponse}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-br from-secondary to-secondary-dark">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                N'attendez plus pour demander l'APA !
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Caroline Gastaud et son équipe vous accompagnent dans toutes vos démarches APA dans le cadre de l'offre PEPS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-secondary px-8 py-4 rounded-lg hover:bg-gray-100 transition-all text-lg font-medium"
                >
                  Demander mon accompagnement APA
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="tel:0649604199"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all text-lg font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Appeler le 06.49.60.41.99
                </a>
              </div>
              <p className="mt-6 text-white/80 text-sm">
                Service disponible dans tout l'Hérault : Montpellier, Béziers, Sète, Agde, Lunel, Lodève, Pézenas...
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}