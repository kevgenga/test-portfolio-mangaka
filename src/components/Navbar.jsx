import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from '../context/ThemeContext';  // Importation du hook

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggleTheme, theme } = useTheme(); // Récupère le thème et la fonction pour basculer

  return (
    <nav className={`fixed w-full z-50 ${theme === 'dark' ? 'bg-dark-background text-dark-text' : 'bg-light-background text-light-text'}`}>
     <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="">
        
        {/* Bouton pour changer de thème */}
        <button
          onClick={toggleTheme}
          className={`text-white px-4 py-2 rounded-md ${theme === 'dark' ? 'bg-blue-700 hover:bg-blue-500' : 'bg-gray-700 hover:bg-gray-500'}`}
        >
          {theme === 'dark' ? 'Mode Clair' : 'Mode Sombre'}
        </button>
        
        </div>

        {/* Bouton pour mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>


        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-blue-500">Accueil</Link></li>
          <li><Link to="/Mangaka" className="hover:text-blue-500">Mangaka</Link></li>
          <li><Link to="/Illustration" className="hover:text-blue-500">Illustration</Link></li>
          <li><Link to="/Animation" className="hover:text-blue-500">Animation</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
        </ul>

        {/* Menu Mobile */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 w-full h-screen bg-gray-900 flex flex-col items-center justify-center space-y-6 md:hidden"
          >
            <button className="absolute top-6 right-6 text-3xl text-white hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              <FaTimes />
            </button>
            <Link to="/" className="text-xl text-white hover:text-blue-500" onClick={() => setMenuOpen(false)}>Accueil</Link>
            <Link to="/Mangaka" className="text-xl text-white hover:text-blue-500" onClick={() => setMenuOpen(false)}>Mangaka</Link>
            <Link to="/Illustration" className="text-xl text-white hover:text-blue-500" onClick={() => setMenuOpen(false)}>Illustration</Link>
            <Link to="/Animation" className="text-xl text-white hover:text-blue-500" onClick={() => setMenuOpen(false)}>Animation</Link>
            <Link to="/contact" className="text-xl text-white hover:text-blue-500" onClick={() => setMenuOpen(false)}>Contact</Link>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
