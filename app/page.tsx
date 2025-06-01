'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import NosMissions from './components/sections/NosMissions';
import Equipe from './components/sections/Equipe';

export default function Home() {
  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedText2, setDisplayedText2] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
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

    // Clignotement du curseur
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section avec image de fond */}
      <section className="relative min-h-screen flex items-center">
        {/* Image de fond */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559234938-b60fff04894d?q=80&w=2070')`,
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
              className="text-5xl md:text-7xl font-bold mb-6 min-h-[150px] md:min-h-[100px]"
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
              {showCursor && <span className="inline-block w-1 h-12 bg-primary ml-2"></span>}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 }}
              className="text-xl text-gray-200 mb-8 max-w-2xl"
            >
              Un accompagnement personnalisé et bienveillant pour maintenir l'autonomie 
              et le bien-être de vos aînés à domicile.
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
                href="/contact"
                className="bg-accent text-gray-800 px-8 py-4 rounded-lg hover:bg-accent-dark transition-all hover:scale-105 text-lg font-medium text-center inline-block"
              >
                Nous contacter
              </Link>
            </motion.div>

            {/* Badge gratuit */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4 }}
              className="mt-8"
            >
              <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                Gratuit et sans engagement
              </span>
            </motion.div>
          </div>
        </div>

        {/* Éléments décoratifs (étoiles) */}
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="text-white/20 text-6xl"
          >
            ⭐
          </motion.div>
        </div>
      </section>

      {/* Section Nos Missions */}
      <NosMissions />

      {/* Section Équipe */}
      <Equipe />

      {/* Section Témoignages (placeholder) */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-gray-700">
              Découvrez les témoignages de nos clients
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500 italic">
              Section témoignages à venir...
            </p>
          </div>
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
              Contactez-nous dès aujourd'hui pour une évaluation gratuite et sans engagement
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
    </main>
  );
}