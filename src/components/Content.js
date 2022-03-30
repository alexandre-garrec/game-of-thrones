import styles from "./Content.module.css";

function Content({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default Content;
