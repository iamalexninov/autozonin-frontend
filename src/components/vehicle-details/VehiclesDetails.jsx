import styles from "./style.module.css";

import { GenericHero } from "../hero/generic-hero/GenericHero";
import { VehicleTitle } from "./vehicle-title/VehicleTitle";
import { Wrapper } from "../global/wrapper/Wrapper";
import { VehicleEngagementPanel } from "./vehicle-engagement-panel/VehicleEngagementPanel";
import { VehicleBanners } from "./vehicle-banners/VehicleBanners";
import { Description } from "./description/Description";
import { ActionPanel } from "./action-panel/ActionPanel";
import { VehicleOverview } from "./vehicle-overview/VehicleOverview";
import { Features } from "./features/Features";

export const VehiclesDetails = () => {
  return (
    <>
      <GenericHero header="Details" title="Vehicle Details" />
      <section>
        <Wrapper>
          <div className={styles.panels}>
            <div className={styles.panels_left}>
              <VehicleEngagementPanel />
              <VehicleBanners />
              <VehicleTitle />
              <Description />
              <Features />
            </div>
            <div className={styles.panels_right}>
              <ActionPanel />
              <VehicleOverview />
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};
