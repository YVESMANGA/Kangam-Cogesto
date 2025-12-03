"use client";
import React, { useState } from "react";
// Importations d'icônes
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaSearch,
  FaTimes, // Icône pour fermer le menu
} from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";

// --- Données de Navigation ---

const navLinks: { name: string; hasDropdown: boolean }[] = [
  { name: "Acceuil", hasDropdown: true },
  { name: "A propos", hasDropdown: true },
  { name: "Services", hasDropdown: true },
];

/**
 * Composant de la barre supérieure (informations de contact et sociaux).
 */
const TopBar: React.FC = () => (
  <div className="top-bar bg-green-900 text-white text-sm py-2 px-4 sm:px-8 flex justify-between items-center">
    {/* Section de gauche: Infos de contact (Caché sur Mobile, Visible sur Tablette/Desktop) */}
    <div className="info-group hidden sm:flex items-center space-x-6">
      {/* Téléphone et Localisation sur UNE SEULE LIGNE */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-1">
          <FaPhone className="text-sm" />
          <a href="tel:+15264855467" className="hover:underline">
            +221 33 868 43 11
          </a>
        </div>

        {/* Séparateur pour l'alignement */}
        <span className="text-gray-400">|</span>

        <div className="flex items-center space-x-1">
          <FaMapMarkerAlt className="text-sm" />
          <span>
            9, Immeuble Saliou Ndione, Fenêtre Mermoz, Corniche Ouest, Dakar –
            Sénégal.
          </span>
        </div>
      </div>

      {/* Email (Séparé) */}
      <div className="hidden md:flex items-center space-x-1">
        <FaEnvelope className="text-sm" />
        <a href="mailto:info@ensaf.com" className="hover:underline">
          contact@cogesto-audit.com
        </a>
      </div>
    </div>

    {/* Section de droite: Icônes sociales (CORRIGÉ : Utilisation de classes Tailwind) */}
    <div className="social-icons flex space-x-4 w-full justify-center sm:w-auto sm:justify-end">
      {/* Sur mobile (par défaut): w-full justify-center (centré) */}
      {/* Sur sm: (taille tablette/desktop): w-auto justify-end (aligné à droite) */}
      <a href="#" aria-label="Facebook">
        <FaFacebookF />
      </a>
      <a href="#" aria-label="Twitter">
        <FaTwitter />
      </a>
      <a href="#" aria-label="YouTube">
        <FaYoutube />
      </a>
      <a href="#" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
    </div>
  </div>
);

/**
 * Composant de l'en-tête principal (Logo et Navigation).
 */
const MainHeader: React.FC<{ toggleMenu: () => void }> = ({ toggleMenu }) => (
  <div className="main-header bg-white flex justify-between items-center px-4 sm:px-8 py-4 shadow-md">
    {/* Logo Section */}
    <div className="logo-container flex items-center space-x-3">
      <div className="logo-icon p-3 border border-gray-200 rounded-full bg-yellow-100">
        <span className="text-2xl text-green-900">⚖️</span>
      </div>
      <div className="text-left leading-none">
        <p className="font-bold text-xl text-green-900">COGESTO</p>
        <p className="text-xs text-gray-700 tracking-wider mt-1">
          Cabinet Comptable
        </p>
      </div>
    </div>

    {/* Navigation Links (Caché sur Mobile) */}
    <nav className="nav-links hidden lg:flex space-x-8 text-gray-700 font-medium">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={`/${link.name.toLowerCase().replace(" ", "-")}`}
          className="flex items-center hover:text-green-900 transition-colors"
        >
          {link.name}
          {link.hasDropdown && <IoMdArrowDropdown className="ml-1 text-xs" />}
        </a>
      ))}
      <a href="/contact" className="hover:text-green-900 transition-colors">
        Contact
      </a>
    </nav>

    {/* Action Icons (Menu & Search) - Visible sur Mobile */}
    <div className="flex items-center space-x-4">
      {/* Icône de Recherche */}
      <FaSearch className="w-5 h-5 text-gray-700 cursor-pointer hover:text-green-900 transition-colors" />

      {/* Icône de Menu (Visible seulement sur Mobile/Tablet) */}
      <button
        onClick={toggleMenu}
        className="text-gray-700 lg:hidden focus:outline-none"
        aria-label="Toggle menu"
      >
        <HiOutlineMenu className="w-7 h-7 hover:text-green-900 transition-colors" />
      </button>
    </div>
  </div>
);

// --- Composant de Menu Mobile (MobileMenu) (inchangé) ---
interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, closeMenu }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white transition-transform duration-300 ease-in-out z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } lg:hidden`}
    >
      <div className="p-8">
        {/* En-tête du menu mobile (Logo et Bouton Fermer) */}
        <div className="flex justify-between items-center mb-12">
          {/* Logo Section (répété pour visibilité) */}
          <div className="logo-container flex items-center space-x-3">
            <div className="logo-icon p-3 border border-gray-200 rounded-full bg-yellow-100">
              <span className="text-2xl text-green-900">⚖️</span>
            </div>
            <div className="text-left leading-none">
              <p className="font-bold text-xl text-green-900">COGESTO</p>
              <p className="text-xs text-gray-700 tracking-wider mt-1">
                Cabinet Comptable
              </p>
            </div>
          </div>

          {/* Bouton Fermer */}
          <button
            onClick={closeMenu}
            className="text-gray-700 focus:outline-none"
          >
            <FaTimes className="w-7 h-7 hover:text-green-900 transition-colors" />
          </button>
        </div>

        {/* Liens de Navigation Mobile */}
        <nav className="flex flex-col space-y-4 text-xl font-semibold">
          {[...navLinks, { name: "Contact", hasDropdown: false }].map(
            (link) => (
              <a
                key={link.name}
                href={`/${link.name.toLowerCase().replace(" ", "-")}`}
                className="py-2 text-gray-800 hover:text-green-900 border-b border-gray-200 transition-colors"
                onClick={closeMenu}
              >
                <div className="flex justify-between items-center">
                  {link.name}
                  {link.hasDropdown && (
                    <IoMdArrowDropdown className="text-2xl" />
                  )}
                </div>
              </a>
            )
          )}
        </nav>

        {/* Espace pour les informations de contact ou le bouton CTA ici si nécessaire */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-lg font-bold text-green-900 mb-2">
            Contactez-nous :
          </p>
          <p className="text-gray-600">+221 77 400 00 00</p>
        </div>
      </div>
    </div>
  );
};

// --- Composant principal de la barre de navigation (NavBar) ---
const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 top-0">
      <TopBar />
      <MainHeader toggleMenu={toggleMenu} />
      <MobileMenu isOpen={isMenuOpen} closeMenu={toggleMenu} />
    </header>
  );
};

export default NavBar;
