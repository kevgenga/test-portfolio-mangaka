import React from 'react';
import { motion } from 'framer-motion';
import '../index.css'; // Assure-toi que ce fichier est correct et accessible
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div className="home-container min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <Navbar />

      <div className="max-w-screen-xl mx-auto p-8 pt-16">

        {/* Titre animé */}
        <motion.h1
          className="text-4xl font-bold mb-8 text-center mt-10 pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Bienvenue sur mon Portfolio !
        </motion.h1>

        {/* Conteneur flex pour aligner les deux sections */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          
          {/* Bloc "À propos de moi" */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1.0 }}
            className=" text-sm font-medium
            border border-gray-700
            box-border

            text-gray-600

            dark:text-gray-100
            dark:border-gray-400

            flex-1 w-full md:w-1/2 p-6"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-600">À propos de moi</h2>
            <p className="text-lg leading-relaxed mb-4">
              Hello WORLD! Je me nomme <span className="font-bold text-blue-500 dark:text-blue-300">KEVGENGA</span>.
              Je suis <span className="font-semibold">Mangaka, illustrateur et animateur 2D.</span>
            </p>

            <div className="mt-4 text-left space-y-3">
              <p>🎉 <span className="font-semibold text-yellow-500 dark:text-yellow-300">Gagnant du 1er prix</span> au <a className="underline text-blue-700 dark:text-blue-400" href="https://www.mangadraft.com/contests/mangadraft-x-xp-pen-2022.fr">Concours Mangadraft x XPPen 2022</a>.</p>
              <p>📖 Autodidacte depuis <span className="font-semibold text-red-600 dark:text-red-300">2010</span>.</p>
              <p>🎨 Formation en <span className="font-semibold text-blue-500 dark:text-blue-300">dessin et communication graphique</span>.</p>
              <p>💼 Expérience en <span className="font-semibold text-green-500 dark:text-green-400">freelance</span>.</p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold">Logiciels maîtrisés :</h3>
              <p className="mt-2">
                Clip Studio Paint EX, After Effects, Photoshop, Illustrator, InDesign, Flash Animate, OpenToonz, Toon Boom Harmony, Cinema 4D, Blender, Jump paint, Visual studio code, Git, FileZilla, Xampp, Android studio, Microsoft office.
              </p>
            </div>
          </motion.div>

          {/* Bloc Widget Instagram */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex-1 w-full md:w-1/2
            border
            border-gray-400
            dark:border-gray-700
            box-border
            
            dark:bg-opacity-0
            text-gray-600
            dark:text-dark-text
            
            p-1 px-8 flex items-center justify-center"
          >
            <div className="elfsight-app-d28a8d13-61ef-48e5-acf8-2adecc403d9e" data-elfsight-app-lazy></div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
