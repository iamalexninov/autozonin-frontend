import { Link } from "react-router-dom";

import styles from "./style.module.css";
import { Wrapper } from "../global/wrapper/Wrapper";
import { SectionHeaderWithLinkBtn } from "../global/section-header-link-btn/SectionHeaderWithLinkBtn";
import { AllVehiclesCard } from "../cards/all-vehicles-card/AllVehiclesCard";

export const AllVehicles = () => {
  return (
    <section className={styles.vehicles}>
      <Wrapper>
        <SectionHeaderWithLinkBtn
          header="Explore All Vehicles"
          linkPath="/catalogue"
          linkText="View All"
        />
        <AllVehiclesCard />
      </Wrapper>
    </section>
  );
};
