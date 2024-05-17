import styles from "./style.module.css";

export const VehiclesCatalogueAvailable = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_counter}>
        <h5 className={styles.wrapper_counter_number}>24 Available Vehicles</h5>
      </div>
      <div className={styles.wrapper_sort}>
        <p>Sort By</p>
        <input type="text" className="field"/>
      </div>
    </div>
  );
};
