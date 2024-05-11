import styles from "./style.module.css";

export const ServiceFeature = ({ feature }) => {
  return (
    <li className={styles.feature}>
      <h3 className={styles.feature_id}>{feature.id}</h3>
      <h5 className={styles.feature_heading}>{feature.heading}</h5>
      <p className={styles.feature_desc}>{feature.description}</p>
    </li>
  );
};
