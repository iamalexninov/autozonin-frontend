import styles from "./style.module.css";

export const AuthSeparator = () => {
  return (
    <div className={styles.separator}>
      <span className={styles.separator_line}></span>
      <p>OR</p>
      <span className={styles.separator_line}></span>
    </div>
  );
};
