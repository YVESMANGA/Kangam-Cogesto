"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Icône pour les points de liste

// NOTE : Pour la complexité de l'agencement, nous utilisons des largeurs et marges fixes
// sur les grands écrans pour simuler l'entrelacement.

/**
 * Composant de la Section About Us avec une mise en page en grille asymétrique.
 */
const AboutUs: React.FC = () => {
  // Styles pour les cadres visuels (similaire au Hero)
  const frameClasses =
    "w-full h-full relative overflow-hidden rounded-[40px] shadow-xl transform transition-all duration-300 hover:scale-[1.03]";
  const innerImageClasses = "w-full h-full object-cover";
  const primaryColorClasses = "text-[#2c035e]";
  const buttonClasses =
    "cta-button inline-flex items-center justify-center px-6 py-3 bg-[#2c035e] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-colors";

  const listPoints = [
    "Comité pour l'excellence dans la pratique comptable.",
    "Agir avec honnêteté et tenir des principes éthiques.",
    "Préparation pour le road test avec 98% de succès",
    "Le besoin des clients est notre priorité.",
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Conteneur principal : Flexbox pour les deux grandes colonnes */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          {/* COLONNE DE GAUCHE : Visuels complexes */}
          {/* Cette colonne est conçue pour l'empilement sur mobile et l'agencement complexe sur desktop */}
          <div className="w-full lg:w-1/2 relative min-h-[700px] flex flex-col items-center lg:items-start">
            {/* 1. Cadre de la Balance de Justice (Grand bloc à gauche, en haut) */}
            <div className="w-full max-w-sm md:max-w-md lg:absolute lg:top-0 lg:left-0 lg:w-[450px] lg:h-[450px] z-10 mb-8 lg:mb-0">
              <div className={`${frameClasses} bg-gray-200`}>
                <img
                  src="/a2.jpg" // Remplacer par votre chemin d'image
                  alt="Balance de Justice"
                  className={innerImageClasses}
                />
                {/* Badge décoratif (simulé) */}
              </div>
            </div>

            {/* 2. Cadre du Marteau et des Livres (Bloc à droite, à cheval) */}
            {/* Sur grand écran, positionné absolument et décalé vers le bas/droite */}
            <div className="w-full max-w-sm md:max-w-md lg:absolute lg:top-48 lg:left-40 lg:w-[400px] lg:h-[400px] z-20 mb-8 lg:mb-0">
              <div className={`${frameClasses} bg-gray-200`}>
                <img
                  src="/AUDIT1.jpg" // Remplacer par votre chemin d'image
                  alt="Marteau de juge et livres"
                  className={innerImageClasses}
                />
              </div>
            </div>

            {/* 3. Cadre de l'Avocate (Bloc en bas, à droite, à cheval) */}
            {/* Sur grand écran, positionné absolument et décalé vers le bas/droite */}
          </div>

          {/* COLONNE DE DROITE : Contenu Textuel */}
          <div className="w-full lg:w-1/2 text-gray-800 lg:pt-16">
            <p className="subtitle text-sm font-semibold uppercase mb-2">
              A propos de nous
            </p>

            {/* Titre principal */}
            <h2 className="title text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Un héritage d'excellence comptable
            </h2>

            {/* Paragraphe d'introduction */}
            <p className="mb-8 text-lg text-gray-600">
              Le partenaire stratégique de votre entreprise qui offre des
              services professionnels à forte valeur ajoutée. Grâce à un
              leadership affirmé et un réseau très diversifié, Cogesto Audit
              accompagne les entreprises dans la gestion de leur croissance, et
              l’optimisation de leur performance financière.
            </p>

            {/* Liste des points forts */}
            <ul className="space-y-4 mb-10">
              {listPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle
                    className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 ${primaryColorClasses}`}
                  />
                  <p className="text-gray-700">{point}</p>
                </li>
              ))}
            </ul>

            {/* Bouton CTA */}
            <a href="/read-more" className={buttonClasses}>
              En savoir plus
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
