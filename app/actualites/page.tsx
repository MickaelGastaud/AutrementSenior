'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Actualites() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Articles pour le carrousel
  const articlesCarrousel = [
    {
      id: 1,
      titre: "La méthode PEPS : révolutionner l'accompagnement des seniors",
      extrait: "Découvrez comment notre approche innovante transforme le quotidien de nos aînés en mettant l'accent sur la personnalisation et le bien-être.",
      image: "https://images.unsplash.com/photo-1594737626072-90dc274bc2bd?w=800&h=400&fit=crop",
      date: "15 Décembre 2024",
      categorie: "Innovation"
    },
    {
      id: 2,
      titre: "Ouverture de notre nouvelle agence à Montpellier",
      extrait: "Autrement Senior étend ses services pour mieux accompagner les familles de la région Occitanie avec une équipe dédiée et passionnée.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=400&fit=crop",
      date: "10 Décembre 2024",
      categorie: "Actualité"
    },
    {
      id: 3,
      titre: "Formation continue : nos auxiliaires se perfectionnent",
      extrait: "L'excellence du service passe par la formation. Nos équipes ont suivi une nouvelle session sur l'accompagnement des personnes atteintes d'Alzheimer.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop",
      date: "5 Décembre 2024",
      categorie: "Formation"
    }
  ];

  // Articles de blog
  const articlesBlog = [
    {
      id: 4,
      titre: "Comment choisir le bon accompagnement pour vos proches ?",
      extrait: "Guide pratique pour identifier les besoins de vos aînés et sélectionner les services adaptés.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
      date: "1 Décembre 2024",
      auteur: "Caroline Gastaud"
    },
    {
      id: 5,
      titre: "Les bienfaits de l'activité physique adaptée",
      extrait: "Maintenir une activité physique régulière est essentiel pour préserver l'autonomie et le bien-être des seniors.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      date: "25 Novembre 2024",
      auteur: "Claire Vinhais"
    },
    {
      id: 6,
      titre: "Témoignage : 6 mois avec Autrement Senior",
      extrait: "Madame Martin partage son expérience et celle de sa mère après 6 mois d'accompagnement personnalisé.",
      image: "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=400&h=300&fit=crop",
      date: "20 Novembre 2024",
      auteur: "Anissa Benbekta"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % articlesCarrousel.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + articlesCarrousel.length) % articlesCarrousel.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6"
          >
            Actualités
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-3xl mx-auto"
          >
            Suivez nos dernières nouvelles, conseils et témoignages
          </motion.p>
        </div>
      </section>

      {/* Carrousel */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="relative h-[500px]">
              {articlesCarrousel.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index === currentSlide ? 1 : 0,
                    x: index === currentSlide ? 0 : 100
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 ${index === currentSlide ? 'pointer-events-auto' : 'pointer-events-none'}`}
                >
                  <div className="relative h-full">
                    <img
                      src={article.image}
                      alt={article.titre}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="inline-block px-3 py-1 bg-primary rounded-full text-sm mb-4">
                        {article.categorie}
                      </span>
                      <h2 className="text-3xl font-bold mb-3">{article.titre}</h2>
                      <p className="text-lg mb-4 max-w-3xl">{article.extrait}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{article.date}</span>
                        <Link 
                          href={`/actualites/${article.id}`}
                          className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                        >
                          Lire la suite
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Boutons de navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicateurs */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {articlesCarrousel.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Blog */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nos derniers articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articlesBlog.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={article.image}
                    alt={article.titre}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.auteur}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {article.titre}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {article.extrait}
                  </p>
                  <Link 
                    href={`/actualites/${article.id}`}
                    className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                  >
                    Lire la suite
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

{/* Section Reels Instagram */}
<section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Nos Reels Instagram
      </h2>
      <p className="text-lg text-gray-600">
        Suivez-nous sur Instagram pour plus de contenus
      </p>
    </div>

    {/* Grille de Reels */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Reel 1 */}
      <div className="aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden">
        <iframe 
          src="https://www.instagram.com/reel/DKSK-2viGGg/embed" 
          className="w-full h-full"
          frameBorder="0" 
          scrolling="no"
          allowTransparency
        />
      </div>
      
      {/* Reel 2 */}
      <div className="aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden">
        <iframe 
          src="https://www.instagram.com/reel/DJbb75ECW4W/embed" 
          className="w-full h-full"
          frameBorder="0" 
          scrolling="no"
          allowTransparency
        />
      </div>
      
      {/* Reel 3 */}
      <div className="aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden">
        <iframe 
          src="https://www.instagram.com/reel/DJ_zoNSCGWE/embed" 
          className="w-full h-full"
          frameBorder="0" 
          scrolling="no"
          allowTransparency
        />
      </div>
    </div>

    {/* Bouton voir plus */}
    <div className="text-center mt-8">
      <a 
        href="https://www.instagram.com/autrementsenior/reels/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-colors"
      >
        Voir tous nos Reels
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  </div>
</section>
    </div>
  );
}