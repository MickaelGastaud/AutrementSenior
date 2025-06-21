'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CGV() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80;
      const sectionPosition = section.offsetTop - offset;
      window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'article-1', title: "Article 1 - Champ d'application" },
    { id: 'article-2', title: 'Article 2 - Définitions' },
    { id: 'article-3', title: 'Article 3 - Conditions d\'accès' },
    { id: 'article-4', title: 'Article 4 - Tarifs' },
    { id: 'article-5', title: 'Article 5 - Avantages fiscaux' },
    { id: 'article-6', title: 'Article 6 - Statut particulier-employeur' },
    { id: 'article-7', title: 'Article 7 - Conditions de travail' },
    { id: 'article-8', title: 'Article 8 - Mandat de paiement' },
    { id: 'article-9', title: 'Article 9 - Mandat administratif' },
    { id: 'article-10', title: 'Article 10 - Contractualisation' },
    { id: 'article-11', title: 'Article 11 - Facturation' },
    { id: 'article-12', title: 'Article 12 - Modalités de paiement' },
    { id: 'article-13', title: 'Article 13 - Retard de paiement' },
    { id: 'article-14', title: 'Article 14 - Droit de rétractation' },
    { id: 'article-15', title: 'Article 15 - Assurances' },
    { id: 'article-16', title: 'Article 16 - Résiliation' },
    { id: 'article-17', title: 'Article 17 - Réclamations et litiges' },
    { id: 'article-18', title: 'Article 18 - Protection des données' },
    { id: 'article-19', title: 'Article 19 - Dispositions diverses' },
    { id: 'annexe', title: 'Annexe - Personne de confiance' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Conditions Générales de Services
            </h1>
            <p className="text-xl text-gray-700">Autrement Senior SASU</p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sommaire sticky */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 lg:sticky lg:top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Sommaire</h2>
              <nav className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`
                      block w-full text-left px-3 py-2 rounded-lg text-sm transition-all
                      ${activeSection === section.id 
                        ? 'bg-primary text-white font-medium' 
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }
                    `}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Contenu principal */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-12"
            >
              {/* Informations société */}
              <div className="mb-12 p-6 bg-gray-50 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Informations société</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <p><strong>Autrement Senior SASU</strong></p>
                    <p className="text-sm italic">Société par Actions Simplifiées Unipersonnelle</p>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p><strong>Capital social :</strong> 1 000 €</p>
                    <p><strong>RCS :</strong> Montpellier n° 911 830 974</p>
                    <p><strong>N° d'agrément :</strong> SAP911830974</p>
                  </div>
                  <div className="md:col-span-2">
                    <p><strong>Siège social :</strong> 12B rue des Prés, 34430 Saint-Jean-De-Vedas</p>
                  </div>
                </div>
              </div>

              {/* Article 1 */}
              <section id="article-1" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 1 - Champ d'application</h2>
                
                <p className="text-gray-700 mb-4">
                  Toute collaboration avec la société Autrement Senior SASU, ci-après « <strong>Autrement Senior</strong> » ou « <strong>Mandataire</strong> », 
                  entraîne pour toute personne souhaitant s'engager dans une ou plusieurs des prestations fournies par la société, 
                  ci-après dénommée « <strong>Bénéficiaire</strong> », l'application sans réserve de l'intégralité des conditions générales suivantes.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">1.1 Application des conditions</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Les présentes conditions générales s'appliquent de plein droit à toutes les ventes de prestations d'aide à domicile réalisées par Autrement Senior en sa qualité de mandataire.</li>
                  <li>Toute demande de Services implique l'adhésion sans réserve aux présentes conditions générales qui prévalent sur toutes autres conditions et documents contradictoires.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">1.2 Accessibilité</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Les présentes conditions générales sont disponibles gratuitement à titre informatif</li>
                  <li>Disponibles uniquement en langue française</li>
                  <li>Accessibles à tout moment sur le site <strong>www.autrementsenior.fr</strong></li>
                  <li>Autrement Senior se réserve le droit de modifier les présentes conditions générales sans préavis</li>
                  <li>Seules les conditions générales en vigueur au jour de la signature du contrat s'appliqueront</li>
                </ul>
              </section>

              {/* Article 2 */}
              <section id="article-2" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 2 - Définitions</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Terme</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Définition</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Bénéficiaire(s) ou Mandant(s)</td>
                        <td className="border border-gray-300 px-4 py-2">Personne physique s'engageant dans un contrat de mandat avec Autrement Senior dans l'optique de bénéficier de prestations de services</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Services</td>
                        <td className="border border-gray-300 px-4 py-2">Ensemble des prestations de services proposées par la société Autrement Senior</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Coordinatrice/Coordinateur</td>
                        <td className="border border-gray-300 px-4 py-2">Collaborateur de la société Autrement Senior en charge de l'accompagnement du Bénéficiaire</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Intervenant</td>
                        <td className="border border-gray-300 px-4 py-2">Salarié du Bénéficiaire (qui en est le particulier-employeur) en charge des prestations de services</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Autrement Senior ou Mandataire</td>
                        <td className="border border-gray-300 px-4 py-2">La société Autrement Senior SASU responsable du placement de l'Intervenant chez le Bénéficiaire ainsi que la gestion administrative réalisée pour ce dernier</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Article 3 */}
              <section id="article-3" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 3 - Conditions et modalités d'accès aux Services</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Personnes éligibles</h3>
                <p className="text-gray-700 mb-2">Toute personne en recherche d'une aide à domicile peut accéder aux Services :</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Les proches ou tuteur(s) de personnes âgées en perte d'autonomie</li>
                  <li>Les proches ou tuteur(s) de personnes en situation de handicap</li>
                  <li>Toute personne dont la situation requiert une assistance dans les gestes de la vie quotidienne</li>
                  <li>Ces personnes elles-mêmes</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Canaux d'accès</h3>
                <p className="text-gray-700 mb-3">Les Services peuvent être sollicités via :</p>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2 mb-6">
                  <p>🌐 <strong>Site internet :</strong> www.autrementsenior.fr</p>
                  <p>📞 <strong>Téléphone :</strong> 06.49.60.41.99 (du lundi au vendredi, de 9h à 17h)</p>
                  <p>📧 <strong>E-mail :</strong> expertise@autrementsenior.fr</p>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Processus de mise en place</h3>
                <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-4">
                  <li><strong>Premier contact</strong> avec Autrement Senior</li>
                  <li><strong>Rendez-vous à domicile</strong> avec un Responsable de Secteur pour :
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Définir précisément l'accompagnement nécessaire</li>
                      <li>Identifier l'Intervenant le plus adapté aux besoins</li>
                      <li>Établir un devis chiffré</li>
                    </ul>
                  </li>
                  <li><strong>Mise en place</strong> après validation et signature :
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Du devis</li>
                      <li>Du contrat de mandat</li>
                      <li>Du ou des contrat(s) de travail</li>
                    </ul>
                  </li>
                </ol>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-4">
                  <p className="text-amber-800">
                    ⚠️ <strong>Important :</strong> Le mandat est valable pour chaque intervenant à domicile présenté par Autrement Senior, 
                    et ne couvre pas les intervenants qui seraient déjà employés par le client.
                  </p>
                </div>
              </section>

              {/* Article 4 */}
              <section id="article-4" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 4 - Tarifs</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Tous les tarifs des services proposés sont disponibles au prix unitaire forfaitaire toutes charges comprises sur <strong>www.autrementsenior.fr</strong></li>
                  <li>Cette information précise également le droit de résilier le contrat sans pénalité de résiliation et sans droit de dédommagement</li>
                </ul>
              </section>

              {/* Article 5 */}
              <section id="article-5" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 5 - Avantages fiscaux</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Réduction et crédit d'impôt</h3>
                <p className="text-gray-700 mb-2">Dans les conditions et limites prévues par le Code général des impôts et la loi de finances en vigueur :</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li><strong>Avantage fiscal :</strong> 50% des dépenses engagées auprès d'Autrement Senior</li>
                  <li><strong>Plafonds :</strong> De 12 000 € à 20 000 € selon les situations</li>
                  <li><strong>Attestation fiscale :</strong> Délivrée chaque année avant le 31 mars</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Responsabilité</h3>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                  <p className="text-amber-800">
                    ⚠️ Le bénéficiaire est le seul responsable de l\'utilisation qu'il fera de ces attestations. 
                    Autrement Senior ne sera pas responsable en cas de litige avec l'administration fiscale.
                  </p>
                </div>
              </section>

              {/* Article 6 */}
              <section id="article-6" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 6 - Statut de particulier-employeur</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Obligations légales</h3>
                <p className="text-gray-700 mb-2">
                  Dans le cadre d'un contrat de placement de travailleurs (mode mandataire), le Bénéficiaire est l'employeur de l'Intervenant. 
                  Il est soumis aux obligations résultant notamment :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Du code du travail</li>
                  <li>Du code de la sécurité sociale</li>
                  <li>De la convention collective nationale des salariés du particulier employeur (brochure n°3180 ; IDCC 2111)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Rémunération en cas d'absence</h3>
                <p className="text-gray-700 mb-2">
                  Durant son absence, le Bénéficiaire doit continuer à rémunérer son employé avec le salaire habituel, <strong>excepté en cas de :</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li><strong>Congés payés</strong> avec un délai de prévenance de 2 mois (ou accord du salarié pour un délai inférieur)</li>
                  <li><strong>Congés sans solde</strong> demandés par le salarié</li>
                  <li><strong>Report des interventions</strong> avec un délai de prévenance de 5 jours (ou accord du salarié pour un délai inférieur)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 Travail dissimulé</h3>
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <p className="text-red-800">
                    ⚠️ <strong>Attention :</strong> Le travail dissimulé est défini et interdit par les articles L. 8221-1, L. 8221-2, L. 8221-3 et L. 8221-5 
                    du Code du travail et susceptible de sanctions pénales, financières et administratives.
                  </p>
                </div>
              </section>

              {/* Article 7 */}
              <section id="article-7" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 7 - Conditions de travail et comptabilisation des heures</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 Autorité et direction</h3>
                <p className="text-gray-700 mb-2">Le Bénéficiaire, en sa qualité de particulier-employeur, exerce seul l'autorité et le pouvoir de direction. Il détermine :</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>La durée et les horaires de travail</li>
                  <li>Le lieu de travail</li>
                  <li>Le montant de la rémunération</li>
                  <li>Le détail des tâches confiées au salarié</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 Déclaration des heures</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Les heures d'arrivée et de départ sont déclarées par l'Intervenant et enregistrées en déclaratif</li>
                  <li><strong>Fiche de relevé d'heures</strong> signée par l'employeur et l'Intervenant à fournir <strong>au plus tard le 5 du mois suivant</strong></li>
                  <li>Le montant facturé et la rémunération seront régularisés le mois suivant</li>
                </ul>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                  <p className="text-amber-800">
                    ⚠️ <strong>Responsabilité :</strong> Le bénéficiaire est seul responsable de la fiabilité de la déclaration des heures de travail de son salarié.
                  </p>
                </div>
              </section>

              {/* Article 8 */}
              <section id="article-8" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 8 - Mandat de paiement</h2>
                
                <p className="text-gray-700 mb-4">Autrement Senior est mandatée pour :</p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">8.1 Gestion des bulletins de paie</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Rédiger les bulletins de paie et notes de remboursements</li>
                  <li>Établir les documents suivant les instructions du Bénéficiaire</li>
                  <li>Utiliser les données obtenues au travers des heures déclarées</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">8.2 Versement des salaires</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Verser les salaires, indemnités de transport et autres frais professionnels</li>
                  <li>Verser les cotisations et contributions sociales afférentes aux organismes compétents</li>
                </ul>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                  <p className="text-amber-800">
                    ⚠️ <strong>Limitations :</strong> Autrement Senior ne pourra reverser que les montants collectés et ne pourra être tenu responsable 
                    des obligations du Bénéficiaire si celles-ci n'ont pas été adressées à Autrement Senior.
                  </p>
                </div>
              </section>

              {/* Article 9 */}
              <section id="article-9" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 9 - Mandat administratif</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">9.1 Missions incluses</h3>
                <p className="text-gray-700 mb-2">Autrement Senior est mandatée pour :</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li><strong>Immatriculer</strong> le Bénéficiaire auprès de l'URSSAF</li>
                  <li><strong>Recevoir</strong> les correspondances de l'URSSAF</li>
                  <li><strong>Éditer</strong> les attestations Pôle Emploi et certificats de travail</li>
                  <li><strong>Établir</strong> la déclaration nominative trimestrielle auprès de l'URSSAF</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">9.2 Missions exclues</h3>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                  <p className="text-amber-800 mb-2">⚠️ <strong>Les missions suivantes relèvent de la prérogative du Bénéficiaire :</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-amber-800">
                    <li>Le choix et la formalisation de la procédure de rupture de contrat de travail</li>
                    <li>Les formalités liées à la formation de l'Intervenant</li>
                    <li>La fourniture du matériel nécessaire pour l'exécution des tâches</li>
                  </ul>
                </div>

                <p className="text-gray-700">
                  Pour l'ensemble de ces éléments, consulter la convention collective nationale des salariés du Particulier-Employeur 
                  (brochure n°3180 ; IDCC 2111).
                </p>
              </section>

              {/* Article 10 */}
              <section id="article-10" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 10 - Contractualisation</h2>
                
                <p className="text-gray-700 mb-4">
                  Conformément à l'article 6 de l'Arrêté du 17 mars 2015, Autrement Senior s'engage à fournir <strong>gratuitement</strong> un devis personnalisé :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Obligatoire</strong> pour tous Services dont le prix mensuel est supérieur ou égal à 100 € TTC</li>
                  <li><strong>Sur demande</strong> pour tous Services dont le prix mensuel est inférieur à 100 € TTC</li>
                </ul>
              </section>

              {/* Article 11 */}
              <section id="article-11" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 11 - Facturation</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">11.1 Établissement</h3>
                <p className="text-gray-700 mb-4">Autrement Senior établit sa facture <strong>chaque mois</strong></p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">11.2 Tarification inclut</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>L'offre de Coordination (PEPS) </li>
                  <li>La taxe sur valeur ajoutée (TVA)</li>
                </ul>
              </section>

              {/* Article 12 */}
              <section id="article-12" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 12 - Modalités de paiement</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">12.1 Base de facturation</h3>
                <p className="text-gray-700 mb-4">La facturation est établie sur la base des tarifs validés par le Bénéficiaire dans le(s) devis signé(s).</p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">12.2 Délai de paiement</h3>
                <p className="text-gray-700 mb-4">Le paiement des factures doit être effectué <strong>à réception sous 7 jours calendaires</strong>.</p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">12.3 Modes de paiement</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-semibold text-green-800 mb-2">Modes favorisés :</p>
                    <ul className="list-disc list-inside space-y-1 text-green-700">
                      <li>Prélèvement automatique</li>
                      <li>Paiement via l'avance immédiate</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="font-semibold text-amber-800 mb-2">Autres modes (avec caution) :</p>
                    <ul className="list-disc list-inside space-y-1 text-amber-700">
                      <li>Chèque bancaire</li>
                      <li>Virement</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">12.4 Caution</h3>
                <p className="text-gray-700 mb-2">En cas de paiement par chèque bancaire ou virement :</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li><strong>Montant :</strong> 6 semaines contractuelles de prestations</li>
                  <li><strong>Encaissement :</strong> Après signature du contrat et expiration du délai de rétractation</li>
                  <li><strong>Restitution :</strong> Dans un délai maximum de 2 mois lors de la résiliation (sous réserve du complet paiement des sommes dues)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">12.5 Procédure de recouvrement</h3>
                <p className="text-gray-700">
                  En cas de non-respect des délais de paiement, suspension possible des prestations sous un délai de 8 jours après information préalable.
                </p>
              </section>

              {/* Article 13 */}
              <section id="article-13" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 13 - Retard de paiement</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">13.1 Pénalités</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li><strong>Intérêts de retard :</strong> 10% annuel à compter de la date d'échéance</li>
                  <li><strong>Indemnité :</strong> 15% du montant impayé au titre de la clause pénale</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">13.2 Procédure de relance</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
                  <li><strong>Première lettre de relance</strong></li>
                  <li><strong>Deuxième lettre de relance</strong> (dernier avertissement) si paiement non effectué dans les 15 jours</li>
                  <li><strong>Mise en demeure</strong> si paiement non effectué dans les 15 jours suivant la deuxième relance</li>
                </ol>

                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <p className="text-red-800">
                    ⚠️ <strong>Attention :</strong> En cas de non-règlement des factures, le Bénéficiaire se rend coupable de travail dissimulé 
                    et s'expose à des poursuites judiciaires.
                  </p>
                </div>
              </section>

              {/* Article 14 */}
              <section id="article-14" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 14 - Droit de rétractation</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">14.1 Délai</h3>
                <p className="text-gray-700 mb-4">
                  Conformément à l'article L.121-20 du Code de la consommation, le Bénéficiaire dispose de <strong>14 jours francs</strong> 
                  pour exercer son droit de rétractation sans justification ni pénalités.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">14.2 Point de départ</h3>
                <p className="text-gray-700 mb-4">Le délai court à compter de l'acceptation de l'offre pour les prestations de Services.</p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">14.3 Modalités d'exercice</h3>
                <p className="text-gray-700 mb-2">Par lettre recommandée avec accusé de réception adressée à :</p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="font-semibold">Autrement Senior SASU</p>
                  <p>12B rue des Prés</p>
                  <p>34430 Saint-Jean-De-Vedas</p>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">14.4 Prestations commencées</h3>
                <p className="text-gray-700">
                  Si le Bénéficiaire demande expressément à voir la prestation commencer avant l'expiration du délai de rétractation, 
                  il reste redevable du coût des prestations réalisées jusqu'à la réception de sa rétractation.
                </p>
              </section>

              {/* Article 15 */}
              <section id="article-15" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 15 - Assurances et responsabilités civiles</h2>
                
                <p className="text-gray-700">
                  Le Bénéficiaire déclare avoir souscrit une assurance <strong>« multirisques habitation »</strong>, incluant la garantie responsabilité civile familiale. 
                  Cette assurance couvre notamment les responsabilités civiles de l'Intervenant dans l'exercice de ses fonctions.
                </p>
              </section>

              {/* Article 16 */}
              <section id="article-16" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 16 - Résiliation du mandat</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">16.1 Types de résiliation</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Résiliation d'un commun accord</h4>
                    <p className="text-gray-700">Les parties peuvent décider d'un commun accord de mettre fin au contrat à la date de leur choix.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Résiliation non fautive</h4>
                    <p className="text-gray-700">
                      L'une ou l'autre des parties peut rompre le contrat par lettre recommandée avec accusé réception 
                      en respectant un <strong>délai de prévenance d'1 mois</strong>.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Résiliation fautive</h4>
                    <p className="text-gray-700">
                      En cas d'inexécution par l'autre partie de l'une des obligations résultant du contrat (notamment en cas d'impayé). 
                      Cette résiliation prend effet à compter de la première présentation de la lettre recommandée avec accusé de réception.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">16.2 Indemnité de rupture</h3>
                <p className="text-gray-700 mb-2">En cas de rupture du contrat de mandat par le client dans les cas suivants :</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Poursuite du contrat de travail entre le client et l\'Intervenant présenté par Autrement Senior</li>
                  <li>Réembauche du salarié dans les 12 mois suivant la rupture du contrat de travail</li>
                </ul>
                <p className="text-gray-700 font-semibold">
                  <strong>Indemnité due :</strong> Montant égal à la moyenne des trois dernières factures mensuelles émises.
                </p>
              </section>

              {/* Article 17 */}
              <section id="article-17" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 17 - Réclamations et litiges</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">17.1 Procédure de réclamation</h3>
                <p className="text-gray-700 mb-2">En cas de contestation d'un des Services :</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                  <li>Régler la facture/note de débit</li>
                  <li>Faire parvenir par écrit l'objet de sa réclamation dans les meilleurs délais</li>
                </ol>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">17.2 Recours</h3>
                <p className="text-gray-700 mb-2">Le Bénéficiaire peut exercer un recours auprès de la direction Autrement Senior :</p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p><strong>Par courrier :</strong> 12B rue des Prés - 34430 Saint-Jean-de-Vedas</p>
                  <p><strong>Par mail :</strong> litige@autrementsenior.fr</p>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">17.3 Médiation</h3>
                <p className="text-gray-700 mb-6">
                  En cas de litige non résolu, Autrement Senior s'engage à proposer une solution de médiation 
                  conformément aux articles L.616-1 et R.616-1 du code de la consommation.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">17.4 Tribunaux compétents</h3>
                <p className="text-gray-700 mb-4">
                  Tous les litiges non résolus par voie amiable seront soumis aux tribunaux compétents dans les conditions de droit commun.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                  <p className="text-amber-800">
                    ⚠️ <strong>Limitation de responsabilité :</strong> La responsabilité d'Autrement Senior ne pourra être engagée 
                    qu'à raison d'une faute commise dans l'exécution de sa mission de mandataire.
                  </p>
                </div>
              </section>

              {/* Article 18 */}
              <section id="article-18" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 18 - Protection des données personnelles</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">18.1 Responsable de traitement</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p><strong>Autrement Senior SASU</strong></p>
                  <p>RCS de Montpellier n° 911 830 974</p>
                  <p>Siège social : 12B rue des Prés - 34430 Saint-Jean-De-Vedas</p>
                  <p>Courriel : expertise@autrementsenior.fr</p>
                  <p>Tél : 06.49.60.41.99</p>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">18.2 Données collectées</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li><strong>Identification :</strong> Nom, prénom, date de naissance, adresse, coordonnées, sexe</li>
                  <li><strong>Données financières :</strong> RIB, aides financières</li>
                  <li><strong>Vie personnelle :</strong> Habitudes de vie, besoins, services attendus, disponibilités</li>
                  <li><strong>Communications :</strong> Emails, messagerie WhatsApp</li>
                  <li><strong>Données sensibles :</strong> État de santé, rendez-vous médicaux, soins à prodiguer, ordonnances</li>
                  <li><strong>Données relatives aux proches :</strong> Nom, prénom, pièce d'identité, lien, coordonnées</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">18.3 Finalités du traitement</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Fournir les Services</li>
                  <li>Communiquer sur les Services</li>
                  <li>Élaborer des statistiques</li>
                  <li>Gérer les réclamations</li>
                  <li>Respecter les obligations légales</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">18.4 Destinataires</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Services internes d'Autrement Senior</li>
                  <li>Intervenant employé du Bénéficiaire et proches aidants</li>
                  <li>Partenaires tiers (avec consentement)</li>
                  <li>Médecin, IDEL, Profs. de santé (avec consentement)</li>
                  <li>Sous-traitants d'Autrement Senior</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">18.5 Durée de conservation</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li><strong>Relation Bénéficiaire/Autrement Senior :</strong> 2 ans à compter du dernier contact</li>
                  <li><strong>Prospection commerciale :</strong> 3 ans à compter de la fin de la relation commerciale</li>
                  <li><strong>Statistiques commerciales :</strong> Durée indéterminée de manière anonymisée</li>
                  <li><strong>Enregistrements d'appels :</strong> Maximum 6 mois</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">18.6 Droits du Bénéficiaire</h3>
                <p className="text-gray-700 mb-2">Conformément au RGPD, le Bénéficiaire dispose des droits suivants :</p>
                <div className="grid md:grid-cols-2 gap-2 mb-6">
                  {[
                    'Droit d\'accès',
                    'Droit de rectification',
                    'Droit de limitation',
                    'Droit de suppression',
                    'Droit d\'opposition',
                    'Droit à la portabilité',
                    'Droit de retrait du consentement',
                    'Droit de formuler des directives post-mortem',
                    'Droit de réclamation auprès de la CNIL'
                  ].map((droit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{droit}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">18.7 Exercice des droits</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Par e-mail :</strong> expertise@autrementsenior.fr</p>
                  <p><strong>Par courrier :</strong> Autrement Senior, 12B rue des Prés, 34430 Saint-Jean-de-Vedas</p>
                </div>
              </section>

              {/* Article 19 */}
              <section id="article-19" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 19 - Dispositions diverses</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">19.1 Enquête de satisfaction</h3>
                <p className="text-gray-700 mb-6">
                  Autrement Senior s'autorise à procéder régulièrement à des enquêtes de satisfaction et pourra contacter 
                  le Bénéficiaire par courrier, mail ou téléphone.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">19.2 Supports de communication</h3>
                <p className="text-gray-700 mb-6">
                  Autrement Senior peut mettre à disposition des sites internet, blogs, forums, pages Facebook, applications mobiles. 
                  Le Bénéficiaire peut s'opposer expressément à ces communications par courrier recommandé avec accusé de réception.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">19.3 Nullité partielle</h3>
                <p className="text-gray-700 mb-6">
                  Si l'une des dispositions des présentes était considérée comme nulle, cette disposition serait considérée comme non écrite, 
                  toutes les autres dispositions conservant force obligatoire.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">19.4 Modification des conditions</h3>
                <p className="text-gray-700">
                  La présente clause peut être modifiée à tout moment. Une information sera communiquée au Bénéficiaire 
                  si nécessaire par email et/ou courrier.
                </p>
              </section>

              {/* Annexe */}
              <section id="annexe" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Annexe - Notice d'information sur la personne de confiance</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Qu'est-ce qu'une personne de confiance ?</h3>
                <p className="text-gray-700 mb-6">
                  La loi donne le droit à toute personne majeure prise en charge dans un établissement ou un service social ou médico-social 
                  de désigner une personne de confiance qui l'accompagne dans ses démarches afin de l'aider dans ses décisions.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Quel est son rôle ?</h3>
                
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Accompagnement et présence</h4>
                <p className="text-gray-700 mb-2">La personne de confiance peut :</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Être présente à l'entretien prévu lors de la conclusion du contrat de séjour</li>
                  <li>Vous accompagner dans vos démarches liées à votre prise en charge médico-sociale</li>
                  <li>Assister aux entretiens médicaux dans le cadre de votre prise en charge</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-800 mb-2">Aide pour la compréhension de vos droits</h4>
                <p className="text-gray-700 mb-4">
                  Votre personne de confiance sera consultée en cas de difficultés dans la connaissance et la compréhension de vos droits.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                  <p className="text-amber-800">
                    ⚠️ <strong>Confidentialité :</strong> La personne de confiance est tenue à un devoir de confidentialité.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Qui peut la désigner ?</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Toute personne majeure prise en charge par une structure sociale ou médico-sociale</li>
                  <li><strong>C'est un droit, pas une obligation</strong></li>
                  <li>Pour les personnes sous protection judiciaire : autorisation du conseil de famille ou du juge des tutelles requise</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Qui peut être la personne de confiance ?</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Toute personne majeure de votre entourage en qui vous avez confiance</li>
                  <li>Membre de votre famille, proche, médecin traitant</li>
                  <li>La personne désignée doit donner son accord et contresigner le formulaire</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Quand la désigner ?</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>À tout moment</li>
                  <li>Lors du début d'une prise en charge, il vous sera proposé de désigner une personne de confiance</li>
                  <li>La désignation est valable sans limitation de durée (sauf si vous spécifiez une durée plus limitée)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Comment la désigner ?</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li><strong>Par écrit</strong> en utilisant le formulaire en annexe du contrat de mandat ou sur papier libre</li>
                  <li><strong>Daté et signé</strong> avec nom, prénom et coordonnées de la personne de confiance</li>
                  <li><strong>Contresigné</strong> par la personne désignée</li>
                  <li>En cas de difficultés pour écrire : attestation par deux personnes</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Comment faire connaître ce document ?</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Informer la structure et l'équipe de prise en charge</li>
                  <li>Donner une copie à la structure</li>
                  <li>Tenir vos proches informés</li>
                  <li>Conserver le document avec vous</li>
                </ul>
              </section>

              {/* Footer du document */}
              <div className="mt-16 pt-8 border-t border-gray-300 text-center">
                <p className="text-gray-600 mb-2">
                  <em>Document mis à jour le {new Date().toLocaleDateString('fr-FR')} - Version 2.0</em>
                </p>
                <p className="text-gray-700">
                  Pour toute question : <a href="mailto:expertise@autrementsenior.fr" className="text-primary hover:underline">expertise@autrementsenior.fr</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}