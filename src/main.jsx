import React from "react";
import ReactDOM from "react-dom/client"; // Remplace react-dom par react-dom/client
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext"; // Assure-toi d'importer correctement

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
