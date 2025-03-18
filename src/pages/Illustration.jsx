import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Liste des images à afficher dans la galerie
const images = [
  { src: "/test-portfolio-mangaka/assets/illustration/Illustration3.jpg", alt: "Illustration 1", category: "illustrations", date: "2025-02-01" },
  { src: "/assets/illustration/Illustration17-3.jpg", alt: "Illustration 2", category: "sketches", date: "2022-12-12" },
  { src: "/assets/illustration/Illustration22-2.jpg", alt: "Illustration 3", category: "paintings", date: "2024-02-04" },
  { src: "/assets/illustration/Illustration25.jpg", alt: "Illustration 4", category: "illustrations", date: "2023-07-15" },
  { src: "/assets/illustration/Illustration27-v2.jpg", alt: "Illustration 5", category: "sketches", date: "2022-08-30" },
];

const Illustration = () => {
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("recent"); // "recent" ou "oldest"

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']");
  }, []);

  // Filtrer les images par catégorie
  let filteredImages = images.filter(image => filter === "all" || image.category === filter);

  // Trier les images par date (récent -> ancien ou ancien -> récent)
  filteredImages = filteredImages.sort((a, b) => {
    return sortOrder === "recent" 
      ? new Date(b.date) - new Date(a.date) 
      : new Date(a.date) - new Date(b.date);
  });

  // Formater la date
  const formatDate = (date) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(date).toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="mx-auto px-6 pt-16 min-h-screen bg-light-background dark:bg-dark-background">
      
      {/* Titre animé */}
      <motion.h1
        className="text-3xl font-semibold text-center mb-6 uppercase tracking-wide pt-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Galerie d'Illustrations
      </motion.h1>

      {/* Filtres et tri */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-wrap justify-center gap-4 mb-6"
      >
        {/* Filtres par catégorie */}
        {["all", "illustrations", "sketches", "paintings"].map((category) => (
          <button
            key={category}
            className={`px-4 py-1.5 text-sm font-medium uppercase transition-all duration-200 border 
              ${filter === category 
                ? "border-blue-600 text-blue-600 shadow-sm" 
                : "border-gray-400 text-gray-600 hover:border-gray-700 hover:text-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:border-gray-400"}
            `}
            onClick={() => setFilter(category)}
          >
            {category === "all" ? "Tout" : category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}

        {/* Bouton de tri par date */}
        <button
          className="px-4 py-1.5 text-sm font-medium uppercase border border-gray-400 text-gray-600 
            hover:border-gray-700 hover:text-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:border-gray-400 transition-all duration-200"
          onClick={() => setSortOrder(sortOrder === "recent" ? "oldest" : "recent")}
        >
          Trier par : {sortOrder === "recent" ? "Plus ancien" : "Plus récent"}
        </button>
      </motion.div>

      {/* Grille des images */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
        }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3 pt-3"
      >
        {filteredImages.map((image, index) => (
          <motion.div 
            key={index}
            className="overflow-hidden shadow-sm cursor-pointer border border-gray-300 dark:border-gray-700 rounded-sm"
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <a href={image.src} data-fancybox="gallery" data-caption={image.alt}>
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-48 object-cover transition-all duration-300 hover:opacity-85"
                loading="lazy"
              />
            </a>
            {/* Date sous l'image */}
            <div className="font-semibold text-center text-sm text-gray-500 dark:text-gray-400 dark:bg-gray-800 py-2 pb-2">
              {formatDate(image.date)}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Illustration;
