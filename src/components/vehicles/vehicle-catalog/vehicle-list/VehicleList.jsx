import styles from "./style.module.css";

import { useGetVehicles } from "../../../../hooks/useGetVehicles";

import { AllVehiclesCard } from "../../vehicle-cards/all-vehicles-card/AllVehiclesCard";

export const VehicleList = () => {
  const { vehicles } = useGetVehicles();

  return (
    <div className={styles.list}>
      {vehicles && vehicles.map((vehicle) => (
        <AllVehiclesCard vehicle={vehicle} key={vehicle._id} />
      ))}
    </div>
  );
};
