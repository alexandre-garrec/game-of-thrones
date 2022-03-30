import useGetBook from "../hooks/getBook";
import Character from "../components/Character";
import { getId } from "../utils";
import { Link } from "react-router-dom";
import { ROUTES } from "../const";

function Book({ id, withCharacter }) {
  const { data, isLoading, error } = useGetBook({ id });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <Link to={ROUTES.BOOK(getId(data.url))}>{data.name}</Link>
      {withCharacter && (
        <>
          <p>characters</p>

          <ul>
            {data.characters.map((character, index) => (
              <li key={index}>
                <Character id={getId(character)} withBook />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Book;
