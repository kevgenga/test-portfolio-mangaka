import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Animation from "./pages/Animation";
import Contact from "./pages/ContactPage";
import MangakaPage from "./pages/Mangaka"; // Import de la page Mangaka
import Illustration from "./pages/Illustration";
import BDReadingPage from "./mangaka/BDReadingPage"; // Import de la page de lecture de BD

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mangaka" element={<MangakaPage />} /> {/* Page de sélection des BD */}
        <Route path="/illustration" element={<Illustration />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/comics/:id" element={<BDReadingPage />} /> {/* Route dynamique pour chaque BD */}
      </Routes>
    </Router>
  );
}

export default App;
