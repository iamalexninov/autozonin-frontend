import styles from "./style.module.css";

import { Wrapper } from "../global/wrapper/Wrapper";
import { ContactForm } from "./contact-form/ContactForm";

export const ContactSection = () => {
  return (
    <section className={styles.contact}>
      <Wrapper>
          <ContactForm />
      </Wrapper>
    </section>
  );
};
