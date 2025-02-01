import React from 'react';
import { motion } from 'framer-motion';
import '../index.css'; // Assure-toi que ce fichier est correct et accessible
import Navbar from '../components/Navbar';

const ContactPage = () => {
  return (
    <div className="contact-container min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-8 pt-16">
        <motion.p
          className="sub-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-center mt-10 pb-8 uppercase">Contactez-moi</h1>
        </motion.p>

        {/* Conteneur flex pour aligner les sections avec largeur responsives */}
        <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col gap-6 items-start mx-auto">
          
          {/* Bloc "Contact" */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="flex-1 rounded-md box-border bg-gray-700 dark:bg-gray-800 text-dark-text dark:text-dark-text p-6 px-8"
          >
            {/* Formulaire avec ajustement pour les petits écrans */}
            <form className="space-y-6 text-black dark:text-white mt-4 mx-auto">
              <input
                type="text"
                placeholder="Nom"
                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Ecrivez moi un message ..."
                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500"
                rows="5"
              />
              {/* Bouton centré avec espacement responsive */}
              <div className="flex justify-center">
                <button className="text-white p-3 px-6 rounded-md bg-blue-700 hover:bg-blue-500 transition-all">
                  Envoyer
                </button>
              </div>
            </form>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
