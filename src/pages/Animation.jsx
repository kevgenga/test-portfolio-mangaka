import React from 'react';
import { motion } from 'framer-motion';
import '../index.css'; // Assure-toi que ce fichier est correct et accessible
import Navbar from '../components/Navbar';

const Animation = () => {
  return (
    <div className="home-container min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-8 pt-16">
        <motion.p
          className="sub-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-center mt-10 pb-8 uppercase">Animation</h1>
        </motion.p>

        {/* Conteneur flex pour aligner les deux sections */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          
          {/* Bloc "À propos de moi" */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="flex-1 w-full md:w-1/2 rounded-md box-border bg-gray-700 dark:bg-gray-800 text-dark-text dark:text-dark-text p-6 px-8"
          >
            <h1 className="text-4xl font-bold mb-4">À propos de moi</h1>
            <p className="text-lg leading-relaxed mb-4">
              Bonjour, je me nomme <span className="font-bold text-blue-300">KEVGENGA</span>.
              Je suis <span className="font-semibold">Mangaka, illustrateur et animateur 2D.</span>
            </p>

            <div className="mt-4 text-left space-y-3">
              <p>🎉 <span className="font-semibold text-yellow-400">Gagnant du 1er prix</span> <a className="underline" href="https://www.mangadraft.com/contests/mangadraft-x-xp-pen-2022.fr">au concours Mangadraft 2022</a> (avec la participation de <span className="text-red-400">Manga-io</span> et <span className="text-green-400">XP PEN</span>).</p>

              <p>📖 Autodidacte depuis <span className="text-yellow-300">2010</span>.</p>

              <p>🎨 Formation professionnelle en <span className="font-semibold text-blue-300">
                dessin et communication graphique</span>.</p>

              <p>💼 Expérience en <span className="text-green-400">freelance</span>.</p>
            </div>

            <div className="mt-6">
              <h1 className="text-xl font-semibold">VIMEO (Animations) :</h1>
              <a
                href="https://vimeo.com/user86751428"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline"
              >
                https://vimeo.com/user86751428
              </a>
            </div>

            <div className="mt-6">
              <h1 className="text-xl font-semibold ">Logiciels maîtrisés :</h1>
              <p className="text-gray-300 mt-2">
                Clip Studio Paint EX, After Effects, Photoshop, Illustrator, InDesign,
                Flash Animate, OpenToonz, Toon Boom Harmony, Cinema 4D, Blender.
              </p>
            </div>
          </motion.div>

          {/* Bloc Widget Instagram */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="flex-1 w-full md:w-1/2 rounded-md box-border bg-gray-700 dark:bg-opacity-0 text-dark-text dark:text-dark-text p-6 px-8 flex items-center justify-center"
          >
            <div className="elfsight-app-d28a8d13-61ef-48e5-acf8-2adecc403d9e" data-elfsight-app-lazy></div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Animation;
