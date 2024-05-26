import styles from "./style.module.css";

import { Form } from "../../global/form/Form";
import { TextField } from "../../global/text-field/TextField";

export const GetInTouch = () => {
  return (
    <div className={styles.info_section}>
      <Form>
        <div className={styles.info}>
          <h2 className={styles.info_header}>Get In Touch</h2>
          <p className={styles.info_desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ab,
            sunt illo voluptatibus vitae fuga in soluta aperiam maiores et
            suscipit laudantium atque aut laboriosam possimus accusantium minus.
            Ducimus, doloremque?
          </p>
        </div>
        <div className={styles.fields}>
          <TextField type="input" label="First Name" placeholder="Alex" />
          <TextField type="input" label="Last Name" placeholder="Bochev" />
        </div>
        <div className={styles.fields}>
          <TextField type="input" label="Email" placeholder="alex@gmail.com" />
          <TextField
            type="input"
            label="Phone Number"
            placeholder="+359 896 35 9845 "
          />
        </div>
        <TextField
          type="textarea"
          label="Write your thoughts"
          placeholder="Message"
        />
        <button className={styles.btn}>Send Message</button>
      </Form>
    </div>
  );
};
