import { Wrapper } from "../global/wrapper/Wrapper";
import { SectionHeaderWithLinkBtn } from "../global/SectionHeaderWithLinkBtn";
import { RenderConditionsMakers } from "./render-conditions-makers/RenderConditionsMakers";
import { VehicleCard } from "./VehicleCard";

import { useGetVehicles } from "../../hooks/useGetVehicles";

export const ExplorePremiumCars = () => {
  const { vehicles } = useGetVehicles();

  return (
    <section className="py-24">
      <Wrapper>
        <SectionHeaderWithLinkBtn
          color="dark"
          header="Explore Premium Cars"
          linkPath="/catalog"
          linkText="View"
        />
        <RenderConditionsMakers type="conditions" />
        <CarEntries entries={vehicles} />
      </Wrapper>
    </section>
  );
};

const CarEntries = ({ entries }) => {
  return (
    <div className="flex gap-8 flex-wrap">
      {entries &&
        entries
          .slice(0, 3)
          .map((vehicle) => (
            <VehicleCard
              key={vehicle._id}
              vehicle={vehicle}
              cardType="primary"
            />
          ))}
    </div>
  );
};
