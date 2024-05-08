import styles from "./style.module.css";

export const Wrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
