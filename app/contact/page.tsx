'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// ✅ Typage strict des services
type ServiceKey =
  | 'aideMenagere'
  | 'compagnie'
  | 'presenceNuit'
  | 'aideToilette'
  | 'courses'
  | 'jeNeSaisPas';

export default function Contact() {
  const [formData, setFormData] = useState({
    besoin: 'Une aide à domicile pour moi',
    services: {
      aideMenagere: false,
      compagnie: false,
      presenceNuit: false,
      aideToilette: false,
      courses: false,
      jeNeSaisPas: false,
    },
    rgpdAccept: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleServiceChange = (service: string) => {
    if (
      [
        'aideMenagere',
        'compagnie',
        'presenceNuit',
        'aideToilette',
        'courses',
        'jeNeSaisPas',
      ].includes(service)
    ) {
      const key = service as ServiceKey;
      setFormData((prev) => ({
        ...prev,
        services: {
          ...prev.services,
          [key]: !prev.services[key],
        },
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Envoi simulé — à remplacer par appel API
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
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Votre accompagnement sur mesure se prépare !
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Un de nos conseillers vous contactera très prochainement pour échanger sur vos besoins 
                et vous proposer la solution la plus adaptée.
              </p>
              <div className="space-y-4">
                <p className="text-gray-600">
                  En attendant, découvrez notre actualité sur nos réseaux sociaux
                </p>
                <Link
                  href="https://instagram.com/autrementsenior"
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07..." />
                  </svg>
                  Suivez-nous sur Instagram
                </Link>
                <div className="mt-4">
                  <Link href="/" className="text-primary hover:text-primary-dark font-medium">
                    Retour à l'accueil
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
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Colonne gauche */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comment pouvons-nous vous aider ?
            </h1>
            <div className="mb-8">
              <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                Gratuit et sans engagement.
              </span>
            </div>
            <p className="text-lg text-gray-700 mb-8">
              Expliquez-nous en 2 clics votre besoin, le conseiller le plus adapté à votre situation 
              vous rappellera rapidement.
            </p>
            <div className="flex -space-x-2 mb-8">
              {['👩', '👨', '👩', '👩'].map((emoji, i) => (
                <div key={i} className="w-16 h-16 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center">
                  <span className="text-2xl">{emoji}</span>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="text-gray-600 mb-2">Vous préférez nous appeler ?</p>
              <a href="tel:0649604199" className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors">
                06.49.60.41.99
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Du lundi au vendredi de 9h à 17h
              </p>
            </div>
          </motion.div>

          {/* Colonne droite - Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <label className="block text-lg font-bold text-gray-900 mb-4">
                  Que recherchez vous ?
                </label>
                <select
                  value={formData.besoin}
                  onChange={(e) => setFormData({ ...formData, besoin: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                >
                  <option>Une aide à domicile pour moi</option>
                  <option>Une aide à domicile pour un proche</option>
                  <option>Des informations sur vos services</option>
                  <option>Un devis personnalisé</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-lg font-bold text-gray-900 mb-4">
                  Accompagnement(s) souhaité(s)
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {(
                    [
                      ['aideMenagere', 'Aide ménagère'],
                      ['aideToilette', 'Aide à la toilette, lever/coucher'],
                      ['compagnie', 'Compagnie, stimulation'],
                      ['courses', 'Courses et-ou repas'],
                      ['presenceNuit', 'Présence de nuit'],
                      ['jeNeSaisPas', 'Je ne sais pas'],
                    ] as [ServiceKey, string][]
                  ).map(([key, label]) => (
                    <label key={key} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.services[key]}
                        onChange={() => handleServiceChange(key)}
                        className="w-5 h-5 text-primary rounded focus:ring-primary"
                      />
                      <span className="text-gray-700 group-hover:text-gray-900">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* ✅ BOUTON : RGPD facultatif, style incitatif */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-4 rounded-full font-bold text-lg transition-all
                  ${formData.rgpdAccept
                    ? 'bg-primary text-white hover:bg-primary-dark hover:scale-105' 
                    : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                  }
                `}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Je poursuis ma demande →'}
              </button>

              <div className="mt-6 space-y-4 text-sm">
                <p className="text-gray-600">
                  Afin de répondre à votre demande, nous collectons vos données personnelles.
                  Nous pouvons également utiliser votre mail ou téléphone pour vous adresser
                  des informations concernant nos services. Si vous ne souhaitez pas recevoir de
                  telles informations, cochez la case ci-dessous :
                </p>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.rgpdAccept}
                    onChange={(e) =>
                      setFormData({ ...formData, rgpdAccept: e.target.checked })
                    }
                    className="w-5 h-5 text-primary rounded focus:ring-primary mt-0.5"
                  />
                  <span className="text-gray-600">
                    Je m'oppose à ce que Autrement Senior me propose par mail ou téléphone
                    des services analogues à ceux qui concernent ma demande.
                  </span>
                </label>
                <p className="text-gray-500">
                  En savoir plus sur la gestion de vos données et vos droits par{' '}
                  <Link href="/confidentialite" className="text-primary hover:underline">
                    Autrement Senior
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
