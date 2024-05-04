import styles from './style.module.css'

export const GlobalUnderline = () => {
  return (
    <div>
      <span className={styles.before_line}></span>
      <span className={styles.line}></span>
      <span className={styles.after_line}></span>
    </div>
  );
};
