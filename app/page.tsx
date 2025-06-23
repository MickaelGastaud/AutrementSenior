'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import NosMissions from './components/sections/NosMissions';
import Equipe from './components/sections/Equipe';

export default function Home() {
  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedText2, setDisplayedText2] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const text1 = "Le Care Management pour";
  const text2 = "vos proches âgés";
  
  useEffect(() => {
    let index1 = 0;
    let index2 = 0;
    
    // Première ligne
    const interval1 = setInterval(() => {
      if (index1 <= text1.length) {
        setDisplayedText1(text1.slice(0, index1));
        index1++;
      } else {
        clearInterval(interval1);
        
        // Deuxième ligne après la première
        const interval2 = setInterval(() => {
          if (index2 <= text2.length) {
            setDisplayedText2(text2.slice(0, index2));
            index2++;
          } else {
            clearInterval(interval2);
          }
        }, 50);
      }
    }, 50);

    // Popup après 30 secondes
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 30000); // 30 secondes

    return () => {
      clearTimeout(popupTimer);
    };
  }, []);

  // Gestion du lecteur audio
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);
      
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      
      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
      };
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <>
      <Head>
        <title>Autrement Senior - Care Management pour vos proches âgés | Montpellier</title>
        <meta name="description" content="Solution innovante de Care Management pour accompagner vos proches âgés. Coordination médicale, aide à domicile et soutien aux aidants familiaux dans l'Hérault." />
        <meta name="keywords" content="care management, aide personne âgée, maintien à domicile, aidants familiaux, coordination médicale, Montpellier, Hérault" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Autrement Senior - Le Care Management pour vos proches" />
        <meta property="og:description" content="La solution clé en main pour permettre à vos proches de rester chez eux en toute sérénité" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://autrementsenior.fr" />
        <meta property="og:image" content="https://autrementsenior.fr/images/autrement-senior.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Autrement Senior - Care Management pour seniors" />
        <meta name="twitter:description" content="Solution innovante pour accompagner vos proches âgés" />
        
        <link rel="canonical" href="https://autrementsenior.fr" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Autrement Senior" />
      </Head>

      <main className="min-h-screen">
        {/* Hero Section avec image de fond */}
        <section className="relative min-h-screen flex items-center">
          {/* Image de fond */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('/images/autrement-senior.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay gradient pour lisibilité du texte */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          </div>

          {/* Contenu */}
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                <span className="inline-block">
                  {displayedText1.split(' ').map((word, i) => {
                    if (word === 'Care' || word === 'Management') {
                      return <span key={i} className="text-primary">{word} </span>;
                    }
                    return <span key={i} className="text-white">{word} </span>;
                  })}
                </span>
                <br />
                <span className="text-secondary">{displayedText2}</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 }}
                className="text-xl text-gray-200 mb-8 max-w-2xl"
              >
                La solution clé en main et innovante pour vous permettre de rester chez vous, en toute sérénité
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/solution"
                  className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all hover:scale-105 text-lg font-medium text-center inline-block"
                >
                  Découvrir notre solution
                </Link>
                <Link
                  href="/valeurs"
                  className="bg-accent text-gray-800 px-8 py-4 rounded-lg hover:bg-accent-dark transition-all hover:scale-105 text-lg font-medium text-center inline-block"
                >
                  Nos Valeurs
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section Nos Missions */}
        <NosMissions />

        {/* Section Équipe */}
        <Equipe />

        {/* Bandeau Médias */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className="text-lg font-medium text-gray-600">
                Ils parlent de nous
              </h3>
            </motion.div>
            
            {/* Conteneur du bandeau défilant */}
            <div className="relative overflow-hidden">
              {/* Masque graduel sur les côtés */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
              
              <motion.div
                animate={{
                  x: [0, -2000],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 60, // Défilement très lent
                    ease: "linear",
                  },
                }}
                className="flex items-center"
              >
                {/* Les logos sont répétés 3 fois pour un défilement continu */}
                {[1, 2, 3].map((group) => (
                  <div key={group} className="flex items-center gap-24 px-12 flex-shrink-0">
                    {/* Logos existants dans votre dossier */}
                    <img src="/images/autrement-senior-france3.png" alt="France 3" className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                    <img src="/images/autrement-senior-midilibre.png" alt="Midi Libre" className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                    <img src="/images/autrement-senior-francebleu.jpg" alt="France Bleu" className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                    <img src="/images/autrement-senior-telegrafik.jpg" alt="Telegrafik" className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                    <img src="/images/autrement-senior-actusoins.jpg" alt="ActuSoins" className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section Témoignages */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <h2 className="text-4xl font-bold text-gray-900">
                  Nos avis clients
                </h2>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                  <span className="font-medium text-gray-700">Google</span>
                  <span className="text-lg font-bold text-gray-900">5</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Découvrez ce que nos clients disent de notre accompagnement
              </p>
            </motion.div>

            {/* Grille d'avis */}
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  author: "Christine RUTKOWSKI.",
                  rating: 5,
                  date: "Il y a 2 mois",
                  text: "Je suis en Normandie, ma maman sur Montpellier, nous avons connu la société «Autrement Senior» pour accompagner notre mère et pour nos enfants leur grand mère. Nous sommes tellement satisfaits par cette structure et tous les intervenants"
                },
                {
                  author: "christiane.",
                  rating: 5,
                  date: "Il y a 3 mois",
                  text: "Une société qui réunit les compétences médicales, psychologiques et administratives avec bienveillance envers les personnes âgées et leur famille.Je remercie tout particulièrement Caroline qui est très à l'écoute et se charge de trouver une solution à chaque situation aussi difficile soit-elle."
                },
                {
                  author: "Frédérique Emery.",
                  rating: 5,
                  date: "Il y a 9 mois",
                  text: "Le support de Caroline, Autrement Senior, a été précieux pour nous aider à avancer dans une période difficile. Caroline a été très à l'écoute, attentive, et rassurante. Elle a su trouver les bonnes solutions aux problèmes quotidiens que nous rencontrions. "
                }
              ].map((avis, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                        {avis.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{avis.author}</h4>
                        <p className="text-sm text-gray-500">{avis.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-blue-600 text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Vérifié</span>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    "{avis.text}"
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Google Business */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-600 mb-4">
                Vous aussi, partagez votre expérience
              </p>
              <Link
                href="https://g.page/r/Cd87SG7TPTXMEAE/review"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Laisser un avis
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-4">
                Prêt à améliorer le quotidien de votre proche ?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Contactez-nous dès aujourd&apos;hui pour une évaluation gratuite et sans engagement
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-all text-lg font-medium"
              >
                Commencer maintenant
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Popup Podcast */}
        <AnimatePresence>
          {showPopup && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 z-50"
                onClick={() => setShowPopup(false)}
              />
              
              {/* Popup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
              >
                <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden">
                  {/* Bouton fermer */}
                  <button
                    onClick={() => {
                      setShowPopup(false);
                      if (audioRef.current) {
                        audioRef.current.pause();
                        setIsPlaying(false);
                      }
                    }}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-all"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Header avec image */}
                  <div className="relative h-64 md:h-80">
                    <Image
                      src="public/images/podcast-autrement-senior.jpeg"
                      alt="Podcast Autrement Senior"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Badge Nouveau */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        🎙️ Nouveau Podcast
                      </span>
                    </div>

                    {/* Titre sur l'image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        5 Défis que vivent les aidants familiaux
                      </h3>
                      <p className="text-white/90 flex items-center gap-2">
                        <span>avec le Dr Barre</span>
                        <span className="text-white/60">•</span>
                        <span className="text-white/60">Épisode spécial</span>
                      </p>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-6 md:p-8">
                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Découvrez dans ce podcast exclusif les principaux défis auxquels font face 
                      les aidants familiaux et les solutions concrètes pour mieux accompagner vos proches.
                    </p>

                    {/* Lecteur audio */}
                    <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                      {/* Contrôles principaux */}
                      <div className="flex items-center gap-4 mb-4">
                        <button
                          onClick={togglePlay}
                          className="w-14 h-14 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center transition-all hover:scale-105 shadow-lg"
                        >
                          {isPlaying ? (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                          ) : (
                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          )}
                        </button>

                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-600">{formatTime(currentTime)}</span>
                            <span className="text-sm text-gray-600">{formatTime(duration)}</span>
                          </div>
                          
                          {/* Barre de progression */}
                          <input
                            type="range"
                            min="0"
                            max={duration || 100}
                            value={currentTime}
                            onChange={handleSeek}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer"
                          />
                        </div>
                      </div>

                      {/* Indicateur d'écoute */}
                      {isPlaying && (
                        <div className="flex items-center gap-2 text-primary">
                          <div className="flex gap-1">
                            <div className="w-1 h-4 bg-primary rounded-full animate-pulse"></div>
                            <div className="w-1 h-6 bg-primary rounded-full animate-pulse delay-75"></div>
                            <div className="w-1 h-5 bg-primary rounded-full animate-pulse delay-150"></div>
                            <div className="w-1 h-7 bg-primary rounded-full animate-pulse delay-200"></div>
                          </div>
                          <span className="text-sm font-medium">En cours d'écoute...</span>
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/podcast"
                        className="flex-1 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-all text-center"
                      >
                        Tous nos podcasts
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all text-center"
                      >
                        Besoin d'aide ?
                      </Link>
                    </div>
                  </div>

                  {/* Lecteur audio caché */}
                  <audio
                    ref={audioRef}
                    src="/podcast/Les 5 difficultés que rencontrent le plus souvent les aidants familiaux.mp3"
                    onEnded={() => setIsPlaying(false)}
                  />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}