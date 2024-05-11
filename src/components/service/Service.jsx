import styles from "./style.module.css";

import { ServiceWelcome } from "./service-welcome/ServiceWelcome";
import { ServiceFeatures } from "./service-features/ServiceFeatures";

export const Service = () => {
  return (
    <section className={styles.service}>
      <ServiceWelcome />
      <ServiceFeatures />
    </section>
  );
};
