import { useParams } from "react-router-dom";
import { Wrapper } from "../../global/wrapper/Wrapper";
import { Info } from "./Info";
import { Banners } from "./Banners";
import { Description } from "./Description";
import { EngagementPanel } from "./EngagementPanel";
import { ActionPanel } from "./action-panel/ActionPanel";
import { VehicleOverview } from "./Overview";


export const VehicleDetailsSection = () => {
  const params = useParams();

  return (
    <section>
      <Wrapper>
        <div className="flex flex-col gap-5 justify-around lg:flex-row">
          <div className="max-w-4xl">
            <Info id={params.id} />
            <Banners id={params.id} />
            <Description id={params.id}/>
          </div>
          <div className="w-full max-w-md">
            <EngagementPanel />
            <ActionPanel />
            <VehicleOverview id={params}/>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
