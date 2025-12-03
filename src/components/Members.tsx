"use client";
import React, { useState, useEffect, useRef } from "react"; // Ajout de useRef
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// --- Données des Avocats (inchangé) ---
const attorneysData = [
  {
    name: "Sarah Rahman",
    title: "Comptable",
    image: "/user.png",
  },
  {
    name: "Mme Codou SOW",
    title: "PDG",
    image: "/pdg.jpg",
  },
  {
    name: "Michel Phelps",
    title: "Comptable",
    image: "/user.png",
  },
  {
    name: "Jessica Chen",
    title: "Comptable",
    image: "/user.png",
  },
  {
    name: "David Lee",
    title: "Assistant",
    image: "/user.png",
  },
];

// --- Composant de Carte d'Avocat (inchangé) ---
interface AttorneyCardProps {
  name: string;
  title: string;
  image: string;
}

const AttorneyCard: React.FC<AttorneyCardProps> = ({ name, title, image }) => {
  return (
    <div
      className="w-full bg-[#031C1A] rounded-[40px] overflow-hidden 
                 shadow-lg border-b-4 border-yellow-800 transition-transform duration-300 hover:scale-[1.02]"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
        style={{ borderTopLeftRadius: "40px", borderTopRightRadius: "40px" }}
      />

      <div className="p-4 text-center text-white">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-sm text-gray-400">{title}</p>
      </div>
    </div>
  );
};

// --- Composant Principal AttorneysSection (AVEC Transition Douce) ---
const AttorneysSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Référence pour obtenir la largeur réelle d'une carte
  const cardRef = useRef<HTMLDivElement>(null);

  const cardsPerPage = 3;
  const totalCards = attorneysData.length;
  const slideDuration = 800; // Durée de la transition en ms (0.8s)

  // Calcule le décalage basé sur l'index actuel.
  // Ce carrousel affichera les cartes 0, 1, 2 puis 1, 2, 3 etc. (décalage de 1)
  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalCards - 1 : prevIndex - 1
    );
  };

  // Logique du Défilement Automatique (inchangée)
  useEffect(() => {
    const intervalId = setInterval(nextCard, 5000);
    return () => clearInterval(intervalId);
  }, [totalCards]);

  // Logique pour sélectionner les cartes à afficher (Affichons-en plus pour le décalage)
  // Nous devons afficher toutes les cartes pour utiliser la translation
  // Pour simuler la boucle continue, nous ajoutons les premières cartes à la fin
  const loopedData = [
    ...attorneysData,
    ...attorneysData.slice(0, cardsPerPage),
  ];

  // Calcul de la distance de translation (en pixels)
  // Utilise la largeur de la première carte + l'espace pour déterminer le décalage
  const getTranslateX = () => {
    if (cardRef.current) {
      // Obtenir la largeur réelle de la carte
      const cardWidth = cardRef.current.offsetWidth;

      // La classe Tailwind `space-x-6` équivaut à 1.5rem (soit 24px)
      const margin = 24;

      // Distance totale à parcourir pour passer à la carte suivante
      const totalDistance = cardWidth + margin;

      // Décalage total : (Index actuel * Distance)
      return `-${currentIndex * totalDistance}px`;
    }
    return "0px";
  };

  const backgroundStyle: React.CSSProperties = {
    backgroundImage: "url(/images/pp.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="w-full relative py-20 md:py-32" style={backgroundStyle}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#031C1A] opacity-70 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenu principal : Texte à gauche, Carrousel à droite */}
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* Contenu de Gauche (Texte et CTA) */}
          <div className="w-full lg:w-1/3 text-white text-center lg:text-left pt-12">
            <p className="text-sm font-light text-gray-300 mb-2">
              Nos Avocats Comptables
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold leading-tight mb-8">
              Avocats Comptables Dévoués, Résultats Provenus
            </h2>
            <a
              href="/our-team"
              className="inline-flex items-center justify-center px-8 py-3 
                         bg-yellow-800 text-white font-semibold rounded-lg shadow-xl 
                         hover:bg-opacity-90 transition-colors"
            >
              En savoir plus
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* Contenu de Droite (Carrousel) */}
          <div className="w-full lg:w-2/3 flex items-center justify-center lg:justify-start">
            <div className="flex items-center space-x-4">
              {/* Flèche de navigation à Gauche */}
              <button
                onClick={prevCard}
                aria-label="Previous attorney"
                className="p-3 bg-white bg-opacity-20 rounded-full text-yellow-800 hover:bg-opacity-40 transition-colors"
              >
                <FaArrowLeft className="w-5 h-5" />
              </button>

              {/* Conteneur de la zone visible du carrousel (Viewport) */}
              <div className="overflow-hidden">
                {/* Conteneur des Cartes (Fluidité et Décalage) */}
                <div
                  className="flex space-x-6 transition-transform ease-in-out"
                  style={{
                    transform: `translateX(${getTranslateX()})`,
                    transitionDuration: `${slideDuration}ms`,
                  }}
                >
                  {/* Cartes à afficher */}
                  {/* La première carte est attachée à la référence */}
                  {loopedData.map((attorney, index) => (
                    <div
                      key={index}
                      className="w-56 flex-shrink-0"
                      ref={index === 0 ? cardRef : null} // Attacher la référence à la première carte
                    >
                      <AttorneyCard
                        name={attorney.name}
                        title={attorney.title}
                        image={attorney.image}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Flèche de navigation à Droite */}
              <button
                onClick={nextCard}
                aria-label="Next attorney"
                className="p-3 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-40 transition-colors"
              >
                <FaArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttorneysSection;
