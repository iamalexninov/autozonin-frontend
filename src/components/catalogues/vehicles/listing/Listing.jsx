import styles from "./style.module.css";

import { AllVehiclesCard } from "../../../vehicles/vehicle-cards/all-vehicles-card/AllVehiclesCard";

export const Listing = () => {
  return (
    <div className={styles.listing}>
      <AllVehiclesCard />
      <AllVehiclesCard />
      <AllVehiclesCard />
      <AllVehiclesCard />
      <AllVehiclesCard />
      <AllVehiclesCard />
      <AllVehiclesCard />
      <AllVehiclesCard />
    </div>
  );
};
