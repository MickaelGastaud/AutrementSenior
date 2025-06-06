'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center text-gray-900 mb-4"
          >
            Politique de Confidentialité
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center text-gray-600"
          >
            Protection de vos données personnelles
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Autrement Senior s'engage à protéger la confidentialité et la sécurité de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations.
                </p>
                <p>
                  En utilisant nos services, vous acceptez les pratiques décrites dans cette politique de confidentialité.
                </p>
              </div>
            </div>

            {/* Responsable du traitement */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Responsable du traitement</h2>
              <div className="space-y-2 text-gray-600">
                <p><strong>Autrement Senior</strong></p>
                <p>12B rue des Prés, 34430 Saint-Jean-De-Vedas</p>
                <p>N° SAP : SAP911830974</p>
                <p>Contact DPO : <a href="mailto:expertise@autrementsenior.fr" className="text-primary hover:text-primary-dark">expertise@autrementsenior.fr</a></p>
              </div>
            </div>

            {/* Données collectées */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Données collectées</h2>
              <div className="space-y-4 text-gray-600">
                <p>Nous collectons les types de données suivantes :</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Données d'identification :</h3>
                    <ul className="list-disc list-inside ml-4 mt-2">
                      <li>Nom et prénom</li>
                      <li>Adresse postale</li>
                      <li>Numéro de téléphone</li>
                      <li>Adresse email</li>
                      <li>Date de naissance (pour les bénéficiaires)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Données relatives aux services :</h3>
                    <ul className="list-disc list-inside ml-4 mt-2">
                      <li>Besoins d'accompagnement</li>
                      <li>Informations médicales pertinentes (avec votre consentement)</li>
                      <li>Préférences et habitudes de vie</li>
                      <li>Historique des interventions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Données de navigation :</h3>
                    <ul className="list-disc list-inside ml-4 mt-2">
                      <li>Adresse IP</li>
                      <li>Type de navigateur</li>
                      <li>Pages consultées</li>
                      <li>Date et heure de connexion</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Finalités du traitement */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Finalités du traitement</h2>
              <div className="space-y-4 text-gray-600">
                <p>Vos données sont collectées pour :</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Gérer votre dossier client et assurer le suivi de vos prestations</li>
                  <li>Personnaliser nos services selon vos besoins</li>
                  <li>Établir les contrats et factures</li>
                  <li>Répondre à vos demandes d'information</li>
                  <li>Améliorer nos services et notre site web</li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                  <li>Gérer les candidatures des auxiliaires de vie</li>
                </ul>
              </div>
            </div>

            {/* Base légale */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Base légale du traitement</h2>
              <div className="space-y-4 text-gray-600">
                <p>Le traitement de vos données repose sur :</p>
                <ul className="list-disc list-inside ml-4">
                  <li><strong>L'exécution du contrat :</strong> pour la fourniture de nos services</li>
                  <li><strong>Le consentement :</strong> pour les données de santé et l'envoi de communications</li>
                  <li><strong>L'intérêt légitime :</strong> pour améliorer nos services</li>
                  <li><strong>Les obligations légales :</strong> conservation des documents comptables</li>
                </ul>
              </div>
            </div>

            {/* Destinataires */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Destinataires des données</h2>
              <div className="space-y-4 text-gray-600">
                <p>Vos données peuvent être partagées avec :</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Notre personnel habilité (direction, coordinateurs, auxiliaires de vie)</li>
                  <li>Les organismes de sécurité sociale et mutuelles (avec votre accord)</li>
                  <li>Les autorités compétentes en cas d'obligation légale</li>
                  <li>Nos prestataires techniques (hébergeur, maintenance)</li>
                </ul>
                <p className="mt-4">
                  Nous ne vendons ni ne louons vos données personnelles à des tiers.
                </p>
              </div>
            </div>

            {/* Durée de conservation */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Durée de conservation</h2>
              <div className="space-y-4 text-gray-600">
                <p>Nous conservons vos données pendant :</p>
                <ul className="list-disc list-inside ml-4">
                  <li><strong>Dossiers clients actifs :</strong> pendant toute la durée de la relation contractuelle</li>
                  <li><strong>Dossiers clients inactifs :</strong> 5 ans après la fin de la prestation</li>
                  <li><strong>Documents comptables :</strong> 10 ans (obligation légale)</li>
                  <li><strong>Candidatures non retenues :</strong> 2 ans maximum</li>
                  <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                </ul>
              </div>
            </div>

            {/* Sécurité */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Sécurité des données</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre :
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>L'accès non autorisé</li>
                  <li>La modification</li>
                  <li>La divulgation</li>
                  <li>La destruction accidentelle ou illicite</li>
                </ul>
                <p className="mt-4">
                  Ces mesures incluent le chiffrement des données sensibles, l'accès restreint aux données, et la formation régulière de notre personnel.
                </p>
              </div>
            </div>

            {/* Droits des personnes */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Vos droits</h2>
              <div className="space-y-4 text-gray-600">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900">Droit d'accès</h3>
                    <p className="text-sm mt-1">Obtenir la confirmation que vos données sont traitées et accéder à celles-ci</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900">Droit de rectification</h3>
                    <p className="text-sm mt-1">Corriger vos données si elles sont inexactes ou incomplètes</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900">Droit à l'effacement</h3>
                    <p className="text-sm mt-1">Demander la suppression de vos données dans certains cas</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900">Droit à la limitation</h3>
                    <p className="text-sm mt-1">Limiter le traitement de vos données dans certaines circonstances</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900">Droit à la portabilité</h3>
                    <p className="text-sm mt-1">Recevoir vos données dans un format structuré et lisible</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900">Droit d'opposition</h3>
                    <p className="text-sm mt-1">Vous opposer au traitement de vos données pour des raisons légitimes</p>
                  </div>
                </div>
                <p className="mt-4">
                  Pour exercer ces droits, contactez-nous à : <a href="mailto:expertise@autrementsenior.fr" className="text-primary hover:text-primary-dark">expertise@autrementsenior.fr</a>
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cookies</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Notre site utilise des cookies pour :
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Assurer le bon fonctionnement du site</li>
                  <li>Mémoriser vos préférences</li>
                  <li>Analyser l'utilisation du site (statistiques anonymes)</li>
                </ul>
                <p className="mt-4">
                  Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
                </p>
              </div>
            </div>

            {/* Réclamation */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Droit de réclamation</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Si vous estimez que le traitement de vos données ne respecte pas la réglementation, vous pouvez introduire une réclamation auprès de la CNIL :
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">Commission Nationale de l'Informatique et des Libertés</p>
                  <p>3 Place de Fontenoy</p>
                  <p>TSA 80715</p>
                  <p>75334 PARIS CEDEX 07</p>
                  <p className="mt-2">Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">www.cnil.fr</a></p>
                </div>
              </div>
            </div>

            {/* Modifications */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Modifications de la politique</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec indication de la date de mise à jour.
                </p>
                <p>
                  Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques de confidentialité.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Pour toute question concernant cette politique de confidentialité ou vos données personnelles :
                </p>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Délégué à la Protection des Données</p>
                  <p>Autrement Senior</p>
                  <p>12B rue des Prés, 34430 Saint-Jean-De-Vedas</p>
                  <p className="mt-3">
                    <strong>Email :</strong> <a href="mailto:expertise@autrementsenior.fr" className="text-primary hover:text-primary-dark">expertise@autrementsenior.fr</a>
                  </p>
                  <p>
                    <strong>Téléphone :</strong> <a href="tel:0649604199" className="text-primary hover:text-primary-dark">06.49.60.41.99</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}