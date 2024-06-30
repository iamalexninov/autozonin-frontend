import styles from "./style.module.css";

import { GenericHero } from "../../hero/GenericHero";
import { VehicleTitle } from "./vehicle-title/VehicleTitle";
import { Wrapper } from "../../global/wrapper/Wrapper";
import { Description } from "./description/Description";
import { ActionPanel } from "./action-panel/ActionPanel";
import { VehicleOverview } from "./vehicle-overview/VehicleOverview";
import { BannerEngagementPanel } from "./banner-engagement-panel/BannerEngagementPanel";
import { useParams } from "react-router-dom";
import { useGetVehicle } from "../../../hooks/useGetVehicle";

export const VehiclesDetails = () => {
  const params = useParams();
  const { vehicle } = useGetVehicle(params.id);

  return (
    <>
      <GenericHero header="Details" title="Vehicle Details" />
      <section>
        <Wrapper>
          <div className={styles.panels}>
            <div className={styles.panels_left}>
              <BannerEngagementPanel
                url={vehicle && vehicle.banners.url}
                title={vehicle && vehicle.details.title}
              />
              <VehicleTitle />
              <Description />
            </div>
            <div className={styles.panels_right}>
              <ActionPanel />
              <VehicleOverview data={vehicle && vehicle.details} />
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};
