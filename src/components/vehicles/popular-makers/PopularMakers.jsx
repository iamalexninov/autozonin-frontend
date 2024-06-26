import { SectionHeaderWithLinkBtn } from "../../global/SectionHeaderWithLinkBtn";
import { Wrapper } from "../../global/wrapper/Wrapper";
import { RenderConditionsMakers } from "../render-conditions-makers/RenderConditionsMakers";
import { VehicleCard } from "../VehicleCard";

import { useGetVehicles } from "../../../hooks/useGetVehicles";

export const PopularMakers = () => {
  const { vehicles } = useGetVehicles();

  return (
    <section className="py-24 bg-cape-green">
      <Wrapper>
        <SectionHeaderWithLinkBtn
          color="light"
          header="Popular Makers"
          linkPath="/catalog"
          linkText="Explore"
        />
        <RenderConditionsMakers type="makers" />
        <PopularRecords records={vehicles} />
      </Wrapper>
    </section>
  );
};

const PopularRecords = ({ records }) => {
  return (
    <div className="flex gap-5">
      {records &&
        records
          .slice(0, 3)
          .map((vehicle) => (
            <VehicleCard key={vehicle._id} vehicle={vehicle} />
          ))}
    </div>
  );
};
