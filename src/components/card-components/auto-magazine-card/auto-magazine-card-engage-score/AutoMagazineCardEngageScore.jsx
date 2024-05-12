import styles from './style.module.css'

import { GlobalIcon } from "../../../global/GlobalIcon";

export const AutoMagazineCardEngageScore = () => {
  return (
    <div className={styles.engage_score}>
      <div className={styles.engage_score_item}>
        <GlobalIcon type="comment" />
        <p>3 Comments</p>
      </div>
      <div className={styles.engage_score_item}>
        <GlobalIcon type="like" />
        <p>35 Likes</p>
      </div>
    </div>
  );
};
