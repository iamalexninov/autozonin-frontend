import styles from "./style.module.css";

export const AllVehiclesCardBanner = ({banners}) => {
  return (
    <div className={styles.card_banner}>
      <img src={banners.url} alt="Test BMW M5 Competition" />
    </div>
  );
};
