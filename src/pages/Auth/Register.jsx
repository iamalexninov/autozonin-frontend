import styles from "./style.module.css";

import { GlobalIcon } from "../../components/global/GlobalIcon";

export const Register = () => {
  return (
    <form className={styles.form}>
      <div className={styles.form_field}>
        <label htmlFor="" className={styles.form_label}>
          Username
        </label>
        <input type="text" placeholder="admin" className={styles.form_input} />
      </div>
      <div className={styles.form_field}>
        <label htmlFor="" className={styles.form_label}>
          Email
        </label>
        <input
          type="text"
          placeholder="admin@gmail.com"
          className={styles.form_input}
        />
      </div>
      <div className={styles.form_field}>
        <label htmlFor="" className={styles.form_label}>
          Password
        </label>
        <input type="text" placeholder="..." className={styles.form_input} />
      </div>
      <div className={styles.form_field}>
        <label htmlFor="" className={styles.form_label}>
          Repeat Password
        </label>
        <input type="text" placeholder="..." className={styles.form_input} />
      </div>
      <button className={styles.form_btn}>
        <p>Register</p>
        <GlobalIcon type="arrowRightInline" size={18} />
      </button>
      <div className={styles.form_or}>
        <span className={styles.form_line}></span>
        <p>OR</p>
        <span className={styles.form_line}></span>
      </div>
      <div className={styles.form_social}>
        <button className={styles.form_facebook_btn}>
          <GlobalIcon type="facebook" />
          <p>Facebook</p>
        </button>
        <button className={styles.form_google_btn}>
          <GlobalIcon type="google" />
          <p>Google</p>
        </button>
      </div>
    </form>
  );
};
