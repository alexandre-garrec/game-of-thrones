import React, { createContext, useState } from "react";
import Character from "../components/Character";

export const FavoriteCharacterContext = createContext(null);

const FavoriteCharacter = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addCharacter = (id) => {
    if (favorites.includes(id)) return;

    setFavorites([...favorites, id]);
  };

  return (
    <FavoriteCharacterContext.Provider value={{ addCharacter, favorites }}>
      <>
        <p>Favorite characters:</p>
        <ul>
          {favorites.map((id) => (
            <li>
              <Character id={id} withBook={false} />
            </li>
          ))}
        </ul>
      </>
      {children}
    </FavoriteCharacterContext.Provider>
  );
};

export default FavoriteCharacter;
