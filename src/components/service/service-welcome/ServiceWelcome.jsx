import styles from "./style.module.css";
import porche from "../../../assets/images/png/porche-911.png";

import { Wrapper } from "../../global/wrapper/Wrapper";

export const ServiceWelcome = () => {
  return (
    <Wrapper>
      <div className={styles.service_welcome}>
        <div className={styles.service_welcome_text}>
          <h2 className={styles.service_welcome_text_title}>
            welcome to <span>zonin showroom</span>
          </h2>
          <p className={styles.service_welcome_text_description}>
            Welcome to Zonin Showroom, where automotive dreams come to life! At
            Zonin, we pride ourselves on offering an unparalleled car buying
            experience. Nestled in the heart of the city, our showroom showcases
            a curated selection of top-quality vehicles, ranging from sleek
            sedans to rugged SUVs and everything in between. With a team of
            knowledgeable and friendly staff, we`re dedicated to helping you
            find the perfect ride to suit your lifestyle and budget. Whether
            you`re searching for a reliable daily driver or a head-turning
            luxury vehicle, Zonin Showroom is your destination for automotive
            excellence. Visit us today and let us guide you on your journey to
            finding your dream car.
          </p>
        </div>
        <div className={styles.service_welcome_img}>
          <img src={porche} alt="Service Welcome Porche 911" />
        </div>
      </div>
    </Wrapper>
  );
};
