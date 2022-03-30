import { Link } from "react-router-dom";
import styles from "./TopBar.module.css";

function TopBar() {
  return (
    <div className={styles.wrapper}>
      <Link to="/">Home</Link>
    </div>
  );
}

export default TopBar;
