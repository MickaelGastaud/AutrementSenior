'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PostulerCESU() {
  const [formData, setFormData] = useState({
    // Informations personnelles
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    dateNaissance: '',
    adresse: '',
    codePostal: '',
    ville: '',
    
    // Situation
    permis: '',
    vehicule: '',
    disponibilites: {
      matin: false,
      apresMidi: false,
      soir: false,
      nuit: false,
      weekend: false
    },
    
    // Expérience
    experience: '',
    formations: '',
    motivation: '',
    
    // Documents
    cv: null,
    
    // Consentement
    rgpd: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (name: string) => {
    setFormData(prev => ({
      ...prev,
      disponibilites: {
        ...prev.disponibilites,
        [name]: !prev.disponibilites[name]
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center">
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
                transition={{ delay: 0.2, type: "spring" }}
                className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Candidature envoyée !
              </h2>
              
              <p className="text-lg text-gray-700 mb-8">
                Merci pour votre candidature. Anissa Benbekta vous contactera 
                dans les prochains jours pour échanger sur votre projet professionnel.
              </p>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  En attendant, n'hésitez pas à la contacter directement :
                </p>
                
                <div className="flex flex-col gap-3 items-center">
                  <a
                    href="tel:0649604199"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    06.49.60.41.99
                  </a>
                  
                  <Link
                    href="/cesu"
                    className="text-gray-600 hover:text-gray-900 underline"
                  >
                    Retour à la page CESU
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Postuler comme Auxiliaire de vie
          </h1>
          <p className="text-xl text-gray-700">
            Rejoignez notre équipe et donnez du sens à votre carrière
          </p>
        </motion.div>

        {/* Formulaire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit}>
            {/* Informations personnelles */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations personnelles</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Prénom *</label>
                  <input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Nom *</label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Téléphone *</label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Date de naissance *</label>
                  <input
                    type="date"
                    name="dateNaissance"
                    value={formData.dateNaissance}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Code postal *</label>
                  <input
                    type="text"
                    name="codePostal"
                    value={formData.codePostal}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-gray-700 font-medium mb-2">Adresse complète *</label>
                <input
                  type="text"
                  name="adresse"
                  value={formData.adresse}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            {/* Situation */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Votre situation</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Avez-vous le permis de conduire ? *</label>
                  <select
                    name="permis"
                    value={formData.permis}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                    <option value="en-cours">En cours d'obtention</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Disposez-vous d'un véhicule ?</label>
                  <select
                    name="vehicule"
                    value={formData.vehicule}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-gray-700 font-medium mb-3">Disponibilités *</label>
                <div className="space-y-3">
                  {[
                    { key: 'matin', label: 'Matin (6h-12h)' },
                    { key: 'apresMidi', label: 'Après-midi (12h-18h)' },
                    { key: 'soir', label: 'Soir (18h-22h)' },
                    { key: 'nuit', label: 'Nuit (22h-6h)' },
                    { key: 'weekend', label: 'Week-end' }
                  ].map(dispo => (
                    <label key={dispo.key} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.disponibilites[dispo.key as keyof typeof formData.disponibilites]}
                        onChange={() => handleCheckboxChange(dispo.key)}
                        className="w-5 h-5 text-primary rounded focus:ring-primary"
                      />
                      <span className="text-gray-700">{dispo.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Expérience et motivation */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Expérience et motivation</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Expérience dans l'aide à la personne
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Décrivez votre expérience passée (professionnelle ou personnelle)..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Formations et diplômes
                  </label>
                  <textarea
                    name="formations"
                    value={formData.formations}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Listez vos formations en lien avec le secteur..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Pourquoi souhaitez-vous rejoindre Autrement Senior ? *
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Expliquez vos motivations..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
            </div>

            {/* Consentement */}
            <div className="mb-8">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.rgpd}
                  onChange={(e) => setFormData(prev => ({ ...prev, rgpd: e.target.checked }))}
                  required
                  className="w-5 h-5 text-primary rounded focus:ring-primary mt-0.5"
                />
                <span className="text-sm text-gray-600">
                  J'accepte que mes données soient traitées dans le cadre du recrutement 
                  et conservées pendant 2 ans maximum. *
                </span>
              </label>
            </div>

            {/* Bouton submit */}
            <button
              type="submit"
              disabled={isSubmitting || !formData.rgpd}
              className={`
                w-full py-4 rounded-lg font-bold text-lg transition-all
                ${formData.rgpd
                  ? 'bg-primary text-white hover:bg-primary-dark hover:scale-105' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma candidature'}
            </button>

            <p className="text-center text-gray-500 text-sm mt-4">
              * Champs obligatoires
            </p>
          </form>
        </motion.div>
      </div>
    </main>
  );
}