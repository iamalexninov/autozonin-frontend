import { useParams } from "react-router-dom";
import { Wrapper } from "../../global/Wrapper";
import { Info } from "./Info";
import { Banners } from "./Banners";
import { Description } from "./Description";
import { EngagementPanel } from "./EngagementPanel";
import { ActionPanel } from "./action-panel/ActionPanel";
import { VehicleOverview } from "./Overview";
import { MakeReview } from "./make-review/MakeReview";
import { useGetVehicle } from "../../../hooks/useGetVehicle";

export const VehicleDetailsSection = () => {
  const params = useParams();
  const { vehicle } = useGetVehicle(params.id);

  return (
    <section>
      <Wrapper>
        <div className="flex flex-col gap-5 justify-between mb-16 lg:flex-row">
          <div className="max-w-5xl">
            <Info
              title={vehicle && vehicle?.details?.title}
              tagline={vehicle && vehicle?.details?.tagline}
            />
            <Banners banner={vehicle && vehicle?.banner} />
            <Description desc={vehicle && vehicle?.details?.description} />
            <MakeReview />
          </div>
          <div className="w-full max-w-md">
            <EngagementPanel />
            <ActionPanel price={vehicle && vehicle?.price}/>
            <VehicleOverview vehicle={vehicle} />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
