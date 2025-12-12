"use client";
import React from "react";
import {
  FaGavel,
  FaBriefcase,
  FaUsers,
  FaHome,
  FaFistRaised,
  FaHeartbeat,
  FaUserTie,
} from "react-icons/fa";

// --- Données des Services ---
const servicesData = [
  {
    icon: FaGavel,
    title: "Expertise Comptable",
    description:
      "Des professionnels qualifiés pour une gestion précise et transparente de vos comptes.",
    color: "[#2c035e]",
  },
  {
    icon: FaBriefcase,
    title: "Gestion Financière",
    description:
      "Optimisez vos ressources et maximisez vos performances financières grâce à des stratégies sur mesure.",
    color: "[#2c035e]",
  },
  {
    icon: FaUserTie,
    title: "Audit",
    description:
      "Un examen approfondi pour garantir la fiabilité et l’efficacité de vos processus.",
    color: "[#2c035e]",
  },
];

// --- Composant ServiceCard ---
interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  color,
}) => {
  return (
    // CONTENEUR MODIFIÉ : Ajout de 'group' et des classes de transition/survol pour le background
    <div
      className={`group relative p-8 bg-white border border-gray-200 
                  rounded-[40px] shadow-lg transition-all duration-500 
                  hover:shadow-xl hover:border-${color} 
                  hover:bg-[#2c035e]-50`} // CHANGEMENT DU FOND au survol (couleur très claire)
    >
      {/* Simulation du background décoratif (le marteau, la mallette, etc., en arrière-plan) */}
      <div className="absolute inset-0 opacity-10 rounded-[40px] p-8">
        {/* L'icône de fond devient légèrement plus visible au survol */}
        <Icon
          className={`w-full h-full text-${color} transition-opacity duration-500 group-hover:opacity-20`}
        />
      </div>

      {/* Contenu principal de la carte */}
      <div className="relative z-10">
        {/* Icône principale (mallette, balance, etc.) */}
        <div
          className={`p-4 inline-flex items-center justify-center 
                      bg-${color} bg-opacity-20 rounded-xl mb-4 
                      transition-colors duration-500`}
        >
          <Icon className={`w-8 h-8 text-white`} />
        </div>

        {/* Titre */}
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 mb-6 text-sm">{description}</p>

        {/* Bouton Read More (le tiret bouge au survol) */}
        <a
          href="#"
          className={`text-${color} font-semibold flex items-center text-sm`}
        >
          Voir plus
          {/* L'icône flèche glisse légèrement vers la droite au survol de la carte (group-hover) */}
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
};

// --- Composant principal ServicesSection ---
const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de la section */}
        <div className="text-center mb-12">
          <p className="subtitle text-sm font-semibold uppercase text-gray-500 mb-2">
            Ce que nous faisons
          </p>
          <h2 className="title text-4xl lg:text-5xl font-serif font-bold text-[#2c035e]">
            Services Comptables que nous proposons
          </h2>
        </div>

        {/* Grille des cartes de services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
