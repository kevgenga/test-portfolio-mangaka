import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

const BDReadingPage = () => {
  const { comicId } = useParams();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Liste des pages en ordre inversé pour lecture droite -> gauche
  const pages = [
    '/assets/mangaka/sharing/BD2_001.jpg', // Couverture
    '/assets/mangaka/sharing/BD2_002.jpg',
    '/assets/mangaka/sharing/BD2_003.jpg',
    '/assets/mangaka/sharing/BD2_004.jpg',
    '/assets/mangaka/sharing/BD2_005.jpg',
    '/assets/mangaka/sharing/BD2_006.jpg',
    '/assets/mangaka/sharing/BD2_007.jpg',
    '/assets/mangaka/sharing/BD2_008.jpg',
    '/assets/mangaka/sharing/BD2_009.jpg',
    '/assets/mangaka/sharing/BD2_010.jpg',
    '/assets/mangaka/sharing/BD2_011.jpg',
  ];

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lecture inversée : Flèche gauche avance / Flèche droite recule
  const goToNextPage = () => {
    if (isMobile) {
      if (currentPage < pages.length - 1) {
        setCurrentPage(currentPage + 1);
      }
    } else {
      if (currentPage === 0) {
        setCurrentPage(1); // Première page seule, puis passage en double pages
      } else if (currentPage < pages.length - 2) {
        setCurrentPage(currentPage + 2);
      }
    }
  };

  const goToPrevPage = () => {
    if (isMobile) {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    } else {
      if (currentPage === 1) {
        setCurrentPage(0); // Retour à la couverture si on est sur la première double page
      } else if (currentPage > 1) {
        setCurrentPage(currentPage - 2);
      }
    }
  };

  // Gestion du swipe
  const handlers = useSwipeable({
    onSwipedLeft: goToNextPage, // Swipe gauche pour aller à la page suivante
    onSwipedRight: goToPrevPage, // Swipe droite pour revenir à la page précédente
    trackMouse: true, // Permet de gérer également les clics de souris
  });

  // Bloquer les clics sur les flèches pour mobile
  const handleArrowClick = (e) => {
    if (isMobile) {
      e.preventDefault();
    }
  };

  // Gestion des touches fléchées directionnelles
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        // Flèche gauche : Passe à la page suivante
        goToNextPage();
      } else if (e.key === 'ArrowRight') {
        // Flèche droite : Retour à la page précédente
        goToPrevPage();
      }
    };

    // Écouter l'événement de la touche fléchée
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage]);

  // Fonction pour gérer le clic sur l'image (passer à la page suivante ou précédente)
  const handleImageClick = (e) => {
    // Détecte la position du clic pour décider si on passe à la page suivante ou précédente
    const clickPosition = e.clientX; // Récupère la position horizontale du clic

    // Si le clic est sur la gauche, on revient à la page précédente
    if (clickPosition < window.innerWidth / 2) {
      goToPrevPage();
    } else {
      // Sinon, on passe à la page suivante
      goToNextPage();
    }
  };

  return (
    <div
      className="bd-reading p-4 sm:p-8 pt-16 min-h-screen bg-light-background dark:bg-dark-background flex flex-col items-center justify-center relative"
      {...handlers}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center uppercase pt-10">
        Bande dessinée {comicId}
      </h1>

      {/* Conteneur du livre */}
      <div className="relative w-full max-w-[900px] flex justify-center items-center">
        {/* Flèche gauche (Page suivante) */}
        {!isMobile && currentPage < pages.length - (isMobile ? 1 : 2) && (
          <button
            onClick={(e) => {
              goToNextPage();
              handleArrowClick(e); // Bloquer l'interaction sur mobile
            }}
            className="text-5xl absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 dark:text-white bg-gray-900/50 hover:bg-gray-900/80 p-4 sm:p-6 rounded-full z-10"
          >
            ❮
          </button>
        )}

        {/* Affichage des pages */}
        <div className="flex w-full justify-center gap-2">
          {/* Sur mobile : Affiche une seule page */}
          {isMobile ? (
            <div className="flex flex-col items-center">
              <img
                src={pages[currentPage]}
                alt={`Page ${currentPage + 1}`}
                className="w-[80%] max-w-[400px] h-auto shadow-lg"
                onClick={handleImageClick} // Clic pour changer de page
              />
              {/* Affichage du numéro de la page */}
              <p className="mt-2 text-lg">{`Page ${currentPage + 1}`}</p>
            </div>
          ) : (
            <>
              {/* Si c'est la première page => Affichage seul */}
              {currentPage === 0 ? (
                <div className="flex flex-col items-center">
                  <img
                    src={pages[currentPage]}
                    alt={`Page ${currentPage + 1}`}
                    className="w-[80%] max-w-[500px] h-auto shadow-lg"
                    onClick={handleImageClick} // Clic pour changer de page
                  />
                  <p className="mt-2 text-lg">{`Page ${currentPage + 1}`}</p>
                </div>
              ) : (
                <>
                  {/* Sinon, affiche 2 pages côte à côte */}
                  {currentPage + 1 < pages.length && (
                    <div className="flex flex-col items-center">
                      <img
                        src={pages[currentPage + 1]}
                        alt={`Page ${currentPage + 2}`}
                        className="w-[45%] max-w-[400px] h-auto shadow-lg"
                        onClick={handleImageClick} // Clic pour changer de page
                      />
                      <p className="mt-2 text-lg">{`Page ${currentPage + 2}`}</p>
                    </div>
                  )}
                  <div className="flex flex-col items-center">
                    <img
                      src={pages[currentPage]}
                      alt={`Page ${currentPage + 1}`}
                      className="w-[45%] max-w-[400px] h-auto shadow-lg"
                      onClick={handleImageClick} // Clic pour changer de page
                    />
                    <p className="mt-2 text-lg">{`Page ${currentPage + 1}`}</p>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {/* Flèche droite (Page précédente) */}
        {!isMobile && currentPage > 0 && (
          <button
            onClick={(e) => {
              goToPrevPage();
              handleArrowClick(e); // Bloquer l'interaction sur mobile
            }}
            className="text-5xl absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 dark:text-white bg-gray-900/50 hover:bg-gray-900/80 p-4 sm:p-6 rounded-full z-10"
          >
            ❯
          </button>
        )}
      </div>

      {/* Bouton retour */}
      <div className="mt-6">
        <Link to="/mangaka">
          <button className="text-white bg-blue-700 hover:bg-blue-500 px-6 py-3 rounded-md">
            Retour à la sélection
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BDReadingPage;
