import styles from "./style.module.css";

import { Wrapper } from "../global/wrapper/Wrapper";
import { ServicesInfo } from "./services-info/ServicesInfo";

export const Services = () => {
  return (
    <section className={styles.services}>
      <Wrapper>
        <ServicesInfo />
      </Wrapper>
    </section>
  );
};
