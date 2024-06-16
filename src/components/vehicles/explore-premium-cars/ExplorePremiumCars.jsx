import styles from "./style.module.css";

import { Wrapper } from "../../global/wrapper/Wrapper";
import { SectionHeaderWithLinkBtn } from "../../global/section-header-link-btn/SectionHeaderWithLinkBtn";
import { RenderConditionsMakers } from "../render-conditions-makers/RenderConditionsMakers";
import { AllVehiclesCard } from "../vehicle-cards/all-vehicles-card/AllVehiclesCard";

export const ExplorePremiumCars = () => {
  // TODO: fetch latest added

  return (
    <section className={styles.car}>
      <Wrapper>
        <SectionHeaderWithLinkBtn
          color="dark"
          header="Explore Premium Cars"
          linkPath="/catalog"
          linkText="View All"
        />
        <RenderConditionsMakers type="conditions" />
        <CarEntries />
      </Wrapper>
    </section>
  );
};

const CarEntries = ({ entries }) => {
  return (
    <div className={styles.car_entries}>
      <div className={styles.car_card}>
        <AllVehiclesCard />
      </div>
      <div className={styles.car_card}>
        <AllVehiclesCard />
      </div>
      <div className={styles.car_card}>
        <AllVehiclesCard />
      </div>
    </div>
  );
};
