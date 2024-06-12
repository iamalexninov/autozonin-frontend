import { GenericHero } from "../hero/generic-hero/GenericHero";
import { VehicleTitle } from "./vehicle-title/VehicleTitle";
import { Wrapper } from "../global/wrapper/Wrapper";
import { VehicleEngagementPanel } from "./vehicle-engagement-panel/VehicleEngagementPanel";
import { VehicleBanners } from "./vehicle-banners/VehicleBanners";
import { Description } from "./description/Description";

export const VehiclesDetails = () => {
  return (
    <>
      <GenericHero header="Details" title="Vehicle Details" />
      <section>
        <Wrapper>
          <div>
            <VehicleTitle />
            <VehicleEngagementPanel />
            <VehicleBanners />
            <Description />
          </div>
        </Wrapper>
      </section>
    </>
  );
};
