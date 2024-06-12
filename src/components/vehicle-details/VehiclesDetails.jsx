import { GenericHero } from "../hero/generic-hero/GenericHero";
import { VehicleTitle } from "./vehicle-title/VehicleTitle";
import { Wrapper } from "../global/wrapper/Wrapper";
import { VehicleEngagementPanel } from "./vehicle-engagement-panel/VehicleEngagementPanel";
import { VehicleBanners } from "./vehicle-banners/VehicleBanners";
import { Description } from "./description/Description";
import { ActionPanel } from "./action-panel/ActionPanel";
import { VehicleOverview } from "./vehicle-overview/VehicleOverview";

export const VehiclesDetails = () => {
  return (
    <>
      <GenericHero header="Details" title="Vehicle Details" />
      <section>
        <Wrapper>
          <div>
            <VehicleEngagementPanel />
            <VehicleBanners />
            <VehicleTitle />
            <Description />
            <ActionPanel />
            <VehicleOverview />
          </div>
        </Wrapper>
      </section>
    </>
  );
};
