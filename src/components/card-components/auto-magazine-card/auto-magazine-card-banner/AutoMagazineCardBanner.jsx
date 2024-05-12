import styles from './style.module.css';
import banner from "../../../../assets/images/jpg/test_article.jpg";

import { GlobalIcon } from '../../../global/GlobalIcon';

export const AutoMagazineCardBanner = () => {
  return (
    <div className={styles.banner}>
      <img src={banner} alt="Article Banner Preview" />
      <div className={styles.banner_date}>
        <GlobalIcon type="calendar" />
        <p>September 25, 2024</p>
      </div>
    </div>
  );
};
