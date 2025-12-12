"use client";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

// Temps de défilement (en millisecondes)
const SLIDE_INTERVAL = 6000;

// --- 1. Définition des Slides pour le Background et le Texte (MIS À JOUR) ---
const heroSlides = [
  {
    image: "h3.webp",
    subtitle: "Expertise Comptable",
    title:
      "Des professionnels qualifiés pour une gestion précise et transparente de vos comptes.",
    ctaText: "Découvrez nos services comptables",
  },
  {
    image: "/h6.jpg",
    subtitle: "Gestion Financière",
    title:
      "Optimisez vos ressources et maximisez vos performances financières grâce à des stratégies sur mesure.",
    ctaText: "Planifiez votre avenir financier",
  },
  {
    image: "/a.jpg",
    subtitle: "Audit et Conformité",
    title:
      "Un examen approfondi pour garantir la fiabilité et l’efficacité de vos processus.",
    ctaText: "Sécurisez votre conformité",
  },
];

// --- Composant AvatarStack (inchangé) ---
const AvatarStack: React.FC = () => {
  return (
    <div className="flex items-center mt-4">
           {" "}
      <div className="flex -space-x-2">
               {" "}
        <img
          className="w-10 h-10 rounded-full border-2 border-white object-cover z-30"
          src="/images/avatar-1.jpg" // Placeholder
          alt="Client 1"
        />
               {" "}
        <img
          className="w-10 h-10 rounded-full border-2 border-white object-cover z-20"
          src="/images/avatar-2.jpg" // Placeholder
          alt="Client 2"
        />
               {" "}
        <img
          className="w-10 h-10 rounded-full border-2 border-white object-cover z-10"
          src="/images/avatar-3.jpg" // Placeholder
          alt="Client 3"
        />
             {" "}
      </div>
           {" "}
      <div className="ml-4 flex items-center text-sm">
        <FaStar className="text-yellow-400 w-5 h-5 mr-1" />       {" "}
        <p className="text-white font-semibold">4.9/5.0</p>       {" "}
        <p className="text-gray-300 ml-2">(150+ Clients Satisfaits)</p>     {" "}
      </div>
         {" "}
    </div>
  );
};

// --- Composant Hero (Carrousel de Background et de Texte - ZOOM SUPPRIMÉ) ---
const Hero: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0); // Logique du défilement automatique

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroSlides[currentSlideIndex];

  return (
    <section className="w-full relative min-h-[80vh] overflow-hidden">
            {/* 1. Conteneur d'images de fond pour l'effet de fondu (Z-0) */}   
       {" "}
      <div className="absolute inset-0 z-0">
               {" "}
        {heroSlides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`Background slide ${index + 1}`}
            className={`
              absolute inset-0 w-full h-full object-cover 
              
              /* UNIQUEMENT FADE (1 seconde) */
              transition-opacity duration-1000 ease-in-out
              
              ${index === currentSlideIndex ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
             {" "}
      </div>
            {/* 2. Overlay de couleur Vert Foncé/Teal et Dégradé (Z-10) */}     {" "}
      <div className="absolute inset-0 bg-dark-teal-overlay opacity-65 z-10" /> 
         {" "}
      <div className="absolute inset-0 bg-gradient-to-t from-black opacity-100 z-10" />
            {/* 3. Contenu de la Page Hero (Texte et CTA) - Z-20 */}     {" "}
      <div className="relative z-20 w-full min-h-[80vh] flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-8">
                       {" "}
        <div
          key={currentSlideIndex} // Clé pour forcer la transition du contenu du texte
          className="hero-content max-w-4xl text-white py-16 opacity-100 transition-opacity duration-1000 ease-in-out"
        >
          {" "}
          <p
            className="ubtitle text-lg font-serif mtb-4 mt-4
                           inline-block px-3 py-1 rounded-md
                           bg-stone-800 text-light-gold"
          >
            {currentSlide.subtitle}         {" "}
          </p>
                   {" "}
          <h1 className="title text-5xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8">
            {currentSlide.title}         {" "}
          </h1>{" "}
          <a
            href="/contact"
            className="cta-button mt-8 inline-flex items-center justify-center px-8 py-4 
                      bg-[#2c035e] text-dark-text font-semibold rounded-lg shadow-xl 
                      hover:bg-opacity-90 transition-colors"
          >
            {currentSlide.ctaText}            <span className="ml-2">→</span>   
                 {" "}
          </a>
                 {" "}
        </div>
                {/* --- Indicateurs de Pagination --- */}       {" "}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
                   {" "}
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlideIndex(index)}
              aria-label={`Go to slide ${index + 1}: ${
                heroSlides[index].subtitle
              }`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlideIndex
                  ? "bg-[#2c035e] w-6"
                  : "bg-[#2c035e] opacity-50 w-2"
              }`}
            />
          ))}
                 {" "}
        </div>
             {" "}
      </div>
         {" "}
    </section>
  );
};

export default Hero;
