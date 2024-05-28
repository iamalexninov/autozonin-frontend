import styles from "./style.module.css";

import { Wrapper } from "../../../global/wrapper/Wrapper";
import { AllVehiclesCard } from "../../../cards/all-vehicles-card/AllVehiclesCard";

export const Listing = () => {
  return (
    <div className={styles.listing}>
      <Wrapper>
        <div className={styles.listing_records}>
          <AllVehiclesCard />
          <AllVehiclesCard />
          <AllVehiclesCard />
          <AllVehiclesCard />
          <AllVehiclesCard />
          <AllVehiclesCard />
          <AllVehiclesCard />
          <AllVehiclesCard />
        </div>
      </Wrapper>
    </div>
  );
};
