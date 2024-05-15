import styles from "./style.module.css";
import ceo from "../../../assets/images/png/peterivanov-ceo.png";

import { GlobalIcon } from "../../global/GlobalIcon";

export const MemberPeter = () => {
  return (
    <div className={styles.member2}>
      <div className={styles.member_banner}>
        <img src={ceo} alt="Peter Ivanov - Ceo" />
      </div>
      <div className={styles.member_info}>
        <h4 className={styles.member_info_name}>Peter Ivanov</h4>
        <p className={styles.member_info_desc}>
          Our CEO, Peter Ivanov, leads our car company with a bold vision for
          innovation and sustainability, driving us towards a future of
          groundbreaking technology and responsible manufacturing practices.
        </p>
        <p className={styles.member_info_desc}>
          With a wealth of experience in the automotive industry, John's
          leadership ensures that we continue to set new standards for
          performance, design, and environmental stewardship.
        </p>
        <div className={styles.member_info_socials}>
          <div className={styles.member_info_socials_media}>
            <GlobalIcon type="facebook" />
          </div>
          <div className={styles.member_info_socials_media}>
            <GlobalIcon type="twitter" />
          </div>
          <div className={styles.member_info_socials_media}>
            <GlobalIcon type="linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
};
