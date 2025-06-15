'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function CESU() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Comment se passe l’intégration chez Autrement Senior ?",
      answer: "Dès le départ, tu rencontres Anissa pour un entretien individuel. Ensuite, on vérifie tes références, tu suis une courte formation sur nos valeurs et notre façon de travailler, puis tu es progressivement mis(e) en lien avec des bénéficiaires adaptés à ton profil."
    },
    {
      question: "Quelles sont les missions que je pourrais être amené(e) à faire ?",
      answer: "Les interventions sont très variées : aide à la toilette, préparation des repas, ménage, courses, accompagnement aux rendez-vous, sorties ou simplement présence bienveillante. On s’adapte à chaque personne accompagnée."
    },
    {
      question: "Quel type d’horaires dois-je prévoir ?",
      answer: "C’est variable : de petites interventions de 2h, des demi-journées, des journées complètes voire des nuits. On construit le planning en fonction de tes disponibilités et des besoins des bénéficiaires."
    },
    {
      question: "Et si je veux faire plus d’heures ?",
      answer: "C’est possible ! On peut te proposer des heures complémentaires, toujours dans le cadre légal et selon ta disponibilité et les demandes des familles."
    },
    {
      question: "Que signifie travailler sous contrat mandataire ?",
      answer: "Tu es salarié(e) du particulier employeur, mais tu n’es jamais seul(e). Autrement Senior s’occupe de l’administratif, te met en relation et assure un suivi. Tu gagnes en autonomie tout en étant soutenu(e) à chaque étape."
    },
    {
      question: "Et s’il y a une hospitalisation ou un décès ?",
      answer: "On est là pour toi. Dans ces moments sensibles, on t'accompagne humainement et professionnellement. Selon la situation, un préavis s’applique, et on cherche à te proposer rapidement une nouvelle mission."
    },
    {
      question: "Est-ce que je travaille le 1er mai ?",
      answer: "Le 1er mai est un jour férié obligatoirement chômé et payé s’il tombe sur un jour habituellement travaillé. Pas d’intervention prévue ce jour-là, sauf situation exceptionnelle clairement validée en amont avec Anissa. Et dans ce cas, la rémunération est doublée."
    },
    {
      question: "Quel délai dois-je respecter pour poser des congés ?",
      answer: "Pour des congés planifiés, il est demandé de prévenir au minimum un mois à l’avance, conformément à la convention collective. C’est ce délai qui permet une organisation fluide pour assurer la continuité auprès des bénéficiaires. En cas d’urgence, on reste bien sûr à l’écoute : on échange et on trouve ensemble une solution humaine et responsable."
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
              <div className="w-48 h-48 mx-auto md:mx-0 rounded-full overflow-hidden mb-4">
  <img
    src="/images/anissa-benbekhta.jpg"
    alt="Anissa Benbekhta"
    className="w-full h-full object-cover"
  />
</div>

                <div className="space-y-2">
                  <a 
                    href="tel:0617077955" 
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