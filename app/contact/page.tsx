'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    besoin: '',
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    message: '',
    rgpdAccept: false,
  });

  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    telephone: '',
    email: '',
  });

  // Références pour le scroll
  const formRef = useRef<HTMLFormElement>(null);
  const personalInfoRef = useRef<HTMLDivElement>(null);

  const besoins = [
    { value: 'coordination-peps', label: 'Offre Coordination / PEPS', icon: '🎯' },
    { value: 'sortie-hospitalisation', label: 'Sortie d\'hospitalisation', icon: '🏥' },
    { value: 'auxiliaire-vie', label: 'Une auxiliaire de vie', icon: '👥' },
    { value: 'partenariat', label: 'Demande de partenariat', icon: '🤝' },
    { value: 'autres', label: 'Autres', icon: '💬' },
  ];

  const handleBesoinSelect = (value: string) => {
    setFormData({ ...formData, besoin: value });
    setShowPersonalInfo(true);
  };

  // Effet pour le scroll automatique quand le formulaire personnel apparaît
  useEffect(() => {
    if (showPersonalInfo && personalInfoRef.current) {
      // Petit délai pour laisser l'animation se lancer
      setTimeout(() => {
        personalInfoRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest' 
        });
      }, 100);
    }
  }, [showPersonalInfo]);

  const validateForm = () => {
    const newErrors = { telephone: '', email: '' };
    let isValid = true;

    // Validation téléphone
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    if (!formData.telephone) {
      newErrors.telephone = 'Le téléphone est obligatoire';
      isValid = false;
    } else if (!phoneRegex.test(formData.telephone.replace(/\s/g, ''))) {
      newErrors.telephone = 'Numéro de téléphone invalide';
      isValid = false;
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'L\'email est obligatoire';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email invalide';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-white rounded-3xl shadow-xl p-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Votre demande a bien été envoyée !
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Un de nos conseillers vous contactera très prochainement pour échanger sur vos besoins 
                et vous proposer la solution la plus adaptée.
              </p>
              
              <div className="space-y-6">
                <p className="text-gray-600 font-medium">
                  En attendant, suivez notre actualité :
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="https://instagram.com/autrementsenior"
                    target="_blank"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                    Instagram
                  </Link>
                  
                  <Link
                    href="https://www.linkedin.com/company/autrement-senior"
                    target="_blank"
                    className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </Link>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <Link href="/" className="text-primary hover:text-primary-dark font-medium">
                    ← Retour à l&apos;accueil
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Comment pouvons-nous <span className="text-primary">vous aider</span> ?
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Expliquez-nous votre besoin, le conseiller le plus adapté à votre situation 
              vous rappellera rapidement.
            </p>
            <div className="mt-6">
              <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                ✓ Gratuit et sans engagement
              </span>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              {/* Étape 1 : Choix du besoin */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Que recherchez-vous ?
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {besoins.map((besoin) => (
                    <motion.button
                      key={besoin.value}
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleBesoinSelect(besoin.value)}
                      className={`
                        text-left p-6 rounded-xl border-2 transition-all
                        ${formData.besoin === besoin.value
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-primary/50'
                        }
                      `}
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-3xl">{besoin.icon}</span>
                        <span className="font-medium text-gray-900">{besoin.label}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Étape 2 : Informations personnelles */}
              <AnimatePresence>
                {showPersonalInfo && (
                  <motion.div
                    ref={personalInfoRef}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="scroll-mt-20" // Ajout d'une marge pour le scroll
                  >
                    <div className="border-t border-gray-200 pt-8 mt-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Vos coordonnées
                      </h2>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Prénom
                          </label>
                          <input
                            type="text"
                            value={formData.prenom}
                            onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                            placeholder="Votre prénom"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nom
                          </label>
                          <input
                            type="text"
                            value={formData.nom}
                            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                            placeholder="Votre nom"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Téléphone <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            value={formData.telephone}
                            onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all ${
                              errors.telephone ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="06 00 00 00 00"
                            required
                          />
                          {errors.telephone && (
                            <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all ${
                              errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="votre@email.fr"
                            required
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message (facultatif)
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                          placeholder="Décrivez votre besoin en quelques mots..."
                        />
                      </div>

                      {/* RGPD */}
                      <div className="bg-gray-50 rounded-xl p-6 mb-8">
                        <p className="text-sm text-gray-600 mb-4">
                          Afin de répondre à votre demande, nous collectons vos données personnelles.
                          Nous pouvons également utiliser votre mail ou téléphone pour vous adresser
                          des informations concernant nos services. Si vous ne souhaitez pas recevoir de
                          telles informations, cochez la case ci-dessous :
                        </p>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.rgpdAccept}
                            onChange={(e) => setFormData({ ...formData, rgpdAccept: e.target.checked })}
                            className="w-5 h-5 text-primary rounded focus:ring-primary mt-0.5"
                          />
                          <span className="text-sm text-gray-600">
                            Je m&apos;oppose à ce que Autrement Senior me propose par mail ou téléphone
                            des services analogues à ceux qui concernent ma demande.
                          </span>
                        </label>
                        <p className="text-xs text-gray-500 mt-4">
                          En savoir plus sur la gestion de vos données et vos droits par{' '}
                          <Link href="/legal/confidentialite" className="text-primary hover:underline">
                            Autrement Senior
                          </Link>
                        </p>
                      </div>

                      {/* Bouton submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-white py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande →'}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            {/* Contact direct */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-center"
            >
              <p className="text-gray-600 mb-2">Vous préférez nous appeler ?</p>
              <a 
                href="tel:0649604199" 
                className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06.49.60.41.99
              </a>
              <p className="text-sm text-gray-500 mt-1">
                Du lundi au vendredi de 9h à 17h
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}