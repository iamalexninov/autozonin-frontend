import { GlobalIcon } from "../../../global/GlobalIcon";
import styles from "./style.module.css";

export const VehicleOverview = ({data}) => {
  console.log(data)

  return (
    <div className={styles.overview}>
      <h5 className={styles.overview_title}>Vehicle Overview</h5>

      <div className={styles.overview_record}>
        <div className={styles.overview_label}>
          <GlobalIcon type="car" size={22}/>
          <p>Body</p>
        </div>
        <p className={styles.overview_value}>Sedan</p>
      </div>
      <div className={styles.overview_record}>
        <div className={styles.overview_label}>
          <GlobalIcon type="speedometer" size={18}/>
          <p>Mileage</p>
        </div>
        <p className={styles.overview_value}>65,000km.</p>
      </div>
      <div className={styles.overview_record}>
        <div className={styles.overview_label}>
          <GlobalIcon type="petrol" size={18}/>
          <p>Fuel Type</p>
        </div>
        <p className={styles.overview_value}>Diesel</p>
      </div>
      <div className={styles.overview_record}>
        <div className={styles.overview_label}>
          <GlobalIcon type="calendar" size={18}/>
          <p>Year</p>
        </div>
        <p className={styles.overview_value}>2018y.</p>
      </div>
      <div className={styles.overview_record}>
        <div className={styles.overview_label}>
          <GlobalIcon type="transmission" size={18}/>
          <p>Transmission</p>
        </div>
        <p className={styles.overview_value}>Automatic</p>
      </div>
      <div className={styles.overview_record}>
        <div className={styles.overview_label}>
          <GlobalIcon type="drive" size={18}/>
          <p>Drive Type</p>
        </div>
        <p className={styles.overview_value}>All-Wheel Drive (AWD/4WD)</p>
      </div>
      <div className={styles.overview_record}>
        <div className={styles.overview_label}>
          <GlobalIcon type="user" size={18}/>
          <p>Condition</p>
        </div>
        <p className={styles.overview_value}>Used</p>
      </div>
      <div className={styles.overview_record}>
        <div className={styles.overview_label}>
          <GlobalIcon type="engine" size={18}/>
          <p>Engine Size</p>
        </div>
        <p className={styles.overview_value}>5.3 Litres</p>
      </div>
      <div className={styles.overview_record}>
        <div className={styles.overview_label}>
          <GlobalIcon type="doors" size={18}/>
          <p>Doors</p>
        </div>
        <p className={styles.overview_value}>4 Doors</p>
      </div>
      <div className={styles.overview_record}>
        <div className={styles.overview_label}>
          <GlobalIcon type="cylinders" size={18}/>
          <p>Cylinders</p>
        </div>
        <p className={styles.overview_value}>8</p>
      </div>
      <div className={styles.overview_record}>
        <div className={styles.overview_label}>
          <GlobalIcon type="color" size={18}/>
          <p>Color</p>
        </div>
        <p className={styles.overview_value}>Black</p>
      </div>
      <div className={styles.overview_record}>
        <div className={styles.overview_label}>
          <GlobalIcon type="vin" size={18}/>
          <p>VIN</p>
        </div>
        <p className={styles.overview_value}>4684737646876876767</p>
      </div>
    </div>
  );
};
