import styles from "./style.module.css";

import { GenericHero } from "../hero/generic-hero/GenericHero";
import { VehicleTitle } from "./vehicle-title/VehicleTitle";
import { Wrapper } from "../global/wrapper/Wrapper";
import { VehicleEngagementPanel } from "./vehicle-engagement-panel/VehicleEngagementPanel";

export const VehiclesDetails = () => {
  return (
    <>
      <GenericHero header="Details" title="Vehicle Details" />
      <section>
        <Wrapper>
          <VehicleTitle />
          <VehicleEngagementPanel />
        </Wrapper>
      </section>
    </>
  );
};
