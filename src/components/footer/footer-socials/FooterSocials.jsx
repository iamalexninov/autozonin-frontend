import styles from "./style.module.css";

import { GlobalIcon } from "../../global/GlobalIcon";

export const FooterSocials = () => {
  return (
    <div className={styles.social}>
      <div className={styles.social_icons}>
        <div className={styles.social_icons_item}>
          <GlobalIcon type="facebook" />
        </div>
        <div className={styles.social_icons_item}>
          <GlobalIcon type="twitter" />
        </div>
        <div className={styles.social_icons_item}>
          <GlobalIcon type="pinterest" />
        </div>
        <div className={styles.social_icons_item}>
          <GlobalIcon type="linkedin" />
        </div>
        <div className={styles.social_icons_item}>
          <GlobalIcon type="instagram" />
        </div>
      </div>
    </div>
  );
};
