import { useState, createContext } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./css/card.css";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import CharListContainer from "./components/char_list.jsx";
import CharListFilter from "./components/char_list_filter.jsx";
import CharacterDetail from "./components/CharacterDetail.jsx"; // Detay sayfası bileşenini import edin

// Create a context for character data
export const CharacterContext = createContext();

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <CharListFilter />
              <CharListContainer />
            </>
          }
        />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
