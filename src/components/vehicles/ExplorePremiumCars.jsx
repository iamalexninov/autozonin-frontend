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
        <CarRecords records={vehicles} />
      </Wrapper>
    </section>
  );
};

const CarRecords = ({ records }) => {
  return (
    <div className="flex gap-5 flex-wrap">
      {records &&
        records
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
