import styles from "./style.module.css";

export const Features = () => {
  return (
    <div className={styles.features_container}>
      <h5 className={styles.features_title}>Features</h5>
      <div className={styles.features_records}>
        <p>Feature 1</p>
        <p>Feature 2</p>
        <p>Feature 3</p>
        <p>Feature 4</p>
      </div>
    </div>
  );
};
