import { GenericHero } from "../../hero/GenericHero";
import { Wrapper } from "../../global/wrapper/Wrapper";
import { Description } from "./description/Description";
import { ActionPanel } from "./action-panel/ActionPanel";
import { VehicleOverview } from "./vehicle-overview/VehicleOverview";
import { BannerEngagementPanel } from "./banner-engagement-panel/BannerEngagementPanel";

import { useParams } from "react-router-dom";
import { useGetVehicle } from "../../../hooks/useGetVehicle";
import { OfferPrice } from "./action-panel/OfferPrice";

export const VehiclesDetails = () => {
  const params = useParams();
  const { vehicle } = useGetVehicle(params.id);

  return (
    <>
      <GenericHero header="Details" title="Vehicle Details" />
      <section>
        <Wrapper>
          <div className="flex flex-col justify-between gap-5 lg:flex-row">
            <div className="max-w-5xl">
              <BannerEngagementPanel
                url={vehicle && vehicle.banners.url}
                title={vehicle && vehicle.details.title}
              />
              <h5 className="">Mercedes-Amg E 53 4Matic+ 2022</h5>
              <Description />
            </div>
            <div className="">
              <ActionPanel />
              <VehicleOverview data={vehicle && vehicle.details} />
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};
