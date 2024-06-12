import styles from "./style.module.css";

export const VehicleTitle = () => {
  return (
    <div className={styles.vehicle_container}>
      <h4 className={styles.vehicle_title}>Mercedes-Amg E 53 4Matic+ 2022</h4>
      <p className={styles.vehicle_overview}>
        Experience the perfect blend of luxury and performance with the 2022
        Mercedes-AMG E 53 4MATIC+ Sedan, where cutting-edge technology meets
        exhilarating power.
      </p>
    </div>
  );
};
