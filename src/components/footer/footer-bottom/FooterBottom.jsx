import styles from "./style.module.css";

import { GlobalIcon } from "../../global/GlobalIcon";
import { Wrapper } from "../../global/wrapper/Wrapper";

export const FooterBottom = () => {
  return (
    <div className={styles.bottom}>
      <Wrapper>
        <div className={styles.bottom_wrapper}>
          <p>Zonin Showroom - Car Dealership.</p>
          <div className={styles.bottom_wrapper_icon}>
            <GlobalIcon type="arrowUp" size={30} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
