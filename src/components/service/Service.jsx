import styles from "./style.module.css";

import { Wrapper } from "../global/wrapper/Wrapper";
import { ServiceWelcome } from "./service-welcome/ServiceWelcome";

export const Service = () => {
  return (
    <section className={styles.service}>
      <Wrapper>
        <ServiceWelcome />
      </Wrapper>
    </section>
  );
};
