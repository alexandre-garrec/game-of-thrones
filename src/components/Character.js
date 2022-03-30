import { useContext } from "react";

import useGetCharacter from "../hooks/getCharacter";
import { getId } from "../utils";
import { FavoriteCharacterContext } from "../contexts/FavoriteCharacter";
import Book from "./Book";

function Character({ id, withBook }) {
  const { addCharacter } = useContext(FavoriteCharacterContext);
  const { data, isLoading, error } = useGetCharacter({ id });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <p>{data.name}</p>

      {withBook && (
        <>
          <button onClick={() => addCharacter(getId(data.url))}>
            add to favorite
          </button>
          <p>Books:</p>
          <ul>
            {data.books.map((book, index) => (
              <li key={index}>
                <Book id={getId(book)} withCharacter={false} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Character;
