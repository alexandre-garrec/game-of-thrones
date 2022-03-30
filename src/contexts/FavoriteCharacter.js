import React, { createContext, useState } from "react";
import FavoriteCharacter from "../components/FavoriteCharacter";

export const FavoriteCharacterContext = createContext(null);

const FavoriteCharacterCtx = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addCharacter = (id) => {
    if (favorites.includes(id)) return;

    setFavorites([...favorites, id]);
  };

  const removeCharacter = (id) => {
    setFavorites(favorites.filter((_id) => _id !== id));
  };

  return (
    <FavoriteCharacterContext.Provider value={{ addCharacter, favorites }}>
      <FavoriteCharacter
        favorites={favorites}
        removeCharacter={removeCharacter}
      />
      {children}
    </FavoriteCharacterContext.Provider>
  );
};

export default FavoriteCharacterCtx;
