import styles from "./style.module.css";

import { Wrapper } from "../global/wrapper/Wrapper";
import { GetInTouch } from "./get-in-touch/GetInTouch";
import { ContactDetails } from "./contact-details/ContactDetails";

export const ContactUs = () => {
  return (
    <section className={styles.contact}>
      <Wrapper>
        <div className={styles.contact_info}>
          <GetInTouch />
          <ContactDetails />
        </div>
      </Wrapper>
    </section>
  );
};
