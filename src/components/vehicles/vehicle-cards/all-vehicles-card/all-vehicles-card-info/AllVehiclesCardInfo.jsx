import styles from "./style.module.css";

export const AllVehiclesCardInfo = ({ title, tagline }) => {
  return (
    <div className={styles.card_info}>
      <p className={styles.card_info_header}>{title}</p>
      <p className={styles.card_info_desc}>{tagline}</p>
    </div>
  );
};
