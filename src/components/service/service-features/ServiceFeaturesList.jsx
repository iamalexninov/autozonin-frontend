import { ServiceFeature } from "./ServiceFeature";
import styles from "./style.module.css";

export const ServiceFeaturesList = ({ features }) => {
  return (
    <ul className={styles.features}>
      {features.map((feature) => (
        <ServiceFeature feature={feature} key={feature.id} />
      ))}
    </ul>
  );
};
