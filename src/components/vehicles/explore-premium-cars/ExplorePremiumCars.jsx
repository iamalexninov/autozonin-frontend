import styles from "./style.module.css";

import { Wrapper } from "../../global/wrapper/Wrapper";
import { SectionHeaderWithLinkBtn } from "../../global/section-header-link-btn/SectionHeaderWithLinkBtn";
import { RenderConditionsMakers } from "../render-conditions-makers/RenderConditionsMakers";
import { VehicleCard } from "../card/VehicleCard";

import { useGetVehicles } from "../../../hooks/useGetVehicles";

export const ExplorePremiumCars = () => {
  const { vehicles } = useGetVehicles();

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
        <CarEntries entries={vehicles} />
      </Wrapper>
    </section>
  );
};

const CarEntries = ({ entries }) => {
  return (
    <div className={styles.car_entries}>
      {entries &&
        entries
          .slice(0, 3)
          .map((vehicle) => (
            <VehicleCard
              key={vehicle._id}
              vehicle={vehicle}
              cardType="primary"
            />
          ))}
    </div>
  );
};
