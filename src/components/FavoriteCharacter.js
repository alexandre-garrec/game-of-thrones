import Character from "../components/Character";
import styles from "./FavoriteCharacter.module.css";

function FavoriteCharacter({ favorites, removeCharacter }) {
  return (
    <div className={styles.wrapper}>
      <p>Favorite characters:</p>
      <ul>
        {favorites.map((id) => (
          <li key={id} className={styles.favorite}>
            <Character id={id} withBook={false} />
            <button onClick={() => removeCharacter(id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteCharacter;
