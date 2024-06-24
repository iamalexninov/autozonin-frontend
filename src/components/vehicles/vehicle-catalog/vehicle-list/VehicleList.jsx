import styles from "./style.module.css";

import { useGetVehicles } from "../../../../hooks/useGetVehicles";

import { VehicleCard } from "../../VehicleCard";

export const VehicleList = () => {
  const { vehicles } = useGetVehicles();

  return (
    <div className={styles.list}>
      {vehicles &&
        vehicles.map((vehicle) => (
          <VehicleCard vehicle={vehicle} key={vehicle._id} />
        ))}
    </div>
  );
};
