'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function CESU() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quels sont les types d'interventions à réaliser ?",
      answer: "Nos auxiliaires de vie interviennent pour l'aide à la toilette, l'aide aux repas, l'entretien du domicile, les courses, la compagnie, les sorties, et bien plus selon les besoins spécifiques de chaque bénéficiaire."
    },
    {
      question: "Est-il possible de faire un complément d'heures ?",
      answer: "Oui, nos auxiliaires peuvent effectuer des heures complémentaires selon leurs disponibilités et les besoins des bénéficiaires, dans le respect de la législation du travail."
    },
    {
      question: "Comment sont affectés les bénéficiaires ?",
      answer: "L'affectation se fait en fonction de la proximité géographique, des compétences spécifiques requises, et de la compatibilité entre l'auxiliaire et le bénéficiaire. Anissa coordonne personnellement chaque mise en relation."
    },
    {
      question: "Je n'ai pas le permis, est-ce un frein ?",
      answer: "Pas nécessairement. Nous privilégions les interventions proches de votre domicile et accessibles en transport en commun. Le permis est un plus mais n'est pas obligatoire pour de nombreuses missions."
    },
    {
      question: "Je suis étudiant.e, puis-je intégrer Ouihelp pour financer mes études ?",
      answer: "Absolument ! Nous accueillons les étudiants motivés. Les horaires flexibles du CESU permettent de concilier études et travail. Un minimum de disponibilité est requis."
    },
    {
      question: "Contrat mandataire, qu'est-ce que ça change pour moi ?",
      answer: "En contrat mandataire, vous êtes employé directement par le particulier. Autrement Senior gère toute la partie administrative, la mise en relation et le suivi. Vous bénéficiez d'une grande autonomie tout en étant accompagné."
    },
    {
      question: "Que se passe-t-il en cas d'hospitalisation ou de décès de mon bénéficiaire ?",
      answer: "Nous vous accompagnons dans ces moments difficiles et nous nous efforçons de vous proposer rapidement une nouvelle mission. Un préavis légal s'applique selon les cas."
    },
    {
      question: "Quel est le parcours d'intégration ?",
      answer: "Le parcours comprend : un entretien avec Anissa, une vérification des références, une formation sur nos valeurs et méthodes, puis une mise en relation progressive avec les bénéficiaires."
    },
    {
      question: "À quoi dois-je m'attendre en termes d'horaires ?",
      answer: "Les horaires varient selon les besoins : interventions ponctuelles de 2h, demi-journées, journées complètes ou présence de nuit. Nous adaptons les plannings selon vos disponibilités."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Devenez Auxiliaire de vie en CESU
            </h1>
            <p className="text-xl text-gray-700">
              Rejoignez notre équipe de plus de 40 professionnels engagés 
              dans l'accompagnement bienveillant des personnes âgées
            </p>
          </motion.div>
        </div>
      </section>

      {/* Présentation Anissa */}
      <section className="py-16 -mt-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-r from-secondary to-secondary-dark p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">Votre interlocutrice privilégiée</h2>
              <p className="text-white/90">Pour toutes vos questions sur le CESU</p>
            </div>
            
            <div className="p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center">
              {/* Photo Anissa */}
              <div className="text-center md:text-left">
                <div className="w-48 h-48 mx-auto md:mx-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full flex items-center justify-center text-6xl mb-4">
                  👩‍⚕️
                </div>
                <div className="space-y-2">
                  <a 
                    href="tel:0649604199" 
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    06.49.60.41.99
                  </a>
                  <a 
                    href="mailto:anissa@autrementsenior.fr" 
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    anissa@autrementsenior.fr
                  </a>
                </div>
              </div>

              {/* Présentation */}
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Anissa Benbekta</h3>
                  <p className="text-xl text-secondary font-medium mb-4">
                    Coordinatrice auxiliaire de vie
                  </p>
                </div>
                
                <blockquote className="text-lg text-gray-700 italic border-l-4 border-secondary pl-4">
                  "Je suis votre point de contact privilégié pour toutes les questions concernant 
                  le CESU. Mon rôle est de vous accompagner, de la candidature jusqu'à votre 
                  intégration, et de m'assurer que vous disposez de toutes les clés pour réussir 
                  votre mission auprès de nos bénéficiaires."
                </blockquote>
                
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Disponible :</strong> Du lundi au vendredi de 9h à 18h pour répondre 
                    à toutes vos questions sur le statut CESU, les missions disponibles, et votre intégration.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qu'est-ce qu'une auxiliaire de vie en CESU ? */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Qu'est-ce qu'une auxiliaire de vie en CESU ?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Le CESU (Chèque Emploi Service Universel) simplifie l'emploi à domicile
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Statut simplifié</h3>
              <p className="text-gray-600">
                Employé directement par le particulier, vous bénéficiez d'un statut 
                sécurisé avec toutes les protections sociales
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Gestion administrative</h3>
              <p className="text-gray-600">
                Autrement Senior s'occupe de toute la partie administrative : 
                contrats, fiches de paie, déclarations
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Accompagnement</h3>
              <p className="text-gray-600">
                Formation continue, mise en relation avec les bénéficiaires, 
                et suivi personnalisé par notre équipe
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous rejoindre */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi rejoindre Autrement Senior ?
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: "💪",
                  title: "Une équipe de plus de 40 professionnels",
                  description: "Rejoignez une communauté solidaire d'auxiliaires de vie et d'aides-soignantes passionnées"
                },
                {
                  icon: "🎯",
                  title: "Des missions près de chez vous",
                  description: "Nous privilégions la proximité pour réduire vos temps de trajet"
                },
                {
                  icon: "📚",
                  title: "Formation continue",
                  description: "Développez vos compétences avec nos formations régulières"
                },
                {
                  icon: "🤝",
                  title: "Un accompagnement personnalisé",
                  description: "Anissa et son équipe sont là pour vous soutenir au quotidien"
                },
                {
                  icon: "⏰",
                  title: "Flexibilité des horaires",
                  description: "Adaptez votre planning selon vos contraintes personnelles"
                },
                {
                  icon: "❤️",
                  title: "Des valeurs humaines",
                  description: "Participez à une mission qui a du sens auprès de nos aînés"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="text-4xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Postuler */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prêt(e) à nous rejoindre ?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Déposez votre candidature et rejoignez notre équipe d'auxiliaires de vie engagés
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cesu/postuler"
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all hover:scale-105 font-medium text-lg inline-block"
              >
                Postuler maintenant
              </Link>
              <a
                href="tel:0649604199"
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all font-medium text-lg inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appeler Anissa
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
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
            <p className="text-xl text-gray-700">
              Tout ce que vous devez savoir sur le travail en CESU
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                      </svg>
                    </div>
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? "auto" : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}