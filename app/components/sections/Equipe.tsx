'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Equipe() {
  const [selectedMember, setSelectedMember] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [showSoundHint, setShowSoundHint] = useState(false);

  const equipe = [
    {
      id: 1,
      nom: "Caroline Gastaud",
      poste: "CEO & Fondatrice Autrement Senior",
      role: "Fondatrice",
      description: "Chez Autrement Senior, nous croyons que chaque personne mérite de vieillir avec dignité et dans le confort de son domicile.",
      bio: "Forte de son expérience dans l'accompagnement des seniors, Caroline partage sa vision d'un service humain et personnalisé.",
      tags: [
        { icon: "👥", text: "+20 ans d'expérience", color: "secondary" },
        { icon: "🎓", text: "Expert en gérontologie", color: "primary" }
      ],
      initiales: "CG",
      videoUrl: "https://www.youtube.com/embed/U3moi5VrEu0",
      hasVideo: true,
      photo: "/images/caroline-gastaud.jpg"
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
      hasVideo: false,
      photo: null // Pas de photo disponible
    },
    {
      id: 3,
      nom: "Anissa Benbekta",
      poste: "Coordinatrice auxiliaire de vie",
      role: "Coordinatrice",
      description: "Anissa coordonne avec bienveillance l'ensemble des intervenants – auxiliaires de vie en CESU ou prestataires – pour garantir un accompagnement sur mesure et de qualité.",
      bio: "Son approche humaine et son professionnalisme font d'Anissa un pilier essentiel de notre équipe.",
      tags: [
        { icon: "❤️", text: "Coordination bienveillante", color: "secondary" },
        { icon: "⭐", text: "Excellence du service", color: "primary" }
      ],
      initiales: "AB",
      videoUrl: "https://www.youtube.com/embed/6U2wsi8K5J0",
      hasVideo: true,
      photo: "/images/anissa-benbekhta.jpg"
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
      videoUrl: "https://www.youtube.com/embed/1_1WVxeJNOg",
      hasVideo: true,
      photo: "/images/francoise-barre.jpg"
    },
    {
      id: 5,
      nom: "Claire Vinhais",
      poste: "Infirmière Coordinatrice",
      role: "Infirmière",
      description: "Claire apporte son expertise d'infirmière pour évaluer les besoins et coordonner les soins de nos bénéficiaires.",
      bio: "Son expérience en soins infirmiers garantit une évaluation précise des besoins de chaque senior.",
      tags: [
        { icon: "💉", text: "Consultation infirmière", color: "secondary" },
        { icon: "📋", text: "Évaluation gériatrique", color: "primary" }
      ],
      initiales: "CV",
      hasVideo: false,
      photo: "/images/claire-vinhais.jpg"
    }
  ];

  const currentMember = equipe[selectedMember];

  // Lancer automatiquement la vidéo pour Caroline
  useEffect(() => {
    // Si c'est Caroline (index 0) et qu'elle a une vidéo, lancer automatiquement
    if (selectedMember === 0 && equipe[0].hasVideo) {
      setShowVideo(true);
      // Afficher l'indicateur de son après un court délai
      setTimeout(() => setShowSoundHint(true), 1000);
    }
  }, [selectedMember, equipe]);

  // Gérer l'affichage de l'indicateur de son
  useEffect(() => {
    if (showVideo && currentMember.hasVideo) {
      setShowSoundHint(true);
      // Masquer l'indicateur après 5 secondes
      const timer = setTimeout(() => setShowSoundHint(false), 5000);
      return () => clearTimeout(timer);
    } else {
      setShowSoundHint(false);
    }
  }, [showVideo, currentMember.hasVideo]);

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
                  // Si ce n'est pas Caroline, masquer la vidéo
                  if (index !== 0) {
                    setShowVideo(false);
                  }
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
                {/* Vidéo ou photo plein écran */}
                <div className="relative min-h-[400px] md:min-h-[500px] overflow-hidden">
                  {currentMember.hasVideo && showVideo ? (
                    <div className="absolute inset-0">
                      <iframe
                        src={`${currentMember.videoUrl}?autoplay=1&mute=1`}
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

                      {/* Indicateur de son */}
                      <AnimatePresence>
                        {showSoundHint && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute bottom-4 left-4 bg-primary text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 z-10"
                            onClick={() => setShowSoundHint(false)}
                          >
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                              </svg>
                            </motion.div>
                            <span className="text-sm font-medium">Cliquez pour activer le son</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <>
                      {/* Photo en arrière-plan plein écran */}
                      {currentMember.photo ? (
                        <div className="absolute inset-0">
                          <Image
                            src={currentMember.photo}
                            alt={currentMember.nom}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                          />
                          {/* Overlay gradient pour améliorer la lisibilité */}
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-gray-900/20" />
                        </div>
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
                      )}
                      
                      {/* Contenu au-dessus de la photo */}
                      <div className="relative z-10 flex items-center justify-center h-full min-h-[400px] md:min-h-[500px] p-8">
                        {currentMember.hasVideo ? (
                          <div className="text-center">
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
                          </div>
                        ) : (
                          <div className="text-center">
                            {!currentMember.photo && (
                              <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-5xl font-bold mx-auto">
                                {currentMember.initiales}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </>
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
                    {currentMember.photo ? (
                      <div className="relative w-14 h-14 rounded-full overflow-hidden">
                        <Image
                          src={currentMember.photo}
                          alt={currentMember.nom}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                    ) : (
                      <div className={`
                        w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg
                        ${selectedMember === 0 ? 'bg-secondary' : 'bg-primary'}
                      `}>
                        {currentMember.initiales}
                      </div>
                    )}
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