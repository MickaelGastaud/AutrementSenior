'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MethodePEPS() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: 1,
      title: "1ère rencontre",
      color: "from-orange-500 to-orange-400",
      borderColor: "border-orange-500",
      items: [
        "Identification des besoins",
        "Signature du contrat"
      ]
    },
    {
      number: 2,
      title: "2ème rencontre",
      subtitle: "Bilan gériatrique",
      color: "from-orange-400 to-orange-300",
      borderColor: "border-orange-400",
      items: []
    },
    {
      number: 3,
      title: "Mise en place des actions",
      color: "from-orange-300 to-orange-200",
      borderColor: "border-orange-300",
      items: [
        "Par priorités",
        "Selon Planification"
      ]
    },
    {
      number: 4,
      title: "Pérennisation",
      color: "from-green-400 to-green-300",
      borderColor: "border-green-400",
      items: [
        "Tracas du quotidien",
        "RDV",
        "Auxiliaires",
        "Soignants"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Titre stylisé PEPS */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <motion.h2 
              className="text-7xl md:text-8xl font-black mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <span className="bg-gradient-to-r from-primary via-orange-400 to-secondary bg-clip-text text-transparent">
                P.E.P.S
              </span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-xl md:text-2xl text-gray-700 font-medium mt-4"
            >
              La méthode
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-2 md:gap-4 mt-8 text-lg md:text-xl"
          >
            <span className="font-bold text-primary">Problème</span>
            <span className="text-gray-300 mx-2">|</span>
            <span className="font-bold text-orange-500">Écoute</span>
            <span className="text-gray-300 mx-2">|</span>
            <span className="font-bold text-orange-400">Planification</span>
            <span className="text-gray-300 mx-2">|</span>
            <span className="font-bold text-secondary">Suivi</span>
          </motion.div>
        </motion.div>

        {/* Schéma des étapes */}
        <div className="relative max-w-6xl mx-auto">
          {/* Ligne de connexion */}
          <div className="absolute top-[6.5rem] left-0 right-0 h-0.5 bg-gray-300 hidden md:block" />
          
          {/* Étapes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Cercle principal */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveStep(activeStep === step.number ? null : step.number)}
                  className={`
                    relative w-52 h-52 mx-auto rounded-full border-4 ${step.borderColor}
                    bg-white cursor-pointer shadow-lg hover:shadow-xl transition-all
                    ${activeStep === step.number ? 'ring-4 ring-offset-4 ring-' + step.borderColor.split('-')[1] + '-200' : ''}
                  `}
                >
                  {/* Numéro */}
                  <div className={`
                    absolute -top-5 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full
                    bg-gradient-to-r ${step.color} text-white font-bold text-2xl
                    flex items-center justify-center shadow-lg
                  `}>
                    {step.number}
                  </div>
                  
                  {/* Contenu du cercle */}
                  <div className="flex flex-col items-center justify-center h-full p-5 text-center">
                    <h3 className="font-bold text-gray-900 mb-1 text-base">{step.title}</h3>
                    {step.subtitle && (
                      <p className="text-gray-700 font-medium text-sm">{step.subtitle}</p>
                    )}
                    {step.items.length > 0 && (
                      <div className="text-xs text-gray-600 mt-2 space-y-1">
                        {step.items.map((item, i) => (
                          <div key={i} className="text-center">{item}</div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Point sur la ligne */}
                <div className={`
                  absolute top-[6.5rem] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full
                  bg-gradient-to-r ${step.color} hidden md:block
                `} />
              </motion.div>
            ))}
          </div>

          {/* Illustrations */}
          <div className="flex justify-between items-end mt-8 px-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-6xl"
            >
              👨‍⚕️
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-6xl"
            >
              🤝
            </motion.div>
          </div>
        </div>

        {/* Description détaillée */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Notre méthode PEPS garantit un accompagnement structuré et personnalisé. 
            De l'identification des besoins à la pérennisation des solutions, 
            nous sommes à vos côtés à chaque étape pour assurer le bien-être de votre proche.
          </p>
        </motion.div>
      </div>
    </section>
  );
}