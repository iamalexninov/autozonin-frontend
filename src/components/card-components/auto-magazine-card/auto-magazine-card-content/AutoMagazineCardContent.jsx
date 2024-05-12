import styles from "./style.module.css";

import { Link } from "react-router-dom";
import { GlobalIcon } from "../../../global/GlobalIcon";

export const AutoMagazineCardContent = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content_items}>
        <p>
          By <span className={styles.content_items_writer}>Alex Ninov</span>
        </p>
        <div className={styles.content_items_category}>
          <GlobalIcon type="folder" />
          <p>Article</p>
        </div>
      </div>
      <h5>toyota cuts production plan again on ongoing chip shortage</h5>
      <Link to="/blog">Read More</Link>
    </div>
  );
};
