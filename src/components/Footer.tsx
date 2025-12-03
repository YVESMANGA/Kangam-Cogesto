import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

// --- Données du Footer ---

const footerLinks = {
  pages: [
    { title: "Acceuil", href: "#" },
    { title: "A propos", href: "#" },
    { title: "Contacts", href: "#" },
    { title: "Members", href: "#" },
  ],
  services: [
    { title: "Audi", href: "#" },
    { title: "Comptablite", href: "#" },
    { title: "Gestion des Affires", href: "#" },
    { title: "Droit immobilier", href: "#" },
    { title: "Droit des dommages corporels", href: "#" },
  ],
};

const socialMedia = [
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
];

const currentYear = new Date().getFullYear();

// --- Composant Footer ---

const Footer: React.FC = () => {
  return (
    // Section principale du Footer avec la couleur de fond sombre
    <footer className="bg-[#031C1A] text-gray-300">
      {/* Contenu principal du pied de page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* 1. Pages Navigation */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-6">
              Pages
            </h3>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-600 transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Services Navigation */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-6">
              Notre Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-600 transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Logo et Description (Centrale) */}
          <div className="lg:col-span-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Logo Placeholder - Remplacer par votre composant ou image réel */}
            <div className="mb-4">
              {/* Le logo doit être ici - J'utilise un placeholder pour le style */}
              <div className="text-yellow-600 text-3xl font-bold font-serif">
                {/*  */}
                COGESTO
                <p className="text-xs font-sans font-light tracking-widest text-gray-400">
                  Cabinet Comptable
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-6 max-w-xs">
              Cogesto est le cabinet comptable de choix des entreprises, tout en
              garantissant une gestion financière transparente et performante.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              {socialMedia.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="p-2 bg-[#0C302F] rounded-full text-gray-400 hover:bg-yellow-800 hover:text-white transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* 4. Contact et Localisation */}
          <div className="lg:col-span-2 lg:pl-16">
            {/* Localisation */}
            <div className="flex items-start mb-6">
              <FaMapMarkerAlt className="w-5 h-5 text-yellow-800 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  Location
                </h4>
                <p className="text-sm text-gray-400">
                  9, Immeuble Saliou Ndione, Fenêtre Mermoz, Corniche Ouest,
                  Dakar – Sénégal
                </p>
              </div>
            </div>

            {/* Téléphone */}
            <div className="flex items-start mb-6">
              <FaPhoneAlt className="w-5 h-5 text-yellow-800 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                <p className="text-sm text-gray-400">+221 33 868 43 11</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <FaEnvelope className="w-5 h-5 text-yellow-800 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                <p className="text-sm text-gray-400">
                  contact@cogesto-audit.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ligne de Séparation */}
      <hr className="border-t border-[#0C302F] mx-auto max-w-7xl" />

      {/* Barre de Copyright */}
      <div className="bg-[#0C302F] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
          Copyright © {currentYear} Kangam. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
