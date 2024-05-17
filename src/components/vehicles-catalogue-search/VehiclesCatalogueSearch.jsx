import styles from "./style.module.css";
import { GlobalUnderline } from "../global/underline/GlobalUnderline";

export const VehiclesCatalogueSearch = () => {
  return (
    <div className={styles.search}>
      <FieldInfo type="Branch:" />
      <FieldInfo type="Make:" />
      <FieldInfo type="Model:" />
      <FieldInfo type="Year:" />
      <FieldInfo type="Body Type:" />
      <FieldInfo type="Fuel Type:" />
      <FieldInfo type="Transmission Type:" />
      <FieldInfo type="Price Range:" />
      <FieldInfo type="Color:" />
      <FieldInfo type="Condition:" />
      <FieldInfo type="Drive Type:" />
    </div>
  );
};

const FieldInfo = ({ type }) => {
  return (
    <div className={styles.info}>
      <h5 className={styles.info_type}>{type}</h5>
      <GlobalUnderline />
      <div className={styles.info_field}>
        <input type="text" className="field" placeholder="somthing" />
      </div>
    </div>
  );
};
