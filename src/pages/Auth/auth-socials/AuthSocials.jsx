import styles from "./style.module.css";

import { GlobalIcon } from "../../../components/global/GlobalIcon";

export const AuthSocials = () => {
  return (
    <div className={styles.auth_socials}>
      <button
        className={[styles.auth_social_btn, styles.auth_social_btn_f].join(" ")}
      >
        <GlobalIcon type="facebook" />
        <p>Facebook</p>
      </button>
      <button
        className={[styles.auth_social_btn, styles.auth_social_btn_g].join(" ")}
      >
        <GlobalIcon type="google" />
        <p>Google</p>
      </button>
    </div>
  );
};
