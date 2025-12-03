"use client";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

// Liste des images pour le carrousel (Placeholders)
const carouselImages = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

// --- Composant AvatarStack (inchangé) ---
const AvatarStack: React.FC = () => {
  // ... (Code de AvatarStack inchangé)
  return (
    <div className="flex items-center mt-4">
      <div className="flex -space-x-2">
        <img
          className="w-10 h-10 rounded-full border-2 border-white object-cover z-30"
          src="/images/avatar-1.jpg" // Placeholder
          alt="Client 1"
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-white object-cover z-20"
          src="/images/avatar-2.jpg" // Placeholder
          alt="Client 2"
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-white object-cover z-10"
          src="/images/avatar-3.jpg" // Placeholder
          alt="Client 3"
        />
      </div>

      <div className="ml-4 flex items-center text-sm">
        <FaStar className="text-yellow-400 w-5 h-5 mr-1" />
        <p className="text-white font-semibold">4.9/5.0</p>
        <p className="text-gray-300 ml-2">(150+ Clients Satisfaits)</p>
      </div>
    </div>
  );
};

// --- Composant ImageCarousel (MODIFIÉ avec Transition de Fondu) ---
/**
 * Composant de Carrousel d'Images à défilement automatique avec effet de fondu.
 */
const ImageCarousel: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Logique pour le défilement automatique
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 6000); // Change toutes les 6000ms (6 secondes)

    return () => clearInterval(interval);
  }, []);

  // L'effet de fondu est géré par la classe 'transition-opacity duration-1000'
  // et en positionnant l'image de manière absolue au-dessus des autres.

  return (
    // Cadre externe pour simuler la bordure verte/dorée
    <div
      className="relative w-full max-w-sm sm:h-[400px] lg:w-[350px] lg:h-[400px] xl:w-[450px] xl:h-[500px] 
                 bg-[#031C1A] p-3 rounded-[40px] shadow-2xl mt-8 lg:mt-0 mx-auto border-2 border-[#D4AF37]"
    >
      {/* Conteneur pour les images intérieures - DOIT ÊTRE RELATIVE pour les enfants ABSOLUS */}
      <div className="w-full h-full relative overflow-hidden rounded-[30px]">
        {carouselImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image de cas d'étude ${index + 1}`}
            // CLASSE CRUCIALE : Positionne toutes les images au même endroit.
            // La transition de l'opacité crée l'effet de fondu.
            className={`
              absolute top-0 left-0 w-full h-full object-cover 
              transition-opacity duration-1000 ease-in-out
              ${index === currentImageIndex ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}

        {/* Overlay sombre pour améliorer la lisibilité si besoin */}
        <div className="absolute inset-0 bg-black opacity-10" />

        {/* SIMULATION du badge "Best Lawyer" */}
        <div className="absolute top-0 left-0 p-4 transform -translate-x-1 -translate-y-1 z-20">
          {/*  */}
        </div>
      </div>
    </div>
  );
};

// --- Composant Hero (inchangé) ---
const Hero: React.FC = () => {
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: "url(mj.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "80vh",
    position: "relative",
  };

  return (
    <section
      className="styled-background-section w-full relative"
      style={backgroundStyle}
    >
      {/* 1. Overlay de couleur Vert Foncé/Teal (Ombre) */}
      <div className="absolute inset-0 bg-dark-teal-overlay opacity-65 z-0" />

      {/* 2. Overlay en Dégradé Sombre (renforce l'ombre) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black opacity-100 z-0" />

      {/* 3. Contenu de la Page Hero (Texte et Carrousel) */}
      <div
        className="relative z-10 w-full min-h-[80vh] flex flex-col lg:flex-row 
                     items-center justify-between max-w-7xl mx-auto px-4 md:px-8"
      >
        {/* Contenu de Gauche (Texte, Stats, CTA) */}
        <div className="hero-content max-w-3xl text-white py-16 lg:py-0">
          <p className="subtitle text-lg text-light-gold font-serif mb-4">
            Your accounting firm
          </p>

          <h1 className="title text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-8">
            Avocats comptables expérimentés, résultats garantis
          </h1>

          <a
            href="/contact"
            className="cta-button mt-8 inline-flex items-center justify-center px-8 py-4 
                      bg-yellow-800 text-dark-text font-semibold rounded-lg shadow-xl 
                      hover:bg-opacity-90 transition-colors"
          >
            Contactez-nous
            <span className="ml-2">→</span>
          </a>
        </div>

        {/* Contenu de Droite (Carrousel d'Images) */}
        <ImageCarousel />
      </div>
    </section>
  );
};

export default Hero;
