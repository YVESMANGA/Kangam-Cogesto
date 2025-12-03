"use client";
import React, { useState, useEffect } from "react";

// --- Placeholders d'icônes (inchangés) ---
const IconScale = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M12 2L6 12H18L12 2Z" />
    <path d="M2 22H22" />
    <path d="M10 12V22" />
    <path d="M14 12V22" />
  </svg>
);
const IconExpert = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M16 17a4 4 0 0 0-4-4V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v8a4 4 0 0 0-4 4v5h20v-5a4 4 0 0 0-4-4z" />
  </svg>
);
const IconClients = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    <path d="M2 19h20" />
    <path d="M6 19v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
  </svg>
);
const IconAward = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 10V6M12 18V14M15 9l-6 6M9 9l6 6" />
  </svg>
);

// --- Liste des statistiques (ajout d'une valeur numérique pour l'animation) ---
const statsData = [
  { icon: IconScale, value: "10k+", finalValue: 10000, label: "Case Done" },
  {
    icon: IconExpert,
    value: "12k+",
    finalValue: 12000,
    label: "Expert Avocats Comptables",
  },
  {
    icon: IconClients,
    value: "15k+",
    finalValue: 15000,
    label: "Clients Satisfaits",
  },
  { icon: IconAward, value: "20k+", finalValue: 20000, label: "Prime" },
];

// --- NOUVEAU COMPOSANT : Gère l'animation d'un seul chiffre ---
interface AnimatedStatProps {
  Icon: React.FC<{ className: string }>;
  finalValue: number;
  valueLabel: string; // Ex: "10k+"
  label: string;
}

const AnimatedStat: React.FC<AnimatedStatProps> = ({
  Icon,
  finalValue,
  valueLabel,
  label,
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const duration = 2000; // Durée de l'animation en ms (2 secondes)

  // Détermine l'incrément par intervalle
  const stepTime = 50; // Intervalle de mise à jour en ms
  const totalSteps = duration / stepTime;
  const increment = finalValue / totalSteps;

  useEffect(() => {
    let startTime: number | null = null;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Calcul de la valeur basée sur la progression
      const calculatedValue = Math.floor(percentage * finalValue);

      setCurrentValue(calculatedValue);

      if (progress < duration) {
        // Continue l'animation
        requestAnimationFrame(animateCount);
      } else {
        // Assure que la valeur finale exacte est atteinte
        setCurrentValue(finalValue);
      }
    };

    // Démarre l'animation
    const animationFrame = requestAnimationFrame(animateCount);

    // Nettoyage lors du démontage
    return () => cancelAnimationFrame(animationFrame);
  }, [finalValue, duration]);

  // Formatte la valeur affichée: si l'animation est en cours, affiche le nombre;
  // sinon, affiche la chaîne complète ("10k+").
  const displayValue =
    currentValue === finalValue
      ? valueLabel
      : `${Math.floor(currentValue / 1000)}k+`;

  return (
    <div className="flex flex-col items-center w-full sm:w-1/4">
      {/* Icône */}
      <Icon className="w-10 h-10 mb-2 stroke-current" />

      {/* Valeur (Gros Chiffre) */}
      <p className="text-4xl font-bold mb-1">{displayValue}</p>

      {/* Libellé (Petit Texte) */}
      <p className="text-sm font-light uppercase">{label}</p>
    </div>
  );
};

// --- Composant StatsBar (MODIFIÉ) ---
/**
 * Composant de la bande de statistiques (Stats Bar).
 */
const StatsBar: React.FC = () => {
  return (
    // Conteneur principal avec la couleur de fond et les coins arrondis
    <div className="bg-yellow-800 rounded-xl shadow-xl mx-auto max-w-7xl px-4 py-8 sm:py-12 -mt-16 relative z-10">
      <div className="flex flex-col sm:flex-row justify-around items-center text-white text-center gap-8 sm:gap-4">
        {/* UTILISATION DU NOUVEAU COMPOSANT ANIMATEDSTAT */}
        {statsData.map((stat, index) => (
          <AnimatedStat
            key={index}
            Icon={stat.icon}
            finalValue={stat.finalValue}
            valueLabel={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
