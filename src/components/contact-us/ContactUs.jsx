import styles from "./style.module.css";

import { Wrapper } from "../global/wrapper/Wrapper";
import { GetInTouch } from "./get-in-touch/GetInTouch";

export const ContactUs = () => {
  return (
    <section className={styles.contact}>
      <Wrapper>
        <GetInTouch />
      </Wrapper>
    </section>
  );
};
