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

// --- Données du Footer (Inchngées) ---

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

// --- Composant Footer (Mise à jour des Couleurs) ---

const Footer: React.FC = () => {
  return (
    // Section principale du Footer avec la couleur de fond #2c035e (Violet Foncé)
    <footer className="bg-[#2c035e] text-gray-300">
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
                    // Nouveau hover:text: #9370DB (Accentuation)
                    className="text-gray-400 hover:text-[#9370DB] transition-colors text-sm"
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
                    // Nouveau hover:text: #9370DB (Accentuation)
                    className="text-gray-400 hover:text-[#9370DB] transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Logo et Description (Centrale) */}
          <div className="lg:col-span-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Logo Placeholder */}
            <div className="mb-4">
              <div className="text-[#9370DB] text-3xl font-bold font-serif">
                {" "}
                {/* Couleur du logo : #9370DB (Accentuation) */}
                {/*  */}
                COGESTO
                <p className="text-xs font-sans font-light tracking-widest text-gray-400">
                  Finance, Management de la performance
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
                  // Fond des icônes : #3c1e69 (Couleur Secondaire)
                  // Hover : Fond et Texte en #9370DB (Accentuation)
                  className="p-2 bg-[#3c1e69] rounded-full text-gray-400 hover:bg-[#9370DB] hover:text-white transition-colors"
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
              {/* Icônes : #9370DB (Accentuation) */}
              <FaMapMarkerAlt className="w-5 h-5 text-[#9370DB] mt-1 mr-4 flex-shrink-0" />
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
              {/* Icônes : #9370DB (Accentuation) */}
              <FaPhoneAlt className="w-5 h-5 text-[#9370DB] mt-1 mr-4 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                <p className="text-sm text-gray-400">+221 33 868 43 11</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              {/* Icônes : #9370DB (Accentuation) */}
              <FaEnvelope className="w-5 h-5 text-[#9370DB] mt-1 mr-4 flex-shrink-0" />
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
      {/* Couleur de la bordure : #3c1e69 (Couleur Secondaire) */}
      <hr className="border-t border-[#3c1e69] mx-auto max-w-7xl" />

      {/* Barre de Copyright */}
      {/* Fond : #3c1e69 (Couleur Secondaire) */}
      <div className="bg-[#3c1e69] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
          Copyright © {currentYear} Kangam. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
