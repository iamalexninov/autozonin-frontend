import styles from "./style.module.css";

import pic1 from "../../../assets/images/jpg/about-pic-1.jpg";
import pic2 from "../../../assets/images/jpg/about-pic-2.jpg";
import pic3 from "../../../assets/images/jpg/about-pic-3.jpg";
import pic4 from "../../../assets/images/jpg/about-pic-4.jpg";

export const AboutPreviewGallery = () => {
  return (
    <div className={styles.about_gallery_row}>
      <div className={styles.about_gallery_column}>
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
      </div>
      <div className={styles.about_gallery_column}>
        <img src={pic3} alt="" />
        <img src={pic4} alt="" />
      </div>
    </div>
  );
};
