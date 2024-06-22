import styles from "./style.module.css";

import { GlobalIcon } from "../../../global/GlobalIcon";

export const VehicleOverview = ({ data }) => {
  const dataVehicleRecords = [
    {
      label: "Body",
      value: data && data.type,
      icon: "car",
    },
    {
      label: "Condition",
      value: data && data.condition,
      icon: "filter",
    },
    {
      label: "Fuel Type",
      value: data && data.fuelType,
      icon: "petrol",
    },
    {
      label: "Year",
      value: data && data.year,
      icon: "calendar",
    },
    {
      label: "Transmission",
      value: data && data.transmission,
      icon: "transmission",
    },
    {
      label: "Drive Type",
      value: data && data.driveType,
      icon: "drive",
    },
    {
      label: "Engine Size",
      value: data && data.engineSize,
      icon: "engine",
    },
    {
      label: "Doors",
      value: data && data.doors,
      icon: "doors",
    },
    {
      label: "Cylinders",
      value: data && data.cylinder,
      icon: "cylinders",
    },
    {
      label: "Color",
      value: data && data.color,
      icon: "color",
    },
    {
      label: "VIN",
      value: data && data.vin,
      icon: "vin",
    },
  ];

  return (
    <div className={styles.overview}>
      <h5 className={styles.overview_title}>Vehicle Overview</h5>
      {dataVehicleRecords.map((vehicle) => (
        <div className={styles.overview_record} key={vehicle.label}>
          <div className={styles.overview_label}>
            <GlobalIcon type={vehicle.icon} size={18} />
            <p>{vehicle.label}</p>
          </div>
          <p className={styles.overview_value}>{vehicle.value}</p>
        </div>
      ))}
    </div>
  );
};
