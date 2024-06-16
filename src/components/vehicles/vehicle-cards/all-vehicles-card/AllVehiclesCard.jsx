import styles from "./style.module.css";

import { AllVehiclesCardBanner } from "./all-vehicles-card-banner/AllVehiclesCardBanner";
import { AllVehiclesCardInfo } from "./all-vehicles-card-info/AllVehiclesCardInfo";
import { AllVehiclesCardSpecs } from "./all-vehicles-card-specs/AllVehiclesCardSpecs";
import { AllVehiclesCardDetails } from "./all-vehicles-card-details/AllVehiclesCardDetails";

export const AllVehiclesCard = () => {
  return (
    <div className={styles.card}>
      <AllVehiclesCardBanner />
      <div className={styles.card_content}>
        <AllVehiclesCardInfo />
        <AllVehiclesCardSpecs />
        <AllVehiclesCardDetails />
      </div>
    </div>
  );
};
