'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function Presse() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 'U3moi5VrEu0',
      title: 'Interview France Bleu Hérault',
      description: 'Caroline Gastaud présente Autrement Senior sur France Bleu Hérault',
      thumbnail: 'https://img.youtube.com/vi/U3moi5VrEu0/maxresdefault.jpg',
      media: 'France Bleu',
      date: 'Décembre 2023',
      type: 'Interview Radio'
    },
    {
      id: '8nLFeeKKn4k',
      title: 'Reportage France 3 Occitanie',
      description: 'Découvrez notre approche du Care Management dans ce reportage France 3',
      thumbnail: 'https://img.youtube.com/vi/8nLFeeKKn4k/maxresdefault.jpg',
      media: 'France 3',
      date: 'Novembre 2023',
      type: 'Reportage TV'
    }
  ];

  const articles = [
    {
      title: 'Article Midi Libre',
      description: 'Le Midi Libre met en lumière notre approche innovante de l\'accompagnement des seniors',
      image: 'https://autrementsenior.fr/wp-content/uploads/2023/12/midilibre.png',
      media: 'Midi Libre',
      date: 'Décembre 2023',
      type: 'Article de Presse'
    },
    {
      title: 'Article ActuSoins',
      description: 'ActuSoins présente notre méthode PEPS et son impact sur le bien-être des personnes âgées',
      image: 'https://autrementsenior.fr/wp-content/uploads/2023/12/actusoins.png',
      media: 'ActuSoins',
      date: 'Décembre 2023',
      type: 'Article Spécialisé'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Ils parlent de nous
            </h1>
            <p className="text-xl text-gray-700">
              Découvrez comment les médias relaient notre mission d'accompagnement 
              des seniors et notre approche innovante du Care Management
            </p>
          </div>
        </motion.div>

        {/* Éléments décoratifs */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-secondary/10 rounded-full blur-3xl"></div>
      </section>

      {/* Section Vidéos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Reportages et Interviews
            </h2>
            <p className="text-xl text-gray-700">
              Retrouvez nos passages dans les médias audiovisuels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all"
              >
                {/* Thumbnail avec bouton play */}
                <div className="relative aspect-video cursor-pointer" onClick={() => setSelectedVideo(video.id)}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center"
                    >
                      <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </motion.div>
                  </div>
                  
                  {/* Badge média */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {video.media}
                    </span>
                  </div>
                </div>

                {/* Informations */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 mb-4">{video.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{video.type}</span>
                    <span className="text-gray-500">{video.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Articles de Presse */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Articles de Presse
            </h2>
            <p className="text-xl text-gray-700">
              La presse écrite parle de notre engagement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all group"
              >
                {/* Image de l'article */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Badge média */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {article.media}
                    </span>
                  </div>
                </div>

                {/* Informations */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.type}</span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Contact Presse */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vous êtes journaliste ?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Nous sommes à votre disposition pour répondre à vos questions 
              et vous fournir toutes les informations nécessaires sur notre approche du Care Management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all hover:scale-105 font-medium inline-block"
              >
                Contact Presse
              </Link>
              <a
                href="tel:0649604199"
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all font-medium inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06.49.60.41.99
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal Vidéo */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="Video"
              className="w-full h-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}