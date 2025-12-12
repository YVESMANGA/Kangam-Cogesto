"use client";
import React, { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaQuoteRight,
  FaStar,
} from "react-icons/fa";

// --- Données des Témoignages (CORRIGÉES AVEC NOUVEAU LIEN) ---
const testimonialsData = [
  {
    quote:
      "Une équipe dévouée, professionnelle et hautement efficace. Ils ont géré mon cas commercial complexe avec diligence et ont obtenu un résultat bien au-delà de mes attentes. Leurs conseils étaient toujours clairs et ponctuels.",
    name: "John F. Smith",
    title: "CEO, TechInnovate",
    image: "/user.png", // Lien fiable (Unsplash)
    rating: 5,
  },
  {
    quote:
      "J'ai bénéficié de la meilleure représentation juridique possible. La procédure s'est déroulée sans stress et j'ai été soutenue à chaque étape. Je recommande vivement leurs services en droit de la famille.",
    name: "Maria L. Gomez",
    title: "Client Prive",
    image: "/user.png",
    rating: 5,
  },
  {
    quote:
      "J'ai bénéficié de la meilleure représentation juridique possible. La procédure s'est déroulée sans stress et j'ai été soutenue à chaque étape. Je recommande vivement leurs services en droit de la famille.",
    name: "Alex R. Chen",
    title: "Managing Partner, RealCorp",
    image: "/user.png",
    rating: 4,
  },
  {
    quote:
      "Une expertise inégalée en matière de litiges. L'équipe s'est montrée stratégique, combative lorsque nécessaire et toujours transparente quant à l'avancement du dossier. Une véritable excellence juridique.",
    name: "David T. Williams",
    title: "Entrepreneur",
    image: "/user.png",
    rating: 5,
  },
];

// --- Composant de Carte de Témoignage (inchangé) ---
interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  image: string;
  rating: number;
  isFeatured: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  image,
  rating,
  isFeatured,
}) => {
  const cardClasses = isFeatured
    ? "bg-white text-gray-800 shadow-xl scale-[1.05] z-20 border-t-4 border-[#2c035e]"
    : "bg-gray-100 text-gray-600 shadow-md z-10 pointer-events-none border-t-4 border-gray-200";

  const accentColor = isFeatured ? "text-[#2c035e]" : "text-[#2c035e]";
  const textColor = isFeatured ? "text-gray-800" : "text-gray-600";

  return (
    <div
      className={`w-full p-8 md:p-10 rounded-[40px] transition-all duration-500 flex-shrink-0 ${cardClasses}`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "text-[#2c035e]" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <FaQuoteRight className={`w-8 h-8 opacity-20 ${accentColor}`} />
      </div>
      <p className={`text-lg italic mb-8 ${textColor}`}>"{quote}"</p>
      <div className="flex items-center">
        <img
          src={image} // Ceci utilise le nouveau lien fiable
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-[#2c035e] mr-4"
        />
        <div>
          <p className={`font-bold text-lg ${accentColor}`}>{name}</p>
          <p className={`text-sm ${textColor}`}>{title}</p>
        </div>
      </div>
    </div>
  );
};

// --- Composant Principal TestimonialsSection (inchangé) ---
const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTestimonials = testimonialsData.length;
  const autoplayInterval = 6000;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(intervalId);
  }, [totalTestimonials]);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de la section */}
        <div className="text-center mb-16">
          <p className="subtitle text-sm font-semibold uppercase text-gray-500 mb-2">
            Voix des clients
          </p>
          <h2 className="title text-4xl lg:text-5xl font-serif font-bold text-[#2c035e]">
            Ce que disent nos clients
          </h2>
        </div>

        {/* Carrousel Conteneur */}
        <div className="relative flex items-center justify-center">
          {/* Bouton Précédent */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-0 lg:left-[-40px] z-30 p-4 bg-white rounded-full shadow-lg text-[#2c035e]  transition-colors"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>

          {/* Vue du Carrousel (Viewport) */}
          <div className="relative w-full max-w-xl h-[450px]">
            {/* Génération des Cartes - Utilise la superposition absolue */}
            {testimonialsData.map((testimonial, index) => {
              const isActive = index === currentIndex;

              const translateYValue = isActive ? "0px" : "20px";

              return (
                <div
                  key={index}
                  className="absolute w-full top-0 left-0 transition-all duration-700 ease-out" // <-- duration-700 pour la fluidité
                  style={{
                    opacity: isActive ? 1 : 0,
                    zIndex: isActive ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                    transform: `translateY(${translateYValue})`,
                  }}
                >
                  <TestimonialCard {...testimonial} isFeatured={true} />
                </div>
              );
            })}
          </div>

          {/* Bouton Suivant */}
          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-0 lg:right-[-40px] z-30 p-4 bg-white rounded-full shadow-lg text-[#2c035e] transition-colors"
          >
            <FaArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
