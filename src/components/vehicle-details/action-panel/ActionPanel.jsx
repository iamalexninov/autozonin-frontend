import { GlobalIcon } from "../../global/GlobalIcon";
import styles from "./style.module.css";

export const ActionPanel = () => {
  return (
    <div className={styles.panel}>
      <p className={styles.panel_price_text}>Our Price</p>
      <h5 className={styles.panel_price}>$50,000</h5>
      <p className={styles.panel_leasing_text}>Leasing Offer:</p>
      <p className={styles.panel_leasing}>
        Montly Payment: <span className={styles.panel_leasing_price}>$650</span>{" "}
        for 36 months.
      </p>

      <div className={styles.panel_action}>
        <button className={styles.panel_offer}>
          <GlobalIcon type="offer" />
          <p>make an offer</p>
        </button>
        <button className={styles.panel_drive}>
          <GlobalIcon type="drive" />
          <p>schedule test drive</p>
        </button>
      </div>
    </div>
  );
};
