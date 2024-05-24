import styles from "./style.module.css";

import pic2 from "../../../assets/images/jpg/about-pic-2.jpg";
import pic3 from "../../../assets/images/jpg/about-pic-3.jpg";
import pic4 from "../../../assets/images/jpg/about-pic-4.jpg";
import pic5 from "../../../assets/images/jpg/about-pic-5.jpg";
import pic6 from "../../../assets/images/jpg/about-pic-6.jpg";
import pic7 from "../../../assets/images/jpg/about-pic-7.jpg";
import pic8 from "../../../assets/images/jpg/about-pic-8.jpg";
import pic9 from "../../../assets/images/jpg/about-pic-9.jpg";

export const AboutPreviewGallery = () => {
  return (
    <div className={styles.about_gallery_row}>
      <div className={styles.about_gallery_column}>
        <img src={pic9} alt="About Preview Gallery Item" />
        <img src={pic2} alt="About Preview Gallery Item" />
        <img src={pic3} alt="About Preview Gallery Item" />
      </div>
      <div className={styles.about_gallery_column}>
        <img src={pic4} alt="About Preview Gallery Item" />
        <img src={pic5} alt="About Preview Gallery Item" />
        <img src={pic6} alt="About Preview Gallery Item" />
      </div>
      <div className={styles.about_gallery_column}>
        <img src={pic7} alt="About Preview Gallery Item" />
        <img src={pic8} alt="About Preview Gallery Item" />
      </div>
    </div>
  );
};
