'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ArticleMethodePEPS() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header avec image */}
      <section className="relative h-[400px] md:h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1594737626072-90dc274bc2bd?w=1200&h=600&fit=crop"
          alt="La méthode PEPS"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Bouton retour */}
        <Link 
          href="/actualites"
          className="absolute top-8 left-8 flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour aux actualités
        </Link>

        {/* Titre et infos */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-5xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full mb-4"
            >
              Innovation
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              La méthode PEPS : révolutionner l'accompagnement des seniors
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-6 text-white/80"
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                15 Décembre 2024
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                10 min de lecture
              </span>
              <span>•</span>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold">
                  CG
                </div>
                <div>
                  <p className="text-white font-medium">Caroline Gastaud</p>
                  <p className="text-white/70 text-sm">Responsable Communication</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contenu de l'article */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <p className="text-xl text-gray-700 leading-relaxed font-medium">
            Découvrez comment notre approche innovante transforme le quotidien de nos aînés en mettant 
            l'accent sur la personnalisation et le bien-être. La méthode PEPS est bien plus qu'un simple 
            accompagnement : c'est une philosophie qui redonne du sens et de la joie de vivre.
          </p>
        </motion.div>

        {/* Section 1 */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Qu'est-ce que la méthode PEPS ?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            PEPS signifie <strong>Personnalisation, Écoute, Plaisir et Sécurité</strong>. Ces quatre piliers 
            fondamentaux guident chacune de nos actions et constituent le cœur de notre approche révolutionnaire 
            de l'accompagnement des seniors.
          </p>
          
          {/* Les 4 piliers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-primary/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-3">P - Personnalisation</h3>
              <p className="text-gray-700">
                Chaque senior est unique. Nous adaptons nos services en fonction des besoins, 
                des goûts et de l'histoire de vie de chacun.
              </p>
            </div>
            <div className="bg-secondary/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">E - Écoute</h3>
              <p className="text-gray-700">
                L'écoute active est au cœur de notre méthode. Nous prenons le temps de comprendre 
                les attentes et les préoccupations de nos bénéficiaires.
              </p>
            </div>
            <div className="bg-accent/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-accent-dark mb-3">P - Plaisir</h3>
              <p className="text-gray-700">
                Retrouver le plaisir au quotidien est essentiel. Nous créons des moments de joie 
                à travers des activités adaptées et stimulantes.
              </p>
            </div>
            <div className="bg-primary-light/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-dark mb-3">S - Sécurité</h3>
              <p className="text-gray-700">
                La sécurité physique et émotionnelle de nos bénéficiaires est notre priorité 
                absolue dans toutes nos interventions.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 2 */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Une approche centrée sur l'humain
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            La méthode PEPS place l'humain au centre de toutes nos préoccupations. Contrairement aux approches 
            traditionnelles qui se concentrent uniquement sur les aspects médicaux ou pratiques, nous considérons 
            la personne dans sa globalité.
          </p>
          
          {/* Image illustrative */}
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1559234938-b60fff04894d?w=800&h=400&fit=crop"
              alt="Accompagnement personnalisé"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Notre équipe est formée pour identifier et répondre aux besoins non exprimés. Un sourire, 
            une main tendue, une conversation chaleureuse peuvent faire toute la différence dans la 
            journée d'une personne âgée.
          </p>
        </motion.section>

        {/* Section 3 */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Les bénéfices concrets de la méthode PEPS
          </h2>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Pour les seniors :</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-gray-700">Amélioration significative de la qualité de vie</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-gray-700">Maintien de l'autonomie plus longtemps</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-gray-700">Réduction du sentiment d'isolement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-gray-700">Stimulation cognitive et physique adaptée</span>
              </li>
            </ul>
          </div>

          <div className="bg-secondary/10 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Pour les familles :</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">✓</span>
                <span className="text-gray-700">Tranquillité d'esprit accrue</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">✓</span>
                <span className="text-gray-700">Communication régulière sur l'évolution</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">✓</span>
                <span className="text-gray-700">Accompagnement dans les décisions importantes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">✓</span>
                <span className="text-gray-700">Soutien émotionnel et pratique</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Citation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="my-12 text-center"
        >
          <blockquote className="text-2xl text-gray-700 italic font-light">
            "La méthode PEPS a transformé le quotidien de ma mère. Elle a retrouvé le sourire 
            et attend avec impatience les visites de son accompagnatrice."
          </blockquote>
          <p className="text-gray-600 mt-4">- Marie L., fille d'une bénéficiaire</p>
        </motion.div>

        {/* Section 4 */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comment mettre en place la méthode PEPS ?
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Évaluation personnalisée</h3>
                <p className="text-gray-700">
                  Nous commençons par une visite à domicile pour évaluer les besoins spécifiques 
                  et comprendre l'environnement de vie.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Plan d'accompagnement sur mesure</h3>
                <p className="text-gray-700">
                  Création d'un programme personnalisé intégrant les préférences, les habitudes 
                  et les objectifs de la personne.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sélection de l'accompagnateur idéal</h3>
                <p className="text-gray-700">
                  Nous choisissons l'auxiliaire de vie dont le profil correspond le mieux à 
                  la personnalité et aux besoins du bénéficiaire.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Suivi et ajustements continus</h3>
                <p className="text-gray-700">
                  Évaluation régulière de la satisfaction et adaptation du plan selon l'évolution 
                  des besoins.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Découvrez la méthode PEPS en action
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contactez-nous pour une évaluation gratuite et sans engagement
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Prendre rendez-vous
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        {/* Section Auteur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 mt-12 mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">À propos de l'auteur</h3>
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* Photo de l'auteur */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white text-3xl font-bold">
                CG
              </div>
            </div>
            
            {/* Infos de l'auteur */}
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-gray-900 mb-1">Caroline Gastaud</h4>
              <p className="text-primary font-medium mb-3">Responsable Communication</p>
              <p className="text-gray-700 leading-relaxed">
                Passionnée par l'accompagnement des seniors, Caroline développe des approches innovantes 
                pour améliorer le quotidien de nos aînés. Avec plus de 10 ans d'expérience dans le secteur 
                médico-social, elle est à l'origine de la méthode PEPS et veille à sa bonne application 
                au sein d'Autrement Senior.
              </p>
              
              {/* Liens sociaux de l'auteur */}
              <div className="flex gap-3 mt-4 justify-center md:justify-start">
                <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="mailto:caroline.gastaud@autrementsenior.fr" className="text-gray-500 hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Articles du même auteur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Autres articles de Caroline</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/actualites/comment-choisir-bon-accompagnement" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                  Comment choisir le bon accompagnement pour vos proches ?
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Guide pratique pour identifier les besoins de vos aînés et sélectionner les services adaptés.
                </p>
                <span className="text-primary text-sm font-medium">Lire l'article →</span>
              </div>
            </Link>
            <Link href="/actualites/innovation-service-personne" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                  L'innovation au service de la personne
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Comment la technologie et l'humain se complètent pour un meilleur accompagnement.
                </p>
                <span className="text-primary text-sm font-medium">Lire l'article →</span>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Partage */}
        <div className="flex items-center justify-center gap-4 mt-12 pt-12 border-t border-gray-200">
          <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>
          <button className="p-3 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </button>
          <button className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </button>
        </div>
      </article>
    </div>
  );
}