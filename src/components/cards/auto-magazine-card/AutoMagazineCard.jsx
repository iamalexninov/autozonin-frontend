import styles from "./style.module.css";

import { AutoMagazineCardBanner } from "./auto-magazine-card-banner/AutoMagazineCardBanner";
import { AutoMagazineCardEngageScore } from "./auto-magazine-card-engage-score/AutoMagazineCardEngageScore";
import { AutoMagazineCardContent } from "./auto-magazine-card-content/AutoMagazineCardContent";

export const AutoMagazineCard = () => {
  return (
    <>
      <AutoMagazineCardBanner />
      <div className={styles.card_wrapper}>
        <AutoMagazineCardEngageScore />
        <AutoMagazineCardContent />
      </div>
    </>  
  );
};
