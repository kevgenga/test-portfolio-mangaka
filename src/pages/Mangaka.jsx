import React from 'react';
import { Link } from 'react-router-dom';

const MangakaPage = () => {
  const comics = [
    { id: 1, title: "SHARING!!", description: "Description du Comic 1", coverImage: "/assets/mangaka/sharing/447x200.jpg" },
    { id: 2, title: "Comic 2", description: "Description du Comic 2", coverImage: "/path-to-image2.jpg" },
    { id: 3, title: "Comic 3", description: "Description du Comic 3", coverImage: "/path-to-image3.jpg" },
    // Ajouter plus de comics ici
  ];

  return (
    <div className="mangaka-page p-8 pt-16 min-h-screen bg-light-background dark:bg-dark-background">
      <h1 className="text-4xl font-bold mb-6 text-center uppercase">Mangaka</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {comics.map((comic) => (
          <div key={comic.id} className="comic-card rounded-md shadow-lg p-4 bg-gray-700 dark:bg-gray-800">
            <img src={comic.coverImage} alt={comic.title} className="w-full h-48 object-cover rounded-md" />
            <h1 className="text-3xl font-bold mt-4">{comic.title}</h1>
            <h2 className="text-base mt-2">{comic.description}</h2>
            <Link to={`/comics/${comic.id}`} className="mt-4 inline-block text-white bg-blue-700 hover:bg-blue-500 px-6 py-2 rounded-md text-center">
              Commencer à lire
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MangakaPage;
