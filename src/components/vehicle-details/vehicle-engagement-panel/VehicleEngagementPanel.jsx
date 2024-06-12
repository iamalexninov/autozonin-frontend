import styles from "./style.module.css";

import { GlobalIcon } from "../../global/GlobalIcon";

export const VehicleEngagementPanel = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.panel_drive}>
        <GlobalIcon type="drive" />
        <p>Schedule Test Drive</p>
      </div>
      <div className={styles.panel_engagement}>
        <div className={styles.panel_item}>
          <p>Share</p>
          <div className={styles.panel_icon}>
          <GlobalIcon type="share" size={18}/>
          </div>
        </div>
        <div className={styles.panel_item}>
          <p>Save</p>
          <div className={styles.panel_icon}>
          <GlobalIcon type="favorite" size={18}/>
          </div>
        </div>
        <div className={styles.panel_item}>
          <p>Like</p>
          <div className={styles.panel_icon}>
          <GlobalIcon type="like" size={18}/>
          </div>
        </div>
      </div>
    </div>
  );
};
