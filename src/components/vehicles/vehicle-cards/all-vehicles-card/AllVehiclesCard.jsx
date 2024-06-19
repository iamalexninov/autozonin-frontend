import styles from "./style.module.css";

import { AllVehiclesCardBanner } from "./all-vehicles-card-banner/AllVehiclesCardBanner";
import { AllVehiclesCardInfo } from "./all-vehicles-card-info/AllVehiclesCardInfo";
import { AllVehiclesCardSpecs } from "./all-vehicles-card-specs/AllVehiclesCardSpecs";
import { AllVehiclesCardDetails } from "./all-vehicles-card-details/AllVehiclesCardDetails";

export const AllVehiclesCard = ({ vehicle }) => {
  const { banners, details, price, _id } = vehicle;

  return (
    <div className={styles.card}>
      <AllVehiclesCardBanner banners={banners} />
      <div className={styles.card_content}>
        <AllVehiclesCardInfo title={details.title} tagline={details.tagline} />
        <AllVehiclesCardSpecs
          mileage={details.mileage}
          fuelType={details.fuelType}
          transmission={details.transmission}
        />
        <AllVehiclesCardDetails
          id={_id}
          amount={price.amount}
          currency={price.currency}
        />
      </div>
    </div>
  );
};
