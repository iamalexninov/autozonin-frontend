import { GenericHero } from "../../hero/GenericHero";
import { Wrapper } from "../../global/wrapper/Wrapper";
import { Description } from "./description/Description";
import { ActionPanel } from "./action-panel/ActionPanel";
import { VehicleOverview } from "./vehicle-overview/VehicleOverview";

import { useParams } from "react-router-dom";
import { useGetVehicle } from "../../../hooks/useGetVehicle";
import { EngagementPanel } from "./EngagementPanel";

export const VehiclesDetails = () => {
  const params = useParams();
  const { vehicle } = useGetVehicle(params.id);

  return (
    <>
      <GenericHero header="Details" title="Vehicle Details" />
      <section>
        <Wrapper>
          <div className="flex flex-col justify-between gap-5 lg:flex-row">
            {vehicle && vehicle.details ? (
              <>
                <div className="max-w-5xl">
                  <h5 className="text-3xl font-600 mb-2">
                    {vehicle?.details.title}
                  </h5>
                  <p className="text-lg text-slate-600">
                    {vehicle?.details.tagline}
                  </p>
                  {/* <BannerEngagementPanel
                url={vehicle.banners.url}
              /> */}
                  <Description />
                </div>
                <div className="w-full">
                  <EngagementPanel />
                  <ActionPanel />
                  <VehicleOverview data={vehicle?.details} />
                </div>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </Wrapper>
      </section>
    </>
  );
};
