'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MentionsLegales() {
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
            Mentions Légales
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center text-gray-600"
          >
            Dernière mise à jour : Juin 2025
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
            {/* Éditeur du site */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Éditeur du site</h2>
              <div className="space-y-2 text-gray-600">
                <p><strong>Raison sociale :</strong> Autrement Senior</p>
                <p><strong>Forme juridique :</strong> SARL</p>
                <p><strong>Numéro d'agrément :</strong> SAP911830974</p>
                <p><strong>Marque déposée :</strong> N°5013954</p>
                <p><strong>Siège social :</strong> 12B rue des Prés, 34430 Saint-Jean-De-Vedas</p>
                <p><strong>Téléphone :</strong> <a href="tel:0649604199" className="text-primary hover:text-primary-dark">06.49.60.41.99</a></p>
                <p><strong>Email :</strong> <a href="mailto:expertise@autrementsenior.fr" className="text-primary hover:text-primary-dark">expertise@autrementsenior.fr</a></p>
              </div>
            </div>

            {/* Directeur de publication */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Directeur de publication</h2>
              <div className="space-y-2 text-gray-600">
                <p><strong>Nom :</strong> Caroline Gastaud</p>
                <p><strong>Qualité :</strong> Présidente Directrice Générale</p>
              </div>
            </div>

            {/* Hébergeur */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Hébergeur du site</h2>
              <div className="space-y-2 text-gray-600">
                <p>Le site est hébergé par Vercel Inc.</p>
                <p>340 S Lemon Ave #4133</p>
                <p>Walnut, CA 91789</p>
                <p>États-Unis</p>
                <p>Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">vercel.com</a></p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Propriété intellectuelle</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
                <p>
                  Les marques citées sur ce site sont déposées par les sociétés qui en sont propriétaires.
                </p>
              </div>
            </div>

            {/* Données personnelles */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Protection des données personnelles</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p>
                  Pour exercer ces droits, vous pouvez nous contacter :
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Par email : <a href="mailto:expertise@autrementsenior.fr" className="text-primary hover:text-primary-dark">expertise@autrementsenior.fr</a></li>
                  <li>Par courrier : Autrement Senior - 12B rue des Prés, 34430 Saint-Jean-De-Vedas</li>
                </ul>
                <p>
                  Pour plus d'informations sur la gestion de vos données personnelles, consultez notre <Link href="/legal/confidentialite" className="text-primary hover:text-primary-dark">politique de confidentialité</Link>.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
                </p>
                <p>
                  Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté lorsqu'un cookie est envoyé.
                </p>
              </div>
            </div>

            {/* Limitation de responsabilité */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation de responsabilité</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
                </p>
                <p>
                  Autrement Senior ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées, soit de l'apparition d'un bug ou d'une incompatibilité.
                </p>
              </div>
            </div>

            {/* Liens hypertextes */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Liens hypertextes</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Le site peut contenir des liens hypertextes vers d'autres sites. Autrement Senior n'exerce aucun contrôle sur ces sites et n'assume aucune responsabilité quant à leur contenu.
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Droit applicable</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Tout litige en relation avec l'utilisation du site www.autrementsenior.fr est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Montpellier.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">Autrement Senior</p>
                  <p>12B rue des Prés</p>
                  <p>34430 Saint-Jean-De-Vedas</p>
                  <p>Tél : <a href="tel:0649604199" className="text-primary hover:text-primary-dark">06.49.60.41.99</a></p>
                  <p>Email : <a href="mailto:expertise@autrementsenior.fr" className="text-primary hover:text-primary-dark">expertise@autrementsenior.fr</a></p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}