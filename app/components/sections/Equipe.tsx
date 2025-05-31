'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Equipe() {
  const [selectedMember, setSelectedMember] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const equipe = [
    {
      id: 1,
      nom: "Caroline Gastaud",
      poste: "CEO & Fondatrice Autrement Senior",
      role: "Fondatrice",
      description: "Chez Autrement Senior, nous croyons que chaque personne mérite de vieillir avec dignité et dans le confort de son domicile.",
      bio: "Forte de son expérience dans l'accompagnement des seniors, Caroline partage sa vision d'un service humain et personnalisé.",
      tags: [
        { icon: "👥", text: "+10 ans d'expérience", color: "secondary" },
        { icon: "🎓", text: "Expert en gérontologie", color: "primary" }
      ],
      initiales: "CG",
      videoUrl: "https://www.youtube.com/embed/U3moi5VrEu0",
      hasVideo: true
    },
    {
      id: 2,
      nom: "Mickael Gastaud",
      poste: "Co-fondateur",
      role: "Co-fondateur",
      description: "Expert en gestion et développement, Mickael assure la stratégie et le déploiement d'Autrement Senior sur le territoire.",
      bio: "Passionné par l'entrepreneuriat social, Mickael met ses compétences au service du bien-être des seniors.",
      tags: [
        { icon: "📊", text: "Stratégie & Développement", color: "secondary" },
        { icon: "🚀", text: "Innovation sociale", color: "primary" }
      ],
      initiales: "MG",
      hasVideo: false
    },
    {
      id: 3,
      nom: "Anissa Benbekta",
      poste: "Coordinatrice auxiliaire de vie",
      role: "Coordinatrice",
      description: "Anissa coordonne avec bienveillance nos équipes d'auxiliaires de vie pour garantir un service de qualité.",
      bio: "Son approche humaine et son professionnalisme font d'Anissa un pilier essentiel de notre équipe.",
      tags: [
        { icon: "❤️", text: "Coordination bienveillante", color: "secondary" },
        { icon: "⭐", text: "Excellence du service", color: "primary" }
      ],
      initiales: "AB",
      hasVideo: false
    },
    {
      id: 4,
      nom: "Françoise Barre",
      poste: "Assistance de coordination médicale",
      role: "Coordination médicale",
      description: "Forte de son expérience médicale, Françoise assure la liaison entre les professionnels de santé et les familles.",
      bio: "Sa connaissance du secteur médical permet une coordination optimale des soins.",
      tags: [
        { icon: "🏥", text: "Expertise médicale", color: "secondary" },
        { icon: "🤝", text: "Liaison santé", color: "primary" }
      ],
      initiales: "FB",
      hasVideo: false
    },
    {
      id: 5,
      nom: "Claire Vinhais",
      poste: "Infirmière Coordinatrice",
      role: "Infirmière",
      description: "Claire apporte son expertise d'infirmière pour évaluer les besoins et coordonner les soins de nos bénéficiaires.",
      bio: "Son expérience en soins infirmiers garantit une évaluation précise des besoins de chaque senior.",
      tags: [
        { icon: "💉", text: "Soins infirmiers", color: "secondary" },
        { icon: "📋", text: "Évaluation gériatrique", color: "primary" }
      ],
      initiales: "CV",
      hasVideo: false
    }
  ];

  const currentMember = equipe[selectedMember];

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
            Notre Équipe
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Des professionnels passionnés au service de vos proches
          </p>
        </motion.div>

        {/* Onglets de navigation */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {equipe.map((member, index) => (
              <button
                key={member.id}
                onClick={() => {
                  setSelectedMember(index);
                  setShowVideo(false);
                }}
                className={`
                  px-6 py-3 rounded-full font-medium transition-all
                  ${selectedMember === index 
                    ? 'bg-secondary text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                  }
                `}
              >
                {member.nom}
              </button>
            ))}
          </div>
          
          {/* Tag du rôle */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMember.role}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-center mt-4"
            >
              <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full font-medium">
                {currentMember.role}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carte du membre sélectionné */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMember.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Vidéo ou placeholder visuel */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 flex items-center justify-center min-h-[400px] relative">
                  {currentMember.hasVideo && showVideo ? (
                    <div className="absolute inset-4 rounded-xl overflow-hidden">
                      <iframe
                        src={currentMember.videoUrl}
                        title={`Présentation de ${currentMember.nom}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <button
                        onClick={() => setShowVideo(false)}
                        className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      {currentMember.hasVideo ? (
                        <>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowVideo(true)}
                            className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-white/30 transition-all"
                          >
                            <svg className="w-12 h-12 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </motion.button>
                          <h3 className="text-white text-2xl font-bold mb-2">Vidéo de {currentMember.nom.split(' ')[0]}</h3>
                          <p className="text-white/80">Découvrez notre vision</p>
                        </>
                      ) : (
                        <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-5xl font-bold mx-auto">
                          {currentMember.initiales}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Informations */}
                <div className="p-8 md:p-12">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl font-bold text-gray-900 mb-2"
                  >
                    {currentMember.nom}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-secondary font-medium mb-6"
                  >
                    {currentMember.poste}
                  </motion.p>
                  
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-gray-700 italic mb-6 pl-4 border-l-4 border-secondary"
                  >
                    "{currentMember.description}"
                  </motion.blockquote>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 mb-8"
                  >
                    {currentMember.bio}
                  </motion.p>

                  {/* Tags */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-3"
                  >
                    {currentMember.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`
                          inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                          ${tag.color === 'secondary' 
                            ? 'bg-secondary/10 text-secondary' 
                            : 'bg-primary/10 text-primary'
                          }
                        `}
                      >
                        <span className="text-lg">{tag.icon}</span>
                        {tag.text}
                      </span>
                    ))}
                  </motion.div>

                  {/* Avatar et nom en bas */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-200"
                  >
                    <div className={`
                      w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg
                      ${selectedMember === 0 ? 'bg-secondary' : 'bg-primary'}
                    `}>
                      {currentMember.initiales}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{currentMember.nom}</p>
                      <p className="text-sm text-gray-600">{currentMember.poste}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}