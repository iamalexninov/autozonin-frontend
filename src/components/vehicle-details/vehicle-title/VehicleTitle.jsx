import styles from "./style.module.css";

export const VehicleTitle = () => {
  return (
    <div className={styles.vehicle_container}>
      <h5 className={styles.vehicle_title}>Mercedes-Amg E 53 4Matic+ 2022</h5>
      <p className={styles.vehicle_tags}>
        <p>MercedesAMG</p>
        <p>e53</p>
        <p>4Matic</p>
        <p>LuxurySedan</p>
        <p>PerformanceCar</p>
        <p>2022Model</p>
      </p>
    </div>
  );
};
