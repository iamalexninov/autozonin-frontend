import styles from "./style.module.css";

import { GlobalIcon } from "../../../global/GlobalIcon";

export const AutoMagazineCardEngageScore = () => {
  return (
    <div className={styles.engage_score}>
      <div className={styles.engage_score_item}>
        <div className={styles.engage_score_item_icon}>
          <GlobalIcon type="comment" />
        </div>
        <p>3</p>
      </div>
      <div className={styles.engage_score_item}>
        <div className={styles.engage_score_item_icon}>
          <GlobalIcon type="like" />
        </div>
        <p>35</p>
      </div>
    </div>
  );
};
