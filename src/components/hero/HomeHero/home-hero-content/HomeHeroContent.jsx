import styles from "./style.module.css";

import { endpoints } from "../../../../utils/endpoints";

import { GlobalButton } from "../../../global/button/GlobalButton";

export const HomeHeroContent = () => {
  return (
    <div className={styles.content}>
      <h3 className={styles.content_subtitle}>vehicle dealership</h3>
      <div className={styles.content_titles}>
        <h1>zonin showroom:</h1>
        <h1>driven by excellence</h1>
      </div>
      <div className={styles.content_btns}>
        <GlobalButton
          btnVariant="link"
          btnType="primaryLight"
          path={endpoints.profile}
          text="sell vehicles"
        />
        <GlobalButton
          btnVariant="link"
          btnType="primaryOrange"
          path={endpoints.vehicles}
          text="buy vehicles"
        />
      </div>
    </div>
  );
};
