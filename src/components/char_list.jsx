import { useState, useEffect } from "react";
import CharacterCard from "./character_card.jsx";
import characters from "./charData.js";
import "./char_list.css";

export default function CharListContainer() {
  const [filteredChars, setFilteredChars] = useState(characters);

  // Listen for filtered characters from CharListFilter
  useEffect(() => {
    const handleFilteredChars = (event) => {
      setFilteredChars(event.detail);
    };

    // Add event listener
    document.addEventListener("charactersFiltered", handleFilteredChars);

    // Cleanup
    return () => {
      document.removeEventListener("charactersFiltered", handleFilteredChars);
    };
  }, []);

  return (
    <div className="char-list-container">
      {filteredChars.length > 0 ? (
        filteredChars.map((character) => (
          <CharacterCard key={character.id} char={character} />
        ))
      ) : (
        <div className="no-results">No characters match your filters</div>
      )}
    </div>
  );
}
