module.exports = {
  darkMode: 'class', // Active le mode sombre avec une classe
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Assurez-vous que tous les fichiers sont inclus ici
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs pour le mode clair
        light: {
          background: '#ffffff',
          text: '#333333',
        },
        // Couleurs pour le mode sombre
        dark: {
          background: '#1a1a1a', // Exemple de couleur de fond sombre
          text: '#f5f5f5', // Exemple de couleur de texte clair
        },
      },
    },
  },
  plugins: [],
}
